"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

export function CameraModel(props: any) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/models/camera.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/camera.glb");
