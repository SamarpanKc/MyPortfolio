"use client";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/app/images/profile.png";
import Logo from "@/app/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const HeroSection = () => {
  return (
    <>
      <div className="top">
        <nav className="logo md:flex px-20 py-4 justify-between items-center hidden ">
          <Image
            src={Logo}
            className="w-28 cursor-pointer"
            alt="SamarpanKc logo"
          ></Image>
          <div className="right flex gap-2 justify-center items-center font-gabarito">
            <Link href={"../Blogs"}>
              {" "}
              <Button variant="link">Blogs</Button>
            </Link>
            <Link
              href={"./samarpan-kc-resume.pdf"}
              target="_blank"
              alt="Samarpan KC Resume"
            >
              <Button className="font-gabarito" variant="customOutline">
                Resume
              </Button>
            </Link>
            {/* Download Resume on click */}
          </div>
        </nav>
        <div className="hero sm:flex max-w-full h-max md:h-screen px-12 py-12 md:-mt-14 md:py-0 md:px-20 lg:px-28 xl:px-40 2xl:px-48 items-center font-noto justify-around gap-16">
          <div className="left flex items-center md:items-start flex-col gap-6 w-70 md:w-5/6">
            <div className="name flex flex-col items-center md:items-start gap-3 select-none">
              <motion.h1 className="font-noto font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-silver">
                Namaste,
              </motion.h1>
              <motion.h1 className="font-noto flex flex-col items-center md:items-start font-semibold text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-silver">
                It's me{" "}
                <span className="font-bold text-tangerine underline cursor-pointer">
                  Samarpan KC
                </span>
              </motion.h1>
              <motion.h1 className="font-noto opacity-70 font-semibold text-xl md:text-xl lg:text-2xl xl:text-2xl text-silver">
                Front-end Developer
              </motion.h1>
            </div>
            <p className="text-center -mt-4 mb-2 md:text-start font-gabarito xl:text-lg">
              A guy who eager to creating modern, interactive, and responsive
              user interfaces using React.js and Next.js with also have a
              background in UI/UX principles.
            </p>
            <div className="icons flex gap-20 pb-6">
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
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/samarpankc/"}
                >
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
                  color: "#fafbfc",
                }}
                showArrow={true}
                placement="bottom"
              >
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/samarpan_kc_7/"}
                >
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    size="2xl"
                    style={{ color: "#E4405F" }}
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="Mailbtn hidden md:flex ">
              <Link
                href="mailto:reach.samarpankc@gmail.com?subject=Hello&body=Hi, I came across your website and wanted to reach out"
                target="_blank"
              >
                <Button variant="custom" className="font-noto">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#0e1428" }}
                  />{" "}
                  Mail Me
                </Button>
              </Link>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.01, filter: "grayscale(0.5)" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="right flex"
          >
            <Image
              className="rounded-3xl hover:rounded-2xl cursor-pointer select-none"
              width={600}
              src={Profile}
              alt="Samarpan KC"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
