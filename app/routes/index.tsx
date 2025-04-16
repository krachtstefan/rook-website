import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "./-components/logo";
import { RookComputerMK2 } from "./-components/rook-computer-mk2";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full border-b bg-background transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-center gap-4">
          <Logo
            className={cn(
              "size-auto fill-primary transition-all duration-300",
              isScrolled
                ? "max-h-[50px] max-w-[50px]"
                : "max-h-[100px] max-w-[100px]"
            )}
          />
          <span className="text-xl font-bold text-primary">R∞k Komputer</span>
        </div>
      </header>
      <div className="flex min-h-dvh flex-col p-10 pt-32">
        <Card>
          <CardContent className="p-6 text-lg">
            <p className="mb-4">
              Welcome to R∞k, where infinite possibilities meet computational
              excellence. Our groundbreaking system represents the next
              evolution in computing technology, pushing the boundaries of whats
              possible.
            </p>
            <p className="mb-4">
              Built with cutting-edge architecture and innovative design
              principles, R∞k delivers unparalleled performance while
              maintaining an elegant simplicity that defines modern computing.
            </p>
            <p>
              Experience the future of technology today with our revolutionary
              platform that seamlessly integrates power, efficiency, and style
              into one remarkable package.
            </p>
          </CardContent>
          <CardContent className="p-6 text-lg">
            <p className="mb-4">
              Welcome to R∞k, where infinite possibilities meet computational
              excellence. Our groundbreaking system represents the next
              evolution in computing technology, pushing the boundaries of whats
              possible.
            </p>
            <p className="mb-4">
              Built with cutting-edge architecture and innovative design
              principles, R∞k delivers unparalleled performance while
              maintaining an elegant simplicity that defines modern computing.
            </p>
            <p>
              Experience the future of technology today with our revolutionary
              platform that seamlessly integrates power, efficiency, and style
              into one remarkable package.
            </p>
          </CardContent>
          <CardContent className="p-6 text-lg">
            <p className="mb-4">
              Welcome to R∞k, where infinite possibilities meet computational
              excellence. Our groundbreaking system represents the next
              evolution in computing technology, pushing the boundaries of whats
              possible.
            </p>
            <p className="mb-4">
              Built with cutting-edge architecture and innovative design
              principles, R∞k delivers unparalleled performance while
              maintaining an elegant simplicity that defines modern computing.
            </p>
            <p>
              Experience the future of technology today with our revolutionary
              platform that seamlessly integrates power, efficiency, and style
              into one remarkable package.
            </p>
          </CardContent>
        </Card>
        {/* <Card className="flex flex-col gap-4 p-10">
        <Button>Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="ghost">Click me</Button>
        <Button variant="link">Click me</Button>
        <Button variant="outline">Click me</Button>
      </Card>
      <Card>
        <CardContent className="p-6 text-lg">
          <p className="mb-4">
            Welcome to R∞k, where infinite possibilities meet computational
            excellence. Our groundbreaking system represents the next evolution
            in computing technology, pushing the boundaries of what's possible.
          </p>
          <p className="mb-4">
            Built with cutting-edge architecture and innovative design
            principles, R∞k delivers unparalleled performance while maintaining
            an elegant simplicity that defines modern computing.
          </p>
          <p>
            Experience the future of technology today with our revolutionary
            platform that seamlessly integrates power, efficiency, and style
            into one remarkable package.
          </p>
        </CardContent>
      </Card>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      R∞k
      <br />
      Komputer
      <div className="absolute inset-0 -z-10">
        <RookComputerMK2 />
      </div> */}
      </div>
    </>
  );
}
