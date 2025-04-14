import * as THREE from "three";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";

const Model = () => {
  const { scene } = useGLTF("/rook-console.glb");
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: "white",
      });
    }
  });

  return <primitive object={scene} />;
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
        <Canvas>
          <OrbitControls enableDamping dampingFactor={0.1} />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Model />
          <CameraDebug />
        </Canvas>
      </Suspense>
    </div>
  );
}
