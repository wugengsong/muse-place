import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Andre Cristofi",
  socials: [
    "https://www.instagram.com/by806nick",
    "https://www.instagram.com/kidkiva",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/andreacristofi`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.mp4`,
    size: [1080, 1350],
  },
  {
    src: `${url}/2.mp4`,
    size: [640, 800],
  },
  {
    src: `${url}/3.mp4`,
    size: [1080, 1350],
  },
  {
    src: `${url}/4.mp4`,
    size: [640, 800],
    audio: true,
  },
  {
    src: `${url}/5.mp4`,
    size: [674, 843],
  },
  {
    src: `${url}/6.mp4`,
    size: [1080, 1349],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Andrea Cristofi | Muse Place</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={50}
        fogFar={150}
        fogColor="#000000"
        floorColor="black"
        hMapScale={30}
        xzMapScale={100}
        night
        stars
      />
    </>
  );
};

export default LinkTree;
