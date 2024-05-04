'use cli'
import { Herosec } from "@/components/herosec";
import { Navbar } from "@/components/navbar";
import logo from "../../public/logo.png";
import { Herosecnew } from "@/components/herosecnew";
import { About } from "@/components/about";
import { Aboutme } from "@/components/aboutme";
import { Footer } from "@/components/footer";
import { Steps } from "@/components/steps";
import { Calendar } from "@/components/calendar";
import { Reviews } from "@/components/reviews";


export default function Home() {
  return (
    <>
      

      <main>


        <Navbar />

        <Herosecnew />
        {/* <Herosec /> */}
        <About />
        <div id="calendar">
          <Calendar />
        </div>
        <Steps />
        <Reviews />
        <Aboutme />
        <Footer />
      </main>
    </>
  );
}
