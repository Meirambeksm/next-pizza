"use client"; /*5a*/
import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks";
import { getCartItemDetails } from "@/shared/lib";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

const VAT = 12; /*7a*/
const DELIVERY_PRICE = 995; /*7b*/

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } =
    useCart(); /*5b*/

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  }; /*5j comment from author: 16-21-30*/

  const vatPrice = (totalAmount * VAT) / 100; /*7c*/
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice; /*7d*/

  return (
    <Container>
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-10 text-[36px]"
      />

      <div className="flex gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {
                items.map((item) => (
                  <CheckoutItem
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(
                      item.ingredients,
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize
                    )}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    disabled={item.disabled}
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                  />
                )) /*5k*/
              }
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
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
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">
                {/* {totalAmount /*5c remove after step 7h*/}
                {totalPrice /*7h*/}
              </span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Стоимость корзины: {/*7i adjust*/}
                </div>
              }
              value={`${totalAmount} KZT` /*7g*/}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  Налоги:
                </div>
              }
              value={`${vatPrice} KZT` /*7e*/}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  Доставка:
                </div>
              }
              value={`${DELIVERY_PRICE} KZT` /*7f*/}
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}

// 5d. Go to get-cart-item-details.ts in lib folder of shared
// 5l. Go to cart-drawer.tsx in shared folder of components
// 7j. Finish
