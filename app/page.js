'use client'
import { Provod } from "@/components/3d/Provod";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

export default function Home() {
  const [rotateSpeed, setRotateSpeed] = useState(0.4)
  const [activeBg, setActiveBg] = useState(1)

  const activeBtn = 'p-3 rounded-lg text-white bg-blue-500 w-10 h-10 leading-[1]'
  const btn = 'p-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-300 w-10 h-10 leading-[1]'


  return (
    <main className={activeBg == 1 ? 'bg-white' : 'bg-gradient-to-b from-zinc-800 to-zinc-600'}>
      <div className="fixed top-[20px] left-[20px] backdrop-blur-xl rounded-lg border border-gray-400 bg-zinc-950 bg-opacity-70 p-4 z-[100]">
        <p className="text-white">Скорость вращения:</p>
        <div className="flex flex-wrap gap-2 my-3">
        <button onClick={() => setRotateSpeed(0.2)} className={rotateSpeed == 0.2 ? activeBtn : btn }>1</button>
        <button onClick={() => setRotateSpeed(0.4)} className={rotateSpeed == 0.4 ? activeBtn : btn }>2</button>
        <button onClick={() => setRotateSpeed(0.6)} className={rotateSpeed == 0.6 ? activeBtn : btn }>3</button>
        </div>
        <p className="text-white">Фон:</p>
        <div className="flex flex-wrap gap-2 mt-3">
        <button onClick={() => setActiveBg(1)} className={`p-3 rounded-lg bg-white w-10 h-10 ${activeBg == 1 && "border-[2px] border-blue-500"}`}></button>
        <button onClick={() => setActiveBg(2)} className={`p-3 rounded-lg bg-black w-10 h-10 ${activeBg == 2 && "border-[2px] border-blue-500"}`}></button>
        </div>
      </div>
      <div className="w-full h-[100vh] z-50 relative">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [2, 2, 2]}} shadows>
            <group position={[0, -1, 0]} rotation={[Math.PI / 8, 0, 0]}>
              <Provod />
            </group>
            <group>
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1.9, 0]}>
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
            <OrbitControls autoRotate autoRotateSpeed={rotateSpeed}  />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
