/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {
  BufferAttribute,
  BufferGeometry,
  InterleavedBufferAttribute,
} from "three";
import { useTrimesh } from "@react-three/cannon";

type GLTFResult = GLTF & {
  nodes: {
    wallsa: THREE.Mesh;
    wallsb: THREE.Mesh;
    floor: THREE.Mesh;
    supports: THREE.Mesh;
    pedestal: THREE.Mesh;
    railing: THREE.Mesh;
    balcony: THREE.Mesh;
    balconysupport: THREE.Mesh;
    balconyrailing: THREE.Mesh;
    windows: THREE.Mesh;
    fans: THREE.Mesh;
    table: THREE.Mesh;
    doors: THREE.Mesh;
    couch: THREE.Mesh;
    banner: THREE.Mesh;
    misc: THREE.Mesh;
    stilts: THREE.Mesh;
    ["shelf-objects"]: THREE.Mesh;
    ["lucid-hitbox"]: THREE.Mesh;
    lucid: THREE.Mesh;
    ["balloonski-hitbox"]: THREE.Mesh;
    balloonski: THREE.Mesh;
    ["kira-hitbox"]: THREE.Mesh;
    kira: THREE.Mesh;
    ["highrise-hitbox"]: THREE.Mesh;
    highrise: THREE.Mesh;
    muralassets: THREE.Mesh;
    exhaust: THREE.Mesh;
    collider: THREE.Mesh;
  };
  materials: {
    ["wall.a2.mat"]: THREE.MeshStandardMaterial;
    ["wall.b2.mat"]: THREE.MeshStandardMaterial;
    ["floor.mat"]: THREE.MeshStandardMaterial;
    ["supports2.mat"]: THREE.MeshStandardMaterial;
    ["pedestal.mat"]: THREE.MeshStandardMaterial;
    ["railing.mat"]: THREE.MeshStandardMaterial;
    ["balcony.mat"]: THREE.MeshStandardMaterial;
    ["balcony.support.mat"]: THREE.MeshStandardMaterial;
    ["balcony.railing.mat"]: THREE.MeshStandardMaterial;
    ["windows.mat"]: THREE.MeshStandardMaterial;
    ["fans.mat"]: THREE.MeshStandardMaterial;
    ["table.mat"]: THREE.MeshStandardMaterial;
    ["doors.mat"]: THREE.MeshStandardMaterial;
    ["couch.mat"]: THREE.MeshStandardMaterial;
    ["banner.mat"]: THREE.MeshStandardMaterial;
    ["misc.mat"]: THREE.MeshStandardMaterial;
    ["stilts.mat"]: THREE.MeshStandardMaterial;
    ["shelf_objects.mat"]: THREE.MeshStandardMaterial;
    ["lucid.mat"]: THREE.MeshStandardMaterial;
    ["ghost.mat"]: THREE.MeshStandardMaterial;
    ["kira.mat"]: THREE.MeshStandardMaterial;
    ["highrise.mat"]: THREE.MeshStandardMaterial;
    ["mural.assets"]: THREE.MeshStandardMaterial;
    ["exhaust.mat"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "animation_0";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Musehq-1623208738/musehq_10.glb.gz";

export const useTrimeshCollision = (geometry: BufferGeometry) => {
  const indices = (geometry.index as BufferAttribute).array;

  const isInterleaved =
    // @ts-ignore
    geometry.attributes.position.isInterleavedBufferAttribute;

  let vertices: number[] = [];
  if (isInterleaved) {
    const attr = geometry.attributes.position as InterleavedBufferAttribute;
    const data = attr.data;
    for (let i = attr.offset; i < data.array.length; i += data.stride) {
      for (let x = 0; x < attr.itemSize; x++) {
        vertices.push(data.array[i + x]);
      }
    }
  } else {
    vertices = (geometry.attributes.position as BufferAttribute)
      .array as number[];
  }

  // @ts-ignore
  const [hitbox] = useTrimesh(() => ({
    type: "Static",
    args: [vertices, indices],
  }));

  return hitbox;
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(FILE_URL) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  const SCALE = 0.6;

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry)
      .clone()
      .scale(SCALE, SCALE, SCALE)
  );

  useEffect(() => {
    actions.animation_0.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null} name="musehq">
      <group name="Scene" scale={SCALE}>
        <mesh
          name="wallsa"
          geometry={nodes.wallsa.geometry}
          material={materials["wall.a2.mat"]}
        />
        <mesh
          name="wallsb"
          geometry={nodes.wallsb.geometry}
          material={materials["wall.b2.mat"]}
        />
        <mesh
          name="floor"
          geometry={nodes.floor.geometry}
          material={materials["floor.mat"]}
        />
        <mesh
          name="supports"
          geometry={nodes.supports.geometry}
          material={materials["supports2.mat"]}
        />
        <mesh
          name="pedestal"
          geometry={nodes.pedestal.geometry}
          material={materials["pedestal.mat"]}
        />
        <mesh
          name="railing"
          geometry={nodes.railing.geometry}
          material={materials["railing.mat"]}
        />
        <mesh
          name="balcony"
          geometry={nodes.balcony.geometry}
          material={materials["balcony.mat"]}
        />
        <mesh
          name="balconysupport"
          geometry={nodes.balconysupport.geometry}
          material={materials["balcony.support.mat"]}
        />
        <mesh
          name="balconyrailing"
          geometry={nodes.balconyrailing.geometry}
          material={materials["balcony.railing.mat"]}
        />
        <mesh
          name="windows"
          geometry={nodes.windows.geometry}
          material={materials["windows.mat"]}
        />
        <mesh
          name="fans"
          geometry={nodes.fans.geometry}
          material={materials["fans.mat"]}
          position={[-0.0369, 6.1318, 6.2338]}
        />
        <mesh
          name="table"
          geometry={nodes.table.geometry}
          material={materials["table.mat"]}
        />
        <mesh
          name="doors"
          geometry={nodes.doors.geometry}
          material={materials["doors.mat"]}
        />
        <mesh
          name="couch"
          geometry={nodes.couch.geometry}
          material={materials["couch.mat"]}
        />
        <mesh
          name="banner"
          geometry={nodes.banner.geometry}
          material={materials["banner.mat"]}
        />
        <mesh
          name="misc"
          geometry={nodes.misc.geometry}
          material={materials["misc.mat"]}
        />
        <mesh
          name="stilts"
          geometry={nodes.stilts.geometry}
          material={materials["stilts.mat"]}
        />
        <mesh
          name="shelf-objects"
          geometry={nodes["shelf-objects"].geometry}
          material={materials["shelf_objects.mat"]}
        />
        <mesh
          name="lucid"
          geometry={nodes.lucid.geometry}
          material={materials["lucid.mat"]}
        />
        <mesh
          name="balloonski"
          geometry={nodes.balloonski.geometry}
          material={materials["ghost.mat"]}
        />
        <mesh
          name="kira"
          geometry={nodes.kira.geometry}
          material={materials["kira.mat"]}
        />
        <mesh
          name="highrise"
          geometry={nodes.highrise.geometry}
          material={materials["highrise.mat"]}
          scale={[7.5, 7.5, 7.5]}
        />
        <mesh
          name="muralassets"
          geometry={nodes.muralassets.geometry}
          material={materials["mural.assets"]}
        />
        <mesh
          name="exhaust"
          geometry={nodes.exhaust.geometry}
          material={materials["exhaust.mat"]}
        />
        {/*<mesh*/}
        {/*  name="collider"*/}
        {/*  geometry={nodes.collider.geometry}*/}
        {/*  material={nodes.collider.material}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
