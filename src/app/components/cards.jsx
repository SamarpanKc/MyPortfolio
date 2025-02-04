import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ ProjectName, image, Description, direct, }) {
  return (
    <div className="w-full max-w-md mx-auto flex justify-center items-center">
      <div className="bg-oxfordBlue p-4 w-2/3 md:w-auto md:p-5 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-4">
        <Image
          className="rounded-sm"
          src={image}
          alt={ProjectName}
          width={150}
        />
        <div className="desc flex flex-col gap-3">
          <h1 className="font-noto text-2xl text-center md:text-left">{ProjectName}</h1>
          <p className="font-gabarito text-xs font-light opacity-80 text-center md:text-left">
            {Description}
          </p>
          <Link href={direct || "#"} target="_blank">
            <Button className="w-full" variant="custom">Visit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}