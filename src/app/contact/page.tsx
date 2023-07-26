import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div 
      className='min-h-screen flex items-center justify-center bg-cover relative '
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564072021684-429ab786cffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80')",
      }}>
      <div className='bg-zinc-800 p-8 rounded-lg w-[75%] flex flex-col gap-4'>
        {/* Image stuff */}
        <div className='flex justify-center'>
          <img
            className='rounded-full w-20 h-20 absolute -translate-y-[85%]'
            src='https://staticg.sportskeeda.com/editor/2023/06/31e33-16861465340175-1920.jpg'
            alt=''
          />
        </div>
        {/* Contact info stuff */}
        <h1 className='font-bold text-5xl text-center'>Get in touch!</h1>
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ea soluta repudiandae esse
          obcaecati reiciendis.
        </p> */}
        <div className='flex items-center justify-center gap-x-2'>
          <button className='btn btn-sm btn-circle hover:scale-105 hover:text-amber-300'>
            <Link href="https://github.com/tamzeedq">
              <FaGithub></FaGithub>
            </Link>
          </button>
          <button className='btn btn-sm btn-circle hover:scale-105 hover:text-indigo-500'>
            <Link href="https://www.instagram.com/tamzeed.q/">
              <FaInstagram></FaInstagram>
            </Link>
          </button>
          <button className='btn btn-sm btn-circle hover:scale-105 hover:text-teal-200'>
            <Link href="https://www.linkedin.com/in/tamzeedquazi/">
              <FaLinkedin></FaLinkedin>
            </Link>
          </button>
          <button className='btn btn-sm btn-circle hover:scale-105 hover:text-red-200'>
            <Link href="mailto:tamzeed.q@gmail.com">
              <HiOutlineMail></HiOutlineMail>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
