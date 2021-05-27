/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { BufferGeometry, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { useLimiter, useTrimeshCollision } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import { useSeason } from "scenes/Alto/ChadKnight/contexts/Seasons";
import { useSpring, animated } from "react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    ["face-top"]: THREE.Mesh;
    ["face-bottom"]: THREE.Mesh;
    ["platonic-top"]: THREE.Mesh;
    ["platonic-bottom"]: THREE.Mesh;
    terrain: THREE.Mesh;
    collider: THREE.Mesh;
    kaskade: THREE.Mesh;
    information: THREE.Mesh;
  };
  materials: {
    ["kaskade.mat"]: THREE.MeshStandardMaterial;
    ["information.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/chad04-1621991299/chad04.glb.gz";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const top = useRef<THREE.Group>();
  const terrainMat = useRef<THREE.MeshBasicMaterial>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  const { activeSeason } = useSeason();

  const { r, g, b, color } = useSpring({
    r:
      activeSeason === "Winter"
        ? 255
        : activeSeason === "Spring"
        ? 155
        : activeSeason === "Summer"
        ? 95
        : 141,
    g:
      activeSeason === "Winter"
        ? 255
        : activeSeason === "Spring"
        ? 192
        : activeSeason === "Summer"
        ? 123
        : 55,
    b:
      activeSeason === "Winter"
        ? 255
        : activeSeason === "Spring"
        ? 135
        : activeSeason === "Summer"
        ? 40
        : 2,
    color:
      activeSeason === "Winter"
        ? 0xffffff
        : activeSeason === "Spring"
        ? 0x9bc087
        : activeSeason === "Summer"
        ? 0x5f7b28
        : 0x8d3702,
    config: {
      mass: 1,
    },
  });

  const facesMat = new MeshBasicMaterial({ color: "white", wireframe: true });

  const limiter = useLimiter(45);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !top.current) return;
    top.current.rotation.y = clock.getElapsedTime() / 7;
    // if (terrainMat.current) {
    //   // console.log(terrainMat.current)
    //   terrainMat.current.color.setRGB(r.get(), g.get(), b.get());
    //   terrainMat.current.needsUpdate = true;
    //   // console.log(terrainMat.current.color);
    // }
  });

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry)
      .clone()
      .translate(0, -18, 0)
      .scale(5, 5, 5)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={5}>
        <group name="chad_03glb" position-y={-18.5}>
          <group name="modelTop" ref={top}>
            <mesh
              name="face-top"
              geometry={nodes["face-top"].geometry}
              material={facesMat}
            />
            <mesh
              name="platonic-top"
              geometry={nodes["platonic-top"].geometry}
              material={facesMat}
              scale={[1.5, 1.5, 1.5]}
              receiveShadow
            />
          </group>
          <group name="modelBot">
            <mesh
              name="face-bottom"
              geometry={nodes["face-bottom"].geometry}
              material={facesMat}
            />
            <mesh
              name="platonic-bottom"
              geometry={nodes["platonic-bottom"].geometry}
              material={facesMat}
              scale={[1.5, 1.5, 1.5]}
              receiveShadow
            />
          </group>
          <mesh name="terrain" geometry={nodes.terrain.geometry}>
            <meshBasicMaterial
              ref={terrainMat}
              color={new THREE.Color(r.get(), g.get(), b.get())}
            />
            {/*<animated.meshBasicMaterial color={color} />*/}
          </mesh>
          <mesh
            name="information"
            geometry={nodes.information.geometry}
            material={materials["information.mat"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
