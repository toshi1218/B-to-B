import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import WhyIGRS from "@/components/sections/WhyIGRS";
import TargetAudience from "@/components/sections/TargetAudience";
import { FlowSection } from "@/components/sections/StepDiagram";
import CTABanner from "@/components/sections/CTABanner";
import Disclaimer from "@/components/sections/Disclaimer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/ja/",
      languages: {
        ja: "/ja/",
        "x-default": "/ja/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/ja/",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServiceCards />
      <WhyIGRS />
      <TargetAudience />
      <FlowSection />
      <Disclaimer />
      <CTABanner />
    </>
  );
}
