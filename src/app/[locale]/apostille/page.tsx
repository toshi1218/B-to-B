import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import StepDiagram from "@/components/sections/StepDiagram";
import { Check, Info, AlertTriangle } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.apostille" });
  return { title: t("title"), description: t("description") };
}

export default async function ApostillePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "apostille_page" });
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };

  const targets = raw.raw("targets") as string[];

  type FlowStep = { title: string; desc: string };
  const flows = raw.raw("flows") as FlowStep[];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      {/* DFA notice */}
      <div className="bg-amber-50 border-b border-amber-200 py-5">
        <div className="container-site max-w-4xl">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={20} />
            <div>
              <p className="mb-1 font-bold text-amber-900">{t("dfa_notice_heading")}</p>
              <p className="text-sm text-amber-800 leading-relaxed">{t("dfa_notice_desc")}</p>
              <Link href="/ja/genpon-apostille" className="mt-2 inline-block text-sm font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700">
                {t("dfa_notice_link")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="container-site flex flex-col gap-14 max-w-4xl">
          {/* What */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">{t("what_heading")}</h2>
            <p className="text-base text-gray-700 leading-relaxed">{t("what_desc")}</p>
          </section>

          {/* Target docs */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-gray-900">{t("target_heading")}</h2>
            <ul className="flex flex-col gap-2">
              {targets.map((target, i) => (
                <li key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
                  <Check className="shrink-0 text-[#1a2846]" size={16} />
                  <span className="text-sm font-medium text-gray-800">{target}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Flow */}
          <section>
            <h2 className="mb-8 text-xl font-bold text-gray-900">{t("flow_heading")}</h2>
            <StepDiagram steps={flows} />
          </section>

          {/* Diff */}
          <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Info size={18} className="text-blue-700" />
              <h2 className="font-bold text-blue-900">{t("diff_heading")}</h2>
            </div>
            <p className="text-sm text-blue-800 leading-relaxed">{t("diff_desc")}</p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">{t("timeline_heading")}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{t("timeline_desc")}</p>
          </section>

          {/* Price */}
          <section className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">料金目安</p>
            <p className="text-2xl font-bold text-[#1a2846]">{t("price")}</p>
            <p className="mt-2 text-xs text-gray-500">{t("price_note")}</p>
          </section>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
