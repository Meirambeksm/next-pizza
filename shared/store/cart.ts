import { create } from "zustand";
import { Api } from "../services/api-client";
import { CartStateItem } from "../lib/get-cart-details";
import { getCartDetails } from "../lib";

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  /* Получение товаров из корзины*/
  fetchCartItems: () => Promise<void>;
  /* Запрос на обновление количества товаров*/
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  /* Запрос на добавление товара в корзину*/
  addCartItem: (values: any) => Promise<void>;
  /* Запрос на удаление товара из корзины*/
  removeCartItem: (id: number) => Promise<void>;
}

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

  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  } /*3a*/,

  removeCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  } /*8a*/,

  addCartItem: async (values: any) => {},
}));

// 3b(end). Go to cart-drawer-item.tsx
// 8b(end). Go to cart-drawer-item.tsx
