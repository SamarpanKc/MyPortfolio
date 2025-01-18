import Box from "./boxes";
import NextIcon from "@/app/images/next.png"
import ReactIcon from "@/app/images/react.png"
import FigmaIcon from "@/app/images/figma.png"

const Skills = () => {
  return (
    <>
      <div className="container flex flex-col font-noto font font-semibold text-3xl px-24 py-10 gap-12">
        <h1 className="Topic underline">I'm Into</h1>
        <div className="boxes flex justify-around">
            <Box images={NextIcon} skill={"Next JS"} />
            <Box images={ReactIcon} skill={"React JS"} />
            <Box images={FigmaIcon} skill={"UI/UX"} />
        </div>
      </div>
    </>
  );
};
export default Skills;
