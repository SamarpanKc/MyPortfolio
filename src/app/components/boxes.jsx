// "use client"
import Image from "next/image";

const Box = ({skill, images}) => {
  return (
    <>
      <div className="boxes flex flex-col md:flex-row w-5/5 py-6 md:pb-12 px-10 justify-center items-center cursor-pointer gap-3 md:gap-6">
        <Image width={50} src={images} alt="Samarpan KC Skills" />
        <h1 className="w-max text-xl md:text-2xl">{skill}</h1>
      </div>
    </>
  );
};

export default Box;
