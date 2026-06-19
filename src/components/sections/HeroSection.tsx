import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Globe, MessageSquare, Package } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="bg-gradient-to-br from-[#0d1423] via-[#1a2846] to-[#273c69] text-white">
      <div className="container-site py-20 md:py-28">
        <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
          {t("eyebrow")}
        </p>

        <h1 className="mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {t("title")}
        </h1>

        <p className="mb-10 max-w-2xl text-base text-gray-300 leading-relaxed md:text-lg">
          {t("subtitle")}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/ja/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-7 py-3.5 text-base font-bold text-[#1a2846] hover:bg-gray-100 transition-colors"
          >
            {t("cta_primary")}
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/ja/documents"
            className="inline-flex items-center gap-2 rounded border border-white/50 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            {t("cta_secondary")}
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-white/20 pt-10 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Globe className="mt-0.5 shrink-0 text-blue-300" size={20} />
            <div>
              <p className="font-semibold">{t("fact1_title")}</p>
              <p className="mt-1 text-sm text-gray-400">{t("fact1_desc")}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="mt-0.5 shrink-0 text-blue-300" size={20} />
            <div>
              <p className="font-semibold">{t("fact2_title")}</p>
              <p className="mt-1 text-sm text-gray-400">{t("fact2_desc")}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Package className="mt-0.5 shrink-0 text-blue-300" size={20} />
            <div>
              <p className="font-semibold">{t("fact3_title")}</p>
              <p className="mt-1 text-sm text-gray-400">{t("fact3_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
