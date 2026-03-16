import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import { Check, ArrowRight, FileText, Heart, Car, Building2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pricing" });
  return { title: t("title"), description: t("description") };
}

type PriceItem = { name: string; price: string };

type CategoryData = {
  id: string;
  title: string;
  description: string;
  has_standard: boolean;
  items?: PriceItem[];
  note: string;
};

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  documents: FileText,
  marriage: Heart,
  lto: Car,
  inheritance: Building2,
};

const categoryColors: Record<string, string> = {
  documents: "bg-blue-50 text-blue-700",
  marriage: "bg-green-50 text-green-700",
  lto: "bg-orange-50 text-orange-700",
  inheritance: "bg-purple-50 text-purple-700",
};

function PricingCard({ category }: { category: CategoryData }) {
  const Icon = categoryIcons[category.id] ?? FileText;
  const iconColor = categoryColors[category.id] ?? "bg-gray-50 text-gray-700";

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconColor}`}>
          <Icon size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#1a2846]">{category.title}</h2>
          <p className="mt-1 text-sm text-gray-500">{category.description}</p>
        </div>
      </div>

      {category.has_standard && category.items ? (
        <div className="mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-2 text-left font-medium text-gray-500">サービス内容</th>
                <th className="pb-2 text-right font-medium text-gray-500">料金（税込）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {category.items.map((item, i) => (
                <tr key={i}>
                  <td className="py-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Check size={14} className="shrink-0 text-[#1a2846]" />
                      {item.name}
                    </div>
                  </td>
                  <td className="py-3 text-right font-semibold text-[#1a2846]">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mb-6 rounded-lg bg-gray-50 px-6 py-5 text-center">
          <p className="text-lg font-bold text-[#1a2846]">個別見積</p>
          <p className="mt-2 text-sm text-gray-500">{category.note}</p>
        </div>
      )}

      {category.has_standard && (
        <p className="border-l-2 border-gray-200 pl-3 text-xs text-gray-500">
          ※ {category.note}
        </p>
      )}
    </div>
  );
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "pricing_page" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories = (t as any).raw("categories") as CategoryData[];

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
          {categories.map((category) => (
            <PricingCard key={category.id} category={category} />
          ))}

          {/* Excludes note */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
            <p className="mb-1 text-sm font-semibold text-amber-900">{t("excludes_heading")}</p>
            <p className="text-sm text-amber-800">{t("excludes_text")}</p>
          </div>

          {/* General note */}
          <p className="text-sm text-gray-500">{t("note")}</p>

          {/* Quote CTA */}
          <div className="rounded-lg border border-[#1a2846] bg-white p-6 text-center">
            <p className="mb-4 text-gray-700">{t("individual_quote_note")}</p>
            <Link
              href="/ja/contact"
              className="inline-flex items-center gap-2 rounded bg-[#1a2846] px-6 py-3 text-sm font-medium text-white hover:bg-[#273c69] transition-colors"
            >
              {t("contact_for_quote")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
