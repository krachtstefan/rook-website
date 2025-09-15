import * as THREE from "three";

import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useReducedMotion } from "./utils/useReducedMotion";

export const SpinningModel = () => {
  const obj = useLoader(OBJLoader, "/rook-computer.obj");
  const pivot = useRef(new THREE.Group());
  const model = useRef(new THREE.Group());
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Using a threshold angle of 30 degrees to only show more significant edges
        const edges = new THREE.EdgesGeometry(child.geometry, 30);
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
