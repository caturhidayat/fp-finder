"use client";

import DialogRename from "@/components/Dialog-rename";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { FileType } from "basic-ftp";
import { ArrowUpDown } from "lucide-react";

export type faktur = {
    id: string;
    faktur: string;
    tanggal: string;
    size: string;
};

export type TFaktur = {
    id: string;
    name: string;
    date: string | null;
    type: FileType;
    size: number;
};

export const columns: ColumnDef<TFaktur>[] = [
    {
        accessorKey: "name",
        header: "Faktur",
        cell: ({ row }) => {
            const faktur = row.original.name;
            return faktur;
        },
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tanggal
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const tanggal = row.original.date;

            console.log("tanggal", tanggal);
            return new Date(tanggal?.toString() || "").toLocaleDateString();
        },
    },
    {
        accessorKey: "size",
        header: "Ukuran",
        cell: ({ row }) => {
            const size = row.original.size;

            return Math.ceil(size / 1024) + " kb";
        },
    },
    {
        id: "actions",
        header: "Rename",
        cell: ({ row }) => {
            const faktur = row.original;
            return (
                <DialogRename faktur={faktur} />
            );
        },
    }
];
