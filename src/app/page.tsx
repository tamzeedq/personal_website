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
        className='min-h-screen flex flex-col justify-center items-center py-24 px-8 relative'
        style={{ 
          backgroundImage: "url(https://cdn.pixabay.com/photo/2019/11/20/17/42/buildings-4640671_1280.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-7xl drop-shadow-xl text-white'>TAMZEED QUAZI</h1>
          <h5 className='text-xl drop-shadow text-zinc-100'>Student Developer</h5>
        </div>
      </div>
    </main>
  );
}
