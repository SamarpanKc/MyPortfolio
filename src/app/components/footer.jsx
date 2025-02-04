import Image from "next/image";
import Logo from "@/app/images/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container bg-oxfordBlue flex flex-col-reverse md:flex-row max-w-full h-auto py-12 mt-12 md:mt-32 gap-9 font-noto justify-around items-center">
        <div className="nameTag flex flex-col text-silver">
          <h1 className="font-extrabold text-3xl text-center md:text-left ">Samarpan KC</h1>
          <h1 className="font-medium text-xs text-center md:text-left">
            © 2025 Samarpan KC's Portfolio. All rights reserved.
          </h1>
        </div>
        <div className="left flex flex-col px-0 gap-4 font-gabarito  select-none ">
          <h1 className="text-center md:text-left underline">Connect with me on:</h1>
          <div className="links flex justify-center items-center md:items-start flex-wrap md:flex-row text-silver gap-4">
            <Link href={"https://github.com/SamarpanKc"} target="_blank">
              <Button className="font-gabarito ">
                <FontAwesomeIcon icon={faSquareGithub} className="mr-2" />
                GitHub
              </Button>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/samarpankc/"}
              target="_blank"
            >
              <Button className="font-gabarito ">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                Linkedin
              </Button>
            </Link>
            <Link
              href={"https://www.instagram.com/samarpan_kc_7/"}
              target="_blank"
            >
              <Button className="font-gabarito ">
                <FontAwesomeIcon icon={faSquareInstagram} className="mr-2" />
                Instagram
              </Button>
            </Link>
            <Link className="flex md:hidden" href={"./samarpan-kc-resume.pdf"}
            target="_blank"
            alt="Samarpan KC Resume"
            >
            <Button className="font-gabarito" variant="customOutline">
              Resume
            </Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
