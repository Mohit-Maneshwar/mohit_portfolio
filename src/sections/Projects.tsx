'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import ThreeBG from '../components/ThreeBG'

// Dummy project data
const projects = [
  {
    title: 'Mane Store',
    description: 'A modern e-commerce store using React, Redux, and Stripe integration.',
    image: '/manestore.png',
    liveLink: 'https://hackthon-project-ten.vercel.app/',
    githubLink: 'https://github.com/Mohit-Maneshwar/hackthon-project'
  },
  {
    title: 'Recipe Mananger',
    description: 'A modern Recipe Manager there we can Add and delete a Recipe.',
    image: 'https://images.unsplash.com/photo-1505576633757-0ac1084af824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D',
    liveLink: 'https://recipe-web-psi.vercel.app/',
    githubLink: 'https://github.com/Mohit-Maneshwar/recipe-web'
  },
  {
    title: 'Gokul Computer Gondia',
    description: 'Designed a clean, responsive website for Gokul Computer Gondia.',
    image: '/Gondia.png',
    liveLink: 'https://gokul-computer-gondia-5ych.vercel.app/',
    githubLink: 'https://github.com/Mohit-Maneshwar/GokulComputerGondia'
  }
]

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden py-16">
      {/* 3D Background */}
      <ThreeBG />

      {/* Foreground Content */}
      <div className="relative z-10 px-4 md:px-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My <span className="text-[#00FFB3]">Projects</span>
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2 text-[#00FFB3]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Icons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00FFB3] hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00FFB3] hover:text-white transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
