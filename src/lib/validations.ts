import { z } from "zod";

export const contactFormSchema = z.object({
  company: z.string().min(1, "会社名・事務所名を入力してください"),
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  industry: z.enum([
    "administrative_scrivener",
    "support_org",
    "employer",
    "immigration",
    "other",
  ]),
  category: z.enum(["drivers_license", "documents", "name_discrepancy", "marriage", "inheritance", "other"]),
  details: z.string().min(10, "ご依頼内容を10文字以上で入力してください"),
  deliveryDate: z.string().optional(),
  usagePlan: z.enum(["ongoing", "one_time"]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
