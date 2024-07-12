'use client'

import Link from 'next/link';
import HoverCard from './components/hoverCard';
import { Shapes } from './components/Shapes';
import { FaLinkedin, FaGithub, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from 'react';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger);

const techlist = [
  { tech_name: "React", tech_color: "#61DAFB" },
  { tech_name: "TypeScript", tech_color: "#3178C6" },
  { tech_name: "Python", tech_color: "#3776AB" },
  { tech_name: "Java", tech_color: "#007396" },
  { tech_name: "AI/ML", tech_color: "#FF4500" },
  { tech_name: "DevOps", tech_color: "#F1502F" },
  { tech_name: "Full-stack", tech_color: "#FFA500" }
];

const projects = [
  { img: "/images/form_tracker_project/form_tracker_1.png", title: 'Track My Form', description: 'Description of project 1' },
  { img: "/images/messenger_project/morningmessenger_demo.jpeg", title: 'Morning Messenger', description: 'Description of project 2' },
  { img: "/images/nwHacks2024_project/nwhacks_3.jpg", title: 'Breathe', description: 'Description of project 3' },
];

export default function Home() {
  const techListRef = useRef<(HTMLDivElement | null)[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const skillsHeaderRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    techListRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el,
          { x: -200, opacity: 0.25 }, // Start from left and invisible
          {
            x: 0, // Translate to the center
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
    projectRefs.current.forEach((el, index) => {
      if (el) {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            scale: 1.2,
            duration: 0.25,
            ease: 'power2.inOut',
            boxShadow: "0px 0px 15px 5px rgba(255, 0, 0, 0.3)",
          });
          projectRefs.current.forEach((otherEl, otherIndex) => {
            if (otherEl && otherIndex !== index) {
              gsap.to(otherEl, {
                x: otherIndex < index ? '-50px' : '50px',
                duration: 0.25,
                ease: 'power2.inOut',
              });
            }
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            scale: 1,
            duration: 0.25,
            ease: 'power2.inOut',
            boxShadow: "none",
          });
          projectRefs.current.forEach((otherEl) => {
            if (otherEl) {
              gsap.to(otherEl, {
                x: 0,
                duration: 0.25,
                ease: 'power2.inOut',
              });
            }
          });
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
        { opacity: 0, x: 10 }, 
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

    projectRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(el,
          { scale: 0.8, opacity: 0.5 }, // Start with smaller scale and less opacity
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
            },
          });
      }
    });
  }, []);

  return (
    <main className="min-h-screen items-center justify-between font-mono">
      <div className='flex flex-row '>
        {/* Header */}
        <div className='w-[50%] pl-10 flex flex-col gap-4 justify-center items-left bg-transparent'>
          <h1 className='font-bold md:text-8xl sm:text-5xl text-8xl drop-shadow-xl text-white'>TAMZEED <br />QUAZI</h1>

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
            style={{ fontSize: '1.65rem', display: 'inline-block', color: 'rgb(248 113 113)' }}
          />

          {/* Media buttons */}
          <div className='flex items-center text-white justify-left gap-x-2 pt-2'>
            <button className='hover:scale-105 hover:text-red-500'>
              <Link href="https://github.com/tamzeedq">
                <FaGithub size={30}></FaGithub>
              </Link>
            </button>
            <button className='hover:scale-105 hover:text-red-500'>
              <Link href="https://www.instagram.com/tamzeed.q/">
                <FaInstagram size={30}></FaInstagram>
              </Link>
            </button>
            <button className='hover:scale-105 hover:text-red-500'>
              <Link href="https://www.linkedin.com/in/tamzeedquazi/">
                <FaLinkedin size={30}></FaLinkedin>
              </Link>
            </button>
            <button className='hover:scale-105 hover:text-red-500'>
              <Link href="mailto:tamzeed.q@gmail.com">
                <HiOutlineMail size={30}></HiOutlineMail>
              </Link>
            </button>
          </div>
        </div>

        {/* Three JS shapes */}
        <div className='w-[50%]'>
          <Shapes />
        </div>
      </div>

      <About></About>

      <div ref={skillsHeaderRef} className='text-center py-8'>
        <h1 className='text-2xl sm:text-4xl md:text-7xl'>Skills & Interests</h1>
        <hr className='w-1/4 mx-auto mt-2 border-red-500' style={{ borderWidth: '3px' }} />
      </div>

      {techlist.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name}
          ref={el => techListRef.current[index] = el}
        >
          {Array.from({ length: 15 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span
                className={
                  "tech-item text-4xl font-extrabold uppercase tracking-tighter"
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

      <div className='text-center py-6' ref={showcaseRef}>
        <h1 className='text-md text-red-400'>Project</h1>
        <h1 className='text-xl sm:text-4xl md:text-7xl'>Showcase</h1>
      </div>

      <div className='flex justify-center items-center gap-4 h-[400px]'>
        {projects.map(({ img, title, description }, index) => (
          <div
            key={index}
            ref={el => projectRefs.current[index] = el}
            className='rounded-md'
          >
            <HoverCard
              imageSrc={img}
              title={title}
              description={description}
            />
          </div>
        ))}
      </div>

      <div className='flex justify-center p-6'>
        <button className='text-xl text-white bg-red-700 py-2 px-6 rounded-md hover:bg-red-600 transform hover:scale-105 transition-transform duration-200'>
          <Link href="/projects" className='flex items-center gap-2'>View Projects <FaArrowRight size={15}/> </Link>
        </button>
      </div>
    </main>
  );
}
