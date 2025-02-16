import { ReactNode } from "react";

interface PropsType {
  children?: ReactNode;
}

export default function ContainerBox({ children }: PropsType) {
  return (
    <article className="mx-2 lg:mx-32 my-2 p-4 rounded-lg shadow-xl bg-slate-100 break-all">
      {children}
    </article>
  );
}
