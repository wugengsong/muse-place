/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    spotifybutton: THREE.Mesh;
  };
  materials: {
    ["spotify.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Spotify-1611646063/spotify.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  materials["spotify.mat"].metalness = 0;
  materials["spotify.mat"].roughness = 0.25;

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="spotifybutton"
          material={materials["spotify.mat"]}
          geometry={nodes.spotifybutton.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
