/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Material, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    fern_a: THREE.Mesh;
    fern_b: THREE.Mesh;
    fern_c_1: THREE.Mesh;
    fern_c_2: THREE.Mesh;
    fungi_a: THREE.Mesh;
    fungi_b: THREE.Mesh;
    fungi_c: THREE.Mesh;
    fungi_d: THREE.Mesh;
    grass: THREE.Mesh;
    rock_a: THREE.Mesh;
    rock_b: THREE.Mesh;
    rock_c: THREE.Mesh;
    root_a: THREE.Mesh;
    root_b: THREE.Mesh;
    root_b2: THREE.Mesh;
    bulb_tree_b_1: THREE.Mesh;
    bulb_tree_b_2: THREE.Mesh;
    bulb_tree_a_1: THREE.Mesh;
    bulb_tree_a_2: THREE.Mesh;
    tree_b: THREE.Mesh;
    tree_a: THREE.Mesh;
  };
  materials: {
    Fern_A: THREE.MeshStandardMaterial;
    Fern_B: THREE.MeshStandardMaterial;
    Fern_C_Trunk: THREE.MeshStandardMaterial;
    Fern_C_Leaf: THREE.MeshStandardMaterial;
    Tree_B: THREE.MeshStandardMaterial;
    ["Tree_B.001"]: THREE.MeshStandardMaterial;
    ["Tree_B.002"]: THREE.MeshStandardMaterial;
    ["Tree_B.003"]: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
    Rock_A: THREE.MeshStandardMaterial;
    Rock_BC: THREE.MeshStandardMaterial;
    ["Rock_BC.001"]: THREE.MeshStandardMaterial;
    Root_A: THREE.MeshStandardMaterial;
    Root_B: THREE.MeshStandardMaterial;
    ["Root_B.001"]: THREE.MeshStandardMaterial;
    Tree_A_Trunk: THREE.MeshStandardMaterial;
    Tree_A_Top: THREE.MeshStandardMaterial;
    ["Tree_A_Trunk.001"]: THREE.MeshStandardMaterial;
    ["Tree_A_Top.001"]: THREE.MeshStandardMaterial;
    ["Tree_B.004"]: THREE.MeshStandardMaterial;
    ["Tree_B.005"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/AlienFoliage-1627591995/alien_foliage_lod2_02_processed-v1.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  const keys = Object.keys(materials);
  for (const key of keys) {
    // @ts-ignore
    (materials[key] as MeshStandardMaterial).metalness = 0;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/*  <mesh*/}
        {/*    name="fern_a"*/}
        {/*    geometry={nodes.fern_a.geometry}*/}
        {/*    material={materials.Fern_A}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="fern_b"*/}
        {/*    geometry={nodes.fern_b.geometry}*/}
        {/*    material={materials.Fern_B}*/}
        {/*  />*/}
        {/*  <group name="fern_c">*/}
        {/*    <mesh*/}
        {/*      name="fern_c_1"*/}
        {/*      geometry={nodes.fern_c_1.geometry}*/}
        {/*      material={materials.Fern_C_Trunk}*/}
        {/*    />*/}
        {/*    <mesh*/}
        {/*      name="fern_c_2"*/}
        {/*      geometry={nodes.fern_c_2.geometry}*/}
        {/*      material={materials.Fern_C_Leaf}*/}
        {/*    />*/}
        {/*  </group>*/}
        {/*  <mesh*/}
        {/*    name="fungi_a"*/}
        {/*    geometry={nodes.fungi_a.geometry}*/}
        {/*    material={materials.Tree_B}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="fungi_b"*/}
        {/*    geometry={nodes.fungi_b.geometry}*/}
        {/*    material={materials["Tree_B.001"]}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="fungi_c"*/}
        {/*    geometry={nodes.fungi_c.geometry}*/}
        {/*    material={materials["Tree_B.002"]}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="fungi_d"*/}
        {/*    geometry={nodes.fungi_d.geometry}*/}
        {/*    material={materials["Tree_B.003"]}*/}
        {/*  />*/}
        <mesh
          name="grass"
          geometry={nodes.grass.geometry}
          material={materials.Grass}
        />
        {/*  <mesh*/}
        {/*    name="rock_a"*/}
        {/*    geometry={nodes.rock_a.geometry}*/}
        {/*    material={materials.Rock_A}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="rock_b"*/}
        {/*    geometry={nodes.rock_b.geometry}*/}
        {/*    material={materials.Rock_BC}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="rock_c"*/}
        {/*    geometry={nodes.rock_c.geometry}*/}
        {/*    material={materials["Rock_BC.001"]}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="root_a"*/}
        {/*    geometry={nodes.root_a.geometry}*/}
        {/*    material={materials.Root_A}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="root_b"*/}
        {/*    geometry={nodes.root_b.geometry}*/}
        {/*    material={materials.Root_B}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="root_b2"*/}
        {/*    geometry={nodes.root_b2.geometry}*/}
        {/*    material={materials["Root_B.001"]}*/}
        {/*  />*/}
        {/*  <group name="bulb_tree_b">*/}
        {/*    <mesh*/}
        {/*      name="bulb_tree_b_1"*/}
        {/*      geometry={nodes.bulb_tree_b_1.geometry}*/}
        {/*      material={materials.Tree_A_Trunk}*/}
        {/*    />*/}
        {/*    <mesh*/}
        {/*      name="bulb_tree_b_2"*/}
        {/*      geometry={nodes.bulb_tree_b_2.geometry}*/}
        {/*      material={materials.Tree_A_Top}*/}
        {/*    />*/}
        {/*  </group>*/}
        {/*  <group name="bulb_tree_a">*/}
        {/*    <mesh*/}
        {/*      name="bulb_tree_a_1"*/}
        {/*      geometry={nodes.bulb_tree_a_1.geometry}*/}
        {/*      material={materials["Tree_A_Trunk.001"]}*/}
        {/*    />*/}
        {/*    <mesh*/}
        {/*      name="bulb_tree_a_2"*/}
        {/*      geometry={nodes.bulb_tree_a_2.geometry}*/}
        {/*      material={materials["Tree_A_Top.001"]}*/}
        {/*    />*/}
        {/*  </group>*/}
        {/*  <mesh*/}
        {/*    name="tree_b"*/}
        {/*    geometry={nodes.tree_b.geometry}*/}
        {/*    material={materials["Tree_B.004"]}*/}
        {/*  />*/}
        {/*  <mesh*/}
        {/*    name="tree_a"*/}
        {/*    geometry={nodes.tree_a.geometry}*/}
        {/*    material={materials["Tree_B.005"]}*/}
        {/*  />*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);