import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full -mt-[8rem]"
      id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
