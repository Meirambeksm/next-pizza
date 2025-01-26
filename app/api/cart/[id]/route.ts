import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id); /*3a*/
    const data = (await req.json()) as { quantity: number }; /*3b*/
    const token = req.cookies.get("cartToken")?.value; /*3d*/

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    } /*3e*/

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    }); /*3f*/

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    } /*3g*/

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    }) /*3h*/;

    const updatedUserCart = await updateCartTotalAmount(token); /*5a*/
    return NextResponse.json(updatedUserCart); /*5b*/
  } catch (error) {
    console.log("[CART_PATCH] Server error", error);
    return NextResponse.json(
      { message: "Не удалось обновить корзину" },
      { status: 500 }
    );
  } /*3c*/
}

// 3i(end). Create and go to update-cart-total-amount.ts in lib folder of shared
// 5c. Check with Postman (VSC): http://localhost:3000/api/cart/1 => PATCH => Headers: Cookie => cartToken=11111 => Body => raw & JSON => {"quantity": 2}
// 5d. Finish
