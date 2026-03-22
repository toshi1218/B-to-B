import { useTranslations } from "next-intl";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const targets = [
  { key: "item1", href: "/ja/for-scriveners" },
  { key: "item2", href: "/ja/for-support-org" },
  { key: "item3", href: "/ja/for-employers" },
];

export default function TargetAudience() {
  const t = useTranslations("target");

  return (
    <section className="bg-[#f0f3f9] py-20">
      <div className="container-site">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          {t("heading")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {targets.map(({ key, href }) => (
            <div key={key} className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
              <Check className="mb-4 shrink-0 text-[#1a2846]" size={24} />
              <h3 className="mb-2 text-base font-bold text-gray-900">{t(key)}</h3>
              <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">{t(`${key}_desc`)}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-sm font-medium text-[#1a2846] hover:text-[#273c69]"
              >
                詳しく見る
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
