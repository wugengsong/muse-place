import NftScroll from "./NftScroll";
import { useEffect, useRef } from "react";
import { Audio } from "spacesvr";
import * as THREE from "three";
import { useSeason } from "../../contexts/Seasons";

const CONTENT =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/chadknight",
  DISTANCE = 45,
  SCALE = 2,
  POSY = -16,
  TXTSIZE = 4,
  OFFSET = 3;

export default function NftScrolls() {
  const winter = useRef<THREE.Group>(),
    winterAudio = useRef<THREE.Group>(),
    summer = useRef<THREE.Group>(),
    summerAudio = useRef<THREE.Group>(),
    spring = useRef<THREE.Group>(),
    springAudio = useRef<THREE.Group>(),
    fall = useRef<THREE.Group>(),
    fallAudio = useRef<THREE.Group>();

  const { activeSeason } = useSeason();

  useEffect(() => {
    if (winter.current && summer.current && spring.current && fall.current) {
      winter.current.lookAt(0, winter.current.position.y, 0);
      summer.current.lookAt(0, summer.current.position.y, 0);
      spring.current.lookAt(0, spring.current.position.y, 0);
      fall.current.lookAt(0, fall.current.position.y, 0);
    }
  }, [winter, summer, spring, fall]);

  return (
    <group name="scrolls">
      <group position={[DISTANCE, POSY, DISTANCE]} ref={winter}>
        <NftScroll scale={SCALE} vid={`${CONTENT}/winternft.mp4`} />
        <NftScroll
          position-x={OFFSET}
          scale={SCALE}
          text="[ insert WINTER poem here ]"
          font={`${CONTENT}/journey.ttf`}
          textSize={TXTSIZE}
        />
        <group name="seasonalAudio" ref={winterAudio}>
          {activeSeason === "Winter" && <Audio url={`${CONTENT}/WINTER.mp3`} />}
        </group>
      </group>
      <group position={[-DISTANCE, POSY, DISTANCE]} ref={spring}>
        <NftScroll scale={SCALE} vid={`${CONTENT}/springnft.mp4`} />
        <NftScroll
          position-x={OFFSET}
          scale={SCALE}
          text="[ insert SPRING poem here ]"
          font={`${CONTENT}/journey.ttf`}
          textSize={TXTSIZE}
        />
        <group name="seasonalAudio" ref={springAudio}>
          <Audio url={`${CONTENT}/SPRING.mp3`} />
        </group>
      </group>
      <group position={[DISTANCE, POSY, -DISTANCE]} ref={summer}>
        <NftScroll scale={SCALE} vid={`${CONTENT}/summernft.mp4`} />
        <NftScroll
          position-x={OFFSET}
          scale={SCALE}
          text="[ insert SUMMER poem here ]"
          font={`${CONTENT}/journey.ttf`}
          textSize={TXTSIZE}
        />
        <group name="seasonalAudio" ref={summerAudio}>
          <Audio url={`${CONTENT}/SUMMER.mp3`} />
        </group>
      </group>
      <group position={[-DISTANCE, POSY, -DISTANCE]} ref={fall}>
        <NftScroll scale={SCALE} vid={`${CONTENT}/fallnft.mp4`} />
        <NftScroll
          position-x={OFFSET}
          scale={SCALE}
          text="[ insert FALL poem here ]"
          font={`${CONTENT}/journey.ttf`}
          textSize={TXTSIZE}
        />
        <group name="seasonalAudio" ref={fallAudio}>
          <Audio url={`${CONTENT}/FALL.mp3`} />
        </group>
      </group>
    </group>
  );
}
