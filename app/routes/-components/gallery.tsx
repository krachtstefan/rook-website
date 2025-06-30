import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ComponentProps } from "react";
import { ImageZoom } from "@/components/ui/image-zoom";
import rookMk1ConsoleImage from "../../assets/images/rook-mk1-console-components-layout.png";
import rookMk1PlaytestImage from "../../assets/images/rook-mk1-playtesting.webp";
import rookToadImage from "../../assets/images/rook-mk1-toad-super-mario-kart.png";

type ImageProps = ComponentProps<"img"> & { imageDescription: string };

const images: ImageProps[] = [
  {
    src: rookMk1ConsoleImage,
    alt: "Disassembled Rook MK1 console with case, PCB, buttons, and LEGO parts on a work mat.",
    imageDescription: "This is what a RooK looks like before it is assembled",
  },
  {
    src: rookToadImage,
    alt: "Rook MK1 console with LEGO Toad, running Super Mario Kart.",
    imageDescription: "Here when it does what it does best",
  },
  {
    src: rookMk1PlaytestImage,
    alt: "Three people in an office testing a pixel-style game on a monitor",
    imageDescription:
      "Some RooKies having fun with our first self-coded game for RooK",
  },
];

export function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <Carousel className="w-full max-w-xl">
        <CarouselContent>
          {images.map(({ imageDescription, ...image }, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <ImageZoom>
                      <img {...image} />
                    </ImageZoom>
                  </CardContent>
                  <div className="p-3 text-center text-sm">
                    {imageDescription}
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
