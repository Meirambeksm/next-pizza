import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { CheckoutItemDetails } from "./checkout-item-details";
import { WhiteBlock } from "./white-block";
import { Button } from "../ui";
import { cn } from "@/shared/lib/utils";

const VAT = 15; /*2a*/
const DELIVERY_PRICE = 250; /*2b*/

interface Props {
  totalAmount: number;
  className?: string;
} /*2c*/

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  className,
}) => {
  const vatPrice = (totalAmount * VAT) / 100; /*2d*/
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice; /*2e*/

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extrabold">{totalPrice}</span>
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-400" />
            Стоимость корзины:
          </div>
        }
        value={`${totalAmount} KZT`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-400" />
            Налоги:
          </div>
        }
        value={`${vatPrice} KZT`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-400" />
            Доставка:
          </div>
        }
        value={`${DELIVERY_PRICE} KZT`}
      />

      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  ); // 2f. Cut and paste from page.tsx of checkout folder of (checkout) of app
};

// 2g(end). Go to index.ts of shared folder of components
