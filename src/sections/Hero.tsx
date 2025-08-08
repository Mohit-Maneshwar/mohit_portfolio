'use client'

import React from 'react'
import { motion } from 'framer-motion'
import FloatingGeometries from '../components/FloatingGeometries'
import ThreeBG from '../components/ThreeBG'

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* 3D Background */}
      

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-16">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-[#00FFB3]">Mohit's</span> World
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-xl text-gray-300 text-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          I'm building futuristic experiences using 3D design, animations, and code — powered by React, Three.js, and Framer Motion.
        </motion.p>

        <motion.div
          className="flex justify-end gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <button className="bg-[#00FFB3] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
            Explore Now
          </button>
          <button className="border border-[#00FFB3] px-6 py-3 rounded-xl hover:bg-[#00FFB3] hover:text-black transition">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
