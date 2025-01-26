import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    /*3a*/
    const token = req.cookies.get("cartToken")?.value; /*3c*/
    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    } /*3d*/

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
      },
      include: {
        items: {
          orderBy: {
            creadtedAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    }); /*3e*/

    return NextResponse.json(userCart) /*3f*/;
  } catch (error) {
    console.log(error); /*3b*/
  }
}

// 3g. Manually add token in Cookies of Application (browser) and check with http://localhost:3000/api/cart
// 3h(end). Create and go to cart.ts in store folder of shared
