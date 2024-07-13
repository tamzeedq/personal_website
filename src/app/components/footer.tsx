import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { GiSpiderMask } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='flex items-center justify-center'>
      <footer className="footer w-[97%] rounded-lg m-4 flex flex-row justify-between items-center p-4 bg-zinc-800 text-white mx-auto">
        <div className="flex items-center">
          <Link href="/" className='hover:text-red-500'>
            <GiSpiderMask size={25} className='mr-2'></GiSpiderMask>
          </Link>
          <p className='font-semibold '>
            Tamzeed Quazi - 2023
          </p>
        </div> 
        <div className="flex md:place-self-center md:justify-self-end gap-4">
          <Link href="https://github.com/tamzeedq" className='hover:scale-125 transition-transform duration-300'>
            <AiFillGithub size={25} className='hover:text-red-500' />
          </Link>
          <Link href="https://www.linkedin.com/in/tamzeedquazi/" className='hover:scale-125 transition-transform duration-300'>
            <AiFillLinkedin size={25} className='hover:text-red-500' />
          </Link>
          <Link href="https://www.instagram.com/tamzeed.q/" className='hover:scale-125 transition-transform duration-300'>
            <AiFillInstagram size={25} className='hover:text-red-500' />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
