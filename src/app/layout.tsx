import type { Metadata } from "next";
import "./globals.css";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay updated with the latest news articles from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-serif p-5'>
        <ThemeProvider>
          <Navbar />
          <TanstackProvider>{children}</TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
