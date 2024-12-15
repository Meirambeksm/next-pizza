"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use"; /*3*/
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore(
    (state) => state.setActiveId
  ); /*16*/
  const intersectionRef = useRef(null); /*4*/
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  }); /*5*/

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId); /*6*/
      setActiveCategoryId(categoryId); /*17*/
    }
  }, [categoryId, intersection?.isIntersecting, title]); /*7*/

  return (
    <div className={className} id={title} ref={intersectionRef} /*8*/>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};

// 9. Go to page.tsx
// 18. Go to categories.tsx
