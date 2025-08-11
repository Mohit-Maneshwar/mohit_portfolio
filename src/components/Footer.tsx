// components/Footer.tsx
import React, { FC } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer className="mt-12 bg-gray-100 dark:bg-[#4a149ca3] text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Mohit Maneshwar</h2>
          <p className="text-sm">
            Frontend Developer passionate about crafting modern, responsive, and user-friendly web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2">
            <FaEnvelope /> 
            <a href="mailto:mohitmane145@gmail.com" className="hover:underline">
              mohitmane145@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://github.com/Mohit-Maneshwar" aria-label="GitHub" target="_blank">
              <FaGithub size={20} className="hover:text-gray-900 dark:hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohit-maneshwar-971546297/" aria-label="LinkedIn" target="_blank">
              <FaLinkedin size={20} className="hover:text-blue-700" />
            </Link>
            <Link href="https://twitter.com/your-profile" aria-label="Twitter" target="_blank">
              <FaTwitter size={20} className="hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Mohit Maneshwar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
