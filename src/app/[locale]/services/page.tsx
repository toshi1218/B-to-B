import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Clock, FileText, AlertCircle } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return { title: t("title"), description: t("description") };
}

type PlanData = {
  id: string;
  name: string;
  price: string;
  unit: string;
  tagline: string;
  badge?: string;
  items: string[];
  deliverable: string;
  timeline: string;
};

function PlanCard({ plan, featured }: { plan: PlanData; featured?: boolean }) {
  return (
    <div
      id={plan.id}
      className={`relative flex scroll-mt-24 flex-col rounded-lg border bg-white p-8 ${
        featured ? "border-[#1a2846] ring-2 ring-[#1a2846]/20" : "border-gray-200"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-[#1a2846] px-4 py-1 text-xs font-bold text-white">
          {plan.badge}
        </span>
      )}

      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-bold text-[#1a2846]">{plan.name}</h2>
        <p className="mb-3 text-sm text-gray-500">{plan.tagline}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">¥{plan.price}</span>
          <span className="text-sm text-gray-500">{plan.unit}</span>
        </div>
      </div>

      <div className="mb-6 flex-1">
        <p className="mb-3 text-sm font-semibold text-gray-700">含まれる内容</p>
        <ul className="flex flex-col gap-2">
          {plan.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 shrink-0 text-[#1a2846]" size={16} />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-3 border-t border-gray-100 pt-5 sm:grid-cols-2">
        <div className="flex items-start gap-2">
          <FileText size={15} className="mt-0.5 shrink-0 text-gray-400" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">納品物</p>
            <p className="mt-0.5 text-sm text-gray-700">{plan.deliverable}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={15} className="mt-0.5 shrink-0 text-gray-400" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">期間目安</p>
            <p className="mt-0.5 text-sm text-gray-700">{plan.timeline}</p>
          </div>
        </div>
      </div>

      <Link
        href="/ja/contact"
        className={`mt-6 inline-flex items-center justify-center rounded px-6 py-3 text-sm font-bold transition-colors ${
          featured
            ? "bg-[#1a2846] text-white hover:bg-[#273c69]"
            : "border border-[#1a2846] text-[#1a2846] hover:bg-[#f0f3f9]"
        }`}
      >
        このプランで相談する
      </Link>
    </div>
  );
}

type MonthlyPlan = {
  name: string;
  price: string;
  unit: string;
  items: string[];
};

function MonthlyCard({ plan }: { plan: MonthlyPlan }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-1 text-lg font-bold text-gray-900">{plan.name}</h3>
      <div className="mb-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">¥{plan.price}</span>
        <span className="text-sm text-gray-500">{plan.unit}</span>
      </div>
      <ul className="flex flex-col gap-2">
        {plan.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="mt-0.5 shrink-0 text-[#1a2846]" size={14} />
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/ja/contact"
        className="mt-5 inline-flex items-center justify-center rounded border border-[#1a2846] px-5 py-2.5 text-sm font-bold text-[#1a2846] transition-colors hover:bg-[#f0f3f9]"
      >
        このプランで相談する
      </Link>
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

  // next-intl returns arrays via raw(); keep this local to the page data mapping.
  const raw = t as unknown as {
    (key: string): string;
    raw: (key: string) => unknown;
  };

  const plans: PlanData[] = [
    {
      id: "light",
      name: raw("plan_light.name"),
      price: raw("plan_light.price"),
      unit: raw("plan_light.unit"),
      tagline: raw("plan_light.tagline"),
      items: raw.raw("plan_light.items") as string[],
      deliverable: raw("plan_light.deliverable"),
      timeline: raw("plan_light.timeline"),
    },
    {
      id: "standard",
      name: raw("plan_standard.name"),
      price: raw("plan_standard.price"),
      unit: raw("plan_standard.unit"),
      tagline: raw("plan_standard.tagline"),
      badge: raw("plan_standard.badge"),
      items: raw.raw("plan_standard.items") as string[],
      deliverable: raw("plan_standard.deliverable"),
      timeline: raw("plan_standard.timeline"),
    },
    {
      id: "premium",
      name: raw("plan_premium.name"),
      price: raw("plan_premium.price"),
      unit: raw("plan_premium.unit"),
      tagline: raw("plan_premium.tagline"),
      items: raw.raw("plan_premium.items") as string[],
      deliverable: raw("plan_premium.deliverable"),
      timeline: raw("plan_premium.timeline"),
    },
  ];

  const monthlyPlans: MonthlyPlan[] = [
    {
      name: raw("monthly_light.name"),
      price: raw("monthly_light.price"),
      unit: raw("monthly_light.unit"),
      items: raw.raw("monthly_light.items") as string[],
    },
    {
      name: raw("monthly_standard.name"),
      price: raw("monthly_standard.price"),
      unit: raw("monthly_standard.unit"),
      items: raw.raw("monthly_standard.items") as string[],
    },
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
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{t("one_time_heading")}</h2>
          <p className="mb-10 text-gray-600">{t("one_time_subheading")}</p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} featured={i === 1} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{t("monthly_heading")}</h2>
          <p className="mb-10 text-gray-600">{t("monthly_subheading")}</p>

          <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            {monthlyPlans.map((plan) => (
              <MonthlyCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="container-site">
          <div className="flex max-w-3xl gap-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={20} />
            <div>
              <p className="mb-1 text-sm font-bold text-amber-800">{t("note_heading")}</p>
              <p className="text-sm leading-relaxed text-amber-700">{t("note_text")}</p>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
