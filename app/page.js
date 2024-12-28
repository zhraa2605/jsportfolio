import Image from "next/image";
import Hero from "../components/Hero.tsx";
import {FloatingNav} from "../components/ui/FloatingNavbar.tsx"
import { FaHome } from "react-icons/fa";
import Grid from "../components/Grid.tsx";
import RecentProjects from "../components/RecentProjects.tsx";
import { navItems } from "../data";
import Experience from "../components/Experience.tsx";
import Approach from "../components/Approach.tsx";
import Footer from "../components/Footer.tsx";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip" >
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
        


        </div>


    </main>



   
  );
}
