/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  name: string;
  imageUrl: string;
  onClickAdd?: VoidFunction;
  className?: string;
} /*15a*/

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 sm, testo traditional 30"; /*15b*/
  const totalPrice = 350; /*15d*/

  return (
    <div className={cn(className, "flex flex-1")}>
      {/* <PizzaImage imageUrl={imageUrl} size={30} 15c before step 19 /> */}

      <div className={cn(className, "flex flex-1") /*19*/}>
        <div className="flex items-center justify-center flex-1 relative w-full">
          <img
            src={imageUrl}
            alt={name}
            className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
          />
        </div>
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7" /*15e*/>
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};

// 15f Go to index.ts in shared folder
// 20. Create @types folder and prisma.ts in @types
