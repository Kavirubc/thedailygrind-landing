import { Herosec } from "@/components/herosec";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import logo from "@/../public/hero1.png";


export default function Home() {
  return (
    <>
      <head>
        <head>

          <link rel="icon" href={logo.src} />
        </head>
      </head>
      <body>
        <Navbar />
        <Herosec />

      </body>

    </>
  );
}
