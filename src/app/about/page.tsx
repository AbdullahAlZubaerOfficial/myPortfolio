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
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
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

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeInDown}>
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Rotating Skills Circle Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.1 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Technical Expertise
        </motion.h2>

        <motion.div
          className="relative h-96 w-full flex items-center justify-center my-12"
          initial="hidden"
          animate="visible"
          animate={controls}
          style={{ originX: "50%", originY: "50%" }}
        >
          {/* Central "Skills" text */}
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

          {/* Icons around the circle */}
          {skills.map(({ name, Icon, color }, index) => {
            const angle = (index * 360) / skills.length
            const radians = (angle * Math.PI) / 180
            const radius = 150

            return (
              <motion.div
                key={name}
                className="absolute h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-dark/50 shadow-md cursor-pointer"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
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

      {/* Skills Grid Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>


          

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

<div className='flex flex-col md:flex-row gap-8'>
  
<div>
    {/* Achievement Section (Placeholder) */}
 <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.5 }}>
  <motion.h2 className="section-title font-bold text-3xl" {...fadeInUp}>
    Achievements
  </motion.h2>
  <motion.div
    className="max-w-3xl mx-auto p-6 rounded-lg bg-white dark:bg-dark/50 shadow-md"
    variants={fadeInUp}
    {...cardHoverSmall}
  >
    {/* Example placeholder: */}
    <img src="/achievement1.jpg" alt="Achievement" className="mb-4 rounded-md" />
    <p className="text-secondary text-center text-xl font-extrabold">
     <span className='w-[40px]'> Certificate of achievement</span>: The{" "}
      <span className="text-blue-600 font-semibold text-xl font-extrabold">certificate</span> is proudly awarded to{" "}
      <span className="text-purple-600 font-semibold text-xl font-extrabold">Abdullah Al Zubaer</span> for stepping into the{" "}
      <span className="text-green-600 font-semibold text-xl font-extrabold">tech industry</span> as a proud member of the{" "}
      <span className="text-yellow-500 font-semibold text-xl font-extrabold">Programming Hero Association</span>. Your journey from{" "}
      <span className="text-pink-600 font-semibold text-xl font-extrabold">learner</span> to{" "}
      <span className="text-red-600 font-semibold text-xl font-extrabold">professional</span> reflects{" "}
      <span className="text-indigo-600 font-semibold text-xl font-extrabold">passion</span>,{" "}
      <span className="text-teal-600 font-semibold text-xl font-extrabold">commitment</span>, and{" "}
      <span className="text-orange-500 font-semibold text-xl font-extrabold">impact</span>. We are proud to celebrate your success. Presented by Programming Hero Team.
      <br />
      <br />
      <span className="italic text-gray-600 text-xl font-extrabold">
        This certificate is awarded to those who have been{" "}
        <span className="text-green-700 font-semibold text-xl font-extrabold">hired</span> or work in the{" "}
        <span className="text-blue-700 font-semibold text-xl font-extrabold">freelance market</span> as a{" "}
        <span className="text-red-700 font-semibold text-xl font-extrabold">professional</span>.
      </span>
    </p>
  </motion.div>
</motion.section>
</div>


<div>
  
      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">InnoBugz Solutions • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Own Project Work - 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Built responsive user interfaces with modern JavaScript frameworks</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Web Development Completed (Batch 9) </h3>
            <p className="text-primary mb-2">Programming Hero</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
             <li>Developed full-stack apps using MERN (MongoDB, Express.js, React.js, Node.js)</li>
<li>Handled authentication with Firebase & JWT</li>
<li>Built REST APIs and responsive UIs with Tailwind CSS</li>

            </ul>
          </motion.div>
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Data Structures and Algorithms and ML (Batch 7)</h3>
            <p className="text-primary mb-2">Phitron</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
             <ul className="list-disc ml-5 space-y-2">
  <li>Gained solid understanding of C and C++, including procedural and object-oriented concepts 💡</li>
  <li>Mastered data structures and algorithms (DSA) with C++: linked list, queue, tree, graph, recursion, sorting, and searching 🔍🌲</li>
  <li>Developed strong problem-solving skills through regular assignments and contests 💪🧠</li>
  <li>Currently learning Machine Learning fundamentals using Python and relevant libraries 🤖📊</li>
</ul>

            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

         {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div className="max-w-3xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Dhaka City College • 2024 </p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

</div>
</div>
    
   
    </div>
  )
}


