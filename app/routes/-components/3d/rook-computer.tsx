import { CameraController } from "./camera-controller";
import { Canvas } from "@react-three/fiber";
import { SpinningModel } from "./spinning-model";
import { Suspense } from "react";

const LoadingSpinner = () => (
  <div className="flex size-full items-center justify-center">
    <div className="size-4 animate-spin rounded-full border border-border border-t-transparent" />
  </div>
);

export function RookComputer() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas camera={{ position: [-50, 50, 50], fov: 50 }} orthographic>
        <CameraController />
        <SpinningModel />
      </Canvas>
    </Suspense>
  );
}
