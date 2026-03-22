import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import StepDiagram from "@/components/sections/StepDiagram";
import { Car, AlertCircle, Check, FileText, ClipboardList } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.drivers_license" });
  return { title: t("title"), description: t("description") };
}

const painIcons = [AlertCircle, FileText, ClipboardList, Car];
const painColors = [
  "border-red-200 bg-red-50",
  "border-orange-200 bg-orange-50",
  "border-yellow-200 bg-yellow-50",
  "border-blue-200 bg-blue-50",
];
const painIconColors = ["text-red-600", "text-orange-600", "text-yellow-600", "text-blue-600"];

const serviceItems = [
  "service1",
  "service2",
  "service3",
  "service4",
] as const;

export default async function DriversLicensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "drivers_license_page" });

  const painPoints = [1, 2, 3, 4];

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
          <div className="mb-4 flex items-center gap-3">
            <Car className="text-blue-300" size={36} />
          </div>
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

      {/* Pain points */}
      <div className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">{t("pain_points_heading")}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {painPoints.map((n, i) => {
              const Icon = painIcons[i];
              return (
                <div
                  key={n}
                  className={`rounded-lg border ${painColors[i]} p-6`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className={painIconColors[i]} size={22} />
                    <h3 className="text-base font-bold text-gray-900">
                      {t(`pain_point${n}` as Parameters<typeof t>[0])}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t(`pain_point${n}_desc` as Parameters<typeof t>[0])}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* What IGRS does */}
      <div className="bg-white py-16">
        <div className="container-site">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">{t("services_heading")}</h2>
          <p className="mb-8 text-gray-600 leading-relaxed max-w-2xl">{t("services_intro")}</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {serviceItems.map((key) => (
              <li key={key} className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                <Check className="mt-0.5 shrink-0 text-green-600" size={20} />
                <span className="text-sm text-gray-800 leading-relaxed">
                  {t(key as Parameters<typeof t>[0])}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Flow */}
      <div className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="mb-12 text-2xl font-bold text-gray-900">{t("flow_heading")}</h2>
          <StepDiagram steps={steps} />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white py-10">
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
