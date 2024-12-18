import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(
      ApiRoutes.SEARCH_PRODUCTS /*38 replace with ApiRoutes.SEARCH_PRODUCTS*/,
      {
        // "/products/search" in step 27 it was this line instead of ApiRoutes.SEARCH_PRODUCTS
        params: { query },
      }
    )
  ).data;
}; /*27*/

// 28. Go to api-client.ts
// 39. Go to search-input.tsx
