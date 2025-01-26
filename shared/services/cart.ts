import { axiosInstance } from "./instance";
import { CartDTO } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  const response = await axiosInstance.get<CartDTO>("/cart");
  return response.data;
};
