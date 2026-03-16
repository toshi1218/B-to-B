import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return { title: t("title"), description: t("description") };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy_page" });

  const sections = [
    { title: t("section1_title"), body: t("section1_body") },
    { title: t("section2_title"), body: t("section2_body") },
    { title: t("section3_title"), body: t("section3_body") },
    { title: t("section4_title"), body: t("section4_body") },
    { title: t("section5_title"), body: t("section5_body") },
    { title: t("section6_title"), body: t("section6_body") },
    { title: t("section7_title"), body: t("section7_body") },
    { title: t("section8_title"), body: t("section8_body") },
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
          <p className="mb-10 text-sm text-gray-600 leading-relaxed">{t("intro")}</p>

          <div className="flex flex-col gap-8">
            {sections.map(({ title, body }) => (
              <section key={title}>
                <h2 className="mb-3 text-base font-bold text-[#1a2846]">{title}</h2>
                <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">{body}</p>
              </section>
            ))}
          </div>

          <p className="mt-12 text-xs text-gray-400">{t("updated")}</p>
        </div>
      </div>
    </>
  );
}
