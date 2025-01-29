import Box from "./boxes";
import NextIcon from "@/app/images/next.png"
import ReactIcon from "@/app/images/react.png"
import FigmaIcon from "@/app/images/figma.png"
import GitIcon from "@/app/images/git.png"


const Skills = () => {
  return (
    <>
      <div className="container select-none flex flex-col font-noto font font-semibold text-3xl px-2 md:px-12 py-10 items-center justify-around gap-9">
        <h1 className="Topic underline uppercase font-black">I'm Into</h1>
        <div className="boxes grid grid-flow-col grid-rows-2  md:grid-row gap-4 md:gap-14">
            <Box images={NextIcon} skill={"Next js"} />
            <Box images={FigmaIcon} skill={"UI/UX"} />
            <Box images={ReactIcon} skill={"React js"} />
            <Box images={GitIcon} skill={"Git"} />
        </div>
      </div>
    </>
  );
};
export default Skills;
