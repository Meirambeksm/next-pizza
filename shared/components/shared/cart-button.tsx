import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cart-drawer";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  return (
    <CartDrawer /*11 wrap up the button*/>
      <Button className={cn("group relative", className) /*3 adjust*/}>
        <b>520 ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
}; /*2 Cut and paste from header.tsx*/

// 4. Go to index.ts in shared folder of components
// 12. Copy and paste from finished next-pizza project cart-item-details folder in shared folder of components
// 13. Create and go to cart-item-info.tsx in cart-item-details folder
