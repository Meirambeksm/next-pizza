import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
}; /*4u*/

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
} /*4v*/

export const getCartDetails = (data: CartDTO /*4w*/): ReturnProps /*4x*/ => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    // price: item.productItem.product.price, // to be fixed
    price: calcCartItemTotalPrice(item) /*10*/,
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })); /*4y*/

  return {
    items,
    totalAmount: data.totalAmount,
  } /*4z(end)*/;
}; /*4d just empty function for now*/

// 4e. Go to index.ts of lib folder
// 5. Create and go to calc-cart-item-total-price.ts in libs folder of shared
// 11. Go to calc-cart-item-total-price.ts
