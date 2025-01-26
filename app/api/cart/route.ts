import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto"; /*2c*/
import { findOrCreateCart } from "@/shared/lib";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

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
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log("[CART_GET] Server error", error); /*2a*/
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    ); /*2b*/
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value; /*2d*/
    if (!token) {
      token = crypto.randomUUID();
    } /*2f*/

    const userCart = await findOrCreateCart(token); /*5a*/
    const data = (await req.json()) as CreateCartItemValues; /*5b*/

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    }); /*5c*/

    // Если товар был найден, делаем + 1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },

        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } /*5d*/

    // Если товар не был найдет, создаем
    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        quantity: 1,
        ingredients: { connect: data.ingredients?.map((id) => ({ id })) },
      },
    }) /*5e*/;

    const updatedUserCart = await updateCartTotalAmount(token); /*5f*/
    const resp = NextResponse.json(updatedUserCart); /*5g*/
    resp.cookies.set("cartToken", token); /*5h*/
    return resp; /*5i*/
  } catch (error) {
    console.log("[CART_POST] Server error", error);
    return NextResponse.json(
      { message: "Не удалось создать корзину" },
      { status: 500 }
    );
  } /*2e*/
}

// 2g(end). Create and go to find-or-create-cart.ts in lib folder of shared
// 5j. Check with Postman (VSC) => http://localhost:3000/api/cart => POST => Headers: Cookie, cartToken=11111 => Body: raw, JSON => {"productItemId": 3; "ingredients": [1, 2, 3]}
// 5k(end). Finish
