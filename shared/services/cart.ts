import { Cart } from "@prisma/client";
import { axiosInstance } from "./instance";
import { CartDTO } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> /*rename*/ => {
  const response = await axiosInstance.get<CartDTO>(/*rename*/ "/cart");
  return response.data;
}; /*4j*/

// 4k. Go to api-client.ts
// 4s. Rename types from Cart to CartDTO in 2 places
// 4t. Go to get-cart-details.ts of lib folder
