"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/shared/hooks";
import {
  CheckoutSidebar,
  Container,
  Title,
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components";
import { CheckoutFormSchema, CheckoutFormValues } from "@/shared/constants";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { useState } from "react";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState(false); /*1j*/
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  // const onSubmit = (data: CheckoutFormValues) => {
  //   console.log(data);
  //   createOrder(data) /*1d*/;
  // };

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true) /*1l*/;
      const url = await createOrder(data);

      toast.error("Заказ успешно оформлен! 📝 Переход на оплату...", {
        icon: "✅",
      });

      if (url) {
        location.href = url;
      }
    } catch (err) {
      console.log(err);
      setSubmitting(false) /*1m*/;
      toast.error("Не удалось создать заказ", {
        icon: "❌",
      });
    }
    /*1f*/
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container>
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-10 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Left Side */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />

              <CheckoutPersonalForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />

              <CheckoutAddressForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>
            {/* Right Side */}
            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting /*1k*/}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

// 1e. Check in browser => Network => Fetch/XHR => checkout => Payload (and later Preview) => should be in the form of array
// 1g. Go to checkout-sidebar.tsx of shared of components
