import type { Metadata } from "next";
import "./globals.css";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Warta Berita - Jurnalisme Faktual & Independen",
  description:
    "Portal warta berita terpercaya menyajikan kabar terkini seputar nasional, internasional, teknologi, bisnis, dan sains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-serif selection:bg-red-700 selection:text-white transition-colors">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
            <TanstackProvider>{children}</TanstackProvider>
          </div>
          <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-sm text-gray-900 dark:text-gray-100">
                  Warta Berita
                </span>
                <span>•</span>
                <span>Hak Cipta Dilindungi Undang-Undang</span>
              </div>
              <div>
                Data disajikan melalui integrasi News API dan kurasi redaksi.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
