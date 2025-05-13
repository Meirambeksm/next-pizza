import { z } from "zod"; /*4a*/

export const passwordSchema = z
  .string()
  .min(4, { message: "Введите корректный пароль" }); /*4b*/

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Введите корректную почту" }),
  password: passwordSchema,
}); /*4c*/

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: "Введите имя и фамилию" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  }); /*4d*/

export type TFormLoginValues = z.infer<typeof formLoginSchema>; /*4e*/
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>; /*4f*/

// 4g. Go to login-form.tsx in forms folder of auth-modal of modals of shared of components
