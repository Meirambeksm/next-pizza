/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  name: string;
  imageUrl: string;
  price: number /*5d*/;
  onSubmit?: VoidFunction /*5a*/;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price /*5e*/,
  onSubmit /*5b*/,
  className,
}) => {
  // const textDetails = "30 sm, testo traditional 30"; 5f delete
  // const totalPrice = 350; 5f delete

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className={cn(className, "flex flex-1")}>
        <div className="flex items-center justify-center flex-1 relative w-full">
          <img
            src={imageUrl}
            alt={name}
            className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
          />
        </div>
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        {/* <p className="text-gray-400">{textDetails}</p> 5h delete */}

        <Button
          onClick={onSubmit} /*5c*/
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price /*5g*/}
        </Button>
      </div>
    </div>
  );
};

// 5i(end). Go to choose-product-modal.tsx
