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
      <div className="container bg-oxfordBlue w-screen h-48 mt-32 flex font-noto justify-around items-center">
        <div className="details flex flex-col text-silver px-32">
          <h1 className="font-extrabold text-3xl ">Samarpan KC</h1>
          <h1 className="font-medium text-xs">
            © 2025 Samarpan KC's Portfolio. All rights reserved.    
          </h1>
        </div>
        <div className="left flex flex-col gap-4 px-16 font-gabarito underline select-none ">
            <h1>Connect with me on:</h1>
          <div className="links flex text-silver gap-4">
            <Link href={"https://github.com/SamarpanKc"} target="_blank">
              <Button className="font-gabarito ">
                <FontAwesomeIcon icon={faSquareGithub} className="mr-2" />
                GitHub
              </Button>
            </Link>
            <Link href={"https://www.linkedin.com/in/samarpankc/"} target="_blank">
              <Button className="font-gabarito ">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                Linkedin
              </Button>
            </Link>
            <Link href={"https://www.instagram.com/samarpan_kc_7/"} target="_blank">
              <Button className="font-gabarito ">
                <FontAwesomeIcon icon={faSquareInstagram} className="mr-2" />
                Instagram
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
