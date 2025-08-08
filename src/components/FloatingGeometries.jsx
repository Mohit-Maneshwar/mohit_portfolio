// src/components/FloatingGeometries.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Shape({ type, position, color }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.002;
  });

  const geometry = {
    box: <boxGeometry args={[1, 1, 1]} />,
    sphere: <sphereGeometry args={[0.6, 32, 32]} />,
    torus: <torusGeometry args={[0.5, 0.2, 16, 100]} />,
    cone: <coneGeometry args={[0.5, 1, 32]} />,
    dodeca: <dodecahedronGeometry args={[0.6]} />,
  }[type];

  return (
    <Float speed={2} floatIntensity={1.2} rotationIntensity={2}>
      <mesh ref={ref} position={position}>
        {geometry}
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometries() {
  const shapes = ["box", "sphere", "torus", "cone", "dodeca"];
  const colors = ["#00FFFF", "#FF00FF", "#FFD700", "#FF6347", "#00FF7F"];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} />

      {Array.from({ length: 25 }).map((_, i) => {
        const type = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const position = [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ];
        return (
          <Shape key={i} type={type} position={position} color={color} />
        );
      })}
    </Canvas>
  );
}
