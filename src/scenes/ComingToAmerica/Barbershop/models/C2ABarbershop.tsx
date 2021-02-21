/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL, useTrimeshCollision } from "spacesvr";
import { BufferGeometry } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Ceilling: THREE.Mesh;
    Walls: THREE.Mesh;
    Wood: THREE.Mesh;
    loungerests: THREE.Mesh;
    Floor: THREE.Mesh;
    red: THREE.Mesh;
    green: THREE.Mesh;
    chrome: THREE.Mesh;
    loungeseats: THREE.Mesh;
    barberseat: THREE.Mesh;
    adjustmentRod1: THREE.Mesh;
    doors: THREE.Mesh;
    ["*Real_My_T_BarbershopReal_BarbershopobjAFRM_jeans1(not_dissolved,_important)"]: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    ["Ceilling.mat"]: THREE.MeshStandardMaterial;
    ["Walls.mat"]: THREE.MeshStandardMaterial;
    ["Wood.mat"]: THREE.MeshStandardMaterial;
    ["loungerests.mat"]: THREE.MeshStandardMaterial;
    ["Floor.mat"]: THREE.MeshStandardMaterial;
    ["red.mat"]: THREE.MeshStandardMaterial;
    ["green.mat"]: THREE.MeshStandardMaterial;
    ["chrome.mat"]: THREE.MeshStandardMaterial;
    ["loungeseats.mat"]: THREE.MeshStandardMaterial;
    ["barberseat.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/C2ABarbershop-1613783483/barbershop_00.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  // useTrimeshCollision(
  //   (nodes.collider.geometry as BufferGeometry)
  //     .clone()
  //     .scale(0.275, 0.275, 0.275)
  // );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.275, 0.275, 0.275]} position-y={0.005}>
        <mesh
          name="Ceilling"
          material={materials["Ceilling.mat"]}
          geometry={nodes.Ceilling.geometry}
          scale={[168.1893, 57.9186, 215.7007]}
        />
        <mesh
          name="Walls"
          material={materials["Walls.mat"]}
          geometry={nodes.Walls.geometry}
          scale={[108.7553, 42.7347, 144.051]}
        />
        <mesh
          name="Wood"
          material={materials["Wood.mat"]}
          geometry={nodes.Wood.geometry}
          scale={[108.7553, 42.7347, 144.051]}
        />
        <mesh
          name="loungerests"
          material={materials["loungerests.mat"]}
          geometry={nodes.loungerests.geometry}
        />
        <mesh
          name="Floor"
          material={materials["Floor.mat"]}
          geometry={nodes.Floor.geometry}
          scale={[108.7553, 42.7347, 144.051]}
        />
        <mesh
          name="red"
          material={materials["red.mat"]}
          geometry={nodes.red.geometry}
        />
        <mesh
          name="green"
          material={materials["green.mat"]}
          geometry={nodes.green.geometry}
        />
        <mesh
          name="chrome"
          material={materials["chrome.mat"]}
          geometry={nodes.chrome.geometry}
        />
        <mesh
          name="loungeseats"
          material={materials["loungeseats.mat"]}
          geometry={nodes.loungeseats.geometry}
        />
        <mesh
          name="barberseat"
          material={materials["barberseat.mat"]}
          geometry={nodes.barberseat.geometry}
        />
        <mesh
          name="adjustmentRod1"
          material={nodes.adjustmentRod1.material}
          geometry={nodes.adjustmentRod1.geometry}
          rotation={[0, 0, 0]}
        />
        <mesh
          name="doors"
          material={nodes.doors.material}
          geometry={nodes.doors.geometry}
        />
        <mesh
          name="*Real_My_T_BarbershopReal_BarbershopobjAFRM_jeans1(not_dissolved,_important)"
          material={
            nodes[
              "*Real_My_T_BarbershopReal_BarbershopobjAFRM_jeans1(not_dissolved,_important)"
            ].material
          }
          geometry={
            nodes[
              "*Real_My_T_BarbershopReal_BarbershopobjAFRM_jeans1(not_dissolved,_important)"
            ].geometry
          }
        />
        {/*<mesh*/}
        {/*  name="collider"*/}
        {/*  material={nodes.collider.material}*/}
        {/*  geometry={nodes.collider.geometry}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
