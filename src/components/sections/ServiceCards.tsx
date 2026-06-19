import { useTranslations } from "next-intl";
import Link from "next/link";
import { FileText, Stamp, Users, ArrowRight } from "lucide-react";

const cards = [
  {
    key: "card1",
    icon: FileText,
    href: "/ja/documents",
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-100",
  },
  {
    key: "card2",
    icon: Stamp,
    href: "/ja/apostille",
    color: "bg-indigo-50 text-indigo-700",
    border: "border-indigo-100",
  },
  {
    key: "card3",
    icon: Users,
    href: "/ja/services",
    color: "bg-slate-50 text-slate-700",
    border: "border-slate-100",
  },
];

export default function ServiceCards() {
  const t = useTranslations("services_section");

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-site">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t("heading")}</h2>
          <p className="text-gray-600">{t("subheading")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map(({ key, icon: Icon, href, color, border }) => (
            <div
              key={key}
              className={`flex flex-col rounded-lg border ${border} bg-white p-6 hover:shadow-md transition-shadow`}
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
                <Icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {t(`${key}.title`)}
              </h3>
              <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">
                {t(`${key}.description`)}
              </p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-sm font-medium text-[#1a2846] hover:text-[#273c69]"
              >
                {t(`${key}.link`)}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
