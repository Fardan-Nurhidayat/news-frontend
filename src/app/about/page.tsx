import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami - Warta Berita",
  description:
    "Prinsip redaksi, standar jurnalisme, dan komitmen independensi redaksi Warta Berita.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 space-y-12">
      {/* Header */}
      <header className="border-b-2 border-gray-900 dark:border-gray-100 pb-6">
        <span className="text-xs font-sans font-semibold tracking-widest text-red-700 dark:text-red-400 uppercase">
          Profil Redaksi
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 dark:text-gray-100 mt-1">
          Tentang Warta Berita
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
          Warta Berita adalah portal warta independen yang mengabarkan fakta faktual,
          analisis komprehensif, dan perkembangan terkini seputar peristiwa nasional serta internasional.
        </p>
      </header>

      {/* Editorial Mission */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100">
          Prinsip Kerja Redaksi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800">
            <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
              Verifikasi Berlapis
            </h3>
            <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
              Setiap laporan melalui proses pemeriksaan fakta dari sumber primer sebelum diterbitkan
              guna memastikan akurasi data dan konteks peristiwa.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800">
            <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
              Independensi Pemberitaan
            </h3>
            <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
              Liputan kami bebas dari intervensi komersial dan politik. Kepentingan publik adalah
              pedoman utama dalam menentukan nilai kelayakan berita.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800">
            <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
              Koreksi Transparan
            </h3>
            <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
              Apabila terdapat kekeliruan dalam penulisan atau rincian laporan, ralat disematkan
              secara terbuka pada naskah artikel terkait.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800">
            <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
              Penghormatan Hak Cipta
            </h3>
            <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
              Penyebutan sumber, fotografer, kantor berita, dan penulis asli selalu dicantumkan
              secara utuh pada setiap karya jurnalistik.
            </p>
          </div>
        </div>
      </section>

      {/* Technology & Platform */}
      <section className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100">
          Infrastruktur Berita
        </h2>
        <p className="text-sm sm:text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed">
          Platform ini dirancang dengan standar aksesibilitas web modern, arsitektur Next.js 16,
          serta sistem caching cerdas melalui TanStack Query untuk memberikan pengalaman membaca yang cepat,
          responsif, dan nyaman baik dalam tema terang maupun tema gelap.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-sans font-semibold text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 focus:outline-none focus:underline"
          >
            Hubungi Meja Redaksi
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
