"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   // Scroll to the section indicated in the URL hash
  //   if (router.asPath !== router.route) {
  //     const hash = router.asPath.substring(router.asPath.indexOf('#'));
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [router.asPath]);

  return (
    <main className="min-h-screen items-center justify-between py-24 px-8">
      {/* Header */}
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <div className="avatar">
            <div className="w-32 rounded-full shadow-xl border-2 border-white">
              <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" alt="Spider-Man" />
            </div>
          </div>
          <div>
            <h1 className='text-5xl drop-shadow-xl'>TAMZEED QUAZI</h1>
            <h5 className='text-xl drop-shadow text-gray-400'>Student Developer</h5>
          </div>
        </div>
        <div>
          <ul className='text-right text-xl cursor-pointer'>
            <li className='hover:underline hover:underline-offset-8 py-1'>
              <Link href="/#about">About</Link>
            </li>
            <li className='hover:underline hover:underline-offset-8 py-1'>
              <Link href="/#interests">Interests</Link>
            </li>
            <li className='hover:underline hover:underline-offset-8 py-1'>
              <Link href="/#skills">Skills</Link>
            </li>
            <li className='hover:underline hover:underline-offset-8 py-1'>
              <Link href="/#projects">Project Showcase</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* About */}
      <div id="about" className='min-h-screen'>
        <p>About section</p>
      </div>

      {/* Interests */}
      <div id="interests" className='min-h-screen'>
        <p>Interests section</p>
      </div>

      {/* Skills */}
      <div id="skills" className='min-h-screen'>
        <p>Skills section</p>
      </div>
      
      {/* Project Showcase */}
      <div id="projects" className='min-h-screen'>
        <p>Project Showcase section</p>
      </div>
    </main>
  );
}
