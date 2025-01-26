import { create } from "zustand";
import { Api } from "../services/api-client";
import { CartStateItem } from "../lib/get-cart-details";
import { getCartDetails } from "../lib";

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  //   items: ICartItem[];
  items: CartStateItem[] /*13*/;
  /* Получение товаров из корзины*/
  fetchCartItems: () => Promise<void>;
  /* Запрос на обновление количества товаров*/
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  /* Запрос на добавление товара в корзину*/
  addCartItem: (values: any) => Promise<void>;
  /* Запрос на удаление товара из корзины*/
  removeCartItem: (id: number) => Promise<void>;
} /*4a*/

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  updateItemQuantity: async (id: number) => {},
  addCartItem: async (values: any) => {},
  removeCartItem: async (id: number) => {},
})); /*4h*/

// 4c. Create and go to get-cart-details.ts in lib folder of shared
// 4i. Create and go to car.ts in services folder of shared
// 14. Create and go to index.ts in store folder of shared
