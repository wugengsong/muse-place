/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useTrimeshCollision } from "spacesvr";
import { BufferGeometry } from "three";

type GLTFResult = GLTF & {
  nodes: {
    floors: THREE.Mesh;
    additions: THREE.Mesh;
    hallway: THREE.Mesh;
    box: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    BLACK: THREE.MeshStandardMaterial;
    WHITE: THREE.MeshStandardMaterial;
  };
};

const FILEURL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/lucidmonday_01-1626733247/lucidmonday_01.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILEURL) as GLTFResult;

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry).clone()
    // .translate(0, -0.005, 0)
    // .scale(80, 80, 80)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="lucidmonday_00glb">
          <mesh
            name="floors"
            geometry={nodes.floors.geometry}
            material={nodes.floors.material}
          />
          <mesh
            name="additions"
            geometry={nodes.additions.geometry}
            material={nodes.additions.material}
          />
          <mesh
            name="hallway"
            geometry={nodes.hallway.geometry}
            material={nodes.hallway.material}
          />
          <mesh
            name="box"
            geometry={nodes.box.geometry}
            material={nodes.box.material}
          />
          {/* <mesh name="collider" geometry={nodes.collider.geometry} material={nodes.collider.material} /> */}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILEURL);
