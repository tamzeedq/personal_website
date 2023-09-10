import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Torus(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta * 0.5))
  useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.5))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <torusGeometry args={[10, 3, 16, 25]} />
      <meshStandardMaterial color={hovered ? 'red' : 'white'} wireframe={true}/>
    </mesh>
  )
}

const Model = () => {
  return (
    <div className="w-full h-screen"> 
      <Canvas
        camera={{ position: [10, 10, 10], fov: 100 }}
      >
        <ambientLight />
        <Torus position={[0, 0, 0]} />
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default Model;