import Image from "next/image";
import { navItems } from "@/data";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import Grid from "@/components/ui/GridGlobe";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}
