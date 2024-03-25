'use cli'
import { Herosec } from "@/components/herosec";
import { Navbar } from "@/components/navbar";
import logo from "../../public/logo.png";


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
        <Herosec />
      </body>
    </>
  );
}
