/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { Color } from "three";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    GODMESH: THREE.Mesh;
    GODWHOLE: THREE.Mesh;
    DUDEMESH: THREE.Mesh;
    DUDEWHOLE: THREE.Mesh;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/content/chadknight/ChadKnight9/ChadKnight9.glb";

type ChadProps = {
  color: string | undefined;
  pieceScale: number;
  rotate: boolean;
};

export default function Model(props: ChadProps) {
  const { color = "#28FA92", pieceScale, rotate } = props;

  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(FILE_URL) as GLTFResult;
  const realColor = new Color(color);

  const wireMaterialProps = {
    wireframe: true,
    color: realColor,
    emissive: 0x000000,
    emissiveIntensity: 5,
  };
  const wireframeMaterial = useMemo(
    () => new THREE.MeshLambertMaterial(wireMaterialProps),
    [wireMaterialProps]
  );

  const glowMaterialProps = {
    color: color,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
  };
  const glowMaterial = useMemo(
    () => new THREE.MeshBasicMaterial(glowMaterialProps),
    [glowMaterialProps]
  );

  // useTrimeshCollision(
  //   (nodes.DUDEWHOLE.geometry as BufferGeometry)
  //     .clone()
  //     .scale(327, 327, 327)
  //     .scale(pieceScale, pieceScale, pieceScale)
  // );
  //
  // useTrimeshCollision(
  //   (nodes.GODWHOLE.geometry as BufferGeometry)
  //     .clone()
  //     .scale(327, 327, 327)
  //     .scale(pieceScale, pieceScale, pieceScale)
  // );

  useFrame((stateChange, delta) => {
    if (group.current && rotate) {
      group.current.rotation.y += delta / 10;
    }
  });

  // (nodes.DUDEWHOLE.material as Material).transparent = true;
  // (nodes.DUDEWHOLE.material as Material).opacity = 0.999;

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[327 * pieceScale, 327 * pieceScale, 327 * pieceScale]}>
        <mesh
          material={nodes.GODWHOLE.material}
          geometry={nodes.GODWHOLE.geometry}
          position={[0.000088, 0, 0]}
        />
        <mesh
          material={nodes.DUDEWHOLE.material}
          geometry={nodes.DUDEWHOLE.geometry}
        />
        <group>
          <mesh
            material={glowMaterial}
            geometry={nodes.GODMESH.geometry}
            position={[0.023525, 0.005701, -0.00254]}
          />
          <mesh
            material={wireframeMaterial}
            geometry={nodes.GODMESH.geometry}
            position={[0.023525, 0.005701, -0.00254]}
          />
          <mesh
            material={wireframeMaterial}
            geometry={nodes.DUDEMESH.geometry}
            position={[-0.01904, -0.014729, -0.002251]}
            rotation={[0, 0, 0]}
            scale={[1.01, 1.01, 1.01]}
          />
          <mesh
            material={glowMaterial}
            geometry={nodes.DUDEMESH.geometry}
            position={[-0.01904, -0.014729, -0.002251]}
            rotation={[0, 0, 0]}
            scale={[1.01, 1.01, 1.01]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);