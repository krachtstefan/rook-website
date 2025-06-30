import * as THREE from "three";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";

import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const LoadingSpinner = () => (
  <div className="flex size-full items-center justify-center">
    <div className="size-4 animate-spin rounded-full border border-border border-t-transparent" />
  </div>
);

const useResponsiveZoom = () => {
  const zoomConfig = useMemo(
    () => ({
      0: 1.4, // default (mobile-first)
      640: 1.8, // sm
      768: 1.4, // md
      1024: 2, // lg
      1280: 2.4, // xl
      1536: 2.4, // 2xl
    }),
    []
  );

  const [zoom, setZoom] = useState(zoomConfig[0]);

  useEffect(() => {
    const updateZoom = () => {
      const width = window.innerWidth;
      let currentZoom = zoomConfig[0];

      // Check breakpoints in ascending order
      for (const [breakpoint, zoomValue] of Object.entries(zoomConfig)) {
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
  }, [zoomConfig]);

  return zoom;
};

const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

const CameraController = () => {
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

const SpinningModel = () => {
  const obj = useLoader(OBJLoader, "/rook-computer-mk2.obj");
  const pivot = useRef(new THREE.Group());
  const model = useRef(new THREE.Group());
  const prefersReducedMotion = useReducedMotion();

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
    if (!prefersReducedMotion) {
      pivot.current.rotation.y += delta * 0.2; // Rotate 0.2 radians per second
    }
  });

  return <primitive object={pivot.current} position={[0, 0, 0]} />;
};

export function RookComputerMK2() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas camera={{ position: [-50, 50, 50], fov: 50 }} orthographic>
        <CameraController />
        <SpinningModel />
      </Canvas>
    </Suspense>
  );
}
