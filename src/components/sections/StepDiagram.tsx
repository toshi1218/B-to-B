import { useTranslations } from "next-intl";

interface Step {
  title: string;
  desc: string;
}

interface StepDiagramProps {
  steps: Step[];
  className?: string;
}

export default function StepDiagram({ steps, className = "" }: StepDiagramProps) {
  return (
    <div className={`flex flex-col gap-0 md:flex-row ${className}`}>
      {steps.map((step, i) => (
        <div key={i} className="flex flex-1 flex-col md:flex-row">
          {/* Step content */}
          <div className="flex flex-col items-center text-center">
            {/* Number */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a2846] text-sm font-bold text-white">
              {i + 1}
            </div>
            {/* Connector (mobile: vertical) */}
            {i < steps.length - 1 && (
              <div className="my-2 h-8 w-px bg-gray-300 md:hidden" />
            )}
            <div className="mt-3 px-2">
              <p className="text-sm font-bold text-gray-900">{step.title}</p>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>

          {/* Connector (desktop: horizontal) */}
          {i < steps.length - 1 && (
            <div className="hidden md:flex flex-1 items-center justify-center pt-5">
              <div className="h-px flex-1 bg-gray-300" />
              <div className="h-2 w-2 shrink-0 rounded-full bg-gray-300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function FlowSection() {
  const t = useTranslations("flow");

  const steps = [
    { title: t("step1_title"), desc: t("step1_desc") },
    { title: t("step2_title"), desc: t("step2_desc") },
    { title: t("step3_title"), desc: t("step3_desc") },
    { title: t("step4_title"), desc: t("step4_desc") },
    { title: t("step5_title"), desc: t("step5_desc") },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          {t("heading")}
        </h2>
        <StepDiagram steps={steps} />
      </div>
    </section>
  );
}
