import * as THREE from "three";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const LoadingSpinner = () => (
  <div className="flex size-full items-center justify-center">
    <div className="size-4 animate-spin rounded-full border border-border border-t-transparent" />
  </div>
);

const SpinningModel = () => {
  const obj = useLoader(OBJLoader, "/rook-computer-mk2.obj");
  const pivot = useRef(new THREE.Group());
  const model = useRef(new THREE.Group());

  useEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Using a threshold angle of 15 degrees to only show more significant edges
        const edges = new THREE.EdgesGeometry(child.geometry, 15);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: "black" })
        );
        model.current.add(line);
      }
    });

    // Center the model
    const box = new THREE.Box3().setFromObject(model.current);
    const center = box.getCenter(new THREE.Vector3());
    model.current.position.sub(center);

    // Add model to pivot
    pivot.current.add(model.current);
  }, [obj]);

  useFrame((_, delta) => {
    pivot.current.rotation.y += delta * 0.2; // Rotate 0.2 radians per second
  });

  return <primitive object={pivot.current} position={[0, 0, 0]} />;
};

export function RookComputerMK2() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas
        camera={{ position: [-50, 50, 50], fov: 50, zoom: 2 }}
        orthographic
      >
        <SpinningModel />
      </Canvas>
    </Suspense>
  );
}
