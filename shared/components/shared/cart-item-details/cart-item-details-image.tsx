import { cn } from "@/shared/lib/utils";

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return <img className={cn("w-[60px] h-[60px]", className)} src={src} />;
}; /*16a*/

// 16b. Create and go to cart-item-details-count-button.tsx in cart-item-details folder
