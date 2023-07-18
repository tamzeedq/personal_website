import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import{ GiSpiderMask } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="footer flex flex-row justify-between items-center p-4 bg-neutral text-neutral-content">
        <div className="flex items-center">
          <GiSpiderMask size={25}></GiSpiderMask>
          <p>Tamzeed Quazi - 2023</p>
        </div> 
        <div className="flex md:place-self-center md:justify-self-end">
          <Link href="https://github.com/tamzeedq" className='hover:scale-125 hover:text-white'><AiFillGithub size={25}></AiFillGithub></Link>
          <Link href="https://www.linkedin.com/in/tamzeedquazi/" className='hover:scale-125 hover:text-white'><AiFillLinkedin size={25}></AiFillLinkedin></Link>
          <Link href="https://www.instagram.com/tamzeed.q/" className='hover:scale-125 hover:text-white'><AiFillInstagram size={25}></AiFillInstagram></Link>
        </div>
    </footer>
  )
}

export default Footer