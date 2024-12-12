import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )} /*19*/
    >
      <ArrowUpDown size={16} /*20*/ />
      <b /*21*/>Сортировка:</b>
      <b className="text-primary" /*22*/>популярное</b>
    </div>
  );
};

// 23. Go to index.ts in shared folder
