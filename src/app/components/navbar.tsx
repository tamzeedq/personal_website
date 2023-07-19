import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-b from-black to-transparent fixed top-0 left-0 w-full z-10">
        <div className="flex-1">
            <Link href='/' className="btn btn-ghost normal-case text-xl">Tamzeed Quazi</Link>
        </div>
        <div className="flex-none">
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