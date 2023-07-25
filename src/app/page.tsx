"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BsCpuFill, BsFillLightningChargeFill, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { BiCodeBlock, BiGitBranch } from 'react-icons/bi';
import HoverCard from './components/hoverCard';

export default function Home() {
  // const router = useRouter();

  const handleClickScroll = (elementID: string) => {
    const element = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen items-center justify-between">
      
      {/* Header */}
      <div
        id='header' 
        className='flex flex-col justify-between py-24 px-8 relative'
        style={{ 
          backgroundImage: "url(https://cdn.pixabay.com/photo/2019/11/20/17/42/buildings-4640671_1280.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-7xl drop-shadow-xl'>TAMZEED QUAZI</h1>
          <h5 className='text-xl drop-shadow text-zinc-100'>Student Developer</h5>
        </div>
        <button className='btn btn-circle btn-sm btn-outline absolute bottom-2 right-1 bg-transparent' onClick={(e) => handleClickScroll("about")}><BsArrowDownShort></BsArrowDownShort></button>
      </div>

      {/* About  https://cdna.artstation.com/p/assets/images/images/033/956/654/large/stonie-williams-img-1650.jpg?1611014891 */}
      <div 
        id="about" 
        className='min-h-screen bg-zinc-900 flex items-center justify-center relative' 
      >
        <div className="max-w-md mx-auto bg-zinc-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl transform transition-transform hover:scale-105">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://cdna.artstation.com/p/assets/images/images/033/956/654/large/stonie-williams-img-1650.jpg?1611014891" alt="Tamzeed Photo"/>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-2xl font-bold">About Me</div>
              <p className="mt-2">
                Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dicta vero laboriosam quaerat odit voluptas pariatur, blanditiis dolores dolor nam qui expedita reprehenderit. Necessitatibus distinctio excepturi natus voluptates similique facilis. Hic excepturi maiores laboriosam dolore! In, facilis? Corporis, quod voluptates voluptas necessitatibus tempora, veritatis natus magni nobis architecto sit quae?
              </p>
            </div>
          </div>
        </div>
        <button className='btn btn-circle btn-sm btn-outline absolute bottom-2 right-1 bg-transparent' onClick={(e) => handleClickScroll("interests")}><BsArrowDownShort></BsArrowDownShort></button>
      </div>


      {/* Interests flex justify-center items-center*/}
      <div id="interests" className='min-h-screen flex flex-col items-center justify-center gap-4 relative'>
        <label className=''>Interests and Skills</label>
        <div className='grid gap-4 md:grid-cols-2 md:grid-rows-2 sm:grid-rows-4 py-10 w-[75%]'>
          <div className="group card w-[100%] bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BiCodeBlock size={50}></BiCodeBlock>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Full Stack Development</h2>
              <div className='flex flex-row gap-x-2'>
                <div className="badge badge-neutral group-hover:block hidden">ReactJS</div>
                <div className="badge badge-neutral group-hover:block hidden">HTML</div>
                <div className="badge badge-neutral group-hover:block hidden">CSS</div>
                <div className="badge badge-neutral group-hover:block hidden">PostGresSQL</div>
              </div>
            </div>
          </div>

          <div className="group card w-[100%] bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BiGitBranch size={50}></BiGitBranch>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Software Engineering</h2>
              <div className='flex flex-row gap-x-2'>
                <div className="badge badge-neutral group-hover:block hidden">Java</div>
                <div className="badge badge-neutral group-hover:block hidden">C++</div>
                <div className="badge badge-neutral group-hover:block hidden">Python</div>
              </div>
            </div>
          </div>

          <div className="group card w-[100%] bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BsFillLightningChargeFill size={50}></BsFillLightningChargeFill>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Electronics</h2>
              <div className='flex flex-row gap-x-2'>
                <div className="badge badge-neutral group-hover:block hidden">Arduino</div>
                <div className="badge badge-neutral group-hover:block hidden">C++</div>
              </div>
            </div>
          </div>

          <div className="group card w-[100%] bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
            <BsCpuFill size={50}></BsCpuFill>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Machine Learning</h2>
              {/* <div className='flex flex-row gap-x-2'>
                <div className="badge badge-neutral group-hover:block hidden">Currently Learning</div>
              </div> */}
            </div>
          </div>
        </div>
        <button className='btn btn-circle btn-sm btn-outline absolute bottom-2 right-1 bg-transparent' onClick={(e) => handleClickScroll("projects")}><BsArrowDownShort></BsArrowDownShort></button>
      </div>


      {/* Project Showcase */}
      <div id="projects" className='min-h-screen relative flex flex-col justify-center items-center '>
        <h1 className='text-6xl'>Projects</h1>
        
        <div className='flex md:flex-row flex-col justify-center items-center gap-4'>

          <HoverCard
            imageSrc="https://i.pinimg.com/474x/3a/97/57/3a9757fd27af9a5baf6292335e8c22a0.jpg"
            title="Card 1"
            description="This is the description of Card 1."
          />

          <HoverCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxfKsFWHUOHWTl5gpq8Ic1tIMzEB_vKB4oDZyYCe2WDEpN_AzF04evWh6Pj7a-I6yICY&usqp=CAU"
            title="Card 1"
            description="This is the description of Card 1."
          />

          <HoverCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlE6gUsPdGAL-Dbpibi9Z-gRmqgS2Qb4o3IIIVUPzTg2QA4l0WGhGakZGM0GeyAoOJMg&usqp=CAU"
            title="Card 1"
            description="This is the description of Card 1."
          />
          
        </div>
        <button className='btn btn-circle btn-sm btn-outline absolute bottom-2 right-1 bg-transparent' onClick={(e) => handleClickScroll("header")}><BsArrowUpShort></BsArrowUpShort></button>
      </div>
    </main>
  );
}
