"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "@/shared/components/ui";
import { FormInput } from "../../../form-components";
import { formRegisterSchema, TFormRegisterValues } from "./schema";
import { registerUser } from "@/app/actions"; /*2m import this line*/

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
} /*1b*/

export const RegisterForm: React.FC<Props> = ({ onClose, onClickLogin }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  }); /*1c*/

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error("Регистрация успешна 📝. Подтвердите свою почту", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      return toast.error("Неверный E-Mail или пароль", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Полное имя" required />
        <FormInput name="password" label="Пароль" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  ); /*1d*/
};

// 1e. Go to auth-modals.tsx in auth-modal of modals of shared of components
// 2n.(end) Create verify folder in auth folder of api of app and create and go to route.ts
