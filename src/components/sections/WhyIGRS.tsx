import { useTranslations } from "next-intl";
import { Globe, MessageSquare, ClipboardList, Scale } from "lucide-react";

const points = [
  { key: "point1", icon: Globe },
  { key: "point2", icon: MessageSquare },
  { key: "point3", icon: ClipboardList },
  { key: "point4", icon: Scale },
];

export default function WhyIGRS() {
  const t = useTranslations("why");

  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">{t("heading")}</h2>
          <p className="text-gray-600">{t("subheading")}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ key, icon: Icon }) => (
            <div key={key} className="flex flex-col gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f3f9] text-[#1a2846]">
                <Icon size={24} />
              </div>
              <h3 className="text-base font-bold text-gray-900">
                {t(`${key}_title`)}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(`${key}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
