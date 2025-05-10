import React from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../../ui/textarea";
import { ClearButton } from "../clear-button";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required: boolean;
} /*3a*/

export const FormTextarea: React.FC<Props> = (
  { className, name, label, required, ...props } /*3b*/
) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext(); /*3c*/

  const errorText = errors?.[name]?.message as string; /*3d*/
  const value = watch(name); /*3e*/
  const onClickClear = () => {
    setValue(name, "");
  }; /*3f*/

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>
      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {
        errorText && (
          <p className="text-red-500 text-sm mt-2">{errorText}</p>
        ) /*3g*/
      }
    </div> /*3g*/
  );
};

// 3h. Go to index.ts of form-components folder of shared of components
