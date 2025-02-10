import { Input } from "../../ui";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";
import { RequiredSymbol } from "../required-symbol";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
} /*7a*/

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  return (
    <div className={className}>
      {
        label && (
          <p className="font-medium mb-2">
            {label} {required && <RequiredSymbol />}
          </p>
        ) /*7b*/
      }

      <div className="relative">
        <Input className="h-12 text-md" {...props} /*7c*/ />
        <ClearButton /*11a*/ />
      </div>

      <ErrorText
        text="Поле обязательно для заполнения"
        className="mt-2" /*7d*/
      />
    </div>
  );
};

// 7e. Create and go to index.ts in form-components folder of shared of components
// 11b(end). Go to page.tsx of checkout folder of (checkout) of app
