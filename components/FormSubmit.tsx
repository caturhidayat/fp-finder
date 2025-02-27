"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function FormSubmit() {
  const [npwpYusen, setNpwpYusen] = useState("0109997585004000");
  const [npwpPelanggan, setNpwpPelanggan] = useState("");
  const [nomorKuitansi, setNomorKuitansi] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleDownloadFaktur = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!npwpPelanggan) {
      setError("NPWP Pelanggan harus diisi");
      return;
    }
    
    if (!nomorKuitansi) {
      setError("Nomor Kuitansi harus diisi");
      return;
    }
    
    // Validate that the input is exactly as expected
    // Remove any spaces from the input
    const trimmedNomorKuitansi = nomorKuitansi.trim();
    
    // Check if the receipt number matches expected format (can be customized)
    // For example, if receipt numbers should be alphanumeric and at least 5 characters
    if (trimmedNomorKuitansi.length < 5) {
      setError("Nomor Kuitansi harus lengkap (minimal 5 karakter)");
      return;
    }
    
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          npwpPelanggan: npwpPelanggan.trim(),
          nomorKuitansi: trimmedNomorKuitansi,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal mengunduh faktur");
      }
      
      // Get the filename from the Content-Disposition header
      const contentDisposition = response.headers.get("Content-Disposition");
      const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
      const filename = filenameMatch ? filenameMatch[1] : "faktur.pdf";
      
      // Convert response to blob
      const blob = await response.blob();
      
      // Create a download link and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      
      setSuccess(`Faktur berhasil diunduh: ${filename}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan saat mengunduh faktur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl p-6">
      <form className="space-y-4" onSubmit={handleDownloadFaktur}>
        <div className="grid grid-cols-12 items-center bg-gray-100 p-2">
          <Label
            htmlFor="npwp-yusen"
            className="col-span-4 text-blue-600 font-medium"
          >
            1. NPWP Yusen Logistics
          </Label>
          <div className="col-span-8">
            <Select 
              defaultValue={npwpYusen}
              onValueChange={(value) => setNpwpYusen(value)}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select NPWP" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                <SelectItem value="0109997585004000">
                  0109997585004000
                </SelectItem>
                <SelectItem value="010695286058000">010695286058000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center p-2">
          <Label
            htmlFor="nomor-seri"
            className="col-span-4 text-blue-600 font-medium"
          >
            2. Seri Faktur Pajak
          </Label>
          <div className="col-span-8">
            <Input
              id="nomor-seri"
              defaultValue="0000000000000000"
              className="bg-white"
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-12 items-center bg-gray-100 p-2">
          <Label
            htmlFor="npwp-pelanggan"
            className="col-span-4 text-blue-600 font-medium"
          >
            3. Nomor NPWP Pelanggan
          </Label>
          <div className="col-span-8">
            <Input
              id="npwp-pelanggan"
              placeholder="( 0010695286058000 ) Contoh Penulisan"
              className="bg-white text-gray-400"
              value={npwpPelanggan}
              onChange={(e) => setNpwpPelanggan(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              *Masukkan nomor NPWP dengan tepat dan lengkap
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center p-2">
          <Label
            htmlFor="nomor-kuitansi"
            className="col-span-4 text-blue-600 font-medium"
          >
            4. Nomor Kuitansi
          </Label>
          <div className="col-span-8">
            <Input
              id="nomor-kuitansi"
              placeholder="( X18000001 atau WAC00001E) Contoh Penulisan"
              className="bg-white text-gray-400"
              value={nomorKuitansi}
              onChange={(e) => setNomorKuitansi(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              *Nomor kuitansi harus tepat dan lengkap, minimal 5 karakter
            </p>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="bg-green-50 text-green-800 border-green-200">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <div className="border-t border-gray-200 pt-4">
          <Button 
            type="submit" 
            className="bg-gray-700 hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? "Mengunduh..." : "Download Faktur"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
