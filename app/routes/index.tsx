import { Logo } from "./-components/logo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  let test: any = 1;

  return (
    <div className="flex h-dvh flex-col items-center justify-center p-10">
      <Logo className="size-auto max-h-[500px] max-w-[500px] fill-[#7900FF]" />
    </div>
  );
}
