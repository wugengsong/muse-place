import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Steven Howard",
  socialLinks: [
    "https://www.instagram.com/stevenhowrd",
    "https://potteryauction.webflow.io/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/steven`;
const linkData = [
  {
    src: `${url}/1.mp4`,
    audio: true,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.mp4`,
    audio: true,
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpg`,
  },
  {
    src: `${url}/6.mp4`,
    audio: true,
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
      />
    </>
  );
};

export default LinkTree;
