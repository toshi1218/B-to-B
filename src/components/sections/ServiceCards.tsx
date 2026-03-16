import { useTranslations } from "next-intl";
import Link from "next/link";
import { FileText, Heart, Car, Building2, ArrowRight } from "lucide-react";

const categories = [
  {
    key: "category_a",
    icon: FileText,
    href: "/ja/services#documents",
    color: "bg-blue-50 text-blue-700",
  },
  {
    key: "category_b",
    icon: Heart,
    href: "/ja/services#marriage",
    color: "bg-green-50 text-green-700",
  },
  {
    key: "category_c",
    icon: Car,
    href: "/ja/services#lto",
    color: "bg-orange-50 text-orange-700",
  },
  {
    key: "category_d",
    icon: Building2,
    href: "/ja/services#inheritance",
    color: "bg-purple-50 text-purple-700",
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, icon: Icon, href, color }) => (
            <div
              key={key}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
                <Icon size={24} />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">
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
