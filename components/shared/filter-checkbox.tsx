import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string /*50*/;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name /*51*/,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name) /*52b*/}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name) /*52a*/}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};

// 53. Go to checkbox-filters-group.tsx
