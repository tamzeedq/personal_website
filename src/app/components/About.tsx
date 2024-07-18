import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

    // Scroll-triggered animation for the entire component
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%', // Adjust this to control when the animation starts
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Hover effect for the image
    const imageElement = imageRef.current as unknown as HTMLElement;
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

    if (imageElement) {
      imageElement.addEventListener('mouseenter', handleHover);
      imageElement.addEventListener('mouseleave', handleHoverOut);
    }

    return () => {
      imageElement.removeEventListener('mouseenter', handleHover);
      imageElement.removeEventListener('mouseleave', handleHoverOut);
    };
  }, []);

  return (
    <div className='flex md:flex-row flex-col mx-10 h-[90vh] ' ref={aboutRef}>
      <div className='relative mx-auto w-[50%] md:w-[40%] flex items-center justify-center '>
        <div className='absolute w-[70%] h-[80%] bg-indigo'></div>
        <img
          ref={imageRef}
          className='w-[70%] h-[80%] object-cover'
          src='/images/tamzeed/suit_picture.PNG'
          alt='Tamzeed Photo'
        />
      </div>

      <div className='w-[100%] my-auto md:w-[60%] overflow-y-scroll no-scrollbar text-rblack flex flex-col md:justify-center border-2 border-rblack'>
        <div className="flex items-center bg-latte border-b-2 border-rblack px-4 py-2 mb-2">
          <div className="w-3 h-3 bg-red-500 border-2 border-rblack  rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-latte border-2 border-rblack rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-latte border-2 border-rblack rounded-full"></div>
        </div>

        <div className='p-4'>
          <h1 className='text-lg'>About Me</h1>
          <h1 className='text-6xl md:text-7xl'>Hello!👋</h1>
          <br />
          <p className='text-lg'>
            My name is Tamzeed Quazi. I am in my fourth year at the University of British Columbia pursuing a combined major in Computer Science and Statistics.
            Currently, I am a simulation software developer for <a className='p-2 underline underline-offset-4 hover:text-latte hover:bg-rblack rounded-lg' href='https://ubcsolar.com/'>UBC Solar</a>, and have previous internship experience as a full-stack developer and software engineer.
          </p>
          <br />
          <p className='text-lg'>
            🤖 My interests include machine learning, computer vision, full-stack web development, and software engineering. I love experimenting with different technologies to grow my skills.
          </p>
          <br />
          <p className='text-lg'>I enjoy playing sports, weight lifting, running, reading comics, playing chess, and gaming. Check out my resume to see more on my professional experience!</p>
          <br />
          <p className='text-lg'>🚀 Feel free to check out my socials and get in touch!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
