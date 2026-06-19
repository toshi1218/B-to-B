import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1423] text-gray-400">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold text-white">IGRS｜フィリピン書類サポート</span>
            <p className="text-sm leading-relaxed">{t("tagline")}</p>
            <p className="text-xs text-gray-500">株式会社ＩＧＲＳ</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">{t("nav_heading")}</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/ja/gyoseishoshi" className="hover:text-white transition-colors">
                {nav("gyoseishoshi")}
              </Link>
              <Link href="/ja/tokutei-gino" className="hover:text-white transition-colors">
                {nav("tokutei_gino")}
              </Link>
              <Link href="/ja/documents" className="hover:text-white transition-colors">
                {nav("documents")}
              </Link>
              <Link href="/ja/services" className="hover:text-white transition-colors">
                {nav("services")}
              </Link>
              <Link href="/ja/cases" className="hover:text-white transition-colors">
                {nav("cases")}
              </Link>
              <Link href="/ja/faq" className="hover:text-white transition-colors">
                {nav("faq")}
              </Link>
              <Link href="/ja/company" className="hover:text-white transition-colors">
                {nav("company")}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">{t("contact_heading")}</p>
            <a
              href="mailto:info@ph-document.com"
              className="text-sm hover:text-white transition-colors"
            >
              info@ph-document.com
            </a>
            <Link
              href="/ja/contact"
              className="mt-2 inline-flex w-fit items-center rounded border border-gray-600 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              無料相談・見積もり
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-600">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
