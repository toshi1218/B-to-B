import { useTranslations } from "next-intl";
import Link from "next/link";
import { MapPin, ClipboardCheck, Shield, ArrowRight } from "lucide-react";

const plans = [
  {
    key: "plan_light",
    icon: MapPin,
    href: "/ja/services#light",
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-100",
  },
  {
    key: "plan_standard",
    icon: ClipboardCheck,
    href: "/ja/services#standard",
    color: "bg-green-50 text-green-700",
    border: "border-green-100",
    badge: true,
  },
  {
    key: "plan_premium",
    icon: Shield,
    href: "/ja/services#premium",
    color: "bg-purple-50 text-purple-700",
    border: "border-purple-100",
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
          {plans.map(({ key, icon: Icon, href, color, border, badge }) => (
            <div
              key={key}
              className={`relative flex flex-col rounded-lg border ${border} bg-white p-6 hover:shadow-md transition-shadow`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1a2846] px-3 py-1 text-xs font-bold text-white">
                  一番人気
                </span>
              )}
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
                <Icon size={24} />
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                {t(`${key}.title`)}
              </h3>
              <p className="mb-2 text-sm font-semibold text-[#1a2846]">
                {t(`${key}.price`)}
              </p>
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
