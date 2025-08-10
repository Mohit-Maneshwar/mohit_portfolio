'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ThreeBG from '../components/ThreeBG'

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* 3D Background */}
      <ThreeBG />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/J7B2RTJs/mohit.jpg" // Replace with your image file path in /public
          alt="Mohit Maneshwar"
          className="w-screen h-full object-cover opacity-20 mix-blend-screen"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-16 text-center">
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-[#00FFB3]">Mohit's</span> World
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >Transforming ideas into interactive experiences using modern web technologies and creative design.
        </motion.p>

        <motion.div
          className="flex gap-4"
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
