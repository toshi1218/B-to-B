import { z } from "zod";

export const contactFormSchema = z.object({
  org: z.string().optional(),
  name: z.string().min(1, "担当者名を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  type: z.enum(["psa", "nbi", "apostille", "translation", "monthly", "other"], {
    required_error: "ご依頼の種類を選択してください",
  }),
  details: z.string().min(10, "10文字以上でご記入ください"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
