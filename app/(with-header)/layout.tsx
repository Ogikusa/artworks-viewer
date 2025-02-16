"use client";
import { ReactNode } from "react";
import Header from "../_app-parts/Common/AppHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
