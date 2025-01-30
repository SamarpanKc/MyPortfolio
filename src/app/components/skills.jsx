'use client'
import Box from "./boxes";
import NextIcon from "@/app/images/next.png";
import ReactIcon from "@/app/images/react.png";
import FigmaIcon from "@/app/images/figma.png";
import GitIcon from "@/app/images/git.png";
import { motion } from "framer-motion";

// Animation variants for staggering effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start offscreen
  visible: { opacity: 1, y: 0 }, // Animate to visible
};

const Skills = () => {
  return (
    <>
      <motion.div
        className="container select-none flex flex-col md:flex-row font-noto font-semibold text-3xl px-2 md:px-12 py-10 items-center justify-around gap-9"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state
        whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
        viewport={{ once: true, margin: "-100px" }} // Trigger once, adjust margin
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="Topic md:text-8xl uppercase font-black"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <span className="text-tangerine stroke-3">I'm</span> Into
        </motion.h1>

        {/* Animated Grid */}
        <motion.div
          className="boxes grid grid-flow-col grid-rows-2 md:grid-row gap-4 md:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
        >
          {/* Each Box wrapped with motion.div */}
          <motion.div variants={itemVariants}>
            <Box images={NextIcon} skill={"Next.js"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Box images={FigmaIcon} skill={"UI/UX"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Box images={ReactIcon} skill={"React.js"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Box images={GitIcon} skill={"Git"} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Skills