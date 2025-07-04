'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiCircleci,
} from 'react-icons/si'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from '@/utils/animations'

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: SiAmazon, color: "#FF9900" },
  { name: "CI/CD", Icon: SiCircleci, color: "#343434" },
]

export default function About() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      },
    })
  }, [controls])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
        variants={fadeInDown}
        initial="hidden"
        animate="show"
      >
        About Me
      </motion.h1>

      <motion.section
        className="mb-16"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          I'm a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      <motion.section
        className="mb-16"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Technical Expertise
        </motion.h2>

        <motion.div
          className="relative h-96 w-full flex items-center justify-center my-12"
          initial="hidden"
          animate={controls}
          style={{ originX: "50%", originY: "50%" }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">Skills</span>
            </div>
          </motion.div>

          {skills.map(({ name, Icon, color }, index) => {
            const angle = (index * 360) / skills.length
            const radians = (angle * Math.PI) / 180
            const radius = 150

            return (
              <motion.div
                key={name}
                className="absolute h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md cursor-pointer"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: Math.cos(radians) * radius,
                  y: Math.sin(radians) * radius,
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{
                  scale: 1.4,
                  backgroundColor: "rgba(99, 102, 241, 0.9)",
                  color: "white",
                }}
                title={name}
                style={{ originX: "50%", originY: "50%" }}
              >
                <Icon className="h-7 w-7" color={color} />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>
    </div>
  )
}
