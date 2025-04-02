import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/logo.svg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <img
        src={logo}
        alt="logo"
        className="size-auto max-h-[500px] max-w-[500px]"
      />
      <span className="font-mono text-5xl">coming s∞n</span>
    </div>
  );
}
