/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
  /*15*/
}

export const ProductsGroupList: React.FC<Props> = (
  { title, items, listClassName, categoryId, className } /*16*/
) => {
  return (
    <div className={className} /*17*/>
      <Title text={title} size="lg" className="font-extrabold mb-5" /*18*/ />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)} /*19*/>
        {
          items.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          )) /*20*/
        }
      </div>
    </div>
  );
};

// 21. Go to page.tsx
