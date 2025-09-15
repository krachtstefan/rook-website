import { RookComputer } from "./-components/3d/rook-computer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/animation")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="h-screen w-screen">
      <RookComputer />
    </main>
  );
}
