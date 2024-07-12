import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

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
        ease: 'power2.inOut',
      });
    };

    const handleHoverOut = () => {
      gsap.to(imageElement, {
        scale: 1,
        duration: 0.5,
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
    <div className='flex flex-row' ref={aboutRef}>
      <div className='relative w-[40%] flex items-center justify-center'>
        <div className='absolute rounded-lg w-[60%] h-[70%] bg-red-700'></div>
        <img
          ref={imageRef}
          className='rounded-lg w-[60%] h-[70%] object-cover'
          src='/images/tamzeed/walking.JPG'
          alt='Tamzeed Photo'
        />
        <div className='absolute bottom-[20%] right-[10%] w-[15%] h-[2%] bg-red-500'></div>
      </div>

      <div className=' w-[60%] max-h-[100%] px-8 overflow-y-scroll no-scrollbar text-white'>
        <h1 className='text-md text-red-400'>About Me</h1>
        <h1 className='text-2xl sm:text-4xl md:text-7xl'>Hello!👋</h1>
        <br />
        <p>
          My name is Tamzeed Quazi. I am in my third year at the University of British Columbia pursuing a combined major in Computer Science and Statistics.
          Currently, I am a simulation software developer for <a className='text-amber-200 ' href='https://ubcsolar.com/'>UBC Solar</a>. I have previously completed an 8-month co-op as a full-stack developer and software engineer at Tetra Tech.
        </p>
        <br />
        <p>
          🤖 My interests include machine learning, computer vision, computer graphics, full-stack web development, and software engineering. I am always experimenting with various technologies to expand my knowledge.
        </p>
        <br />
        <p>I enjoy playing sports, going to the gym, reading comics, playing chess, gaming, and keeping up with AI news. Check out my resume to see more of the professional experience I have!</p>
        <br />
        <p>🚀 Feel free to check out my socials and get in touch!</p>
      </div>
    </div>
  );
};

export default About;
