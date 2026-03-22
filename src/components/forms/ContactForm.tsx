"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

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
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
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

  const industryOptions = [
    { value: "administrative_scrivener", label: t("industry_options.administrative_scrivener") },
    { value: "support_org", label: t("industry_options.support_org") },
    { value: "employer", label: t("industry_options.employer") },
    { value: "immigration", label: t("industry_options.immigration") },
    { value: "other", label: t("industry_options.other") },
  ];

  const categoryOptions = [
    { value: "drivers_license", label: t("category_options.drivers_license") },
    { value: "documents", label: t("category_options.documents") },
    { value: "name_discrepancy", label: t("category_options.name_discrepancy") },
    { value: "marriage", label: t("category_options.marriage") },
    { value: "inheritance", label: t("category_options.inheritance") },
    { value: "other", label: t("category_options.other") },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Company */}
      <Field label={tf("company_label")} required error={errors.company?.message}>
        <input
          {...register("company")}
          placeholder={tf("company_placeholder")}
          className={inputClass}
        />
      </Field>

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

      {/* Industry */}
      <Field label={tf("industry_label")} required error={errors.industry?.message}>
        <select {...register("industry")} className={inputClass}>
          <option value="">{tf("industry_placeholder")}</option>
          {industryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Category */}
      <Field label={tf("category_label")} required error={errors.category?.message}>
        <select {...register("category")} className={inputClass}>
          <option value="">{tf("category_placeholder")}</option>
          {categoryOptions.map((opt) => (
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

      {/* Delivery date */}
      <Field label={tf("delivery_label")} required={false}>
        <input {...register("deliveryDate")} type="date" className={inputClass} />
      </Field>

      {/* Usage plan */}
      <Field label={tf("usage_label")} required error={errors.usagePlan?.message}>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register("usagePlan")}
              type="radio"
              value="ongoing"
              className="accent-[#1a2846]"
            />
            <span className="text-sm text-gray-700">{tf("ongoing")}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register("usagePlan")}
              type="radio"
              value="one_time"
              className="accent-[#1a2846]"
            />
            <span className="text-sm text-gray-700">{tf("one_time")}</span>
          </label>
        </div>
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
