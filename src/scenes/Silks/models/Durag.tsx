/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { GroupProps } from "@react-three/fiber";
import { Color } from "three";

type GLTFResult = GLTF & {
  nodes: {
    stitches: THREE.Mesh;
    fabric: THREE.Mesh;
  };
  materials: {
    stitches: THREE.MeshStandardMaterial;
    Fabric: THREE.MeshStandardMaterial;
  };
};

type DuragProps = {
  fabricColor?: string;
  stitchesColor?: string;
} & GroupProps;

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/SeparateDurag-1620174438/separated-durag.glb.gz";

export default function Model(props: DuragProps) {
  const { fabricColor, stitchesColor, ...rest } = props;

  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  const fabricMat = useMemo(() => {
    materials.Fabric.metalness = 0.7;
    materials.Fabric.roughness = 0.72;
    if (!fabricColor) return materials.Fabric;
    const mat = materials.Fabric.clone();
    mat.color.set(new Color(fabricColor));
    return mat;
  }, [fabricColor]);

  const stitchesMat = useMemo(() => {
    materials.stitches.metalness = 0.44;
    materials.stitches.roughness = 0.83;
    if (!stitchesColor) return materials.stitches;
    const mat = materials.stitches.clone();
    mat.color.set(new Color(stitchesColor));
    return mat;
  }, [stitchesColor]);

  return (
    <group ref={group} {...rest} dispose={null}>
      <group name="Scene" scale={0.2}>
        <mesh
          name="stitches"
          geometry={nodes.stitches.geometry}
          material={stitchesMat}
        />
        <mesh
          name="fabric"
          geometry={nodes.fabric.geometry}
          material={fabricMat}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);