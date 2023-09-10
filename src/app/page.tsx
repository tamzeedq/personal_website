"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BsCpuFill, BsFillLightningChargeFill, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { BiCodeBlock, BiGitBranch } from 'react-icons/bi';
import HoverCard from './components/hoverCard';
import Model from './components/model';

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
        <Model></Model>
        <div className='absolute bottom-[50%] w-full flex flex-col justify-center items-center bg-transparent'>
          <h1 className='text-7xl drop-shadow-xl text-white'>TAMZEED QUAZI</h1>
          <h5 className='text-xl drop-shadow text-zinc-100'>Student Developer</h5>
        </div>
      </div>
    </main>
  );
}
