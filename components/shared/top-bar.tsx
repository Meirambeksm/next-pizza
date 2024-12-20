import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[] /*10*/;
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories /*11*/, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories /*12*/} />
        <SortPopup />
      </Container>
    </div>
  );
};

// 13. Go to page.tsx
