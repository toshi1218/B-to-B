import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import StepDiagram from "@/components/sections/StepDiagram";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.genpon_apostille" });
  return { title: t("title"), description: t("description") };
}

export default async function GenponApostillePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "genpon_apostille_page" });
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };

  const pains = raw.raw("pains") as string[];
  const changePoints = raw.raw("change_points") as string[];
  const canDoItems = raw.raw("can_do_items") as string[];
  type TimelineItem = { case: string; duration: string };
  const timelineItems = raw.raw("timeline_items") as TimelineItem[];
  const targets = raw.raw("targets") as string[];
  type FlowStep = { title: string; desc: string };
  const flows = raw.raw("flows") as FlowStep[];

  return (
    <>
      <div className="bg-[#1a2846] py-14 text-white">
        <div className="container-site max-w-4xl">
          <h1 className="text-3xl font-bold md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-300">{t("subheading")}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-14">
        <div className="container-site max-w-3xl">
          <p className="text-base leading-relaxed text-gray-700">{t("intro")}</p>
          <div className="mt-6 rounded-lg border border-[#1a2846] bg-[#f0f3f9] px-5 py-4">
            <p className="text-sm font-semibold text-[#1a2846]">{t("cta_note")}</p>
          </div>
        </div>
      </div>

      {/* Pain points */}
      <div className="bg-red-50 border-y border-red-100 py-12">
        <div className="container-site max-w-3xl">
          <h2 className="mb-5 text-xl font-bold text-red-900">{t("pain_heading")}</h2>
          <ul className="flex flex-col gap-3 mb-5">
            {pains.map((pain, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-red-100 bg-white px-4 py-3">
                <span className="mt-0.5 shrink-0 font-bold text-red-500">✕</span>
                <span className="text-sm text-red-800 leading-relaxed">{pain}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-100 px-4 py-3">
            <AlertTriangle className="mt-0.5 shrink-0 text-red-600" size={16} />
            <p className="text-sm font-medium text-red-700">{t("pain_note")}</p>
          </div>
        </div>
      </div>

      {/* What changed */}
      <div className="bg-white py-14">
        <div className="container-site max-w-3xl flex flex-col gap-6">
          <h2 className="text-xl font-bold text-gray-900">{t("change_heading")}</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{t("change_desc")}</p>
          <ul className="flex flex-col gap-3">
            {changePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
                <AlertTriangle className="mt-0.5 shrink-0 text-amber-500" size={15} />
                <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Japan is still paper-first */}
      <div className="bg-gray-50 py-14">
        <div className="container-site max-w-3xl">
          <h2 className="mb-4 text-xl font-bold text-gray-900">{t("japan_heading")}</h2>
          <p className="text-base text-gray-700 leading-relaxed">{t("japan_desc")}</p>
        </div>
      </div>

      {/* What we can do */}
      <div className="bg-[#1a2846] py-14 text-white">
        <div className="container-site max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold">{t("can_do_heading")}</h2>
          <ul className="flex flex-col gap-5">
            {canDoItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-200 leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Competitive differentiation */}
      <div className="bg-white py-14">
        <div className="container-site max-w-3xl">
          <h2 className="mb-4 text-xl font-bold text-gray-900">{t("other_heading")}</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{t("other_desc")}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-14">
        <div className="container-site max-w-3xl">
          <h2 className="mb-6 text-xl font-bold text-gray-900">{t("timeline_heading")}</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-[#f0f3f9]">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">ケース</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {timelineItems.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-4 text-gray-900">{item.case}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a2846]">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Who this is for */}
      <div className="bg-white py-14">
        <div className="container-site max-w-3xl">
          <h2 className="mb-6 text-xl font-bold text-gray-900">{t("target_heading")}</h2>
          <ul className="flex flex-col gap-2">
            {targets.map((target, i) => (
              <li key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
                <Check className="shrink-0 text-[#1a2846]" size={16} />
                <span className="text-sm font-medium text-gray-800">{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Flow */}
      <div className="bg-gray-50 py-14">
        <div className="container-site max-w-3xl">
          <h2 className="mb-8 text-xl font-bold text-gray-900">{t("flow_heading")}</h2>
          <StepDiagram steps={flows} />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1a2846] py-14 text-white">
        <div className="container-site text-center">
          <h2 className="mb-3 text-2xl font-bold">{t("cta_heading")}</h2>
          <p className="mb-8 text-gray-300 max-w-xl mx-auto">{t("cta_desc")}</p>
          <Link
            href="/ja/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold text-[#1a2846] hover:bg-gray-100 transition-colors"
          >
            無料で相談する
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
