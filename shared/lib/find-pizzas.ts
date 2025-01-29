import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
} /*2a*/

const DEFAULT_MIN_PRICE = 0; /*2b*/
const DEFAULT_MAX_PRICE = 1000; /*2b*/

export const findPizzas = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(",").map(Number); /*2c*/
  const pizzaTypes = params.pizzaTypes?.split(",").map(Number); /*2c*/
  const ingredientsIsAr = params.ingredients?.split(",").map(Number); /*2c*/
  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE; /*2c*/
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE; /*2c*/

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        } /*2d*/,
        where: {
          ingredients: ingredientsIsAr
            ? {
                some: {
                  id: {
                    in: ingredientsIsAr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: pizzaTypes,
              },
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
          } /*3a*/,
        } /*2e*/,
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        } /*3b*/,
      },
    },
  }); /*2d*/

  return categories; /*2e*/
};

// 2f(end). Go to page.tsx of (root) folder of app
// 3c. To fix the bug with closing modal window go to use-query-filters.ts in hooks folder
