import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  ); /*12a*/
  return (ingredientsPrice + item.productItem.price) * item.quantity /*12b*/;
}; /*6 create empty function*/

// 7. Go to index.ts of lib folder
// 12c. Go to cart.ts of store folder of shared