import { BookOpenText, HardDriveDownload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Gallery } from "./-components/gallery";
import Header from "@/components/header/header";
import { RookComputerMK2 } from "./-components/rook-computer-mk2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <main className="container flex flex-col gap-20 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl">Meet R∞k Mk2</h1>
            <p className="text-pretty text-lg font-medium sm:text-xl/8">
              A retro console built on Raspberry Pi, featuring a unique Cardidge
              system that allows for fully customizable boot partitions. Each
              Cardidge contains an entire boot partition, giving you complete
              control over your gaming experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button>
                <BookOpenText />
                Learn more
              </Button>
              <Button variant="outline">
                <HardDriveDownload />
                Build a R∞k Mk2
              </Button>
            </div>
          </div>
          <div className="relative p-2 max-md:h-[300px]">
            <div className="absolute inset-0">
              <RookComputerMK2 />
            </div>
          </div>
        </div>
        <Gallery />
      </main>
    </>
  );
}
