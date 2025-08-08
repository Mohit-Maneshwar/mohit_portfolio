'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import ThreeBG from '@/components/ThreeBG'

export default function Home() {
  return (
    <>
      {/* 🔥 Background Canvas Behind Everything */}
      <ThreeBG />

      {/* 🔝 Main Content on Top of Background */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.div>
        </section>

        {/* Other Sections */}
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
