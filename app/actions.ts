"use server";
import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/constants";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies(); /*1b*/
    const cartToken = cookieStore.get("cartToken")?.value; /*1c*/

    if (!cartToken) {
      throw new Error("Cart token not found");
    } /*1d*/

    /* Находим корзину по токену*/
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    }); /*1e*/

    /* Если корзина не найдена возвращаем ошибку*/
    if (!userCart) {
      throw new Error("Cart not found");
    } /*1f*/

    /*Если корзина пустая возвращаем ошибку*/
    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    } /*1g*/

    /*Создаем заказ*/
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    }); /*1h*/

    /*Очищаем корзину*/
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    }) /*1i*/;

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    }) /*1j*/;

    // TO DO: сделать создание ссылки оплаты
  } catch (err) {}
} /*1b*/

// 1k(end). FINISH
