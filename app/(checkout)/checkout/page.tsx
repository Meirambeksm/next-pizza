import {
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  //   return <div /*4a*/>Checkout</div>;
  return (
    <Container /*8a*/>
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-10 text-[36px]"
      />

      <div className="flex gap-10" /*11a*/>
        {/* Left Side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">123 456</WhiteBlock>

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
              <Textarea /*11f*/
                className="text-base"
                placeholder="Комментарий к заказу"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        {/* Right Side */}
        <div className="w-[450px]" /*11g*/>
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">3506 KZT</span>
            </div>

            <CheckoutItemDetails /*14a*/
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Стоимость товаров:
                </div>
              }
              value="3000 KZT"
            />
            <CheckoutItemDetails
              /*14b*/ title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  Налоги:
                </div>
              }
              value="500 KZT"
            />
            <CheckoutItemDetails
              /*14c*/ title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  Доставка:
                </div>
              }
              value="400 KZT"
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
              /*14d*/
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

// 4b(end). Go to layout.tsx of (checkout)
// 8b(end). Create and go to white-block.tsx in shared folder of components
// 11b. Run in terminal: npx shadcn@latest add textarea
// 11c. Go to index.ts of ui folder of components
// 11h(end). Create and go to checkout-item-details.tsx in shared folder of components
// 14e. Finish
