"use client"; /*5f*/
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/shared/store";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { totalAmount, items, loading } = useCartStore(); /*5a*/
  return (
    <CartDrawer>
      <Button
        loading={loading /*5c*/}
        className={cn(
          "group relative",
          { "w-[105px]": loading /*5e*/ },
          className
        )}
      >
        <b>{totalAmount /*5b*/} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>{items.length /*5d*/}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};

// 5g. In page.tsx of [id] folder of [product] folder of (root) of app adjust the following: selectedValue="2" to value="2"
// 5h(end). Go to page.tsx of (root) folder of app
