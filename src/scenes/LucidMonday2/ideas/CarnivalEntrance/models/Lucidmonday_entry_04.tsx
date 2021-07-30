/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useTrimeshCollision } from "spacesvr";
import { BufferGeometry } from "three";

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/entrance-1627638225/lucidmonday_entry_04.glb.gz";

type GLTFResult = GLTF & {
  nodes: {
    balloons: THREE.Mesh;
    balcony: THREE.Mesh;
    balconyrailing: THREE.Mesh;
    balconysupport: THREE.Mesh;
    sign: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    ["balloons.mat"]: THREE.MeshStandardMaterial;
    ["balcony.mat"]: THREE.MeshStandardMaterial;
    ["balcony.railing.mat"]: THREE.MeshStandardMaterial;
    ["balcony.support.mat"]: THREE.MeshStandardMaterial;
    ["sign.mat"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry).clone().translate(3, 70, 10)
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="balloons"
          geometry={nodes.balloons.geometry}
          material={materials["balloons.mat"]}
        />
        <mesh
          name="balcony"
          geometry={nodes.balcony.geometry}
          material={materials["balcony.mat"]}
        />
        <mesh
          name="balconyrailing"
          geometry={nodes.balconyrailing.geometry}
          material={materials["balcony.railing.mat"]}
        />
        <mesh
          name="balconysupport"
          geometry={nodes.balconysupport.geometry}
          material={materials["balcony.support.mat"]}
        />
        <mesh
          name="sign"
          geometry={nodes.sign.geometry}
          material={materials["sign.mat"]}
        />
        {/*<mesh name="collider" geometry={nodes.collider.geometry} material={nodes.collider.material} />*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);