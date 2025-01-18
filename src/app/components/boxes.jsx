// "use client"
import Image from "next/image";

const Box = ({skill, images}) => {
  return (
    <>
      <div className="boxes flex w-1/4 py-3 px-10 rounded-xl border-solid border-4 border-oxfordBlue cursor-pointer hover:bg-oxfordBlue justify-center items-center gap-6 ">
        <Image width={50} src={images} alt="Samarpan KC Skills" />
        <h1 className="text-2xl">{skill}</h1>
      </div>
    </>
  );
};

export default Box;
