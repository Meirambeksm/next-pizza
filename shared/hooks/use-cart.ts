"use client";
import { useEffect } from "react";
import { useCartStore } from "../store";
import { CreateCartItemValues } from "../services/dto/cart.dto";
import { CartStateItem } from "../lib/get-cart-details";

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
}; /*2a*/

export const useCart = (): ReturnProps => {
  const {
    items,
    totalAmount,
    loading,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  } = useCartStore(); /*2b cut and paste from cart-drawer.tsx*/

  useEffect(() => {
    fetchCartItems();
  }, []); /*2c cut and paste from cart-drawer.tsx*/

  return {
    items,
    totalAmount,
    loading,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  }; /*2d*/
};

// 2e(end). Go to index.ts of hooks folder of shared
