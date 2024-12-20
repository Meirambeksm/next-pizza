"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
  items: Category[] /*5*/;
  className?: string;
}

/*6 remove hardcoded cats*/

export const Categories: React.FC<Props> = ({ items /*7*/, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {
        items.map(({ name, id }, index) => (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              categoryActiveId === id && "bg-white shadow-gray-200 text-primary"
            )}
            href={`/#${name}`}
            key={index}
          >
            <button>{name}</button>
          </a>
        )) /*8 Change cats to items*/
      }
    </div>
  );
};

// 9. Go to top-bar.tsx
