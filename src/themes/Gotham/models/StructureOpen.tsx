/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL, useTrimeshCollision } from "spacesvr";
import { BufferGeometry, Color } from "three";

type GLTFResult = GLTF & {
  nodes: {
    structureOpen: THREE.Mesh;
    colliderNoSupports: THREE.Mesh;
  };
  materials: {
    structureOpen: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/StructureOpen-1615403410/structure_open.glb";

export default function Model(
  props: JSX.IntrinsicElements["group"] & {
    night?: boolean;
  }
) {
  const { night } = props;

  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  if (night) {
    materials["structureOpen"].emissive = new Color("#292929");
  } else {
    materials["structureOpen"].emissive = new Color("#ffffff");
  }

  useTrimeshCollision(
    (nodes.colliderNoSupports.geometry as BufferGeometry)
      .clone()
      .scale(5, 5, 5)
      .translate(-1.505, 0, 3.96)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[5, 5, 5]} position={[-1.505, 0, 3.96]}>
        <mesh
          name="structureOpen"
          material={materials.structureOpen}
          geometry={nodes.structureOpen.geometry}
        />
        {/*<mesh*/}
        {/*  name="colliderNoSupports"*/}
        {/*  material={nodes.colliderNoSupports.material}*/}
        {/*  geometry={nodes.colliderNoSupports.geometry}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
