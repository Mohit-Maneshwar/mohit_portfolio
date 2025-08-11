'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import routes from '@/routes'; // centralized routes file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-red bg-opacity-60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href={routes.home} className="text-white font-bold text-3xl">
          Mohit.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white text-xl">
          <Link href={routes.home} className="hover:text-green-400">Home</Link>
          <Link href={routes.about} className="hover:text-green-400">About</Link>
          <Link href={routes.projects} className="hover:text-green-400">Projects</Link>
          <Link href={routes.contact} className="hover:text-green-400">Contact</Link>
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
            <Link href={routes.home} className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href={routes.about} className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href={routes.projects} className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href={routes.contact} className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
