import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldValues } from "react-hook-form";

export type TInput<T extends string> = {
  label?: string;
  classLabel?: string;
  zodRegister?: UseFormRegisterReturn<T>;
  setFocus?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;
