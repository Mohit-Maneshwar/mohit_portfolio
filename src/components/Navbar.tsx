'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-red bg-opacity-60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Mohit.dev</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white text-sm">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-red bg-opacity-90 backdrop-blur-lg px-6 py-4 space-y-4 text-white text-sm overflow-hidden"
          >
            <a href="#home" className="block hover:text-green-400">Home</a>
            <a href="#about" className="block hover:text-green-400">About</a>
            <a href="#projects" className="block hover:text-green-400">Projects</a>
            <a href="#contact" className="block hover:text-green-400">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
