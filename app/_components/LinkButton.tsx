import Link from "next/link";
import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from "react";

export default function LinkButton({
  children,
  href,
  ...otherprops
}: {
  children: ReactNode;
  href: string;
  [key: string]: any;
}) {
  return (
    <p className="text-center w-full h-12 rounded-md shadow-md hover:shadow-sm transition-shadow">
      <Link href={href} className="w-full h-full flex items-center justify-center" {...otherprops}>
        {children}
      </Link>
    </p>
  );
}
