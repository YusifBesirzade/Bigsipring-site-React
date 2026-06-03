import React from 'react'
import logo from '@/assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { TfiSkype } from "react-icons/tfi";

function Footer() {
    return (
        <>
            <div className='bg-[#EDF6F5] p-10'>
                <div className="container max-w-[1140px] mx-auto mt-5">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-10'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-2xl font-semibold'>Company</h4>
                            <ul className='text-[#7A8397] flex flex-col gap-2'>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Quick Start</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-2xl font-semibold'>Product</h4>
                            <ul className='text-[#7A8397] flex flex-col gap-2'>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Platform</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-2xl font-semibold'>Support</h4>
                            <ul className='text-[#7A8397] flex flex-col gap-2'>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <a href="#">
                                <img className='w-[200px]' src={logo} alt="" />
                            </a>
                            <p className='text-[#7A8397] max-w-[200px]'>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</p>
                            <div className="social flex gap-4 text-3xl">
                                <CiFacebook className='cursor-pointer text-[#0AA8A7] hover:text-black' />
                                <TiSocialTwitterCircular className='cursor-pointer text-[#0AA8A7] hover:text-black' />
                                <CiLinkedin className='cursor-pointer text-[#0AA8A7] hover:text-black' />
                                <TfiSkype className='cursor-pointer text-[#0AA8A7] hover:text-black' />
                            </div>
                        </div>
                    </div>
                    <p className='text-center py-3 text-[#777777]'>Designed and Developed By Themefisher • Distributed by ThemeWagon</p>
                </div>
            </div>
        </>
    )
}

export default Footer