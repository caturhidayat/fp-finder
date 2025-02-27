import FormSubmit from "@/components/FormSubmit";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageSquareWarning } from "lucide-react";

export default async function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
        <div className="rounded-lg space-y-2">
          <div className="text-blue-950 space-y-2">
            <h2 className="text-xl font-bold">
              Selamat datang di web aplikasi e-Faktur
            </h2>
            {/* <p className="text-md text-semibold">
              PT Yusen Logistics Container Depot Indonesia | PT Puninar Yusen
              Logistics Indonesia
            </p> */}
            <p className="text-md pt-4">
              Silahkan Masukan Nomor NPWP, Nomor Faktur Pajak dan Nomor
              Kuitansi:
            </p>
          </div>
          <div>
            <FormSubmit />
          </div>
        </div>
        <div className="rounded-lg">
          <div>
            <div className="space-y-2">
              <span className="text-xl font-bold text-blue-950">
                Petunjuk Download Faktur Pajak Dari Website:
              </span>
              <p>
                <strong>1. Nomor NPWP Yusen Logistics</strong>
              </p>
              <p className="text-sm">
                Silahkan pilih Nomor NPWP Yusen Logistics (tanpa tanda baca):
              </p>
              {/* <div className="text-sm"> */}
              <Alert variant={"destructive"}>
                <MessageSquareWarning className="h-4 w-4" />
                <AlertTitle>Perhatian!</AlertTitle>
                <AlertDescription>
                  <p>
                    <span className="font-bold">
                      NPWP PT Yusen Logistics Container Depot Indonesia:{" "}
                    </span>
                    <strong>0109997585000000</strong>
                  </p>
                  <p>
                    <span className="font-bold">
                      NPWP PT Yusen Logistics Puninar Indonesia:{" "}
                    </span>
                    <strong>010695286058000</strong>
                  </p>
                </AlertDescription>
              </Alert>
              {/* </div> */}

              <p>
                <strong>2. Nomor Seri Faktur Pajak</strong>
              </p>
              <div className="text-xs">
                <p>
                  Nomor Seri Faktur Pajak Per 1 Januari 2025 dan seterusnya
                  (CORETAX 2025):
                </p>
                <p className="text-red-500 text-sm">
                  Abaikan kolom Nomor Seri Faktur Pajak, secara default sudah
                  tertulis 0000000000000000 (16 digit).
                </p>
              </div>

              {/* <Alert variant={"destructive"}>
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle className="font-bold">
                  Nomor Seri Faktur Pajak sebelum 1 Januari 2025:
                </AlertTitle>
                <AlertDescription>
                  <div className="text-sm">
                    <p>
                      Silahkan memasukkan 16 digit nomor faktur pajak yang
                      tertera di kuitansi tanpa tanda baca.
                    </p>
                    <p>
                      Nomor seri faktur pajak kode 010 (3 digit pertama)
                      merupakan faktur pajak normal (diinput tanpa tanda baca).
                    </p>
                    <p>
                      Silahkan ubah kode 010 menjadi 011 jika ada faktur pajak
                      revisi/ faktur pengganti (diinput tanpa tanda baca).
                    </p>
                  </div>
                </AlertDescription>
              </Alert> */}

              <p>
                <strong>3. Nomor NPWP Pelanggan</strong>
              </p>
              <p className="text-red-500 text-sm">
                Nomor NPWP 16 digit yang akan dimintakan faktur pajaknya
                (diinput tanpa tanda baca).
              </p>

              <p>
                <strong>4. Nomor Kuitansi</strong>
              </p>
              <div className="text-red-500 text-sm italic">
                <p>
                  Nomor yang tertera di pojok kanan atas kuitansi (ada 2 macam
                  kuitansi yaitu Lift On/Off dan kuitansi Repair).
                </p>
                <p>Contoh:</p>
                <p>
                  Kuitansi Lift On/Off = X2301/0001 ditulisnya menjadi X23010001
                  (tanpa garis miring).
                </p>
                <p>
                  Kuitansi Repair = WFC00001E atau WFN00001E (ditulis dengan
                  huruf kapital).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
