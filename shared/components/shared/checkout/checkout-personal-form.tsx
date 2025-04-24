import { Input } from "../../ui"; /*9j delete this line*/
import { FormInput } from "../form-components";
import { WhiteBlock } from "../white-block";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <FormInput
          name="firstName"
          className="text-base"
          placeholder="Имя" /*9i rename from Input to FormInput. Before step 9i it's name was Input*/
        />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
          /*9i rename from Input to FormInput. Before step 9i it's name was Input*/
        />
        <FormInput
          name="email"
          className="text-base"
          placeholder="E-Mail"
          /*9i rename from Input to FormInput. Before step 9i it's name was Input*/
        />
        <FormInput name="phone" className="text-base" placeholder="Телефон" />
      </div>
    </WhiteBlock>
  );
}; /*2a cut and paste from page.tsx of checkout folder of (checkout) of app*/

// 2b(end). Go to index.ts of checkout folder of shared of components
// 9k. Go to form-input.tsx
