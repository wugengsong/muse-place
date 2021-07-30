/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useTrimeshCollision } from "spacesvr";
import { BufferGeometry } from "three";
import { useGrassMat } from "../utils/grassMat";

type GLTFResult = GLTF & {
  nodes: {
    floors: THREE.Mesh;
    floors_cover: THREE.Mesh;
    additions: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    ["floors.mat"]: THREE.MeshStandardMaterial;
    ["additions.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/LucidMonday_04-1627604412/LucidMonday_TestOptimization_04.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  const grassMat = useGrassMat();
  useTrimeshCollision((nodes.collider.geometry as BufferGeometry).clone());

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="floors"
          geometry={nodes.floors.geometry}
          material={grassMat}
        />
        <mesh
          name="floors_cover"
          geometry={nodes.floors_cover.geometry}
          material={nodes.floors_cover.material}
        />
        <mesh
          name="additions"
          geometry={nodes.additions.geometry}
          material={materials["additions.mat"]}
        />
        {/*<mesh*/}
        {/*  name="collider"*/}
        {/*  geometry={nodes.collider.geometry}*/}
        {/*  material={nodes.collider.material}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);