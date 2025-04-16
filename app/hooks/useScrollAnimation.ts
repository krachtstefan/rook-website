import { useEffect, useRef, useState } from "react";

type UseScrollAnimationProps = {
  scrollDistance: number;
};

export function useScrollAnimation({
  scrollDistance,
}: UseScrollAnimationProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      setScrollProgress((prevProgress) => {
        const newProgress = prevProgress + scrollDelta / scrollDistance;
        return Math.min(Math.max(newProgress, 0), 1);
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDistance]);

  return scrollProgress;
}

type InterpolateProps = {
  from: number;
  to: number;
  progress: number;
};

export function interpolate({ from, to, progress }: InterpolateProps) {
  return from - progress * (from - to);
}
