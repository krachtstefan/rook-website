import { BookOpenText, HardDriveDownload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { interpolate, useScrollAnimation } from "@/hooks/useScrollAnimation";

import { Button } from "@/components/ui/button";
import { Logo } from "./-components/logo";
import { RookComputerMK2 } from "./-components/rook-computer-mk2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const scrollProgress = useScrollAnimation({ scrollDistance: 200 });
  const headerSize = interpolate({
    from: 100,
    to: 70,
    progress: scrollProgress,
  });
  const fontSize = interpolate({
    from: 35,
    to: 22,
    progress: scrollProgress,
  });

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 w-full border-b bg-background"
        style={{ height: `${headerSize}px` }}
      >
        <div className="relative mx-auto flex h-full items-center justify-center gap-4 p-4">
          <Logo className="h-full w-auto fill-primary" />
          <span
            className="font-bold text-primary"
            style={{ fontSize: `${fontSize}px` }}
          >
            R∞k Komputer
          </span>
        </div>
      </header>
      <main
        className="container flex flex-col gap-20 pb-10"
        style={{ marginTop: `${headerSize + 40}px` }}
      >
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
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl">Gallery</h1>
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
    </>
  );
}
