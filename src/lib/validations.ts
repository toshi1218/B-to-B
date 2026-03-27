import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  property: z.string().min(1, "物件情報を入力してください"),
  plan: z.enum([
    "light",
    "standard",
    "premium",
    "monthly_light",
    "monthly_standard",
    "undecided",
  ]),
  details: z.string().min(10, "確認してほしいことを10文字以上で入力してください"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
