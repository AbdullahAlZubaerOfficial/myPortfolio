'use client'

import Image from 'next/image';
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
  
  cardHoverSmall,
} from '@/utils/animations'

// import Image from 'next/image'



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

  // Rotating animation for skills circle
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
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        className="mb-16"
        variants={fadeInUp}
      
        animate="visible"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Rotating Skills Circle Section */}
       <motion.section
        className="mb-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white"
          variants={fadeInUp}
          animate="visible"
          
        >
          Technical Expertise
        </motion.h2>

        <motion.div
          className="relative h-96 w-full flex items-center justify-center my-12"
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
            const angle = (index * 360) / skills.length;
            const radians = (angle * Math.PI) / 180;
            const radius = 150;

            return (
              <motion.div
                key={name}
                className="absolute h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md cursor-pointer"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  x: Math.cos(radians) * radius, 
                  y: Math.sin(radians) * radius, 
                  opacity: 1 
                }}
                transition={{ 
                  delay: index * 0.05, 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                }}
                whileHover={{ 
                  scale: 1.4, 
                  backgroundColor: "rgba(99, 102, 241, 0.9)", 
                  color: "white" 
                }}
                title={name}
              >
                <Icon className="h-7 w-7" color={color} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Skills Grid Section */}
      <motion.section
        className="mb-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white"
          variants={fadeInUp}
         animate="visible"
        >
          Skills
        </motion.h2>
        

      <motion.div
  className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8"
  variants={staggerContainer}
  
  animate="visible"
>
  {/* Frontend Card */}
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    animate="visible"
  >
    <FaCode className="h-8 w-8 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Frontend</h3>
    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
      <li>React / Next.js</li>
      <li>TypeScript</li>
      <li>Tailwind CSS</li>
      <li>HTML5 / CSS3</li>
    </ul>
  </motion.div>

  {/* Backend Card */}
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    animate="visible"
  >
    <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Backend</h3>
    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
      <li>MongoDB</li>
    </ul>
  </motion.div>

  {/* Tools & Others Card */}
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    animate="visible"
  >
    <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tools & Others</h3>
    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
      <li>Git / GitHub</li>
      <li>Docker</li>
      <li>AWS</li>
      <li>CI/CD</li>
    </ul>
  </motion.div>
</motion.div>

        
      </motion.section>

      {/* Skills Grid Section */}
    

      <div ref={ref} className="flex flex-col md:flex-row gap-8">
        {/* Achievement Section */}
        <div className="flex-1">
          <motion.section
      className="mb-16"
      initial="hidden"
      
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white"
        variants={fadeInUp}
        animate="visible"
      >
        Achievements
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        {...cardHoverSmall} // contains whileHover and transition
      >
      
         <Image
        src="/achievement1.jpg"
       
        alt="Our Achievement"
        width={500}
        height={300}
         className="mb-4 rounded-md w-full h-auto" 
        unoptimized={true}
      />
       

        <p className="text-gray-600 dark:text-gray-300 text-center">
          <span className="font-semibold">Certificate of achievement</span>: The{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">certificate</span> is proudly awarded to{' '}
          <span className="text-purple-600 dark:text-purple-400 font-semibold">Abdullah Al Zubaer</span> for stepping into the{' '}
          <span className="text-green-600 dark:text-green-400 font-semibold">tech industry</span> as a proud member of the{' '}
          <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Programming Hero Association</span>. Your journey from{' '}
          <span className="text-pink-600 dark:text-pink-400 font-semibold">learner</span> to{' '}
          <span className="text-red-600 dark:text-red-400 font-semibold">professional</span> reflects{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">passion</span>,{' '}
          <span className="text-teal-600 dark:text-teal-400 font-semibold">commitment</span>, and{' '}
          <span className="text-orange-500 dark:text-orange-400 font-semibold">impact</span>. We are proud to celebrate your success. Presented by Programming Hero Team.
          <br />
          <br />
          <span className="italic text-gray-500 dark:text-gray-400">
            This certificate is awarded to those who have been{' '}
            <span className="text-green-700 dark:text-green-300 font-semibold">hired</span> or work in the{' '}
            <span className="text-blue-700 dark:text-blue-300 font-semibold">freelance market</span> as a{' '}
            <span className="text-red-700 dark:text-red-300 font-semibold">professional</span>.
          </span>
        </p>
      </motion.div>
    </motion.section>
        </div>

        {/* Experience & Education */}
        <div className="flex-1">
          {/* Experience Section */}
          <motion.section
            className="mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white"
              variants={fadeInUp}
              animate="visible"
            >
              Experience
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Frontend Developer</h3>
                <p className="text-primary mb-2">InnoBugz Solutions • 2025</p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
                  <li>🚀 Led development of multiple web applications using React and Node.js</li>
                  <li>⚙️ Implemented CI/CD pipelines reducing deployment time by 50%</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Full Stack Developer</h3>
                <p className="text-primary mb-2">Own Project Work - 2024</p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
                  <li>🔧 Developed and maintained RESTful APIs</li>
                  <li>💻 Built responsive user interfaces with modern JavaScript frameworks</li>
                  <li>⚡ Optimized database queries improving performance by 40%</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Web Development Completed (Batch 9)</h3>
                <p className="text-primary mb-2">Programming Hero</p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
                  <li>🖥️ Developed full-stack apps using MERN (MongoDB, Express.js, React.js, Node.js)</li>
                  <li>🔐 Handled authentication with Firebase & JWT</li>
                  <li>🌐 Built REST APIs and responsive UIs with Tailwind CSS</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Data Structures and Algorithms and ML (Batch 7)</h3>
                <p className="text-primary mb-2">Phitron</p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
                  <li>Gained solid understanding of C and C++, including procedural and object-oriented concepts 💡</li>
                  <li>Mastered data structures and algorithms (DSA) with C++: linked list, queue, tree, graph, recursion, sorting, and searching 🔍🌲</li>
                  <li>Developed strong problem-solving skills through regular assignments and contests 💪🧠</li>
                  <li>Currently learning Machine Learning fundamentals using Python and relevant libraries 🤖📊</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white"
              variants={fadeInUp}
              animate="visible"
            >
              Education
            </motion.h2>
            <motion.div className="max-w-3xl mx-auto" variants={staggerContainer} initial="initial" animate={isInView ? "animate" : "initial"}>
              <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-primary mb-2">Dhaka City College • 2024</p>
                <p className="text-gray-600 dark:text-gray-300">
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
