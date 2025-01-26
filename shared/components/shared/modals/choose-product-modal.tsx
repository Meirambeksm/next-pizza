"use client";
import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0]; /*3b*/
  const isPizzaForm = Boolean(firstItem?.pizzaType); /*3c change*/
  const addCartItem = useCartStore((state) => state.addCartItem); /*3a*/

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem.id,
    });
  }; /*3d*/

  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartItem({
      productItemId,
      ingredients,
    });
  }; /*6a*/

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          className,
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza /*6b*/}
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            imageUrl={product.imageUrl}
            onSubmit={onAddProduct /*6c*/}
            price={firstItem?.price /*6d*/}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

// 3e. Go to use-pizza-options.ts
// 6e(end). Go to cart-drawer.tsx
