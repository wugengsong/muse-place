/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useTrimeshCollision } from "spacesvr";
import { BufferGeometry, MeshBasicMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    collider: THREE.Mesh;
  };
  materials: any;
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/artbox-1623741828/artbox.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry).scale(0.5, 0.5, 0.5)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="artbox_00glb"></group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);