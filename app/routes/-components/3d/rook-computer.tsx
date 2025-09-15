import { CameraController } from "./camera-controller";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SpinningModel } from "./spinning-model";
import { Suspense } from "react";

const LoadingSpinner = () => (
  <div className="flex size-full items-center justify-center">
    <div className="size-4 animate-spin rounded-full border border-border border-t-transparent" />
  </div>
);

interface RookComputerProps {
  enableZoom?: boolean;
}

export function RookComputer({ enableZoom = false }: RookComputerProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas camera={{ position: [-50, 50, 50], fov: 50 }} orthographic>
        <OrbitControls enableZoom={enableZoom} />
        <CameraController />
        <SpinningModel />
      </Canvas>
    </Suspense>
  );
}
