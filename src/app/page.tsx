"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 🔥 Background Canvas Behind Everything */}
      {/* <ThreeBG /> */}

      {/* 🔝 Main Content on Top of Background */}
      <div className="relative z-10">
        <Navbar />

        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
