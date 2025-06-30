import { useEffect, useState } from "react";

const BREAKPOINT_ZOOM_CONFIG = {
  0: 1.4, // default
  640: 1.8, // sm
  768: 1.4, // md
  1024: 2, // lg
  1280: 2.4, // xl
  1536: 2.4, // 2xl
};

export const useResponsiveZoom = () => {
  const [zoom, setZoom] = useState(BREAKPOINT_ZOOM_CONFIG[0]);

  useEffect(() => {
    const updateZoom = () => {
      const width = window.innerWidth;
      let currentZoom = BREAKPOINT_ZOOM_CONFIG[0];

      // check breakpoints in ascending order
      for (const [breakpoint, zoomValue] of Object.entries(
        BREAKPOINT_ZOOM_CONFIG
      )) {
        const minWidth = parseInt(breakpoint);
        if (width >= minWidth) {
          currentZoom = zoomValue;
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
