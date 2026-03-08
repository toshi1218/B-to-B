import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  const t = useTranslations("disclaimer");

  return (
    <section className="bg-gray-50 py-10">
      <div className="container-site">
        <div className="flex gap-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={20} />
          <div>
            <p className="mb-1 text-sm font-bold text-amber-800">{t("heading")}</p>
            <p className="text-sm text-amber-700 leading-relaxed">{t("text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
