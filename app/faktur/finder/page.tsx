import { Client } from "basic-ftp";
import { DataTable } from "../../table/data-table";
import { columns, TFaktur } from "../../table/columns";

const client = new Client();

client.ftp.verbose = true;

export default async function Home() {
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            secure: false,
        });

        // console.log(await client.list())

        const listFile = await client.list("/pdf");

        // Ubah objek kompleks menjadi objek sederhana
        const serializedFiles: TFaktur[] = listFile.map((file, i) => ({
            id: i.toString(),
            name: file.name,
            size: file.size,
            type: file.type,
            date: file.date ? file.date.toString() : null,
            // isDirectory: file.isDirectory,
            // isSymbolicLink: file.isSymbolicLink,
            // isFile: file.isFile
        }));

        console.log(serializedFiles);

        // Pastikan menutup koneksi FTP
        client.close();

        return (
            <main className="flex flex-1 flex-col gap-4">
                <DataTable columns={columns} data={serializedFiles} />
                {/* <ListFile listFile={serializedFiles} /> */}
            </main>
        );
    } catch (error) {
        console.log(error);

        return (
            <main className="flex flex-1 flex-col gap-4">
                <div>
                    <p>Error mengambil data FTP / Data tidak ada</p>
                </div>
            </main>
        );
    }
}
