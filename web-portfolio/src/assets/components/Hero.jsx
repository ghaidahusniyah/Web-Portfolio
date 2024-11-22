import React from 'react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const texts = ["Frontend Developer", "Social Media Specialist", "UI/UX Designer"];
    const [displayedText, setDisplayedText] = useState("");
    const [fullText, setFullText] = useState(texts[0]);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const typingSpeed = isDeleting ? 50 : 70; 
  
      const handleTyping = () => {
        if (!isDeleting && displayedText !== fullText) {
          setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); 
          setFullText(texts[(textIndex + 1) % texts.length]); 
        } else if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1)); 
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      };
  
      const typingTimeout = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, fullText, texts, textIndex]);
  

  return (
    <div className="h-[100vh] flex flex-col bg-primary mx-auto snap-center snap-always">
    <div className="absolute w-[200px] h-[200px] bg-aksen rounded-full blur-3xl top-16 left-20 animate-floating"></div>
    <div className="absolute w-[300px] h-[300px] bg-aksen rounded-full blur-3xl top-20 right-16 animate-circle"></div>
    <div className='hero grow content-end'>
    <div className="
        half-circle 
        max-w-6xl 
        self-end 
        rounded-t-full 
        blur-xl 
        mx-auto 
        bg-gradient-to-b 
        from-[#A64D79] 
        to-[#1a1a1d00]">
    </div>
      <div className='hero-text w-full absolute'>
      <h1 className="text-text py-2 text-6xl font-ovo">
        Hi! I'm <span className='text-aksen'>Zalfa</span>, your{" "}
        <span className="relative">
          <span className="text-blue-400">{displayedText}</span>
          <span className="blinking-cursor absolute">|</span>
        </span>
      </h1>
      <p className='font-mulish text-text'>Know me more</p>
      </div>
    </div>
    </div>
);
};

export default Hero;
