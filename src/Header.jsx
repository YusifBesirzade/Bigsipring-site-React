import React from 'react'
import logo from './assets/logo.png'
import { FaBars } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="container max-w-[1140px] mx-auto mt-2">
                <div className='flex items-center justify-between px-5'>
                    <div className="image">
                        <img src={logo} alt="" />
                    </div>
                    <ul className='hidden md:flex items-center gap-5 text-md font-semibold'>
                        <li className='hover:text-[#0AA8A7]'><a href="#">Home</a></li>
                        <li className='hover:text-[#0AA8A7]'><a href="#">Blog</a></li>
                        <li className='hover:text-[#0AA8A7]'><a href="#">Pricing</a></li>
                        <li className='hover:text-[#0AA8A7]'><a href="#">Contact</a></li>
                        <li className='hover:text-[#0AA8A7]'><a href="#">FAQ</a></li>
                    </ul>
                    <div className="btn hidden md:block bg-[#0AA8A7] text-white py-3 px-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer">
                        <a href="#">Get Started</a>
                    </div>
                    <div className="menu-bar block md:hidden">
                        <FaBars className='text-gray-400 text-2xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header