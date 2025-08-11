'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'lucide-react'
// import ThreeBG from '../components/ThreeBG'

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      {/* 3D Background */}
      {/* <ThreeBG /> */}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center px-6 md:px-20 py-16 gap-12">
        
        {/* Left Side - Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let’s <span className="text-[#00FFB3]">Work</span> Together
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Whether you have a project in mind or just want to chat about design, development, or 3D experiences — my inbox is always open.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#00FFB3] text-2xl" />
              <span>mohitmane145@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-[#00FFB3] text-2xl" />
              <span>github.com/Mohit-Maneshwar</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-[#00FFB3] text-2xl" />
              <span>linkedin.com/in/mohit-maneshwar-971546297</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          className="flex-1 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#00FFB3] outline-none text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#00FFB3] outline-none text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#00FFB3] outline-none text-white"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#00FFB3] text-black font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
