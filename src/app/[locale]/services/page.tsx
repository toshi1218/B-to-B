import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { AlertCircle, Check } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "services_page" });
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };

  type DocRow = { name: string; price: string; note?: string };
  type MonthlyPlan = { name: string; price: string; items: string[] };
  type StepTimeline = { step: string; duration: string; note?: string };
  type PatternTimeline = { pattern: string; use: string; duration: string };

  const docs = raw.raw("docs") as DocRow[];
  const auths = raw.raw("auths") as DocRow[];
  const translations = raw.raw("translations") as DocRow[];
  const monthlyPlans = raw.raw("monthly_plans") as MonthlyPlan[];
  const stepTimelines = raw.raw("step_timelines") as StepTimeline[];
  const patternTimelines = raw.raw("pattern_timelines") as PatternTimeline[];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      {/* Document pricing */}
      <div className="bg-white py-16">
        <div className="container-site">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">{t("doc_heading")}</h2>
          <p className="mb-8 text-sm text-gray-500">{t("doc_note")}</p>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-[#f0f3f9]">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">書類の種類</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">目安料金</th>
                  <th className="hidden px-5 py-3 text-left font-semibold text-gray-700 sm:table-cell">主な用途</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {docs.map((doc, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-gray-900">{doc.name}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a2846]">{doc.price}</td>
                    <td className="hidden px-5 py-4 text-gray-500 sm:table-cell">{doc.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Auth pricing */}
      <div className="bg-gray-50 py-12">
        <div className="container-site">
          <h2 className="mb-1 text-xl font-bold text-gray-900">{t("auth_heading")}</h2>
          <p className="mb-6 text-sm text-gray-500">{t("auth_note")}</p>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 bg-white">
                {auths.map((auth, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-gray-900">{auth.name}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a2846]">{auth.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Translation pricing */}
      <div className="bg-white py-12">
        <div className="container-site">
          <h2 className="mb-6 text-xl font-bold text-gray-900">{t("translation_heading")}</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 bg-white">
                {translations.map((tr, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-gray-900">{tr.name}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a2846]">{tr.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Monthly plans */}
      <div className="bg-gray-50 py-12">
        <div className="container-site">
          <h2 className="mb-2 text-xl font-bold text-gray-900">{t("monthly_heading")}</h2>
          <p className="mb-8 text-sm text-gray-600">{t("monthly_note")}</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl">
            {monthlyPlans.map((plan, i) => (
              <div key={i} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-1 text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="mb-4 text-base font-semibold text-[#1a2846]">{plan.price}</p>
                <ul className="flex flex-col gap-2">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="mt-0.5 shrink-0 text-[#1a2846]" size={14} />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ja/contact"
                  className="mt-5 inline-flex items-center justify-center rounded border border-[#1a2846] px-5 py-2.5 text-sm font-bold text-[#1a2846] transition-colors hover:bg-[#f0f3f9]"
                >
                  相談する
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white py-12">
        <div className="container-site">
          <h2 className="mb-2 text-xl font-bold text-gray-900">{t("timeline_heading")}</h2>
          <p className="mb-8 text-sm text-gray-600 max-w-3xl">{t("timeline_intro")}</p>

          <h3 className="mb-4 text-base font-semibold text-gray-700">工程別の目安</h3>
          <div className="overflow-hidden rounded-lg border border-gray-200 mb-10">
            <table className="w-full text-sm">
              <thead className="bg-[#f0f3f9]">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">工程</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">目安日数</th>
                  <th className="hidden px-5 py-3 text-left font-semibold text-gray-700 sm:table-cell">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stepTimelines.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-gray-900">{row.step}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a2846] whitespace-nowrap">{row.duration}</td>
                    <td className="hidden px-5 py-4 text-gray-500 sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mb-4 text-base font-semibold text-gray-700">案件パターン別の目安</h3>
          <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-[#f0f3f9]">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">パターン</th>
                  <th className="hidden px-5 py-3 text-left font-semibold text-gray-700 sm:table-cell">主な用途</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {patternTimelines.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-gray-900">{row.pattern}</td>
                    <td className="hidden px-5 py-4 text-gray-500 sm:table-cell">{row.use}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a2846] whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">{t("timeline_note")}</p>
        </div>
      </div>

      {/* Note */}
      <div className="bg-white py-10">
        <div className="container-site">
          <div className="flex max-w-3xl gap-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={20} />
            <div>
              <p className="mb-1 text-sm font-bold text-amber-800">{t("note_heading")}</p>
              <p className="text-sm leading-relaxed text-amber-700">{t("note_text")}</p>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
