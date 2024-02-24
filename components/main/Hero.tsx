"use client"

import React, { useEffect, useState } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const [isEdge, setIsEdge] = useState(false);

  useEffect(() => {
    // Esta função só será executada no lado do cliente
    setIsEdge(/edg/i.test(window.navigator.userAgent));
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className={`absolute top-[-340px] h-full w-full left-0 z-[-1] object-cover ${!isEdge ? 'scale-y-[-1]' : ''}`}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
