"use client";
import { useForm, SubmitHandler } from "react-hook-form"; /*12c*/
import { zodResolver } from "@hookform/resolvers/zod"; /*12d*/
import {
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { FormInput } from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";
import { useCart } from "@/shared/hooks";
import { CheckoutCart } from "@/shared/components/shared/checkout";

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  }); /*12xxx*/

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

      <div className="flex gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart
            onClickCountButton={onClickCountButton}
            removeCartItem={removeCartItem}
            items={items}
            /*14a*/
          />

          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <FormInput
                name="phone"
                className="text-base"
                placeholder="Телефон" /*8a*/
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Введите адрес..."
              />
              <Textarea
                className="text-base"
                placeholder="Комментарий к заказу"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        {/* Right Side */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} /*4a*/ />
        </div>
      </div>
    </Container>
  );
}

// 4b(end). Create and go to required-symbol.tsx in shared folder of components
// 8b(end). Create and go to clear-button.tsx in shared folder of components
// 12a. Run in terminal: npm install react-hook-form (source: react-hook-form.com)
// 12b. Run in terminal: npm install zod @hookform/resolvers
// 12e. Create checkout folder in shared folder of components
// 12f(end). Create and go to checkout-cart.tsx in checkout folder of shared of components
// 14b(end). Create and go to checkout-personal-form.tsx in checkout folder of shared components
