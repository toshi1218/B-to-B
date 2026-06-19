import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { FileText, AlertCircle } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.documents" });
  return { title: t("title"), description: t("description") };
}

type DocItem = {
  name: string;
  desc: string;
  uses: string[];
};

function DocCard({ doc }: { doc: DocItem }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <div className="mb-3 flex items-start gap-3">
        <FileText className="mt-0.5 shrink-0 text-[#1a2846]" size={18} />
        <h3 className="font-bold text-gray-900">{doc.name}</h3>
      </div>
      <p className="mb-3 text-sm text-gray-600 leading-relaxed">{doc.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {doc.uses.map((use, i) => (
          <span key={i} className="rounded-full bg-[#f0f3f9] px-2.5 py-0.5 text-xs font-medium text-[#1a2846]">
            {use}
          </span>
        ))}
      </div>
    </div>
  );
}

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "documents_page" });
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };

  const psaDocs = raw.raw("psa_docs") as DocItem[];
  const nbiDocs = raw.raw("nbi_docs") as DocItem[];
  const ltoDocs = raw.raw("lto_docs") as DocItem[];
  const authDocs = raw.raw("auth_docs") as DocItem[];

  return (
    <>
      <div className="bg-[#f0f3f9] py-14">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-[#1a2846] md:text-4xl">{t("heading")}</h1>
          <p className="mt-3 text-gray-600">{t("subheading")}</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="container-site flex flex-col gap-14">
          {/* PSA */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-gray-900 border-l-4 border-[#1a2846] pl-4">
              {t("psa_heading")}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {psaDocs.map((doc, i) => <DocCard key={i} doc={doc} />)}
            </div>
          </section>

          {/* NBI */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-gray-900 border-l-4 border-[#1a2846] pl-4">
              {t("nbi_heading")}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {nbiDocs.map((doc, i) => <DocCard key={i} doc={doc} />)}
            </div>
          </section>

          {/* LTO */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-gray-900 border-l-4 border-[#1a2846] pl-4">
              {t("lto_heading")}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {ltoDocs.map((doc, i) => <DocCard key={i} doc={doc} />)}
            </div>
          </section>

          {/* Auth */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-gray-900 border-l-4 border-[#1a2846] pl-4">
              {t("auth_heading")}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {authDocs.map((doc, i) => <DocCard key={i} doc={doc} />)}
            </div>
            <div className="mt-4">
              <Link href="/ja/apostille" className="text-sm font-medium text-[#1a2846] underline underline-offset-2 hover:text-[#273c69]">
                アポスティーユの詳細・手続きを見る →
              </Link>
            </div>
          </section>

          {/* Note */}
          <div className="flex gap-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={20} />
            <p className="text-sm text-amber-700 leading-relaxed">{t("note")}</p>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
