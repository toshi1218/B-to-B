import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.tokutei_gino" });
  return { title: t("title"), description: t("description") };
}

export default async function TokuteiGinoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "tokutei_gino_page" });
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };

  type Why = { title: string; desc: string };
  const whys = raw.raw("whys") as Why[];
  const docs = raw.raw("docs") as string[];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-14">
        <div className="container-site max-w-3xl">
          <p className="text-base leading-relaxed text-gray-700">{t("intro")}</p>
        </div>
      </div>

      {/* Why */}
      <div className="bg-gray-50 py-14">
        <div className="container-site">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">{t("why_heading")}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whys.map((why, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1a2846] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{why.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Docs */}
      <div className="bg-white py-14">
        <div className="container-site max-w-3xl">
          <h2 className="mb-6 text-xl font-bold text-gray-900">{t("docs_heading")}</h2>
          <ul className="flex flex-col gap-2">
            {docs.map((doc, i) => (
              <li key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
                <Check className="shrink-0 text-[#1a2846]" size={16} />
                <span className="text-sm font-medium text-gray-800">{doc}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/ja/services" className="inline-flex items-center gap-1 text-sm font-medium text-[#1a2846] hover:text-[#273c69]">
              月次サポートプランの料金を見る
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1a2846] py-14 text-white">
        <div className="container-site text-center">
          <h2 className="mb-3 text-2xl font-bold">{t("cta_heading")}</h2>
          <p className="mb-8 text-gray-300">{t("cta_desc")}</p>
          <Link
            href="/ja/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold text-[#1a2846] hover:bg-gray-100 transition-colors"
          >
            無料相談・見積もりを依頼する
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
