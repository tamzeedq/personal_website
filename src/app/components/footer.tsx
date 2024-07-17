import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { GiSpiderMask } from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='flex items-center justify-center'>
      <footer className="footer text-rblack w-[95%] rounded-lg m-4 flex flex-row justify-between items-center p-4 border-2 border-rblack bg-latte mx-auto">
        <div className="flex items-center">
          <Link href="/" className='hover:text-dred'>
            <GiSpiderMask size={25} className='mr-2'></GiSpiderMask>
          </Link>
          <p className='font-semibold '>
            Tamzeed Quazi - 2023
          </p>
        </div> 
        <div className="flex md:place-self-center md:justify-self-end gap-4">
          <Link href="https://github.com/tamzeedq" className='hover:scale-125 transition-transform duration-300'>
            <AiFillGithub size={25} className='hover:text-indigo' />
          </Link>
          <Link href="https://www.linkedin.com/in/tamzeedquazi/" className='hover:scale-125 transition-transform duration-300'>
            <AiFillLinkedin size={25} className='hover:text-indigo' />
          </Link>
          <Link href="https://www.instagram.com/tamzeed.q/" className='hover:scale-125 transition-transform duration-300'>
            <AiFillInstagram size={25} className='hover:text-indigo' />
          </Link>
          <Link href="mailto:tamzeed.q@gmail.com" className='hover:scale-125 transition-transform duration-300'>
            <HiOutlineMail size={25} className='hover:text-indigo' />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
