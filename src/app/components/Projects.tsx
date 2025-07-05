'use client'

import Image from 'next/image';
import { projects } from '@/contents/projects'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion,Variants,easeInOut } from 'framer-motion'
import { staggerContainer } from '@/utils/animations'
import { useState } from 'react'

const slideDownLoop:Variants = {
  hidden: { y: -20, opacity: 1 },
  show: {
    y: [-20, 20, -20],
    opacity: 1,
    transition: {
      repeat: Infinity,
      duration: 8,
      ease:easeInOut,
    },
  },
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`rounded-xl p-6 transition-shadow duration-300 cursor-pointer
                ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 text-white shadow-2xl'
                    : 'bg-white dark:bg-dark/50 shadow-lg hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 hover:shadow-xl text-gray-900 dark:text-gray-100'
                }
              `}
              variants={slideDownLoop}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'easeInOut',
                delay: index * 0.5,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              {/* Project Image */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
  src={project.image}
  alt={project.title}
  width={800} // ইমেজের আসল width সেট করুন
  height={450} // ইমেজের আসল height সেট করুন (অ্যাসপেক্ট রেশিও মেইন্টেন করুন)
  className={`object-cover w-full h-64 transition-transform duration-300 hover:scale-105 ${
    activeIndex === index ? 'brightness-90' : ''
  }`}
  unoptimized={true} // যেহেতু আপনি static export করছেন
/>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm
                      ${
                        activeIndex === index
                          ? 'bg-white text-primary'
                          : 'bg-primary/10 text-primary'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors
                    ${
                      activeIndex === index
                        ? 'text-white hover:text-primary/80'
                        : 'text-secondary hover:text-primary'
                    }
                  `}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </a>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors
                    ${
                      activeIndex === index
                        ? 'text-white hover:text-primary/80'
                        : 'text-secondary hover:text-primary'
                    }
                  `}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
