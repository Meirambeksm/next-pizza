"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/shared/lib/utils";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { useEffect, useState } from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
import {
  calcTotalPizzaPrice,
  getAvailablePizzaSizes,
  getPizzaDetails,
} from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAddCart,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items); /*22*/

  // const totalPrice = calcTotalPizzaPrice(
  //   type,
  //   size,
  //   items,
  //   ingredients,
  //   selectedIngredients
  // ); /*8*/

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  ); /*29*/

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  // const filteredPizzasByType = items.filter(
  //   (item) => item.pizzaType === type
  // ); /*2a rename*/
  // const availablePizzaSizes = pizzaSizes.map((item) => ({
  //   name: item.name,
  //   value: item.value,
  //   disabled: !filteredPizzasByType.some(
  //     (pizza) => Number(pizza.size) === Number(item.value)
  //   ),
  // })); /*2b adjust*/

  // const availablePizzaSizes = getAvailablePizzaSizes(type, items); /*16*/

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availableSizes} /*23 rename*/
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};

// 3. Create calc-pizza-prices.ts in lib folder and go to calc-total-pizza-price.ts
// 9. Go to group-variant.tsx
// 17. Create use-pizza-options.ts in hooks folder and go to use-pizza-options.ts
// 24. Create get-pizza-details.ts in lib folder and go to get-pizza-details.ts
// 30. Finish
