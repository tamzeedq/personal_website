import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link href='/' className="btn btn-ghost normal-case text-xl">Tamzeed Quazi</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
                <li><Link href='/resume'>Resume</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
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