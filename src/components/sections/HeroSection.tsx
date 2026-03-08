import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, FileText, Globe, MessageSquare } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="bg-gradient-to-br from-[#0d1423] via-[#1a2846] to-[#273c69] text-white">
      <div className="container-site py-20 md:py-28">
        {/* Eyebrow */}
        <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
          {t("eyebrow")}
        </p>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {t("title")}
        </h1>

        {/* Sub */}
        <p className="mb-10 max-w-2xl text-base text-gray-300 leading-relaxed md:text-lg">
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/ja/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-7 py-3.5 text-base font-bold text-[#1a2846] hover:bg-gray-100 transition-colors"
          >
            {t("cta_primary")}
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/ja/services"
            className="inline-flex items-center gap-2 rounded border border-white/50 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            {t("cta_secondary")}
          </Link>
        </div>

        {/* Quick facts */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-white/20 pt-10 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Globe className="mt-0.5 shrink-0 text-blue-300" size={20} />
            <div>
              <p className="font-semibold">フィリピン現地で動ける</p>
              <p className="mt-1 text-sm text-gray-400">PSA・NBI・LTO・役所・管理会社への実地対応</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="mt-0.5 shrink-0 text-blue-300" size={20} />
            <div>
              <p className="font-semibold">日本語でやり取りできる</p>
              <p className="mt-1 text-sm text-gray-400">言語障壁なしに案件を進行</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 shrink-0 text-blue-300" size={20} />
            <div>
              <p className="font-semibold">進行管理まで担当</p>
              <p className="mt-1 text-sm text-gray-400">書類取得から配送・確認まで一貫対応</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
