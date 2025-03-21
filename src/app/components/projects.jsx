"use client";
import { Button } from "@/components/ui/button";
import Box from "./boxes";
import RPCLogo from "@/app/images/rockpaperscissorsLogo.png";
import HmLogo from "@/app/images/HmLogo.png";
import WeatherLogo from "@/app/images/weatherapplogo.webp";
import Cards from "./cards";
import { motion } from "framer-motion";
import Link from "next/link";


const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div 
        className="container select-none max-w-full flex flex-col-reverse md:flex-row font-noto font-semibold text-3xl px-2 md:px-12 py-10 items-center justify-around gap-9"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="boxes grid grid-flow-col grid-rows-3 md:grid-row gap-4 md:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Cards
              image={HmLogo}
              ProjectName={"Harmony Music"}
              Description={"This is the music learning academic platform"}
              direct="https://harmony-music-academy-samarpankc.vercel.app/"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Cards
              image={WeatherLogo}
              ProjectName={"Weather App"}
              Description={"Learning of the API fetching data in JavaScript"}
              direct="https://weatherapp-samarpan.netlify.app/"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Cards
              image={RPCLogo}
              ProjectName={"Rock Paper Scissors Game"}
              Description={"This is my first javascript project"}
              direct="https://rock-paper-scissors-samarpankc.netlify.app/"
            />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="Topic md:text-4xl lg:text-8xl uppercase font-black"
          initial={{ x: 100 }}  // Changed to positive value for right-side entry
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          // viewport={{ once: true  }}
        >
          Pro<span className="text-tangerine">jects</span>
          <Link href="https://github.com/SamarpanKc?tab=repositories" target="_blank">
          <motion.p className="text-xl cursor-pointer text-center md:text-end underline md:no-underline hover:underline">see more</motion.p></Link>
        </motion.h1>
      </motion.div>
    </>
  );
};
export default Projects;