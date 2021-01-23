import React, { Suspense, useMemo } from "react";
import Alto from "./models/Alto";
import { Text } from "@react-three/drei";
import { ArtworkProps } from "../components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";
import Grass from "./components/Grass";
import Sun from "./components/Sun";
import { Perf } from "r3f-perf";

export type AltoProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  artwork: ArtworkProps["artwork"];
};

const Renaissance = (props: AltoProps) => {
  const { name, socials, artwork, removeWalls } = props;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  return (
    <group>
      <Suspense fallback={null}>
        <Alto />
        <Grass />
      </Suspense>
      <Sun />
      <group position={[-1.4, -1.4, 31.25]} rotation={[0, Math.PI / 6, 0]}>
        <Text
          fontSize={1}
          color="black"
          font="https://d27rt3a60hh1lx.cloudfront.net/content/alto/ohmightyisis.ttf"
        >
          Welcome to Alto
        </Text>
        {/*<Text*/}
        {/*  text={(name || "").toUpperCase()}*/}
        {/*  size={0.75}*/}
        {/*  material={material}*/}
        {/*  position={[0, 1, -0.025]}*/}
        {/*/>*/}
        {/*<SocialLinks socials={socials} position={[0, 1, -0.05]} />*/}
      </group>
      <Suspense fallback={null}>
        <group position-y={2} scale={[5, 5, 5]}>
          {/*<Artwork artwork={artwork} linkPositions={linkPositions} />*/}
        </group>
      </Suspense>
    </group>
  );
};

export default Renaissance;
