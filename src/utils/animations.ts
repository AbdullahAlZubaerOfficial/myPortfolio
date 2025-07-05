// animations.ts
import { Variants, Transition } from 'framer-motion';

// Fade In Up Animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Fade In Down Animation
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } as Transition,
  },
};

// Fade In Only Animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 } as Transition,
  },
};

// Page Transition Animation
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 } as Transition,
};

// Slide In from Left Animation
export const slideInLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 } as Transition,
  },
};

// Slide In from Right Animation
export const slideInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 } as Transition,
  },
};

// Card Hover Effects (big scale)
export const cardHoverBig: Variants = {
  whileHover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 } as Transition,
  },
};

// Card Hover Effects (small scale)
export const cardHoverSmall: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

// Scale In Effect
export const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeInOut' 
    } as Transition,
  },
};

// Slide In for Cards Animation
export const slideIn: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    } as Transition,
  },
};

// Stagger Children Animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Type-safe transition config
export const transition: Transition = {
  duration: 0.5,
  ease: "easeInOut"
};