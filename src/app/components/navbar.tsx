import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    //fixed top-0 left-0 w-full z-10
    // bg-gradient-to-b from-black to-transparent
    // border-2 border-sky-500
  return (
    <div className="navbar bg-zinc-800 flex flex-row justify-between">
        <div className="flex">
            <Link href='/' className="btn btn-ghost normal-case text-xl">
                <div className="avatar">
                    <div className="w-[18%] rounded-full shadow-xl border-2 border-white">
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" alt="Spider-Man" />
                    </div>
                </div>
            </Link>
        </div>
        <div className="flex">
            <ul className="menu menu-horizontal">
                <li className='pr-1'><Link href='/about'>About</Link></li>
                <li className='pr-1'><Link href='/projects'>Projects</Link></li>
                <li className='pr-1'><Link href='/resume'>Resume</Link></li>
                <li className=''><Link href='/contact'>Contact</Link></li>
                {/* <li>
                    <details>
                    <summary>
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar