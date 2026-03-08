import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export default function TargetAudience() {
  const t = useTranslations("target");

  const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

  return (
    <section className="bg-[#f0f3f9] py-20">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            {t("heading")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((key) => (
              <div key={key} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-0.5 shrink-0 text-[#1a2846]" size={18} />
                <p className="text-sm font-medium text-gray-800">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
