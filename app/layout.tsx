import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
      <body className={nunito.className}>
        <main className="min-h-screen" /*1*/>{children}</main>
      </body>
    </html>
  );
}

// 2. npx shadcn@latest add dialog checkbox drawer input popover select skeleton slider
// link: https://ui.shadcn.com/docs/installation/next
// 3. npm install lucide-react
// link: https://lucide.dev/guide/installation
// 4. Finish
