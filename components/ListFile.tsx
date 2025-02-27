"use client";


import { TFaktur } from "@/app/table/columns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function ListFile({ listFile }: { listFile: TFaktur[]}) {
  return (
    <div>
      <div>
        <p>
          {listFile.length} file
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Faktur Pajak</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead className="text-right">Ukuran</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listFile.map((file, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{file.name}</TableCell>
              <TableCell>{new Date(file.date?.toString() || "").toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                {Math.ceil(file.size / 1024)} kb
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
