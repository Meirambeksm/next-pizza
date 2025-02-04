import { cn } from "@/shared/lib/utils";

interface Props {
  name: string;
  details: string;
  className?: string /*4c*/;
}

export const CartItemInfo: React.FC<Props> = ({
  name,
  details,
  className /*4d*/,
}) => {
  return (
    <div>
      <div
        className={cn("flex items-center justify-between", className) /*4e*/}
      >
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details && <p className="text-xs text-gray-400 w-[90%]">{details}</p>}
    </div>
  );
};

// 4f. Go to page.tsx of checkout folder of (checkout) folder
