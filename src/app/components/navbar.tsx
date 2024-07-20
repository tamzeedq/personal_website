'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='relative z-50 font-mono border-2 border-latte'>
            <div className='flex justify-between items-center m-4 w-[95%] border-2 border-rblack rounded-lg bg-latte text-rblack mx-auto px-4'>

                {/* Regular Nav View */}
                <Link href='/'>
                    <div className='relative font-semibold hover:scale-105 transition duration-300 group'>
                        Tamzeed Quazi
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-rblack transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                    </div>
                </Link>
                <ul className='hidden md:flex items-center'>
                    <li className='p-4 group'>
                        <a href='/projects' className='relative'>
                            Projects
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-rblack transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                        </a>
                    </li>
                    <li className='p-4 group'>
                        <a href='/resume' className='relative'>
                            Resume
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-rblack transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left'></span>
                        </a>
                    </li>
                    <li className='p-4 group'>
                        <button className="btn-sm rounded-lg group bg-rblack text-latte" onClick={() => (document.getElementById('modal') as HTMLDialogElement)?.showModal()}>Contact Me</button>
                    </li>
                </ul>

                {/* Mobile View Nav */}
                <div onClick={handleNav} className='block md:hidden p-4 cursor-pointer hover:scale-105 transition duration-300'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-full text-rblack border-r border-r-latte bg-latte ease-in-out duration-500 z-40 transform translate-y-0 transition-transform ease-out' : 'ease-in-out duration-500 fixed left-0 w-full transform -translate-y-full transition-transform ease-out'}>
                    <li className='p-4 border-b border-rblack'>
                        <div className='flex flex-row justify-between items-center'>
                            <Link href='/' onClick={handleNav}>
                                <div className='font-semibold hover:scale-105 transition duration-300 group'>
                                    Tamzeed Quazi
                                </div>
                            </Link>
                            <AiOutlineClose className='cursor-pointer btn-circle btn-sm hover:text-latte hover:bg-rblack transition duration-300 p-1' onClick={handleNav} size={15}></AiOutlineClose>
                        </div>
                    </li>
                    <li className='p-4 border-b border-rblack hover:bg-indigo hover:text-latte'>
                        <button
                            onClick={() => {
                                handleNav();
                                (document.getElementById('modal') as HTMLDialogElement)?.showModal();
                            }}
                        >
                            Contact Me
                        </button>
                    </li>
                    <li className='p-4 border-b border-rblack hover:bg-indigo hover:text-latte'>
                        <Link href='/projects' className='block' onClick={handleNav}>
                            Projects
                        </Link>
                    </li>
                    <li className='p-4 border-b border-rblack hover:bg-indigo hover:text-latte'>
                        <Link href='/resume' className='block' onClick={handleNav}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
            <dialog id="modal" className="modal">
                <div className="modal-box bg-latte text-rblack">
                    <h3 className="font-bold text-lg">Hi!👋</h3>
                    <p className="py-4">Thanks for checking out my website. Feel free to get connected with me through LinkedIn or email. Looking forward to hearing from you!</p>
                    <div className="flex items-center justify-center gap-4 text-rblack">
                        <Link href="https://www.linkedin.com/in/tamzeedquazi/">
                            <div className="hover:scale-105 hover:text-indigo">
                                <FaLinkedin size={30} />
                            </div>
                        </Link>
                        <Link href="mailto:tamzeed.q@gmail.com">
                            <div className="hover:scale-105 hover:text-indigo">
                                <HiOutlineMail size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default Navbar;
