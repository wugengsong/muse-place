/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useTrimeshCollision } from "spacesvr";
import { BufferGeometry, Color } from "three";

type GLTFResult = GLTF & {
  nodes: {
    structure: THREE.Mesh;
    Cube11: THREE.Mesh;
    Cube10: THREE.Mesh;
    Cube9: THREE.Mesh;
    Cube8: THREE.Mesh;
    Cube7: THREE.Mesh;
    Cube6: THREE.Mesh;
    Cube5: THREE.Mesh;
    Cube4: THREE.Mesh;
    Cube3: THREE.Mesh;
    Cube2: THREE.Mesh;
    Cube1: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    structure: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/floorplan3-1622514035/floorplan3.glb.gz";

export default function Model(
  props: { night?: boolean } & JSX.IntrinsicElements["group"]
) {
  const { night = false, ...restProps } = props;

  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  if (night) {
    materials["structure"].emissive = new Color("#292929");
  } else {
    materials["structure"].emissive = new Color("#ffffff");
  }

  useTrimeshCollision(
    (nodes.structure.geometry as BufferGeometry)
      .clone()
      .scale(5, 5, 5)
      .translate(-1.505, 0, 3.96)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="3gltf">
          <group name="2obj">
            <mesh
              name="structure"
              geometry={nodes.structure.geometry}
              material={materials.structure}
              position={[-2.7794, -5.5567, 5.5545]}
            />
          </group>
          <mesh
            name="Cube11"
            geometry={nodes.Cube11.geometry}
            material={nodes.Cube11.material}
            position={[4.6374, 126.2016, 520.6958]}
          />
          <mesh
            name="Cube10"
            geometry={nodes.Cube10.geometry}
            material={nodes.Cube10.material}
            position={[4.6374, 126.2016, 520.6958]}
          />
          <mesh
            name="Cube9"
            geometry={nodes.Cube9.geometry}
            material={nodes.Cube9.material}
            position={[4.6374, 263.6688, 520.1432]}
          />
          <mesh
            name="Cube8"
            geometry={nodes.Cube8.geometry}
            material={nodes.Cube8.material}
            position={[4.6374, -1.6266, 520.1432]}
          />
          <mesh
            name="Cube7"
            geometry={nodes.Cube7.geometry}
            material={nodes.Cube7.material}
            position={[4.6374, -1.6266, -389.3915]}
          />
          <mesh
            name="Cube6"
            geometry={nodes.Cube6.geometry}
            material={nodes.Cube6.material}
            position={[4.6374, 263.6688, -389.3915]}
          />
          <mesh
            name="Cube5"
            geometry={nodes.Cube5.geometry}
            material={nodes.Cube5.material}
            position={[4.6374, 126.2016, -388.8389]}
          />
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={nodes.Cube4.material}
            position={[4.6374, 126.2016, -388.8389]}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={nodes.Cube3.material}
            position={[4.6374, 156.6405, -4.0777]}
          />
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={nodes.Cube2.material}
            position={[4.6374, 123.7108, -4.0777]}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={nodes.Cube1.material}
            position={[0, 18.5687, 0]}
          />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[0, 4.8246, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);