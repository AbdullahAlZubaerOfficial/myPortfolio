'use client'

import Image from 'next/image';
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import CodeforcesIcon from './CodeforcesIcon'
import { LiaLinkedin } from 'react-icons/lia'

// const name = "Abdullah Al Zubaer"

export default function Hero() {
  return (
    <section className="py-16 md:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Profile Image with Graduate Badge */}
          <div className="relative inline-block mb-4">
           <Image
  src="/profile1.jpg"
  alt="Profile"
  width={224}  // w-56 = 14rem = 224px (56×4)
  height={224} // h-56 = 14rem = 224px
  className="rounded-full object-cover ring-2 ring-primary shadow-lg"
  unoptimized={true} // Required for static export
/>
            <motion.img
              src="/projects/graduate.png"
              alt="Graduate Badge"
              className="absolute top-0 right-0 w-20 h-20 rounded-full shadow-md"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
            />
          </div>

          {/* Always Animated Name */}
        <div className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white flex flex-wrap justify-center gap-1 text-center">
  {"Abdullah Al".split("").map((char, index) => (
    <motion.span
      key={`top-${index}`}
      className={`${char === "A" || char === "l" ? "text-primary" : ""}`}
      initial={{ opacity: 0.3, y: -20 }}
      animate={{ opacity: [0.3, 1, 0.3], y: [-20, 0, -20] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        delay: index * 0.2,
        ease: "easeInOut",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}

  <div className="w-full md:w-auto block md:inline"></div>

  {" Zubaer".split("").map((char, index) => (
    <motion.span
      key={`bottom-${index}`}
      className={char === "Z" ? "text-amber-500" : ""}
      initial={{ opacity: 0.3, y: -20 }}
      animate={{ opacity: [0.3, 1, 0.3], y: [-20, 0, -20] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        delay: (index + 10) * 0.2,
        ease: "easeInOut",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</div>


          {/* Animated Role Text */}
          <motion.div
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 whitespace-nowrap"
            animate={{ x: ['0%', '-10%', '0%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <span className="block">🚀 Mern Stack Developer</span>
            <span className="block">💻 Competitive Programmer</span>
            <span className="block">⚡ JavaScript Specialist</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-10 flex-wrap whitespace-nowrap"
            animate={{ x: ['0%', '8%', '0%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <a
              href="https://www.linkedin.com/in/abdullah-al-zubaer-309065292/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg"
            >
              <LiaLinkedin className="text-3xl" />
              LinkedIn
            </a>

            <a
              href="https://github.com/AbdullahAlZubaerOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>

            <a
              href="https://codeforces.com/profile/zubaerislam703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-primary transition-colors text-lg"
            >
              <CodeforcesIcon className="w-6 h-6" />
              Codeforces
            </a>
          </motion.div>

          {/* View Projects Button */}
          <motion.div
            className="flex justify-center whitespace-nowrap"
            animate={{ x: ['0%', '-8%', '0%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors block w-full md:w-auto text-center"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
