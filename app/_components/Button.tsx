"use client";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default function Button({
  children,
  className = "",
  ...otherProps
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={
        "p-3 rounded-md shadow-md hover:shadow-sm disabled:shadow-none disabled:text-gray-400 text-center transition-shadow" +
        ` ${className}`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}
