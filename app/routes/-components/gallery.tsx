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
import image1 from "../../assets/images/01.jpg";
import image2 from "../../assets/images/02.jpg";
import image3 from "../../assets/images/03.webp";
import image4 from "../../assets/images/04.png";
import image5 from "../../assets/images/05.png";
import image6 from "../../assets/images/06.png";
import image7 from "../../assets/images/07.png";

type ImageProps = ComponentProps<"img">;
const images: ImageProps[] = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    alt: "Image 4",
  },
  {
    src: image5,
    alt: "Image 5",
  },
  {
    src: image6,
    alt: "Image 6",
  },
  {
    src: image7,
    alt: "Image 7",
  },
];

export function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl">Gallery</h1>
      <Carousel className="w-full max-w-xl">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <ImageZoom>
                      <img {...image} />
                    </ImageZoom>
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
  );
}
