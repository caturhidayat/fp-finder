import { Client } from "basic-ftp";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

export async function POST(request: NextRequest) {
  try {
    const { npwpPelanggan, nomorKuitansi } = await request.json();

    if (!npwpPelanggan || !nomorKuitansi) {
      return NextResponse.json(
        { error: "NPWP Pelanggan dan Nomor Kuitansi diperlukan" },
        { status: 400 }
      );
    }

    // Normalize the receipt number by removing any potential spaces and converting to lowercase
    const normalizedReceiptNumber = nomorKuitansi.trim().toLowerCase();
    
    // Ensure minimum length for security
    if (normalizedReceiptNumber.length < 5) {
      return NextResponse.json(
        { error: "Nomor Kuitansi terlalu pendek, minimal 5 karakter" },
        { status: 400 }
      );
    }

    const client = new Client();
    client.ftp.verbose = true;

    try {
      // Connect to FTP server
      await client.access({
        host: process.env.FTP_HOST as string,
        user: process.env.FTP_USER as string,
        password: process.env.FTP_PASS as string,
        secure: false,
      });

      // Navigate to the PDF directory
      await client.cd("/");

      // List all files in the directory
      const files = await client.list();
      
      // Log for debugging
      console.log(`Searching for files with NPWP: ${npwpPelanggan} and Receipt: ${normalizedReceiptNumber}`);
      console.log(`Found ${files.length} total files in directory`);

      // Find files with exact matches for both NPWP and receipt number
      const matchingFiles = files.filter((file) => {
        // First, check if the file contains the NPWP
        if (!file.name.includes(npwpPelanggan)) {
          return false;
        }
        
        // For receipt number, we need a more strict matching approach
        const filename = file.name.toLowerCase();
        
        // Method 1: Split by separators and check for exact match
        const parts = filename.split(/[-_\s.]/);
        const hasExactMatch = parts.some(part => {
          const normalizedPart = part.trim();
          return normalizedPart === normalizedReceiptNumber;
        });
        
        // Method 2: Use regex pattern to find receipt number
        // This can be customized based on the file naming convention
        // For example, if receipt numbers are always preceded by a specific pattern
        const receiptPattern = new RegExp(`[^a-z0-9]${normalizedReceiptNumber}[^a-z0-9]|^${normalizedReceiptNumber}[^a-z0-9]|[^a-z0-9]${normalizedReceiptNumber}$|^${normalizedReceiptNumber}$`, 'i');
        const hasRegexMatch = receiptPattern.test(filename);
        
        // If we found a match, log it for debugging
        if (hasExactMatch || hasRegexMatch) {
          console.log(`Found matching file: ${file.name}`);
          console.log(`Match method: ${hasExactMatch ? 'Exact part match' : 'Regex pattern match'}`);
        }
        
        // Return true if either method finds a match
        return hasExactMatch || hasRegexMatch;
      });
      
      console.log(`Found ${matchingFiles.length} matching files`);

      if (matchingFiles.length === 0) {
        client.close();
        return NextResponse.json(
          { error: "Faktur tidak ditemukan. Pastikan nomor NPWP dan nomor kuitansi sudah benar dan lengkap." },
          { status: 404 }
        );
      }

      // Get the first matching file
      const targetFile = matchingFiles[0];
      
      // Create a temporary file path
      const tempDir = os.tmpdir();
      const tempFilePath = path.join(tempDir, targetFile.name);
      
      // Download the file to the temporary location
      await client.downloadTo(tempFilePath, targetFile.name);
      
      // Close the FTP connection
      client.close();
      
      // Read the file content
      const fileBuffer = fs.readFileSync(tempFilePath);
      
      // Delete the temporary file
      fs.unlinkSync(tempFilePath);
      
      // Set appropriate headers for file download
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Disposition": `attachment; filename="${targetFile.name}"`,
          "Content-Type": "application/pdf",
        },
      });
    } catch (ftpError) {
      console.error("FTP Error:", ftpError);
      client.close();
      return NextResponse.json(
        { error: "Gagal mengakses server" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
