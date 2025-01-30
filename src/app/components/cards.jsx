import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Cards({ ProjectName, image, Description, direct, }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-oxfordBlue p-5 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-4">
        <Image
          className="rounded-sm"
          src={image}
          alt={ProjectName}
          width={150}
        />
        <div className="desc flex flex-col gap-3">
          <h1 className="font-noto text-2xl">{ProjectName}</h1>
          <p className="font-noto text-xs font-medium opacity-80">
            {Description}
          </p>
          <Link href={""} target="_blank">
            <Button className="w-full" variant="custom">Visit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}