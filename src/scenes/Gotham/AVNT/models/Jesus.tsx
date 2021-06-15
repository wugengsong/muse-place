/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {
    mat_0: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/jesus-1622883798/jesus.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.0125} rotation-x={Math.PI / 2} name="Scene">
        <group name="Jesus_resize_100_glb">
          <mesh
            name="mesh_0"
            geometry={nodes.mesh_0.geometry}
            material={new MeshStandardMaterial()}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);