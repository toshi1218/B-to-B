"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { key: "gyoseishoshi", href: "/ja/gyoseishoshi" },
  { key: "tokutei_gino", href: "/ja/tokutei-gino" },
  { key: "documents", href: "/ja/documents" },
  { key: "services", href: "/ja/services" },
  { key: "cases", href: "/ja/cases" },
  { key: "company", href: "/ja/company" },
];

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container-site flex h-16 items-center justify-between">
        <Link
          href="/ja"
          className="text-base font-bold text-[#1a2846] tracking-wide"
        >
          IGRS｜フィリピン書類サポート
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#1a2846] transition-colors whitespace-nowrap"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/ja/contact"
            className="inline-flex items-center rounded bg-[#1a2846] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#273c69] transition-colors whitespace-nowrap"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container-site flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-[#1a2846]"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/ja/contact"
              className="mt-2 inline-flex items-center justify-center rounded bg-[#1a2846] px-5 py-3 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
