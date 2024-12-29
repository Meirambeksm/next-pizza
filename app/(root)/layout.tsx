import type { Metadata } from "next";
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function HomeLayout({
  children,
  modal /*2a*/,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode /*2b*/;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal /*2c*/}
    </main>
  );
}

// 3. Finish
