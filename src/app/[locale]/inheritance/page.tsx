import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import StepDiagram from "@/components/sections/StepDiagram";
import { MapPin, Banknote, FileText, Scale, AlertCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.inheritance" });
  return { title: t("title"), description: t("description") };
}

const typeIcons = [MapPin, Banknote, FileText, Scale];
const typeColors = [
  "border-blue-200 bg-blue-50",
  "border-red-200 bg-red-50",
  "border-green-200 bg-green-50",
  "border-purple-200 bg-purple-50",
];
const typeIconColors = ["text-blue-600", "text-red-600", "text-green-600", "text-purple-600"];

export default async function InheritancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "inheritance_page" });

  const types = [1, 2, 3, 4];

  const steps = [
    { title: t("step1_title"), desc: t("step1_desc") },
    { title: t("step2_title"), desc: t("step2_desc") },
    { title: t("step3_title"), desc: t("step3_desc") },
    { title: t("step4_title"), desc: t("step4_desc") },
  ];

  return (
    <>
      {/* Page header */}
      <div className="bg-gradient-to-r from-[#1a2846] to-[#273c69] py-14 text-white">
        <div className="container-site">
          <h1 className="text-3xl font-bold md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-300">{t("subheading")}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-12">
        <div className="container-site max-w-3xl">
          <p className="text-gray-700 leading-relaxed text-lg">{t("intro")}</p>
        </div>
      </div>

      {/* 4 types */}
      <div className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">{t("type_heading")}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {types.map((n, i) => {
              const Icon = typeIcons[i];
              return (
                <div
                  key={n}
                  className={`rounded-lg border ${typeColors[i]} p-6`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className={typeIconColors[i]} size={24} />
                    <h3 className="text-lg font-bold text-gray-900">
                      {t(`type${n}_title` as Parameters<typeof t>[0])}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                    {t(`type${n}_desc` as Parameters<typeof t>[0])}
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    対象：{t(`type${n}_for` as Parameters<typeof t>[0])}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Flow */}
      <div className="bg-white py-16">
        <div className="container-site">
          <h2 className="mb-12 text-2xl font-bold text-gray-900">{t("flow_heading")}</h2>
          <StepDiagram steps={steps} />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 py-10">
        <div className="container-site">
          <div className="flex gap-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={20} />
            <p className="text-sm text-amber-700 leading-relaxed">{t("disclaimer")}</p>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
