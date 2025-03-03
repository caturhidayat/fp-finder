"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RefreshButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return <Button className="bg-violet-600 hover:bg-violet-500 text-white" onClick={ async () => {
    setIsLoading(true);
    await router.refresh();
    setIsLoading(false);
  }} disabled={isLoading}>{isLoading ? "Loading..." : "Refresh Data"}</Button>;
}
