import { useFormContext } from "react-hook-form";
import { Input } from "../../ui";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";
import { RequiredSymbol } from "../required-symbol";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext(); /*9a*/

  const value = watch(name); /*9c*/
  const errorText = errors[name]?.message as string; /*9d*/

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true /*9l*/ });
  }; /*9e*/

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...register(name) /*9b*/} {...props} />
        {value && <ClearButton onClick={onClickClear} /> /*9f*/}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" /> /*9g*/}
    </div>
  );
};

// 9h. Go to checkout-personal-form.tsx
// 9m(end). Finish
