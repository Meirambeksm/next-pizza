"use client";
import { cn } from "@/shared/lib/utils";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant["value"]) => void;
  value?: Variant["value"] /*11a*/;
  className?: string;
}

export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  className,
  value /*11b*/,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[f3f3f7] rounded-3xl p-1 select-none"
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              "bg-white shadow": item.value === value /*11c*/,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

/*11d. Go to choose-pizza-form.tsx*/
