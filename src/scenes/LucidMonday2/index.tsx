import React, { Suspense, useState } from "react";
import { Stars } from "@react-three/drei";
import { Color } from "three";
import { Vector3 } from "three";

import { useAnalytics } from "services/analytics";
import ChadGallery from "scenes/LucidMonday2/models/Lucidmonday_12";
import ChadPiece from "./components/ChadPiece";
import ChadLighting from "./components/ChadLighting";
import ChadSceneSelector from "./components/ChadSceneSelector";
import PlatformPlatform from "./components/PlatformPlatform";
import ChadEntrance from "./components/ChadEntrance";
import ChangeSkyOverTime from "./components/ChangeSkyOverTime";
import Grass from "../../themes/Alto/components/Grass";
import cache2 from "../../themes/Alto/components/Grass/cache/cache2";

import { StandardEnvironment, Audio } from "spacesvr";

export const CHAD_COLOR = new Color(0x28fa92);

export type SCENE_TYPES = "gallery" | "piece";

const Chad = () => {
  const [sceneState, setSceneState] = useState<SCENE_TYPES>("gallery");

  const isGallery = sceneState === "gallery";

  const [rotate, setRotate] = useState(false);
  const [lok, setLok] = useState(false);
  const [time, setTime] = useState(false);
  const [color, setColor] = useState(false);

  const effects = { rotate, lok, time, color };

  useAnalytics();

  return (
    <StandardEnvironment
      disableGround
      canvasProps={{ camera: { far: 150 } }}
      playerProps={{ pos: [-3, 20, 32], rot: Math.PI, speed: 5 }}
    >
      <Stars radius={30} depth={50} count={1000} factor={2} fade />
      <ChangeSkyOverTime duration={7} />
      <ChadLighting time={time} />
      <ChadSceneSelector
        sceneState={sceneState}
        setSceneState={setSceneState}
      />
      <ChadPiece isGallery={isGallery} effects={effects} />
      <group position={[0, 0, 23]}>
        <Audio
          url="https://spaces-gallery-assets.s3-us-west-1.amazonaws.com/audio/harris+cole+mix.mp3"
          position={new Vector3(0, 10, 1)}
          volume={10}
          rollOff={0.2}
        />
      </group>
      {sceneState === "gallery" && (
        <>
          <Suspense fallback={null}>
            <ChadGallery />
            <ChadEntrance />
            <Grass
              position-y={1.85}
              minRadius={5.25}
              maxRadius={50}
              raycastY={50}
              targetY={4}
              altCache={cache2}
            />
            <Grass
              position-y={-2.05}
              minRadius={5.25}
              maxRadius={50}
              raycastY={50}
              targetY={4}
              altCache={cache2}
            />
            <Grass
              position-y={-6.25}
              minRadius={5.25}
              maxRadius={50}
              raycastY={50}
              targetY={4}
              altCache={cache2}
            />
          </Suspense>
        </>
      )}
      {sceneState === "piece" && <PlatformPlatform />}
    </StandardEnvironment>
  );
};

export default Chad;
