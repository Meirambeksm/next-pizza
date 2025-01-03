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
import { useState } from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";

interface Props {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[] /*18*/;
  items: ProductItem[] /*31*/;
  /*onClickAdd?: VoidFunction ;*/
  onClickAddCart?: VoidFunction /*29 rename*/;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAddCart /*30 rename*/,
  className,
}) => {
  const [size, setSize] = useState<PizzaSize>(20); /*9a*/
  const [type, setType] = useState<PizzaType>(1); /*9b*/

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  ); /*23*/

  console.log(items);

  // const textDetails = "30 sm, testo traditional 30"; to be removed before step 37
  // const totalPrice = 350; // 33 to be removed
  // const size = 30 to be removed after step 9a;

  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size
  )!.price; /*32*/
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0); /*35*/
  const totalPrice = pizzaPrice /*34*/ + totalIngredientsPrice; /*36*/

  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`; /*37*/

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  }; /*38*/

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5" /*14*/>
          <GroupVariants
            items={pizzaSizes}
            /*4*/ value={String(size) /*12a*/}
            onClick={(value) => setSize(Number(value) as PizzaSize) /*12b*/}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType) /*13*/}
          />
        </div>

        <div
          className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5" /*22b*/
        >
          <div className="grid grid-cols-3 gap-3" /*22a*/>
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)} /*24*/
                active={selectedIngredients.has(ingredient.id)} /*25*/
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd /*39*/}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};

// 5. Adjustment in components.json in aliases
// 6. Adjustment in tailwind.config.ts in content
// 7. Go to pizza.ts in constants folder
// 10. Go to group-variants.tsx
// 15. Go to choose-product-modal.tsx
// 19. Create ingredient-item.tsx in shared folder and go to ingredient-item.tsx
// 26. Go to choose-product-modal.tsx
// 40. Finish
