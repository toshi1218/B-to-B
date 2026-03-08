import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const t = useTranslations("cta_banner");

  return (
    <section className="bg-[#1a2846] py-16 text-white">
      <div className="container-site text-center">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">{t("heading")}</h2>
        <p className="mb-8 text-gray-300">{t("subheading")}</p>
        <Link
          href="/ja/contact"
          className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold text-[#1a2846] hover:bg-gray-100 transition-colors"
        >
          {t("button")}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
