"use client";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export const Providers: React.FC<React.PropsWithChildren> = ({
  children /*2a*/,
}) => {
  return (
    <>
      <SessionProvider>{children /*2b*/}</SessionProvider>
      <Toaster /*2c*/ />
      <NextTopLoader /*2f*/ />
    </>
  );
};

// 2d. Visit: npmjs.com/packages/nextjs-toploader
// 2e. Terminal: npm install nextjs-toploader
// 2g. Go to layout.tsx in app folder
