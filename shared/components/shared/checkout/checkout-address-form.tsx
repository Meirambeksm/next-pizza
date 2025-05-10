import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../ui";
import { AddressInput } from "../address-input";
import { FormTextarea } from "../form-components";
import { WhiteBlock } from "../white-block";
import { ErrorText } from "../error-text";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext(); /*4h*/

  return (
    <WhiteBlock title="3. Адрес доставки" className={className /*5m*/}>
      <div className="flex flex-col gap-5">
        {/* <Input
          name="firstName"
          className="text-base"
          placeholder="Введите адрес..."
        /> 4g (remove) */}

        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
          /*4i*/
        />

        <FormTextarea /*3k*/
          name={"comment"}
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
          required
        />
      </div>
    </WhiteBlock>
  );
};

// 3l. Visit: https://github.com/vitalybaev/react-dadata
// 3m. Terminal: npm install react-dadata
// 3n(end). Create and go to address-input.tsx in shared of components
// 4j(end). Go to page.tsx of checkout folder of (checkout) of app
// 5n. Go to checkout-personal-form.tsx in checkout folder of shared of components
