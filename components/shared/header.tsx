import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className) /*4*/}>
      <Container className="flex items-center justify-between py-8" /*8*/>
        {/* Left side */}
        <div /*9*/ className="flex items-center gap-4" /*17*/>
          <Image src="/logo.png" alt="Logo" width={35} height={35} /*10*/ />
          <div /*11*/>
            <h1 className="text-2xl uppercase font-black" /*12*/>
              Next Pizza{" "}
            </h1>
            <p className="text-sm text-gray-400 leading-3" /*13*/>
              вкусней уже некуда
            </p>
          </div>
        </div>

        {/* Right side */}
        <div /*23*/ className="flex items-center gap-3" /*35*/>
          <Button
            variant="outline"
            /*24*/ className="flex items-center gap-1" /*27*/
          >
            <User size={16} /*26*/ />
            Войти
          </Button>

          <div /*28*/>
            <Button className="group relative" /*29*/>
              <b /*30*/>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" /*31*/ />
              <div
                className="flex items-center gap-1 transition duration-300 group-hover:opacity-0" /*32*/
              >
                <ShoppingCart
                  size={16}
                  className="relative"
                  strokeWidth={2} /*33*/
                />
                <b /*34*/>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" /*36*/
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

/**/
// 5. Create container.tsx in shared folder and go to container.tsx
// 14. Go to layout.tsx
// 18. Create index.ts file in ui folder and go to index.ts file
// 25. Visit lucide.dev/icons/user and copy jsx
// 37. Finish
