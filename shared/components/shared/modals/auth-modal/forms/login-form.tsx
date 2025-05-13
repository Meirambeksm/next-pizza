import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../../title";
import { FormInput } from "../../../form-components";
import { Button } from "@/shared/components/ui";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface Props {
  onClose?: VoidFunction /*3a*/;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues /*4h*/>({
    resolver: zodResolver(formLoginSchema) /*4i*/,
    defaultValues: {
      email: "",
      password: "",
    },
  }); /*3b*/

  const onSubmit = /*5b*/ async (data: TFormLoginValues) => {
    console.log(data); /*4j*/

    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      }); /*5c*/

      if (!resp?.ok) {
        throw Error();
      } /*5d*/

      toast.success("Вы успешно вошли в аккаунт", {
        icon: "✅",
      }) /*5e*/;

      onClose?.() /*5f*/;
    } catch (error) {
      /*5a*/
      console.error("Error [LOGIN]", error);
      toast.error("Не удалось войти в аккаунт", {
        icon: "❌",
      });
    }
  };

  return (
    // <div /*3c*/>
    <FormProvider {...form} /*4k*/>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)} /*4l*/
      >
        <div className="flex jsutify-between item-center" /*4m*/>
          <div /*4n*/ className="mr-2">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />
            <p className="text-gray-400">
              Введите свою почту, чтобы войти в свой аккаунт
            </p>
          </div>
          <img
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60} /*4o*/
          />
        </div>

        <FormInput name="email" label="E-Mail" required /*4p*/ />
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          required /*4q*/
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
          /*4r(end)*/
        >
          Войти
        </Button>
      </form>
    </FormProvider>
    // </div>
  );
};

// 3d(end). Go to schema.ts in forms folder of auth-modal of modals of shared of components
// 5g(end). Go to route.ts in [...nextauth] of auth of api of app
