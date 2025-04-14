import { Logo } from "./-components/logo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center p-10">
      <Logo className="fill-rook-violet size-auto max-h-[500px] max-w-[500px]" />
    </div>
  );
}
