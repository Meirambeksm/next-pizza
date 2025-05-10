"use client";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="d91db34f25a5b1b867357cfa282e4440d8237aea"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
