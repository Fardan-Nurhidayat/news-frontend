"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    category: "liputan",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) {
      errs.name = "Nama lengkap wajib diisi.";
    }
    if (!formState.email.trim()) {
      errs.email = "Alamat email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Format alamat email tidak valid.";
    }
    if (!formState.message.trim()) {
      errs.message = "Pesan atau informasi berita wajib diisi.";
    } else if (formState.message.trim().length < 15) {
      errs.message = "Pesan minimal berisi 15 karakter.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormState({
      name: "",
      email: "",
      category: "liputan",
      message: "",
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 space-y-10">
      <header className="border-b-2 border-gray-900 dark:border-gray-100 pb-6">
        <span className="text-xs font-sans font-semibold tracking-widest text-red-700 dark:text-red-400 uppercase">
          Komunikasi & Berita
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 dark:text-gray-100 mt-1">
          Kontak Meja Redaksi
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
          Punya informasi penting, hak jawab, klarifikasi berita, atau ingin mengajukan saran liputan?
          Hubungi tim redaksi Warta Berita melalui formulir di bawah ini.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Information Column */}
        <aside className="md:col-span-5 space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 space-y-4">
            <h2 className="font-serif font-bold text-xl text-gray-900 dark:text-gray-100">
              Kantor Redaksi
            </h2>
            <div className="text-sm font-sans text-gray-600 dark:text-gray-300 space-y-3">
              <div>
                <strong className="block text-gray-900 dark:text-gray-100">Alamat:</strong>
                <p>Kos Bu Rini, Jalan masjid Gedong, No. 32, RT 4 RW 1, Pasar rebo, Kota Jakarta Timur, DKI, Jakarta</p>
                <p>PASAR REBO JAKARTA DKI JAKARTA</p>
              </div>

              <div>
                <strong className="block text-gray-900 dark:text-gray-100">Surel Redaksi:</strong>
                <a
                  href="mailto:fardannurhidayat12@gmail.com"
                  className="text-red-700 dark:text-red-400 hover:underline"
                >
                  fardannurhidayat12@gmail.com
                </a>
              </div>

              <div>
                <strong className="block text-gray-900 dark:text-gray-100">Telepon Khusus Informasi:</strong>
                <p>+6285937095388</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-850 text-xs font-sans text-gray-500 dark:text-gray-400 space-y-2">
            <strong className="block text-gray-700 dark:text-gray-300 font-semibold">
              Kerahasiaan Sumber:
            </strong>
            <p>
              Kami melindungi identitas narasumber anonim sesuai dengan kode etik jurnalistik
              dan undang-undang pers yang berlaku.
            </p>
          </div>
        </aside>

        {/* Interactive Form Column */}
        <section className="md:col-span-7">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 sm:p-8 bg-white dark:bg-gray-800">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 flex items-center justify-center mx-auto">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
                  Pesan Berhasil Terkirim
                </h3>
                <p className="text-sm font-sans text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Terima kasih, <strong>{formState.name}</strong>. Pesan Anda telah diterima oleh meja
                  redaksi Warta Berita dan akan ditindaklanjuti sesuai verifikasi jurnalistik.
                </p>
                <div className="pt-4">
                  <Button onClick={handleReset} variant="outline" size="sm">
                    Kirim Pesan Lain
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="font-serif font-bold text-xl text-gray-900 dark:text-gray-100 mb-2">
                  Kirim Pesan atau Informasi
                </h2>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-sans font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nama Lengkap <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 dark:text-gray-100"
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-sans text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-sans font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Alamat Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 dark:text-gray-100"
                    placeholder="nama@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-sans text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-sans font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Kategori Pesan
                  </label>
                  <select
                    id="contact-category"
                    value={formState.category}
                    onChange={e => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 dark:text-gray-100 cursor-pointer"
                  >
                    <option value="liputan">Informasi Liputan / Berita</option>
                    <option value="hak-jawab">Hak Jawab & Koreksi Artikel</option>
                    <option value="redaksi">Pertanyaan Umum Redaksi</option>
                    <option value="opini">Pengiriman Artikel Opini</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-sans font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Pesan atau Informasi Berita <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm font-sans bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 dark:text-gray-100"
                    placeholder="Jelaskan kronologi, rincian, atau pertanyaan Anda..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-sans text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Kirim ke Redaksi
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
