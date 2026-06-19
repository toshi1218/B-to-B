import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { ChevronDown } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.faq" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/ja/faq/",
      languages: { ja: "/ja/faq/", "x-default": "/ja/faq/" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/ja/faq/",
    },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq_page" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = (t as any).raw("items") as { q: string; a: string }[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: t("heading"),
    description: t("subheading"),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Breadcrumb items={[{ label: t("heading"), href: "/ja/faq/" }]} />
      <JsonLd data={faqSchema} />
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl flex flex-col gap-4">
            {items.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-gray-200 bg-white open:border-[#1a2846]/30"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="border-t border-gray-100 px-6 py-5">
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
