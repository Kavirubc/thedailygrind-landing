import { Herosec } from "@/components/herosec";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import logo from "@/../public/log.png";


export default function Home() {
  return (
    <>
      <head>

        <link rel="icon" href={logo.src} />

      </head>
      <body className="">
        <div className="fixed w-full">
          <Navbar />
        </div>

        <Herosec />
      </body>

    </>
  );
}
