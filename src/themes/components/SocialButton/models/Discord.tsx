/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    discord: THREE.Mesh;
  };
  materials: {
    ["discord.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/discord-1627867861/discord.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={0.2}>
        <group name="discord_buttonglb">
          <mesh
            name="discord"
            geometry={nodes.discord.geometry}
            material={materials["discord.mat"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
