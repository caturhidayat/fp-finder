import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-2 py-2 sm:py-2 lg:px-4">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-bold text-gray-900">
              PT Yusen Logistics Puninar Indonesia
            </h1>
            <h1 className="font-bold text-gray-900">
              PT Yusen Logistics Container Depot Indonesia
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              {" "}
              Download Faktur Pajak
            </p>
          </div>

          {/* <div className="flex items-center gap-4">
                        <Button className=" bg-indigo-600 hover:bg-indigo-500">
                            <CarTaxiFront className="mr-2 h-4 w-4" />
                        </Button>
                    </div> */}
          <Image
            src="/1_Yusen Logistics_fullcolor.png"
            alt="logo"
            width={120}
            height={120}
          />
        </div>
      </div>
    </header>
  );
}
