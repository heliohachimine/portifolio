import { useRef } from "react";
import HeroSection from ".././components/Hero";
import CurriculumCards from ".././components/CurriculumCards";
import Hobbies from "../components/Hobbies";
export default function Landing() {
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent z-40 pointer-events-none" />
      <div ref={heroRef} data-section="hero" className="scroll-mt-32 pt-16">
        <HeroSection />
      </div>
      <CurriculumCards />
      <Hobbies />
      {/* Adicione aqui outras seções, ex: features, footer, etc */}
    </div>
  );
}
