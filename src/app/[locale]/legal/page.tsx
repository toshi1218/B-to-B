import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.legal" });
  return { title: t("title"), description: t("description") };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal_page" });

  const rows = [
    { label: t("seller_name_label"), value: t("seller_name") },
    { label: t("representative_label"), value: t("representative") },
    {
      label: t("address_label"),
      value: (
        <>
          {t("address")}
          <span className="mt-1 block text-xs text-gray-400">{t("address_note")}</span>
        </>
      ),
    },
    { label: t("email_label"), value: t("email") },
    { label: t("phone_label"), value: t("phone") },
    { label: t("price_label"), value: t("price") },
    { label: t("payment_label"), value: t("payment") },
    { label: t("payment_timing_label"), value: t("payment_timing") },
    { label: t("delivery_label"), value: t("delivery") },
    { label: t("cancel_label"), value: t("cancel") },
    { label: t("extra_label"), value: t("extra") },
  ];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container-site max-w-3xl">
          <dl className="divide-y divide-gray-100 rounded-lg border border-gray-200">
            {rows.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-4">
                <dt className="w-full shrink-0 text-sm font-medium text-gray-500 sm:w-48">
                  {label}
                </dt>
                <dd className="text-sm text-gray-800">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
