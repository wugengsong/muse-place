import InstancedModel from "./components/InstancedModel";
import { Object3D, Vector3 } from "three";
import { GroupProps } from "@react-three/fiber";

type ImplicitFunc = (t: number, r: number) => Vector3;

type NatureProps = {
  shape: ImplicitFunc;
} & GroupProps;

const KIOSKS_URL = [
  "https://d27rt3a60hh1lx.cloudfront.net/models/kiosk1-1627604590/kiosk1.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/kiosk2-1627604660/kiosk2.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/kiosk3-1627604751/kiosk3.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/bench1-1627612392/bench1.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/shelf1-1627612492/shelf1.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/wagon1-1627612573/wagon1.glb.gz",
];

type Piece = {
  model: string;
  clustering: ImplicitFunc;
  transform: Object3D;
  places: number[];
};

export default function Kiosks(props: NatureProps) {
  const { shape, ...restProps } = props;

  const pinkObj = new Object3D();
  // pinkObj.scale.multiplyScalar(0.0175);
  pinkObj.position.y = 0;
  // pinkObj.rotation.x = Math.PI / 2;
  pinkObj.updateMatrix();

  const pieces: Piece[] = [
    {
      model: KIOSKS_URL[0],
      clustering: shape,
      transform: pinkObj,
      places: [0, 1, 4],
    },
    {
      model: KIOSKS_URL[1],
      clustering: shape,
      transform: pinkObj,
      places: [3, 4, 0],
    },
    {
      model: KIOSKS_URL[2],
      clustering: shape,
      transform: pinkObj,
      places: [1, 3, 2],
    },
    {
      model: KIOSKS_URL[3],
      clustering: shape,
      transform: pinkObj,
      places: [4, 2, 1],
    },
    {
      model: KIOSKS_URL[4],
      clustering: shape,
      transform: pinkObj,
      places: [2, 0, 3],
    },
  ];

  return (
    <group name="kiosks" {...restProps}>
      {pieces.map((piece, i) => (
        <InstancedModel
          key={piece.model}
          model={piece.model}
          count={3}
          variants={pieces.length}
          generation={piece.clustering}
          transform={piece.transform}
          places={piece.places}
          index={i}
        />
      ))}
    </group>
  );
}