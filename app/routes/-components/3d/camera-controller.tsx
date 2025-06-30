import { useEffect } from "react";
import { useResponsiveZoom } from "./utils/useResponsiveZoom";
import { useThree } from "@react-three/fiber";

export const CameraController = () => {
  const { camera } = useThree();
  const zoom = useResponsiveZoom();

  useEffect(() => {
    if (camera && "zoom" in camera) {
      camera.zoom = zoom;
      camera.updateProjectionMatrix();
    }
  }, [camera, zoom]);

  return null;
};
