"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BsCpuFill, BsFillLightningChargeFill } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { BiCodeBlock, BiGitBranch } from 'react-icons/bi';

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
    <main className="min-h-screen items-center justify-between">
      
      {/* Header */}
      <div 
        className='flex flex-row justify-between py-24 px-8'
        style={{ 
          backgroundImage: "url(https://cdn.pixabay.com/photo/2019/11/20/17/42/buildings-4640671_1280.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
      >
        <div className='flex flex-row items-center gap-4'>
          {/* <div className="avatar">
            <div className="w-32 rounded-full shadow-xl border-2 border-white">
              <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" alt="Spider-Man" />
            </div>
          </div> */}
          <div>
            <h1 className='text-5xl drop-shadow-xl'>TAMZEED QUAZI</h1>
            <h5 className='text-xl drop-shadow text-zinc-100'>Student Developer</h5>
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

      {/* About  https://cdna.artstation.com/p/assets/images/images/033/956/654/large/stonie-williams-img-1650.jpg?1611014891 */}
      <div 
        id="about" 
        className='min-h-screen bg-zinc-900 flex items-center justify-center' 
      >
        <div className='border-2 border-sky-500 join h-[75vh] w-[75%] transform transition-transform hover:scale-105'>
          <div className='bg-zinc-600 rounded-md join-item p-10 w-[60%]'>
            <h1>About me</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, commodi odit eius eum, quos voluptatum quaerat magnam amet, eligendi vel assumenda quo. Neque vero quia molestiae quae, error sed. Accusantium cum reprehenderit quibusdam laborum autem inventore, quod dolorem dicta sint eius, iusto omnis officiis quisquam, modi maiores quis velit itaque.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique autem harum sed placeat itaque quo aliquam nulla vitae, sit quis rem eum deserunt nostrum molestiae, odio quibusdam suscipit unde. Eius, autem a debitis nam repudiandae dolorum sunt repellat consectetur nihil? Temporibus sint fuga magni inventore ad exercitationem nemo hic!
            </p>
          </div>
          <div className='join-item w-[40%]'>
            <img 
            className='w-full h-full' 
            src='https://cdna.artstation.com/p/assets/images/images/033/956/654/large/stonie-williams-img-1650.jpg?1611014891'></img>
          </div>          
        </div>
      </div>

      {/* Interests flex justify-center items-center*/}
      <div id="interests" className='min-h-screen flex flex-col items-center justify-center gap-4'>
        <label className='border-2 border-sky-500'>Interests</label>
        <div className='grid gap-4 grid-cols-2 grid-rows-2 border-2 border-sky-500'>
        <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BiCodeBlock></BiCodeBlock>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web Development</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BiGitBranch></BiGitBranch>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Software Development</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BsFillLightningChargeFill></BsFillLightningChargeFill>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Electronics</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BsCpuFill></BsCpuFill>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Machine Learning</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className='min-h-screen bg-zinc-900'>
        <p>Skills section</p>
      </div>
      
      {/* Project Showcase */}
      <div id="projects" className='min-h-screen'>
        <p>Project Showcase</p>
      </div>
    </main>
  );
}
