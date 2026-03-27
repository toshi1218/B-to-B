import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { Building2, Hash, MapPin, Mail, Check, X, Globe, Award } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.company" });
  return { title: t("title"), description: t("description") };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "company_page" });

  const companyInfo = [
    { icon: Building2, label: t("service_name_label"), value: t("service_name") },
    { icon: Building2, label: t("entity_label"), value: t("entity") },
    { icon: Hash, label: t("number_label"), value: t("number") },
    { icon: MapPin, label: t("address_label"), value: t("address") },
    { icon: Mail, label: t("email_label"), value: t("email") },
    { icon: Globe, label: t("lang_heading"), value: t("lang") },
  ];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Company info table */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-gray-900">基本情報</h2>
              <dl className="divide-y divide-gray-100 rounded-lg border border-gray-200">
                {companyInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 px-5 py-4">
                    <dt className="flex w-40 shrink-0 items-center gap-2 text-sm font-medium text-gray-500">
                      <Icon size={15} className="text-gray-400" />
                      {label}
                    </dt>
                    <dd className="text-sm text-gray-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* What we do / don't / credential */}
            <div className="flex flex-col gap-6">
              {/* What we do */}
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Check size={18} className="text-blue-700" />
                  <h3 className="font-bold text-blue-900">{t("what_we_do_heading")}</h3>
                </div>
                <p className="text-sm text-blue-800 leading-relaxed">{t("what_we_do")}</p>
              </div>

              {/* What we don't */}
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <X size={18} className="text-amber-700" />
                  <h3 className="font-bold text-amber-900">{t("what_we_dont_heading")}</h3>
                </div>
                <p className="text-sm text-amber-800 leading-relaxed">{t("what_we_dont")}</p>
              </div>

              {/* Credential */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Award size={18} className="text-gray-700" />
                  <h3 className="font-bold text-gray-900">{t("credential_heading")}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{t("credential")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
