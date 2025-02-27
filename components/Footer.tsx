'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-s lg:border-b-0 lg:py-16 lg:ps-16">
              <div className="block text-teal-600 lg:hidden">
                <Image
                  src="/1_Yusen Logistics_fullcolor.png"
                  alt="logo_yusen-logistics"
                  width={100}
                  height={100}
                />
              </div>

              <div className="mt-8 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded-sm bg-teal-500 lg:block"></span>

                <div>
                  <h2 className="text-2xl font-medium text-gray-900">INFO :</h2>

                  <p className="mt-4 max-w-lg text-orange-500 text-sm">
                    Permintaan faktur pajak melalui email hanya untuk faktur
                    pajak revisi dan faktur pajak masa Januari 2025 keatas,
                    selebihnya tidak dapat kami proses. Jika ada pertanyaan
                    lebih lanjut terkait permintaan faktur pajak kegiatan Lift
                    On/Off, silahkan menghubungi ke bagian pajak kami di 021-460
                    8720 ext. 221 dengan Tim TAX atau email ke
                    e.faktur@id.yusen-logistics.com (dengan melampirkan scan
                    kuitansi dan NPWP yang sesuai).
                  </p>
                </div>

                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="rounded-md border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                    <Input
                      type="email"
                      id="UserEmail"
                      placeholder="e.faktur@id.yusen-logistics.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />

                    <Button
                      className="bg-teal-500 hover:bg-teal-600"
                      onClick={() =>
                        window.open(
                          "mailto:e.faktur@id.yusen-logistics.com?subject=Permintaan Faktur Pajak Online",
                          "_self"
                        )
                      }
                    >
                      Contact Us
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-8 lg:pe-16">
              <div className="hidden text-teal-600 lg:block">
                <Image
                  src="/1_Yusen Logistics_fullcolor.png"
                  alt="logo_yusen-logistics"
                  width={100}
                  height={100}
                />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900">NOTE :</h2>

                  <p className="mt-4 max-w-lg text-orange-500 text-sm">
                    Segala macam koreksi, perubahan dan penerbitan faktur pajak
                    harus disertakan dokumen pendukung yang sesuai. Dengan
                    ketentuan, batas waktu pengajuan revisi atau penerbitan
                    faktur pajak paling akhir maksimal tanggal 10 bulan
                    berikutnya sesuai tanggal di kuitansi. Apabila melebihi
                    batas ketentuan, maka kami tidak dapat merevisi atau
                    mengupload faktur pajak sesuai permintaan.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-500">
                  &copy; 2025. PT Yusen Logistics Puninar Indonesia | PT Yusen
                  Logistics Container Depot Indonesia . All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
