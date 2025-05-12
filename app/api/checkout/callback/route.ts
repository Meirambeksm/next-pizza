import { PaymentCallbackData } from "@/@types/yookassa";
import { prisma } from "@/prisma/prisma-client";
import { OrderSuccessTemplate } from "@/shared/components/shared/email-templates/order-success";
import { sendEmail } from "@/shared/lib";
import { CartItemDTO } from "@/shared/services/dto/cart.dto";
import { OrderStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData; /*2b*/
    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    }); /*2c*/

    if (!order) {
      return NextResponse.json({ error: "Order not found" });
    } /*2d*/

    const isSucceeded = body.object.status === "succeeded"; /*2e*/

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    }) /*2f*/;

    const items = JSON.parse(order?.items as string) as CartItemDTO[]; /*2g*/

    if (isSucceeded) {
      await sendEmail(
        order.email,
        "Next Pizza / Ваш заказ успешно оформлен 🎉",
        OrderSuccessTemplate({ orderId: order.id, items })
      );
    } else {
      // Letter on unsuccessful payment
      //   TO-DO
    } /*2k*/
  } catch (error) {
    console.log("[Checkout Callback] Error:", error);
    return NextResponse.json({ error: "Server error" });
  } /*2a*/
}
// 2h. Create and go to order-success.tsx in email-templates folder of shared of components
// 2l. Visit: https://theboroer.github.io/localtunnel-www/
// 2m. Terminal: npm install -g localtunnel
// 2n. Terminal: ltf--port 3000
// 2o. Change URL notification in yookassa and paste the url provided: https://angry-hairs-know.loca.lt/api/checkout/callback/
// 2p. Check with postman as shown at 19:28:30 - 45 and check order status in database as shown at 19:31:50 - 32:00
// 2q(end). Go to next.config.mjs
