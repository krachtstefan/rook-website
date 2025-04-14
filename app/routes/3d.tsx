import { Console } from "./-components/console";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/3d")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Console />;
}
