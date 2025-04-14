import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";

const Model = () => {
  const { scene } = useGLTF("/rook-console.glb");
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
        Camera: {position}
      </div>
    </Html>
  );
}

export function Console() {
  return (
    <div className="relative h-screen">
      <Canvas camera={{ position: [0, 2, 15], fov: 45 }}>
        <OrbitControls enableDamping dampingFactor={0.1} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <CameraDebug />
      </Canvas>
    </div>
  );
}
