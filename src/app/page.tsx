"use client"

import Image from 'next/image';
import Link from 'next/link';
import HoverCard from './components/hoverCard';
import Model from './components/model';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

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
      
      <div className='relative'>
        {/* Spinning Taurus */}
        <Model></Model> 

        {/* Header */}
        <div className='absolute bottom-[50%] w-full flex flex-col justify-center items-center bg-transparent'>
          <h1 className='md:text-7xl sm:text-5xl text-3xl drop-shadow-xl text-white'>TAMZEED QUAZI</h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              'Software Developer', 
              1000,
              'Computer Science student at UBC', 
              1000, 
              'Passionate Learner',
              1000,  
            ]}
            wrapper="span"
            repeat={Infinity}
            style={{ fontSize: '1.25rem', display: 'inline-block' , color: 'rgb(248 113 113)'}}
          />

          {/* Media buttons */}
          <div className='flex items-center justify-center gap-x-2 pt-2'>
            <button className='hover:scale-105 hover:text-amber-300'>
              <Link href="https://github.com/tamzeedq">
                <FaGithub></FaGithub>
              </Link>
            </button>
            <button className='hover:scale-105 hover:text-indigo-500'>
              <Link href="https://www.instagram.com/tamzeed.q/">
                <FaInstagram></FaInstagram>
              </Link>
            </button>
            <button className='hover:scale-105 hover:text-teal-200'>
              <Link href="https://www.linkedin.com/in/tamzeedquazi/">
                <FaLinkedin></FaLinkedin>
              </Link>
            </button>
            <button className='hover:scale-105 hover:text-red-200'>
              <Link href="mailto:tamzeed.q@gmail.com">
                <HiOutlineMail></HiOutlineMail>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
