"use client";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/app/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <>
      <div className="hero flex w-screen h-screen px-28 items-center font-noto justify-around gap-16">
        <div className="left flex flex-col gap-6 w-5/6">
          
          <div className="name flex flex-col gap-3 select-none">
            <motion.h1 className="font-noto font-semibold text-3xl text-silver">
            Namaste,
          </motion.h1>
            <motion.h1 className="font-noto font-semibold text-5xl text-silver">
              It's me{" "}
              <span className="font-bold text-tangerine underline cursor-pointer">
                Samarpan KC
              </span>
            </motion.h1>
            <motion.h1 className="font-noto opacity-70 font-semibold text-xl text-silver">
              Front-end Developer
            </motion.h1>
          </div>
          <p className="">
            A guy who eager to creating modern, interactive, and responsive user
            interfaces using React.js and Next.js with also have a background in
            UI/UX principles.
          </p>
          <div className="icons flex gap-20">
            {/* LinkedIn Tooltip */}
            <Tooltip
              className="px-2"
              content="samarpankc"
              style={{
                backgroundColor: "#0077B5",
                padding: "2px",
                borderRadius: "6px",
              }}
              showArrow={true}
              placement="bottom"
            >
              <Link target="_blank" href={"https://www.linkedin.com/in/samarpankc/"}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  style={{ color: "#0077B5" }}
                />
              </Link>
            </Tooltip>

            {/* GitHub Tooltip */}
            <Tooltip
              className="px-2"
              content="SamarpanKc"
              style={{
                backgroundColor: "#000",
                padding: "2px",
                borderRadius: "6px",
              }}
              showArrow={true}
              placement="bottom"
            >
              <Link target="_blank" href={"https://github.com/SamarpanKc"}>
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  size="2xl"
                  style={{ color: "#fafbfc" }}
                />
              </Link>
            </Tooltip>

            {/* Instagram Tooltip */}
            <Tooltip
              className="px-2"
              content="samarpan_kc_7"
              style={{
                backgroundColor: "#E4405F",
                padding: "2px",
                borderRadius: "6px",
              }}
              showArrow={true}
              placement="bottom"
            >
              <Link target="_blank" href={"https://www.instagram.com/samarpan_kc_7/"}>
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  size="2xl"
                  style={{ color: "#E4405F" }}
                />
              </Link>
            </Tooltip>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.01, filter: "saturate(3)", }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="right flex"
        >
          <Image
            className="rounded-3xl hover:rounded-2xl cursor-pointer saturate-50"
            width={600}
            src={Profile}
            alt="Samarpan KC"
          />
        </motion.div>
      </div>
    </>
  );
};
export default HeroSection;
