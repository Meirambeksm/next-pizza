"use client";
import { cn } from "@/lib/utils";
// import { Product } from "@prisma/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Title } from "../title";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  // product: Product;
  product: ProductWithRelations /*23*/;
  className?: string;
} /*2a*/

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter(); /*10*/
  const isPizzaForm = Boolean(product.items[0].pizzaType); /*24*/

  return (
    <Dialog
      open={Boolean(product)}
      /*2b*/ onOpenChange={() => router.back() /*11*/}
    >
      <DialogContent
        className={
          cn(
            className,
            "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
          ) /*2c*/
        }
      >
        {/* <Title text={product.name} 2d /> delete after step 17 */}
        {isPizzaForm ? (
          // /*25*/ "PizzaForm"
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={[]} /*28*/
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            imageUrl={product.imageUrl} /*17*/
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

// 3. Go to index.ts in shared folder
// 12. Go to pizza-image.tsx
// 18. Go to choose-product-form.tsx
// 26. Create choose-pizza-form.tsx in shared folder and go to choose-pizza-form.tsx
