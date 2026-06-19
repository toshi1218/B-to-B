import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Clock, AlertCircle } from "lucide-react";

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
            <div className="lg:col-span-2">
              <p className="mb-8 leading-relaxed text-gray-600">{t("intro")}</p>
              <ContactForm />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 flex items-center gap-2">
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
                <div className="mb-3 flex items-center gap-2">
                  <Clock size={18} className="text-[#1a2846]" />
                  <p className="font-semibold text-gray-900">返信について</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  2営業日以内にご連絡いたします。まずは購入前に確認すべき論点を整理してお返しします。
                  プランが決まっていない方もご相談ください。
                </p>
              </div>

              <div className="rounded-lg border border-[#1a2846]/20 bg-[#f0f3f9] p-6">
                <p className="mb-2 text-sm font-semibold text-[#1a2846]">対応できるご相談</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>・ 気になる物件の論点整理</li>
                  <li>・ プランの選定サポート</li>
                  <li>・ 現地確認の依頼</li>
                  <li>・ DHSUD確認・公的情報確認</li>
                  <li>・ 継続監視プランの相談</li>
                </ul>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="mt-0.5 shrink-0 text-amber-600" />
                  <p className="text-xs leading-relaxed text-amber-700">
                    当社は不動産売買の仲介や勧誘は行いません。購入を促す案件紹介はお受けしていません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
