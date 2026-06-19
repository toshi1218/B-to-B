import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

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
  const raw = t as unknown as { (key: string): string; raw: (key: string) => unknown };
  const sidebarItems = raw.raw("sidebar_support_items") as string[];

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
                  <p className="font-semibold text-gray-900">{t("sidebar_contact")}</p>
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
                  <p className="font-semibold text-gray-900">{t("sidebar_response")}</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t("sidebar_response_text")}
                </p>
              </div>

              <div className="rounded-lg border border-[#1a2846]/20 bg-[#f0f3f9] p-6">
                <p className="mb-3 text-sm font-semibold text-[#1a2846]">{t("sidebar_support")}</p>
                <ul className="flex flex-col gap-2">
                  {sidebarItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#1a2846]" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
