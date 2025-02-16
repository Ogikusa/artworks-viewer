import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import Button from "./Button";

type PropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function ProcessButton({
  disabled,
  children,
  ...otherProps
}: PropsType) {
  return (
    <div className="relative">
      <Button disabled={disabled} {...otherProps}>
        {children}
      </Button>
      {disabled && (
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full" aria-label="読み込み中">
          <div className="animate-spin h-8 w-8 border-4 border-white rounded-full border-t-transparent" />
        </div>
      )}
    </div>
  );
}
