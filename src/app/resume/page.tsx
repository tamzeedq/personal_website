"use client"
import React, { useEffect, useRef } from 'react';
import { FaFileDownload } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const resumeContainerRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered animation for the resume container
    gsap.from(resumeContainerRef.current, {
      scrollTrigger: {
        trigger: resumeContainerRef.current,
        start: 'top 80%', // Adjust this to control when the animation starts
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: 'back.out(1.7)',
    });
  }, []);

  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
      <div
        ref={resumeContainerRef}
        className="w-[65%] h-[80%] rounded-lg overflow-hidden shadow-lg bg-latte border-2 border-rblack text-rblack"
      >
        <div className="flex relative items-center bg-latte border-b-2 border-rblack px-4 py-2">
          <div className="w-3 h-3 bg-red-500 border-2 border-rblack rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 border-2 border-rblack rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 border-2 border-rblack rounded-full"></div>
          <h1 className='absolute w-full text-center text-xs sm:text-md'> Tamzeed Quazi Resume </h1>
        </div>
        <iframe 
          src="/docs/Tamzeed_Quazi_Resume.pdf" 
          height="100%" 
          width="100%" 
        />
      </div>
      <a 
        href="/docs/Tamzeed_Quazi_Resume.pdf" 
        download="Tamzeed_Quazi_Resume.pdf"
        className="btn rounded-lg w-[40%] mt-4 group bg-dred text-latte text-xs sm:text-md flex items-center justify-center"
      >
        Download Resume <FaFileDownload/>
      </a>
    </div>
  );
};

export default Resume;
