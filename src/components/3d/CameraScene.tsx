"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CameraModel } from "./CameraModel";

function SceneContent() {
  const modelRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (!modelRef.current) return;
    smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.08;
    smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.08;

    // Slow continuous Y rotation + mouse tilt
    modelRef.current.rotation.y += delta * 0.3;
    modelRef.current.rotation.x = smoothMouse.current.y * 0.6;
    modelRef.current.rotation.z = -smoothMouse.current.x * 0.2;
  });

  const position: [number, number, number] = isMobile ? [0, -2.2, 0] : [1.5, 0, 0];
  const scale: [number, number, number] = isMobile ? [1.85, 1.85, 1.85] : [2.6, 2.6, 2.6];

  return (
    <group ref={modelRef} position={position} scale={scale}>
      <CameraModel />
    </group>
  );
}

export default function CameraScene() {
  return (
    // Fill whatever container wraps it — video section controls sizing
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          {/* Studio-style lighting — no external HDR fetch needed */}
          <ambientLight intensity={0.6} color="#ffffff" />
          {/* Key light — warm, from upper right */}
          <directionalLight position={[10, 10, 5]} intensity={2.0} color="#fff5e6" />
          {/* Fill light — cool, from lower left */}
          <directionalLight position={[-8, -4, -5]} intensity={0.6} color="#b0c4ff" />
          {/* Rim / back light — bright edge definition */}
          <directionalLight position={[-5, 5, -8]} intensity={1.0} color="#ffffff" />
          {/* Top-down accent */}
          <pointLight position={[0, 8, 4]} intensity={1.0} color="#ffffff" />
          {/* Front fill for shadow softening */}
          <pointLight position={[0, 0, 10]} intensity={0.4} color="#e8e0ff" />
          <hemisphereLight args={["#ffffff", "#333344", 0.5]} />
          <Sparkles count={50} scale={10} size={2.5} speed={0.4} opacity={0.3} color="#f59e0b" />
          <SceneContent />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
