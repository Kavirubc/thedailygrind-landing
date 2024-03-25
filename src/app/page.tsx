import { FloatingNav } from "@/components/ui/floatingNavbar/page";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <FloatingNav
        navItems={[
          { name: "Home", link: "#home" },
          { name: "Join", link: "#join" },
          
        ]}
      />
    </>
  );
}
