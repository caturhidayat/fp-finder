import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FormSubmit from "@/components/FormSubmit";

export default async function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
        <div className="rounded-lg space-y-2">
          <div className="text-blue-950 space-y-2">
            <h2 className="text-xl font-bold">
              Selamat datang di web aplikasi e-Faktur
            </h2>
            <p className="text-md text-semibold">
              PT Yusen Logistics Container Depot Indonesia | PT Puninar Yusen
              Logistics Indonesia
            </p>
            <p className="text-md pt-8">
              Silahkan Masukan Nomor NPWP, Nomor Faktur Pajak dan Nomor
              Kuitansi:
            </p>
          </div>
          <div>
            <FormSubmit />
          </div>

          <div className="pt-6">
            <Alert variant={"destructive"}>
              <AlertTitle>Note:</AlertTitle>
              <AlertDescription>
                Segala macam koreksi, perubahan dan penerbitan faktur pajak
                harus disertakan dokumen pendukung yang sesuai. Dengan
                ketentuan, batas waktu pengajuan revisi atau penerbitan faktur
                pajak paling akhir maksimal tanggal 10 bulan berikutnya sesuai
                tanggal di kuitansi. Apabila melebihi batas ketentuan, maka kami
                tidak dapat merevisi atau mengupload faktur pajak sesuai
                permintaan.
              </AlertDescription>
            </Alert>
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
              <div className="text-sm">
                <p>
                  Silahkan pilih Nomor NPWP Yusen Logistics (tanpa tanda baca):
                </p>
                <p>
                  <span className="text-orange-500 font-bold">
                    Nomor NPWP PT Yusen Logistics Container Depot Indonesia:{" "}
                  </span>
                  <strong>0109997585000000</strong>
                </p>
                <p>
                  <span className="text-orange-500 font-bold">
                    Nomor NPWP PT Puninar Yusen Logistics Indonesia:{" "}
                  </span>
                  <strong>010695286058000</strong>
                </p>
              </div>

              <p>
                <strong>2. Nomor Seri Faktur Pajak</strong>
              </p>
              <div className="text-sm">
                <p>
                  Nomor Seri Faktur Pajak Per 1 Januari 2025 dan seterusnya
                  (CORETAX 2025):
                </p>
                <p className="text-orange-500 text-sm">
                  Abaikan kolom Nomor Seri Faktur Pajak, secara default sudah
                  tertulis 0000000000000000 (16 digit).
                </p>
              </div>

              <p className="font-bold">
                Nomor Seri Faktur Pajak sebelum 1 Januari 2025:
              </p>
              <div className="text-orange-500 text-sm">
                <p>
                  Silahkan memasukkan 16 digit nomor faktur pajak yang tertera
                  di kuitansi tanpa tanda baca.
                </p>
                <p>
                  Nomor seri faktur pajak kode 010 (3 digit pertama) merupakan
                  faktur pajak normal (diinput tanpa tanda baca).
                </p>
                <p>
                  Silahkan ubah kode 010 menjadi 011 jika ada faktur pajak
                  revisi/ faktur pengganti (diinput tanpa tanda baca).
                </p>
              </div>

              <p>
                <strong>3. Nomor NPWP Pelanggan</strong>
              </p>
              <p className="text-orange-500 text-sm">
                Nomor NPWP 16 digit yang akan dimintakan faktur pajaknya
                (diinput tanpa tanda baca).
              </p>

              <p>
                <strong>4. Nomor Kuitansi</strong>
              </p>
              <div className="text-orange-500 text-sm">
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
            <div className="pt-8">
              <Alert variant={"destructive"}>
                <AlertTitle>Info :</AlertTitle>
                <AlertDescription>
                  Permintaan faktur pajak melalui email hanya untuk faktur pajak
                  revisi dan faktur pajak masa Januari 2025 keatas, selebihnya
                  tidak dapat kami proses. Jika ada pertanyaan lebih lanjut
                  terkait permintaan faktur pajak kegiatan Lift On/Off, silahkan
                  menghubungi ke bagian pajak kami di 021-460 8720 ext. 221
                  dengan Tim TAX atau email ke e.faktur@id.yusen-logistics.com
                  (dengan melampirkan scan kuitansi dan NPWP yang sesuai).
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
