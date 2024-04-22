import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full -mt-[8rem]"
      id="about-me">
      <HeroContent />
    </div>
  );
};

export default Hero;
