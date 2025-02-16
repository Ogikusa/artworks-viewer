import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input({
  className,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      className={
        "rounded-md bg-slate-200 shadow-md border disabled:text-gray-300 disabled:bg-slate-300" +
        ` ${className}`
      }
      {...props}
    />
  );
}
