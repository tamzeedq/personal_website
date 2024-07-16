import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(CSSPlugin);

const About = () => {
  const imageRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Initial Image tilt effect
    gsap.to(imageRef.current, {
      rotation: -5,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Animation for the entire component
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: 'power2.out',
    });

    // Hover effect for the image
    const imageElement = imageRef.current;
    const handleHover = () => {
      gsap.to(imageElement, {
        scale: 1.1,
        duration: 0.5,
        rotate: 5,
        ease: 'power2.inOut',
      });
    };

    const handleHoverOut = () => {
      gsap.to(imageElement, {
        scale: 1,
        duration: 0.5,
        rotate: -5,
        ease: 'power2.inOut',
      });
    };

    imageElement.addEventListener('mouseenter', handleHover);
    imageElement.addEventListener('mouseleave', handleHoverOut);

    return () => {
      imageElement.removeEventListener('mouseenter', handleHover);
      imageElement.removeEventListener('mouseleave', handleHoverOut);
    };
  }, []);

  return (
    <div className='flex flex-row w-[95%]' ref={aboutRef}>
      <div className='relative w-[40%] flex items-center justify-center'>
        <div className='absolute w-[70%] h-[80%] bg-indigo'></div>
        <img
          ref={imageRef}
          className='w-[70%] h-[80%] object-cover'
          src='/images/tamzeed/walking.JPG'
          alt='Tamzeed Photo'
        />
        {/* <div className='absolute bottom-[20%] right-[10%] w-[15%] h-[2%] bg-red-500'></div> */}
      </div>

      <div className=' w-[60%] max-h-[100%] px-8 overflow-y-scroll no-scrollbar text-rblack'>
        <h1 className='text-md'>About Me</h1>
        <h1 className='text-2xl sm:text-4xl md:text-7xl'>Hello!👋</h1>
        <br />
        <p>
          My name is Tamzeed Quazi. I am in my fourth year at the University of British Columbia pursuing a combined major in Computer Science and Statistics.
          Currently, I am a simulation software developer for <a className='underline underline-offset-4' href='https://ubcsolar.com/'>UBC Solar</a>, and have previous internship experience as a full-stack developer and software engineer.
        </p>
        <br />
        <p>
          🤖 My interests include machine learning, computer vision, full-stack web development, and software engineering. I love experimenting with different technologies to grow my skills.
        </p>
        <br />
        <p>I enjoy playing sports, weight lifting, running, reading comics, playing chess, and gaming. Check out my resume to see more on my professional experience!</p>
        <br />
        <p>🚀 Feel free to check out my socials and get in touch!</p>
      </div>
    </div>
  );
};

export default About;
