import { Logo } from "./-components/logo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <Logo className="size-auto max-h-[500px] max-w-[500px] fill-[#7900FF]" />
    </div>
  );
}
