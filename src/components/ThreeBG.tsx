'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float waveX = sin(pos.y * 10.0 + uTime * 2.0 + uMouse.x * 5.0) * 0.1;
    float waveY = cos(pos.x * 10.0 + uTime * 2.0 + uMouse.y * 5.0) * 0.1;

    pos.z += waveX + waveY;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment Shader
const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec3 color1 = vec3(0.1, 0.0, 0.4);
    vec3 color2 = vec3(0.6, 0.2, 1.0);
    float wave = sin(uTime + vUv.y * 10.0) * 0.5 + 0.5;
    vec3 color = mix(color1, color2, wave + vUv.x);
    gl_FragColor = vec4(color, 1.0);
  }
`

function AnimatedPlane() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  useFrame(({ clock, mouse }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime
      materialRef.current.uniforms.uMouse.value = new THREE.Vector2(mouse.x, mouse.y)
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[20, 20, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
        }}
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function ThreeBG() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.2} />
      <AnimatedPlane />
    </Canvas>
  )
}
