"use client"

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowRight, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react';
import About from './components/About';
import ShowcaseMarquee from './components/ShowcaseMarquee';
import { Shapes } from './components/Shapes';

gsap.registerPlugin(ScrollTrigger);

const techlist = [
  { tech_name: "React", tech_color: "#61DBFB" },        
  { tech_name: "TypeScript", tech_color: "#3178C6" },   
  { tech_name: "Python", tech_color: "#FFD43B" },       
  { tech_name: "Java", tech_color: "#ED8B00" },         
  { tech_name: "AI/ML", tech_color: "#00C49A" },        
  { tech_name: "DevOps", tech_color: "#F1502F" },       
];
export default function Home() {
  const techListRef = useRef<(HTMLDivElement | null)[]>([]);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const skillsHeaderRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    techListRef.current.forEach((el, index) => {
      if (el) {
        let xstart;
        if (index % 2 === 0) {
          xstart = -100;  
        } else {
          xstart = 100;
        }
  
        gsap.fromTo(el,
          { x: xstart, opacity: 0.25 }, 
          {
            x: 0, 
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          });
      }
    });
  }, []);

  useLayoutEffect(() => {
    if (showcaseRef.current) {
      gsap.fromTo(showcaseRef.current,
        { y: 50, opacity: 0 }, // Start from below and invisible
        {
          y: 0, // Translate to the original position
          opacity: 1,
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });
    }

    if (skillsHeaderRef.current) {
      gsap.fromTo(skillsHeaderRef.current, 
        { opacity: 0.5, x: 10 }, 
        {
          opacity: 1, 
          x: 0, 
          scrollTrigger: {
            trigger: skillsHeaderRef.current,
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen items-center justify-between font-mono">
      <div className='flex flex-row w-[95%]'>
        {/* Header */}
        <div className='w-[50%] pl-10 flex flex-col gap-4 justify-center items-left bg-transparent'>
          <h1 className='font-bold md:text-8xl sm:text-5xl text-8xl drop-shadow-xl text-rblack'>TAMZEED <br />QUAZI</h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              'Software Developer',
              1000,
              'Computer Science Student',
              1000,
              'Passionate Learner',
              1000,
            ]}
            wrapper="span"
            repeat={Infinity}
            style={{ fontSize: '1.65rem', display: 'inline-block', color: 'rgb(13 24 33)' }}
          />

          {/* Media buttons */}
          <div className='flex items-center text-rblack justify-left gap-x-2 pt-2'>
            <Link href="https://github.com/tamzeedq" className='hover:text-indigo hover:scale-125 transition-transform duration-300'>
              <FaGithub size={30}></FaGithub>
            </Link>
            <Link href="https://www.instagram.com/tamzeed.q/" className='hover:text-indigo hover:scale-125 transition-transform duration-300'>
              <FaInstagram size={30}></FaInstagram>
            </Link>
            <Link href="https://www.linkedin.com/in/tamzeedquazi/" className='hover:text-indigo hover:scale-125 transition-transform duration-300'>
              <FaLinkedin size={30}></FaLinkedin>
            </Link>
            <Link href="mailto:tamzeed.q@gmail.com" className='hover:text-indigo hover:scale-125 transition-transform duration-300'>
              <HiOutlineMail size={30}></HiOutlineMail>
            </Link>
          </div>
        </div>

        {/* Three JS shapes */}
        <div className='w-[50%]'>
          <Shapes />
        </div>
      </div>

      <About></About>

      <div ref={skillsHeaderRef} className='text-center py-8'>
        <h1 className='text-md text-rblack'>Some of my</h1>
        <h1 className='text-2xl sm:text-4xl md:text-7xl text-rblack'>Skills</h1>
      </div>
      <div className='overflow-hidden'>
        {techlist.map(({ tech_color, tech_name }, index) => (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-rblack"
            aria-label={tech_name}
            ref={el => techListRef.current[index] = el}
          >
            {Array.from({ length: 15 }).map((_, idx) => (
              <React.Fragment key={idx}>
                <span
                  className={
                    "tech-item text-6xl uppercase tracking-tighter"
                  }
                  style={{
                    color: idx === 7 ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-3xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <div className='text-center py-6' ref={showcaseRef}>
        <h1 className='text-md text-rblack'>Project</h1>
        <h1 className='text-xl sm:text-4xl md:text-7xl text-rblack'>Showcase</h1>
      </div>

      <ShowcaseMarquee />


      <div className='flex justify-center p-6'>
        <button className='text-xl text-latte bg-rblack py-2 px-6 rounded-md hover:bg-dred transform hover:scale-105 transition-transform duration-200'>
          <Link href="/projects" className='flex items-center gap-2'>View Projects <FaArrowRight size={15}/> </Link>
        </button> 
      </div>
    </main>
  );
}
