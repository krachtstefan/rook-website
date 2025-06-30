import { useEffect, useState } from "react";

const BREAKPOINT_ZOOM_CONFIG = {
  0: 1.4, // default
  640: 1.8, // sm
  768: 1.4, // md
  1024: 2, // lg
  1280: 2.4, // xl
  1536: 2.4, // 2xl
};

const smallestBreakpoint: keyof typeof BREAKPOINT_ZOOM_CONFIG = 0;
const zoomForSmallestBreakpoint = BREAKPOINT_ZOOM_CONFIG[smallestBreakpoint];

// sort breakpoints to ascending order
const sortedBreakpoints = Object.keys(BREAKPOINT_ZOOM_CONFIG)
  .map(Number)
  .sort((a, b) => a - b);

export const useResponsiveZoom = () => {
  const [zoom, setZoom] = useState(zoomForSmallestBreakpoint);

  useEffect(() => {
    const updateZoom = () => {
      const width = window.innerWidth;
      let currentZoom = zoomForSmallestBreakpoint;
      for (const breakpoint of sortedBreakpoints) {
        if (width >= breakpoint) {
          currentZoom =
            BREAKPOINT_ZOOM_CONFIG[
              breakpoint as keyof typeof BREAKPOINT_ZOOM_CONFIG
            ];
        }
      }
      setZoom(currentZoom);
    };

    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  return zoom;
};
