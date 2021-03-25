import { Suspense, useMemo } from "react";
import Structure from "./models/Structure";
import StructureOpen from "./models/StructureOpen";
import { Preload, Text } from "@react-three/drei";
import Artwork from "../components/Artwork";
import { ArtworkProps } from "../components/Artwork";
import { linkPositions } from "./assets/constants";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";
import EmailCollection, {
  EmailCollectionProps,
} from "./overlays/EmailCollection";
import Credits from "./components/Credits";

export type GothamProps = {
  name: string;
  socials: string[];
  open?: boolean;
  artwork?: ArtworkProps["artwork"];
  night?: boolean;
  emailCollection?: EmailCollectionProps;
  premium?: boolean;
};

const FONT =
  "https://use.typekit.net/af/6d4bb2/00000000000000003b9acafc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3";

export default function Gotham(props: GothamProps) {
  const {
    name,
    socials,
    artwork,
    open,
    night,
    emailCollection,
    premium,
  } = props;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: night ? 0xffffff : 0x000000,
        metalness: 0.2,
        roughness: 0.1,
      }),
    [night]
  );

  return (
    <group name="gotham-theme">
      {emailCollection && (
        <EmailCollection
          title={`Sign up to receive updates${name && ` from ${name}`}!`}
          {...emailCollection}
        />
      )}
      <Preload all />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Preload all />
        {open ? <StructureOpen night={night} /> : <Structure night={night} />}
      </Suspense>
      <group position={[-5.8, 1.5, 5]} rotation={[0, Math.PI / 2, 0]}>
        {/* @ts-ignore */}
        <Text
          fontSize={0.8}
          position={[0, 0, 0.315]}
          material={material}
          font={FONT}
        >
          {(name || "").toUpperCase()}
        </Text>
        <SocialLinks position={[0, -0.85, 0.31]} socials={socials} />
      </group>
      {!premium && <Credits night={night} />}
      {artwork && <Artwork artwork={artwork} linkPositions={linkPositions} />}
    </group>
  );
}
