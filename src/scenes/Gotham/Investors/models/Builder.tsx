/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Color } from "three";

type GLTFResult = GLTF & {
  nodes: {
    builder_1: THREE.Mesh;
    builder_2: THREE.Mesh;
  };
  materials: {
    white: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Builder-1617781936/builder_01.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  materials["white"].emissive = new Color("white");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={[0.25, 0.25, 0.25]}>
        <group name="builder" position-y={-2}>
          <mesh
            name="builder_1"
            material={materials.white}
            geometry={nodes.builder_1.geometry}
          />
          <mesh
            name="builder_2"
            material={materials.black}
            geometry={nodes.builder_2.geometry}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
