import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
} /*1e*/

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Заказ №{orderId}</h1>
    <p>
      Оплатите заказ на сумму <b>{totalAmount} KZT</b>. Перейдите
      <a href={paymentUrl}> по этой ссылке</a> для оплаты заказа.
    </p>
  </div>
); /*1f*/

// 1g. Create and go to send-email.ts in lib folder of shared
