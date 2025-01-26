import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
}; /*4p*/

export interface CartDTO extends Cart {
  items: CartItemDTO[];
} /*4q*/

// 4r. Go to cart.ts of services folder of shared
