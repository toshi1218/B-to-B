import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import {
  AlertTriangle,
  Check,
  ArrowRight,
  FileText,
  Car,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.for_employers" });
  return { title: t("title"), description: t("description") };
}

const painPointColors = [
  "border-red-200 bg-red-50",
  "border-orange-200 bg-orange-50",
  "border-yellow-200 bg-yellow-50",
  "border-purple-200 bg-purple-50",
];
const painPointIconColors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-600",
  "text-purple-500",
];

const benefitColors = [
  "border-green-200 bg-green-50",
  "border-blue-200 bg-blue-50",
  "border-teal-200 bg-teal-50",
];
const benefitIconColors = ["text-green-600", "text-blue-600", "text-teal-600"];

export default async function ForEmployersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "for_employers_page" });

  const painPoints = [1, 2, 3, 4] as const;
  const benefits = [1, 2, 3] as const;

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0d1423] to-[#1a2846] py-16 text-white">
        <div className="container-site">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
            {t("eyebrow")}
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">{t("heading")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{t("subheading")}</p>
        </div>
      </div>

      {/* Pain points */}
      <div className="bg-[#f0f3f9] py-16">
        <div className="container-site">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{t("pain_heading")}</h2>
          <p className="mb-10 text-gray-600">{t("pain_intro")}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {painPoints.map((n, i) => (
              <div
                key={n}
                className={`rounded-lg border ${painPointColors[i]} p-6`}
              >
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle
                    className={`mt-0.5 shrink-0 ${painPointIconColors[i]}`}
                    size={20}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {t(`pain${n}_title` as Parameters<typeof t>[0])}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      {t(`pain${n}_desc` as Parameters<typeof t>[0])}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business benefits */}
      <div className="bg-white py-16">
        <div className="container-site">
          <h2 className="mb-3 text-2xl font-bold text-[#1a2846]">{t("benefits_heading")}</h2>
          <p className="mb-10 max-w-2xl text-gray-600 leading-relaxed">{t("benefits_intro")}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((n, i) => (
              <div
                key={n}
                className={`rounded-lg border ${benefitColors[i]} p-6`}
              >
                <TrendingUp className={`mb-3 ${benefitIconColors[i]}`} size={24} />
                <h3 className="mb-2 font-bold text-gray-900">
                  {t(`benefit${n}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t(`benefit${n}_desc` as Parameters<typeof t>[0])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How IGRS helps */}
      <div className="bg-[#f0f3f9] py-16">
        <div className="container-site">
          <h2 className="mb-3 text-2xl font-bold text-[#1a2846]">{t("solution_heading")}</h2>
          <p className="mb-10 max-w-2xl text-gray-600 leading-relaxed">{t("solution_intro")}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {([1, 2, 3] as const).map((n) => (
              <div
                key={n}
                className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-5"
              >
                <Check className="mt-0.5 shrink-0 text-[#1a2846]" size={18} />
                <p className="text-sm text-gray-800 leading-relaxed">
                  {t(`solution${n}` as Parameters<typeof t>[0])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Relevant services */}
      <div className="bg-white py-16">
        <div className="container-site">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">{t("services_heading")}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Driver's license / LTO */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <Car className="mb-4 text-[#1a2846]" size={28} />
              <h3 className="mb-2 font-bold text-gray-900">{t("service1_title")}</h3>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">{t("service1_desc")}</p>
              <Link
                href={`/${locale}/drivers-license`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2846] hover:underline"
              >
                {t("service_link_label")}
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* PSA / residency documents */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <FileText className="mb-4 text-[#1a2846]" size={28} />
              <h3 className="mb-2 font-bold text-gray-900">{t("service2_title")}</h3>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">{t("service2_desc")}</p>
              <Link
                href={`/${locale}/ph-documents`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2846] hover:underline"
              >
                {t("service_link_label")}
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Name discrepancy */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <Users className="mb-4 text-[#1a2846]" size={28} />
              <h3 className="mb-2 font-bold text-gray-900">{t("service3_title")}</h3>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">{t("service3_desc")}</p>
              <Link
                href={`/${locale}/name-discrepancy`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2846] hover:underline"
              >
                {t("service_link_label")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="bg-[#f0f3f9] py-10">
        <div className="container-site">
          <div className="flex gap-4 rounded-lg border border-blue-100 bg-blue-50 p-5">
            <Clock className="mt-0.5 shrink-0 text-blue-600" size={20} />
            <div>
              <p className="font-semibold text-blue-800">{t("note_title")}</p>
              <p className="mt-1 text-sm text-blue-700 leading-relaxed">{t("note_desc")}</p>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
