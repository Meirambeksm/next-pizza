import { axiosInstance } from "./instance";
import { CartDTO } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data; /*2b*/
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  return (
    await axiosInstance.patch<CartDTO>("/cart/" + itemId, {
      quantity,
    })
  ).data;
}; /*2a*/

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>("/cart/" + id)).data;
}; /*7a*/

// 2c(end). Go to cart.ts in store folder
// 7b(end). Go to cart.ts in store folder
