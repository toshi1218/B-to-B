import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "@/app/globals.css";

const BASE_URL = "https://ph-document.com";

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Cebu Buyer's Desk",
      legalName: "株式会社ＩＧＲＳ",
      url: `${BASE_URL}/ja/`,
      email: "info@ph-document.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "和歌山市",
        addressRegion: "和歌山県",
        addressCountry: "JP",
      },
      description:
        "セブのコンドミニアム購入を検討する日本人向けの買主側デューデリジェンスサービス。現地確認・DHSUD確認・判断材料整理を日本語で提供。宅地建物取引士資格保有者が運営。",
      knowsAbout: [
        "フィリピン不動産",
        "セブコンドミニアム",
        "デューデリジェンス",
        "DHSUD License to Sell",
        "買主側第三者確認",
      ],
      knowsLanguage: ["ja", "en"],
      areaServed: [
        { "@type": "Country", name: "Philippines" },
        { "@type": "Country", name: "Japan" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}/ja/`,
      name: "Cebu Buyer's Desk",
      description:
        "セブのコンドミニアム購入を検討する日本人向けの買主側デューデリジェンスサービス",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "ja-JP",
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: {
      default: t("siteName"),
      template: `%s | IGRS`,
    },
    description: t("home.description"),
    metadataBase: new URL(BASE_URL),
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "Cebu Buyer's Desk",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={globalSchema} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
