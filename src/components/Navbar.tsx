"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [tentangKamiOpen, setTentangKamiOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  return (
    <div className="bg-[#FFF] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/ElitePng112.png"
            className="w-[180px] h-[55px] object-contain"
            alt="Edelweiss Learning Center"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Beranda
          </Link>

          {/* Tentang Kami with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTentangKamiOpen(true)}
            onMouseLeave={() => setTentangKamiOpen(false)}
          >
            <button className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors flex items-center gap-1">
              Tentang Kami
              <svg
                className={`w-4 h-4 transition-transform ${tentangKamiOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {tentangKamiOpen && (
              <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg py-2 min-w-[180px] border border-gray-100 z-50">
                <Link
                  href="/visi-misi"
                  className="block px-4 py-2 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors"
                >
                  Visi & Misi
                </Link>
                <Link
                  href="/foundation"
                  className="block px-4 py-2 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors"
                >
                  Foundation
                </Link>
              </div>
            )}
          </div>

          {/* Program with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <button className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors flex items-center gap-1">
              Program
              <svg
                className={`w-4 h-4 transition-transform ${programOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Program Dropdown Menu */}
            {programOpen && (
              <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px] border border-gray-100 z-50">
                <Link
                  href="/program/elite-academia"
                  className="block px-4 py-2 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors"
                >
                  Elite Academia
                </Link>
                <Link
                  href="/program/english-course"
                  className="block px-4 py-2 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors"
                >
                  English Course
                </Link>
                <Link
                  href="/program/playteracy"
                  className="block px-4 py-2 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors"
                >
                  Playteracy
                </Link>
                <Link
                  href="/program/ipdc"
                  className="block px-4 py-2 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors"
                >
                  IPDC
                </Link>
              </div>
            )}
          </div>

          <Link href="/kurikulum" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Kurikulum
          </Link>
          <Link href="/kontak" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Kontak
          </Link>
          <Link href="/artikel" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Artikel
          </Link>

          {/* Search Icon */}
          <button className="text-[#293C88] hover:text-[#FED700] transition-colors">
            <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 22.5C14.7187 22.4995 16.8735 21.7568 18.6213 20.39L24.1162 25.885L25.8838 24.1175L20.3888 18.6225C21.7563 16.8746 22.4995 14.7193 22.5 12.5C22.5 6.98625 18.0138 2.5 12.5 2.5C6.98625 2.5 2.5 6.98625 2.5 12.5C2.5 18.0138 6.98625 22.5 12.5 22.5ZM12.5 5C16.6362 5 20 8.36375 20 12.5C20 16.6362 16.6362 20 12.5 20C8.36375 20 5 16.6362 5 12.5C5 8.36375 8.36375 5 12.5 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
