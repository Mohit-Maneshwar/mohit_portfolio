"use client";

import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <div className="relative z-10"> */}
        
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}
