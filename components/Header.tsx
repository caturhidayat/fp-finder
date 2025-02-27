import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-4 z-10 border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-2 py-2 sm:py-2 lg:px-1">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-bold">PT Yusen Logistics Puninar Indonesia</h1>
            <h1 className="font-bold">
              PT Yusen Logistics Container Depot Indonesia
            </h1>
          </div>
          <div>
            <Image
              src="/1_Yusen Logistics_fullcolor.png"
              alt="logo_yusen-logistics"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
