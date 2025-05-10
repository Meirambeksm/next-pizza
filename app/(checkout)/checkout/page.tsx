"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CheckoutSidebar, Container, Title } from "@/shared/components"; /*2i move*/
import { useCart } from "@/shared/hooks";
import {
  CheckoutSidebar /*2i move*/,
  Container /*2i move*/,
  Title /*2i move*/,
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components";
import {
  CheckoutFormSchema,
  CheckoutFormValues,
} from "@/shared/constants"; /*2h*/

export default function CheckoutPage() {
  const {
    totalAmount,
    updateItemQuantity,
    items,
    removeCartItem,
    loading /*5a*/,
  } = useCart();
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

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
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
                loading={loading /*5x*/}
              />

              <CheckoutPersonalForm
                className={
                  loading ? "opacity-40 pointer-events-none" : "" /*5q*/
                }
              />

              <CheckoutAddressForm
                className={
                  loading ? "opacity-40 pointer-events-none" : "" /*5r*/
                }
              />
            </div>
            {/* Right Side */}
            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading /*5b*/}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

// 2j(end). Create and go to form-textarea.tsx in form-components folder of shared of components
// 5c. Go to checkout-sidebar.tsx of shared of components
// 5s. Go to checkout-cart.tsx in checkout folder of shared of components
// 5y. Go to checkout-item.tsx in shared of components
