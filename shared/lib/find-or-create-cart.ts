import { prisma } from "@/prisma/prisma-client";

export const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  }); /*3a*/

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      },
    });
  } /*3b*/

  return userCart; /*3c*/
};

// 3d. Go to index.ts in lib folder of shared
