"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return <Button className="bg-violet-600 hover:bg-violet-500 text-white" onClick={() => router.refresh()}>Refresh Data</Button>;
}
