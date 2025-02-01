"use client"; /*2k*/
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import React from "react";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
  product: ProductWithRelations /*2f*/;
  onSubmit?: VoidFunction /*2g*/;
}

export const ProductForm: React.FC<Props> = ({
  product, // 2h
  onSubmit: _onSubmit, // 2i
}) => {
  const { addCartItem, loading } = useCartStore(); //2c cut and paste from choose-product-modal.tsx
  const firstItem = product.items[0]; //2a cut and paste from choose-product-modal.tsx
  const isPizzaForm = Boolean(firstItem?.pizzaType); //2b cut and paste from choose-product-modal.tsx

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + " добавлена в корзину");
      //   router.back(); 2e delete this line
      _onSubmit?.(); /*2j*/
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.log(error);
    }
  }; //2d cut and paste from choose-product-modal.tsx

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      /> /*2k cut and paste from choose-product-modal.tsx*/
    );
  }

  return (
    <ChooseProductForm
      name={product.name}
      imageUrl={product.imageUrl}
      price={firstItem?.price}
      onSubmit={() => onSubmit?.()}
      loading={loading}
    /> /*2l cut and paste from choose-product-modal.tsx*/
  );
};

// 2m(end). Go to index.ts of shared folder of components
