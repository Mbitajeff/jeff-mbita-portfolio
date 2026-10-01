import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Writing as Blogs } from "@/components/sections/Writing";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Blogs />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
