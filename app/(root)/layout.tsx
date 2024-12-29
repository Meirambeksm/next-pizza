import type { Metadata } from "next";
// import { Nunito } from "next/font/google";
// import "../globals.css" 10. Delete;
import { Header } from "@/components/shared/header";

// const nunito = Nunito({
//   subsets: ["cyrillic"],
//   variable: "--font-nunito",
//   weight: ["400", "500", "600", "700", "800", "900"],
// }) 11. Delete;

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={nunito.className}> 12. Delete */}
      <main className="min-h-screen">
        <Header />
        {children}
      </main>
      {/* </body> */}
    </html>
  );
}

// 13. Finish
