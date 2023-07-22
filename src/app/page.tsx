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
        {/* <div className='border-2 border-sky-500 join h-[75vh] w-[75%] flex flex-col sm:flex-row transform transition-transform hover:scale-105'>
          <div className='bg-zinc-600 rounded-md join-item p-10 w-full sm:w-60% overflow-auto'>
            <h1>About me</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, commodi odit eius eum, quos voluptatum quaerat magnam amet, eligendi vel assumenda quo. Neque vero quia molestiae quae, error sed. Accusantium cum reprehenderit quibusdam laborum autem inventore, quod dolorem dicta sint eius, iusto omnis officiis quisquam, modi maiores quis velit itaque.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique autem harum sed placeat itaque quo aliquam nulla vitae, sit quis rem eum deserunt nostrum molestiae, odio quibusdam suscipit unde. Eius, autem a debitis nam repudiandae dolorum sunt repellat consectetur nihil? Temporibus sint fuga magni inventore ad exercitationem nemo hic!
              {/* Add more text if necessary */}
            {/* </p>
          </div>
          <div className='join-item w-full sm:w-40%'>
            <img 
              className='w-full h-full object-cover'
              src='https://cdna.artstation.com/p/assets/images/images/033/956/654/large/stonie-williams-img-1650.jpg?1611014891'
              alt='Profile'
            />
          </div>          
        </div> */}
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
      </div>


      {/* Interests flex justify-center items-center*/}
      <div id="interests" className='min-h-screen flex flex-col items-center justify-center gap-4'>
        <label className='border-2 border-sky-500'>Interests</label>
        <div className='grid gap-4 md:grid-cols-2 md:grid-rows-2 sm:grid-rows-4 border-2 border-sky-500'>
        <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BiCodeBlock size={50}></BiCodeBlock>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web Development</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BiGitBranch size={50}></BiGitBranch>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Software Development</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BsFillLightningChargeFill size={50}></BsFillLightningChargeFill>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Electronics</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl bg-zinc-800 transform transition-transform hover:scale-105">
            <figure className="px-10 pt-10">
              <BsCpuFill size={50}></BsCpuFill>
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
