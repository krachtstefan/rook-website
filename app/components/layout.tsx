import Header from "@/components/header/header";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-10 px-8 py-10">
        {children}
      </main>
    </>
  );
}
