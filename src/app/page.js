import HeroSection from "./components/herosec";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
    <HeroSection />
    <hr />
    <Skills />
    <hr />
    <Projects/>
    </>
  );
}
