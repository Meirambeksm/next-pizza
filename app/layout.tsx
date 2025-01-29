import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"; /*3a*/

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        {children}
        <Toaster /*3b*/ />
      </body>
    </html>
  );
}

// 3c(end). Go to choose-product-modal.tsx

// 8:33:27 Поржал с этого момента, т.к. сам не допустил эту ошибку,
// что меня обрадовало, а потом Бог кода меня решил проучить.
// Мне почему-то не помог простой перезапуск приложения и ошибка сохранялась.
// Помогла очистка кеша некста + перезапуск. Для очистки кеша в консоли: rm -rf .next или вручную снести эту папку.
// Надеюсь, кому-то поможет. Минус час моей жизни на поиск решения. P.S. Арчаков - ты лучший! Пожалуйста, не пропадай надолго!
