import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "./-components/logo";
import { RookComputerMK2 } from "./-components/rook-computer-mk2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <Card className="p-10">
        <Button>Click me</Button>
      </Card>
      <Logo className="m-10 size-auto max-h-[500px] max-w-[500px] fill-rook-violet" />
      <div className="absolute inset-0 -z-10 text-[100px]">
        <RookComputerMK2 />
      </div>
    </div>
  );
}
