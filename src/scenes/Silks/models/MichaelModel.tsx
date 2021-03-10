/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL } from "spacesvr";

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    ["LEFT SHOE"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Anim_0";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Michael-1613184104/michael1.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    FILE_URL,
    DRACO_URL
  ) as GLTFResult;

  // @ts-ignore
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions.Anim_0.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={[0.75, 0.75, 0.75]}>
        <group name="Armature" scale={[0.0017, 0.0017, 0.0017]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="body"
            frustumCulled={false}
            material={materials["LEFT SHOE"]}
            geometry={nodes.body.geometry}
            skeleton={nodes.body.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
