'use cli'
import { Herosec } from "@/components/herosec";
import { Navbar } from "@/components/navbar";
import logo from "../../public/logo.png";
import { Herosecnew } from "@/components/herosecnew";
import { About } from "@/components/about";
import { Aboutme } from "@/components/aboutme";
import { Footer } from "@/components/footer";
import { Steps } from "@/components/steps";


export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body>
       
          <Navbar />
       
        {/* <Herosecnew /> */}
        <Herosec />
        <About />
        {/* <Steps /> */}
        <Aboutme />
        <Footer />
      </body>
    </>
  );
}
