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

export type ImageProps = ComponentProps<"img"> & { imageDescription: string };

export function Gallery({ images }: { images: ImageProps[] }) {
  const showControls = images.length > 1;
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
        {showControls && <CarouselPrevious />}
        {showControls && <CarouselNext />}
      </Carousel>
    </div>
  );
}
