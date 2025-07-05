// animations.ts

// Fade In Up Animation
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

// Fade In Down Animation
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Fade In Only Animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

// Page Transition Animation
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
}

// Slide In from Left Animation
export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

// Slide In from Right Animation
export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

// Card Hover Effects (big scale)
export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring" as const, stiffness: 300 },  // 'as const' for literal type
}

// Card Hover Effects (small scale)
export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring" as const, stiffness: 300 },
}

// Scale In Effect
export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
}

// Slide In for Cards Animation
export const slideIn = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
    },
  },
}

// Stagger Children Animation
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}
