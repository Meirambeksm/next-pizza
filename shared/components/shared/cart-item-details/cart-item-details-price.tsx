import { cn } from "@/shared/lib/utils";

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return <h2 className={cn("font-bold", className)}>{value} ₽</h2>;
}; /*15a*/

// 15b. Create and go to cart-item-details-image.tsx in cart-item-details folder
