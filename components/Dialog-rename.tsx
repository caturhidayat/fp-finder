"use client";

import { TFaktur } from "@/app/table/columns";
import { Button } from "./ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { TextCursorInput } from "lucide-react";

export default function DialogRename({ faktur }: { faktur: TFaktur }) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="link">
                    <TextCursorInput className="mr-2 h-4 w-4" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-[650px] h-[500px]">
                    <DrawerHeader>
                        <DrawerTitle>Rename Faktur</DrawerTitle>
                        <DrawerDescription>
                            Are you sure you want to do this?
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <Input defaultValue={faktur.name} />
                    </div>
                    <DrawerFooter>
                        <Button className="bg-violet-600 hover:bg-violet-500">
                            <TextCursorInput className="mr-2 h-4 w-4" />
                            Rename
                        </Button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
