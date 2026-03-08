import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Clock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact_page" });

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
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <p className="mb-8 text-gray-600 leading-relaxed">{t("intro")}</p>
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={18} className="text-[#1a2846]" />
                  <p className="font-semibold text-gray-900">メールでのお問い合わせ</p>
                </div>
                <a
                  href="mailto:info@ph-document.com"
                  className="text-sm text-[#1a2846] underline underline-offset-2"
                >
                  info@ph-document.com
                </a>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} className="text-[#1a2846]" />
                  <p className="font-semibold text-gray-900">返信について</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  2営業日以内に担当者よりご連絡いたします。お急ぎの場合は、その旨をご依頼内容にご記載ください。
                </p>
              </div>

              <div className="rounded-lg border border-[#1a2846]/20 bg-[#f0f3f9] p-6">
                <p className="text-sm font-semibold text-[#1a2846] mb-2">対応可能なご相談</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>・ 外注可否の確認</li>
                  <li>・ 見積のご依頼</li>
                  <li>・ 案件のご相談</li>
                  <li>・ 提携についてのご相談</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
