"use server";
import { prisma } from "@/prisma/prisma-client";
import { PayOrderTemplate } from "@/shared/components";
import { CheckoutFormValues } from "@/shared/constants";
import { sendEmail } from "@/shared/lib";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

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
    });

    /* Если корзина не найдена возвращаем ошибку*/
    if (!userCart) {
      throw new Error("Cart not found");
    }

    /*Если корзина пустая возвращаем ошибку*/
    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

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
    });

    /*Очищаем корзину*/
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    // TO DO: сделать создание ссылки оплаты
    await sendEmail(
      data.email,
      "Next Pizza / Оплатите заказ №" + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: "https://www.google.com/",
      })
    ); /*2a*/
  } catch (err) {
    console.log("[createOrder] Server error", err) /*2b*/;
  }
}

// 2c. Go to .env and create the following line: RESEND_API_KEY=re_Ycqm6xJh_3gfaTBerd7Bqrw7HPPBqw8rG and come back
// 2d(end). FINISH!!!
