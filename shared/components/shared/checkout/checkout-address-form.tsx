import { Input, Textarea } from "../../ui";
import { WhiteBlock } from "../white-block";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
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
  );
}; /*5a cut and paste from page.tsx of checkout folder of (checkout) of app*/

// 5b. Go to index.ts of checkout folder of shared of components
