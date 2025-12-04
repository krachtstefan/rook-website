import type { ReactNode } from "react";
import Header from "@/components/header/header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="container flex flex-col items-center gap-10 pt-10">
        {children}
      </main>
    </>
  );
}
