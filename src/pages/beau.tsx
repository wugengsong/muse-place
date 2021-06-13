import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { truncate } from "fs/promises";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Beau Lawrence",
  socialLinks: [
    "https://www.instagram.com/beaulawrence/",
    "https://www.instagram.com/unionsyndicate/?hl=en",
    "https://union.link/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/beau`;
const linkData = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.mp4`,
    audio: true,
  },
  {
    src: `${url}/4.mp4`,
    audio: true,
  },
  {
    src: `${url}/5.jpg`,
  },
  {
    src: `${url}/6.jpg`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham
        artwork={linkData}
        socials={ARTIST.socialLinks}
        name={ARTIST.name}
        night
      />
    </>
  );
};

export default LinkTree;
