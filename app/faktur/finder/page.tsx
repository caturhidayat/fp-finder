import { Client } from "basic-ftp";
import { DataTable } from "../../table/data-table";
import { columns, TFaktur } from "../../table/columns";

const client = new Client();

client.ftp.verbose = true;

const fetchFtpData = async () => {
  await client.access({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    secure: false,
  });

  const listFile = await client.list("/");

  const serializedFiles: TFaktur[] = listFile.map((file, i) => ({
    id: i.toString(),
    name: file.name,
    size: file.size,
    type: file.type,
    date: file.date ? file.date.toString() : null,
  }));

  client.close();

  return serializedFiles;
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const ftpData = await fetchFtpData();

    return (
      <main className="flex flex-1 flex-col gap-4">
        <DataTable columns={columns} data={ftpData} />
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
