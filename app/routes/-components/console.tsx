import * as THREE from "three";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const Model = () => {
  const obj = useLoader(OBJLoader, "/RetroConsoleMK2.obj");
  const [model] = useState(() => new THREE.Group());

  useEffect(() => {
    obj.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        const edges = new THREE.EdgesGeometry(child.geometry);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({
            color: 0x9000ff, // Technical drawing blue
            linewidth: 1,
          })
        );
        model.add(line);
      }
    });
  }, [obj, model]);

  return <primitive object={model} position={[0, 0, 0]} />;
};

function CameraDebug() {
  const { camera } = useThree();
  const [position, setPosition] = useState("");

  useFrame(() => {
    const pos = camera.position;
    setPosition(
      `x: ${pos.x.toFixed(2)}, y: ${pos.y.toFixed(2)}, z: ${pos.z.toFixed(2)}`
    );
  });

  return (
    <Html fullscreen style={{ pointerEvents: "none" }}>
      <div className="absolute left-0 top-0 bg-black/50 p-2 font-mono text-white">
        Camera: {position}, Zoom: {camera.zoom.toFixed(2)}
      </div>
    </Html>
  );
}

export function Console() {
  return (
    <div className="relative h-screen">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 50], fov: 50 }}
          style={{ background: "#FFDC00" }} // Dark gray background
        >
          <OrbitControls enableDamping dampingFactor={0.1} />
          <gridHelper
            args={[100, 100, 0x404040, 0x404040]}
            position={[0, -10, 0]}
            rotation={[0, 0, 0]}
          />
          <Model />
          <CameraDebug />
        </Canvas>
      </Suspense>
    </div>
  );
}
