import { BackSide, Color, ShaderMaterial, Vector3 } from "three";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ReactThreeFiber, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ChadAltoSceneState } from "../chad";
import Grass from "./components/Grass";
import Birds from "themes/Alto/components/Birds";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import { useSeason } from "./contexts/Seasons";
import Nature from "./components/Nature";
import Tableaux from "./components/Tableaux";
import NftScrolls from "./components/Scrolls/NftScrolls";
import GradientSky from "./components/GradientSky";
import Particles from "./components/Particles";
import { Fog } from "spacesvr";

const ChadKnight = () => {
  const { aa } = useContext(ChadAltoSceneState);

  // const [ winter, setWinter ] = useState<boolean>();
  // const { activeSeason } = useSeason();
  const treePlacementFunc = (r: number, theta: number) => {
    const r_gen = r * 60 + 10;
    const theta_gen = theta * 2 * Math.PI;
    const cartCoords = new Vector3(0, -2, 0).setFromSphericalCoords(
      r_gen,
      1.75,
      theta_gen
    );
    cartCoords.y -= 5;
    return cartCoords;
  };

  // useEffect(() => {
  //   if (activeSeason === "Winter") {
  //     setWinter(true)
  //   } else {
  //     setWinter(false)
  //   }
  // }, [activeSeason])

  return (
    <group>
      <Tableaux />
      {/*{winter &&*/}
      {/*  <Fog color={new Color("#ffffff")} near={15} far={70} />*/}
      {/*}*/}
      <Particles particleNum={2500} />
      <GradientSky radius={200} />
      <mesh>
        <boxBufferGeometry args={[300, 100, 1]} />
        <meshStandardMaterial
          color="red"
          opacity={0.1}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
      <mesh>
        <boxBufferGeometry args={[1, 100, 200]} />
        <meshStandardMaterial
          color="green"
          opacity={0.1}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
      <Suspense fallback={null}>
        <Preload all />
        <Grass altCache={true} maxRadius={90} />
        <NftScrolls />
        <Nature density={1500} shape={treePlacementFunc} />
        <Birds bounds={50} position-y={-10} />
      </Suspense>
    </group>
  );
};

export default ChadKnight;
