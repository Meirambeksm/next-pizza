"use client";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
} /*4a*/

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="d91db34f25a5b1b867357cfa282e4440d8237aea" /*4e (get from profile)*/
      onChange={(data) => onChange?.(data?.value)}
    />
  );
}; /*4b*/

// 4c. Visit: dadata.ru and register
// 4d. Get API-key from profile
// 4f. Go to checkout-address-form.tsx of checkout folder of shared of components
