import { cn } from "@/shared/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export const ErrorText: React.FC<Props> = ({ text, className }) => {
  return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
}; /*6a*/

// 6b. Create form-components folder in shared folder of components
// 6c(end). Create and go to form-input.tsx in form-components folder
