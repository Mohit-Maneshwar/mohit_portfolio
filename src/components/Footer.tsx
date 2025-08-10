"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative w-full overflow-x-hidden">
        {/* HERO */}
        <section className="sticky top-0 h-screen">
          <Hero />
        </section>

        {/* ABOUT */}
        <motion.section
          className="sticky top-0 h-screen"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <About />
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          className="sticky top-0 h-screen"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Projects />
        </motion.section>

        {/* CONTACT */}
        <motion.section
          className="sticky top-0 h-screen"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Contact />
        </motion.section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
