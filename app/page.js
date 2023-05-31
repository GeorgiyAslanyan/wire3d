'use client'
import { Provod } from "@/components/3d/Provod";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="w-full h-[100vh]">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [2, 2, 2]}} shadows>
            <group position={[0, -1, 0]}>
              <Provod />
            </group>
            <group>
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1.05, 0]}>
                <planeBufferGeometry args={[100, 100]} attach={"geometry"} />
                <shadowMaterial transparent opacity={0.2} />
              </mesh>
            </group>

            <ambientLight intensity={0.3} />
            <directionalLight
              position={[50, 50, 0]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <OrbitControls autoRotate autoRotateSpeed={0.3}  />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
