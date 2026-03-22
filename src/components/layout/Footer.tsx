import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1423] text-gray-400">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold text-white">IGRS</span>
            <p className="text-sm leading-relaxed">{t("tagline")}</p>
            <p className="text-xs text-gray-500">株式会社ＩＧＲＳ</p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">サービス</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/ja/drivers-license" className="hover:text-white transition-colors">
                {nav("drivers_license")}
              </Link>
              <Link href="/ja/ph-documents" className="hover:text-white transition-colors">
                {nav("ph_documents")}
              </Link>
              <Link href="/ja/name-discrepancy" className="hover:text-white transition-colors">
                {nav("name_discrepancy")}
              </Link>
              <Link href="/ja/inheritance" className="hover:text-white transition-colors">
                {nav("inheritance")}
              </Link>
            </nav>
          </div>

          {/* For Target */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">対象の方へ</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/ja/for-scriveners" className="hover:text-white transition-colors">
                {nav("for_scriveners")}
              </Link>
              <Link href="/ja/for-support-org" className="hover:text-white transition-colors">
                {nav("for_support_org")}
              </Link>
              <Link href="/ja/for-employers" className="hover:text-white transition-colors">
                {nav("for_employers")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
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
              案件のご相談はこちら
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
