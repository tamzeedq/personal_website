'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className='navbar-container relative z-50 h-15'>
      <div className='flex justify-between items-center bg-zinc-800 mx-auto px-4 text-white'>
        <Link href='/'>
            <div className='rounded-full border-2 border-transparent group overflow-hidden hover:border-red-400 transition duration-300'>
                <img
                    className='w-10 h-10 object-cover'
                    src="/images/tamzeed/profile_pic.jpg"
                    alt=""
                />
            </div>
        </Link>
        <ul className='hidden md:flex text-white'>
            <li className='p-4 group'>
                <a href='/about' className='relative'>
                    About
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                </a>
            </li>
            <li className='p-4 group'>
                <a href='/projects' className='relative'>
                    Projects
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                </a>
            </li>
            <li className='p-4 group'>
                <a href='https://drive.google.com/file/d/12H-IXikMOWN9UNcgz_lisb-YlVxYy0Fz/view?usp=drive_link' target='_blank' className='relative'>
                    Resume
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                </a>
            </li>
            <li className='p-4 group'>
                <a href='/contact' className='relative'>
                    Contact
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                </a>
            </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden cursor-pointer hover:text-red-400'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-full text-white border-r border-r-gray-900 bg-zinc-800 ease-in-out duration-500 z-40 transform translate-y-0 transition-transform ease-out' : 'ease-in-out duration-500 fixed left-0 w-full transform -translate-y-full transition-transform ease-out'}>
            <li className='p-4 border-b border-gray-600'>
                <div className='flex flex-row justify-between items-center'>
                    <Link href='/' onClick={handleNav}>
                        <div className='rounded-full border-2 border-transparent group overflow-hidden hover:border-red-400 transition duration-300'>
                            <img
                                className='w-10 h-10 object-cover'
                                src="/images/tamzeed/profile_pic.jpg"
                                alt=""
                            />
                        </div>
                    </Link>
                    <AiOutlineClose className='cursor-pointer hover:text-red-400' onClick={handleNav} size={20}></AiOutlineClose>
                </div>
            </li>

            <li className='p-4 border-b border-gray-600 hover:text-red-400'>
                <Link href='/about' className='block' onClick={handleNav}>
                    About
                </Link>
            </li>
            <li className='p-4 border-b border-gray-600 hover:text-red-400'>
                <Link href='/projects' className='block' onClick={handleNav}>
                    Projects
                </Link>
            </li>
            <li className='p-4 border-b border-gray-600 hover:text-red-400'>
                <Link href='/resume' className='block' onClick={handleNav}>
                    Resume
                </Link>
            </li>
            <li className='p-4 border-b border-gray-600 hover:text-red-400'>
                <Link href='/contact' className='block' onClick={handleNav}>
                    Contact
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
