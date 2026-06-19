import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.cases" });
  return { title: t("title"), description: t("description") };
}

type Case = {
  tag: string;
  title: string;
  situation: string;
  how: string;
  result: string;
};

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "cases_page" });
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };
  const cases = raw.raw("cases") as Case[];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container-site flex flex-col gap-10 max-w-3xl">
          {cases.map((c, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className="bg-[#1a2846] px-6 py-4">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white mb-2">
                  {c.tag}
                </span>
                <h2 className="text-lg font-bold text-white">{c.title}</h2>
              </div>
              <div className="divide-y divide-gray-100 px-6">
                <div className="py-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">状況</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.situation}</p>
                </div>
                <div className="py-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">対応</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.how}</p>
                </div>
                <div className="py-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">結果</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  );
}
