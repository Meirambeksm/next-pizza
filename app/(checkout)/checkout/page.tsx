"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSidebar, Container, Title } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks";
import {
  CheckoutAddressForm,
  CheckoutCart,
} from "@/shared/components/shared/checkout";
import { CheckoutPersonalForm } from "@/shared/components/shared/checkout/checkout-personal-form";
import {
  CheckoutFormSchema,
  CheckoutFormValues,
} from "@/shared/components/shared/checkout/checkout-form-schema";

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
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
  }); /*8a*/

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  }; /*8c*/

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

      <FormProvider {...form} /*8b*/>
        <form onSubmit={form.handleSubmit(onSubmit)} /*8d*/>
          <div className="flex gap-10">
            {/* Left Side */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
              />

              <CheckoutPersonalForm /*4a*/ />

              <CheckoutAddressForm /*6a*/ />
            </div>
            {/* Right Side */}
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

// 4b. Create and go ot checkout-address-form.tsx in checkout folder of shared of components
// 6b(end). Create and go to check-form-schema.ts in checkout folder of shared of components
// 8e(end). Go to form-input.tsx of form-component folder of shared of components
