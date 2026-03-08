import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Clock, FileText, Users } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return { title: t("title"), description: t("description") };
}

type SectionData = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  who: string;
  deliverable: string;
  timeline: string;
  note: string;
};

function ServiceSection({ section }: { section: SectionData }) {
  return (
    <div id={section.id} className="scroll-mt-24 rounded-lg border border-gray-200 bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold text-[#1a2846]">{section.title}</h2>
      <p className="mb-6 text-gray-600 leading-relaxed">{section.intro}</p>

      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold text-gray-700">対応内容</p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 shrink-0 text-[#1a2846]" size={16} />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
        <div className="flex items-start gap-2">
          <Users size={16} className="mt-0.5 shrink-0 text-gray-400" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">想定依頼者</p>
            <p className="mt-1 text-sm text-gray-700">{section.who}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <FileText size={16} className="mt-0.5 shrink-0 text-gray-400" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">納品物</p>
            <p className="mt-1 text-sm text-gray-700">{section.deliverable}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={16} className="mt-0.5 shrink-0 text-gray-400" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">期間目安</p>
            <p className="mt-1 text-sm text-gray-700">{section.timeline}</p>
          </div>
        </div>
      </div>

      <p className="mt-4 border-l-2 border-gray-200 pl-3 text-xs text-gray-500">
        ※ {section.note}
      </p>
    </div>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "services_page" });

  // Build section data from translations directly
  const rawSections = [
    { id: "documents", prefix: "section_a" },
    { id: "marriage", prefix: "section_b" },
    { id: "lto", prefix: "section_c" },
    { id: "inheritance", prefix: "section_d" },
  ];

  const sections: SectionData[] = rawSections.map(({ id, prefix }) => ({
    id,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    title: (t as any)(`${prefix}.title`),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intro: (t as any)(`${prefix}.intro`),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: (t as any).raw(`${prefix}.items`) as string[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    who: (t as any)(`${prefix}.who`),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deliverable: (t as any)(`${prefix}.deliverable`),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    timeline: (t as any)(`${prefix}.timeline`),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    note: (t as any)(`${prefix}.note`),
  }));

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container-site flex flex-col gap-8">
          {sections.map((section) => (
            <ServiceSection key={section.id} section={section} />
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  );
}
