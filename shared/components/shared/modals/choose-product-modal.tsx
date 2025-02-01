"use client";
import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "../product-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          className,
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
        )}
      >
        <ProductForm
          product={product}
          onSubmit={() => router.back()}
          /*5a replace with a new component*/
        />
      </DialogContent>
    </Dialog>
  );
};

// 5b. Finish
