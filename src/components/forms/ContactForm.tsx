"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, required, error, children }: FieldProps) {
  const t = useTranslations("contact_page.form");
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && (
          <span className="ml-1.5 rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-600">
            {t("required")}
          </span>
        )}
        {!required && (
          <span className="ml-1.5 rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-500">
            {t("optional")}
          </span>
        )}
      </label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const t = useTranslations("contact_page");
  const tf = useTranslations("contact_page.form");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const inputClass =
    "rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-[#1a2846] focus:outline-none focus:ring-1 focus:ring-[#1a2846] w-full";

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Cebu Buyer's Desk 物件確認のお問い合わせ",
          from_name: "Cebu Buyer's Desk",
          ...data,
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-base font-semibold text-green-800">{t("success")}</p>
      </div>
    );
  }

  const planOptions = [
    { value: "light", label: t("plan_options.light") },
    { value: "standard", label: t("plan_options.standard") },
    { value: "premium", label: t("plan_options.premium") },
    { value: "monthly_light", label: t("plan_options.monthly_light") },
    { value: "monthly_standard", label: t("plan_options.monthly_standard") },
    { value: "undecided", label: t("plan_options.undecided") },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Name */}
      <Field label={tf("name_label")} required error={errors.name?.message}>
        <input
          {...register("name")}
          placeholder={tf("name_placeholder")}
          className={inputClass}
        />
      </Field>

      {/* Email */}
      <Field label={tf("email_label")} required error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          placeholder={tf("email_placeholder")}
          className={inputClass}
        />
      </Field>

      {/* Property */}
      <Field label={tf("property_label")} required error={errors.property?.message}>
        <textarea
          {...register("property")}
          rows={3}
          placeholder={tf("property_placeholder")}
          className={inputClass}
        />
      </Field>

      {/* Plan */}
      <Field label={tf("plan_label")} required error={errors.plan?.message}>
        <select {...register("plan")} className={inputClass}>
          <option value="">{tf("plan_placeholder")}</option>
          {planOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Details */}
      <Field label={tf("details_label")} required error={errors.details?.message}>
        <textarea
          {...register("details")}
          rows={5}
          placeholder={tf("details_placeholder")}
          className={inputClass}
        />
      </Field>

      {/* Error message */}
      {status === "error" && (
        <p className="text-sm text-red-600">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded bg-[#1a2846] px-8 py-3.5 text-base font-bold text-white hover:bg-[#273c69] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? tf("submitting") : tf("submit")}
      </button>
    </form>
  );
}
