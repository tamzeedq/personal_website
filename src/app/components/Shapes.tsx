"use client";

import * as THREE from "three";
import { Canvas, Vector3 } from "@react-three/fiber";
import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Shapes() {
  return (
    <div className="h-full max-h-[80vh] w-full  row-span-1 row-start-1 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 20], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), // Gem
    },
    // {
    //   position: [1, -0.75, 2],
    //   r: 0.4,
    //   geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill
    // },
    {
      position: [-1.4, 1.5, -2],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
    },
    // {
    //   position: [-0.8, -0.75, 2],
    //   r: 0.5,
    //   geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
    // },
    {
      position: [1.6, 1.45, -2],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5), // Diamond
    },
  ];


  const materials = [
    new THREE.MeshStandardMaterial({ color: 0xd52941, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0x878472, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xd6d6b1, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x3f3f37, roughness: 0.1 }),
  ];

  return geometries.map(({ position, r, geometry }) => (
      <Geometry
        key={JSON.stringify(position)} // Unique key
        position={new THREE.Vector3(position[0] * 2, position[1] * 2, position[2] * 2)}
        geometry={geometry}
        materials={materials}
        r={r}
      />
    ));
}

function Geometry({ r, position, geometry, materials }: { r: number, position: Vector3 | undefined, geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes> | undefined, materials: unknown[] }) {
  const meshRef = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial() as THREE.Material;

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e: { object: any; }) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      if (meshRef.current) {
        gsap.from(meshRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: gsap.utils.random(0.8, 1.2),
          ease: "elastic.out(1,0.3)",
          delay: gsap.utils.random(0, 0.5),
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}
