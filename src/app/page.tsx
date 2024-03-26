'use cli'
import { Herosec } from "@/components/herosec";
import { Navbar } from "@/components/navbar";
import logo from "../../public/logo.png";
import { Herosecnew } from "@/components/herosecnew";


export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body>
        <div className="fixed w-full">
          <Navbar />
        </div>
        <Herosecnew />
      </body>
    </>
  );
}
