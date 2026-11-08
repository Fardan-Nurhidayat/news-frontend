"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeThemeButton } from "../ChangeThemeButton";

const menus = [
  { name: "Berita", link: "/" },
  { name: "Tentang Kami", link: "/about" },
  { name: "Kontak Redaksi", link: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
              aria-label="Warta Berita Beranda"
            >
              <div className="w-8 h-8 rounded bg-red-700 flex items-center justify-center text-white font-serif font-black text-xl shadow-sm">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-lg tracking-tight leading-none">
                  Warta Berita
                </span>
                <span className="text-[10px] font-sans tracking-widest text-gray-500 uppercase">
                  Jurnalisme Terpercaya
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Navigasi Utama">
            {menus.map(menu => {
              const isActive =
                menu.link === "/"
                  ? pathname === "/" || pathname === "/berita"
                  : pathname === menu.link;

              return (
                <Link
                  key={menu.name}
                  href={menu.link}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-sans font-medium transition-colors ${
                    isActive
                      ? "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/40 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {menu.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <ChangeThemeButton />

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Buka menu navigasi"
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-1 shadow-lg"
        >
          {menus.map(menu => {
            const isActive =
              menu.link === "/"
                ? pathname === "/" || pathname === "/berita"
                : pathname === menu.link;

            return (
              <Link
                key={menu.name}
                href={menu.link}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-sans font-medium transition-colors ${
                  isActive
                    ? "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/40 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Navbar;
