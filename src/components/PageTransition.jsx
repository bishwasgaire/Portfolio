import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const reducedVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function PageTransition({ children }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={reducedMotion ? reducedVariants : pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: reducedMotion ? 0.1 : 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
