/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL } from "spacesvr";
import { Color } from "three";

type GLTFResult = GLTF & {
  nodes: {
    structure: THREE.Mesh;
    middleSupports: THREE.Mesh;
  };
  materials: {
    ["structure.mat"]: THREE.MeshStandardMaterial;
    ["middleSupports.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Structure-1615282968/structure_07.glb";

export default function Model(
  props: JSX.IntrinsicElements["group"] & {
    removeWalls?: boolean;
    night?: boolean;
  }
) {
  const { removeWalls, night, ...restProps } = props;

  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  if (night) {
    materials["structure.mat"].emissive = new Color("#292929");
    materials["middleSupports.mat"].emissive = new Color("#292929");
  } else {
    materials["structure.mat"].emissive = new Color("#ffffff");
    materials["middleSupports.mat"].emissive = new Color("#ffffff");
  }

  return (
    <group ref={group} {...restProps} dispose={null}>
      <group scale={[5, 5, 5]} position={[-1.5, 0, 3.96]}>
        <mesh
          name="structure"
          material={materials["structure.mat"]}
          geometry={nodes.structure.geometry}
        />
        {!removeWalls && (
          <mesh
            name="middleSupports"
            material={materials["middleSupports.mat"]}
            geometry={nodes.middleSupports.geometry}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
