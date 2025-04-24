import { z } from "zod";

export const CheckoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2-х символов" }),
  lastName: z
    .string()
    .min(2, { message: "Фамилия должна содержать не менее 2-х символов" }),
  email: z.string().email({ message: "Введите корректную почту" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  address: z.string().min(5, { message: "Введите корректный адрес" }),
  comment: z.string().optional(),
}); /*7a*/

export type CheckoutFormValues = z.infer<typeof CheckoutFormSchema>; /*7b*/

// 7c(end). Go to page.tsx of checkout folder of (checkout) of app
