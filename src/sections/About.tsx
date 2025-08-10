'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThreeBG from '../components/ThreeBG'

// Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
}

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }
}

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }
}

export default function About() {
  const fullText = "I'm Mohit Maneshwar"
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden]">
      <ThreeBG />

      <motion.div
        className="relative z-10 max-w-5xl px-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Animated neon name */}
        <motion.h1
          variants={slideUp}
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
          style={{
            backgroundImage: "linear-gradient(90deg, #00FFB3, #00B3FF)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          {typedText}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={slideUp}
          className="text-xl md:text-2xl font-medium mt-2 text-gray-300"
        >
          Creative Web Developer & Designer
        </motion.h2>


        {/* Description */}
        <motion.p
          variants={slideUp}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I craft <span style={{ color: "#00FFB3" }}>modern, interactive, and engaging</span> 
          web experiences using <span style={{ color: "#00FFB3" }}>React</span>, 
          <span style={{ color: "#00FFB3" }}> Next.js</span>, 
          and <span style={{ color: "#00FFB3" }}>Three.js</span>.  
          My designs focus on blending creativity with functionality.
        </motion.p>

        <motion.p
          variants={slideUp}
          className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Beyond code, I’m passionate about animation, immersive design, 
          and delivering unforgettable digital experiences.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideUp}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 25px rgba(0, 255, 179, 0.9)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#projects"
          className="inline-block mt-10 px-10 py-4 rounded-full shadow-lg font-semibold"
          style={{
            background: "linear-gradient(90deg, #00FFB3, #00B3FF)",
            color: "#000"
          }}
        >
          View My Projects
        </motion.a>
      </motion.div>

      {/* Floating Images */}
      <motion.img
        src="/img1.webp"
        alt="Profile"
        className="absolute top-16 left-16 w-40 h-48 object-cover rounded-xl shadow-xl"
        variants={slideLeft}
        animate={{ y: [0, -15, 0], transition: { duration: 5, repeat: Infinity } }}
      />
      <motion.img
        src="/img2.webp"
        alt="Profile"
        className="absolute bottom-16 left-20 w-44 h-52 object-cover rounded-xl shadow-xl"
        variants={slideLeft}
        animate={{ y: [0, 20, 0], transition: { duration: 6, repeat: Infinity } }}
      />
      <motion.img
        src="/img3.webp"
        alt="Profile"
        className="absolute top-20 right-20 w-40 h-48 object-cover rounded-xl shadow-xl"
        variants={slideRight}
        animate={{ y: [0, -18, 0], transition: { duration: 5.5, repeat: Infinity } }}
      />
    </section>
  )
}
