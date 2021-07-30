/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    content_04: THREE.Mesh;
  };
  materials: {
    ["content_04.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/content4-1627641857/content4.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  materials["content_04.mat"].emissive = new THREE.Color("white");
  return (
    <group ref={group} {...props} dispose={null} name="content4">
      <group name="Scene">
        <group name="content_04glb">
          <mesh
            name="content_04"
            geometry={nodes.content_04.geometry}
            material={materials["content_04.mat"]}
            scale={[130, 130, 130]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
