import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div className="container max-w-[1200px] mx-auto py-20">
                <h4 className='text-5xl font-semibold text-center'>Contact Us</h4>
                <div className="content flex flex-col lg:flex-row gap-12 items-start justify-between py-15 px-10">
                    <div className="form w-full lg:flex-1">
                        <form action="" className='flex flex-col gap-5'>
                            <input className='w-full rounded-sm border border-gray-200 outline-none p-2' type="text" placeholder='Name' />
                            <input className='w-full rounded-sm border border-gray-200 outline-none p-2' type="email" placeholder='Your Email' />
                            <input className='w-full rounded-sm border border-gray-200 outline-none p-2' type="text" placeholder='Subject' />
                            <textarea className='w-full rounded-sm h-44 border border-gray-200 outline-none p-2' placeholder='Your Message'></textarea>
                            <button className='text-md font-bold p-3 w-max bg-[#0AA8A7] text-white rounded-3xl hover:scale-105 transition-transform cursor-pointer'>Send Now</button>
                        </form>
                    </div>
                    <div className="contactus w-full lg:max-w-[500px] flex flex-col gap-4 text-xl py-5">
                        <h4 className='font-bold'>Why you should contact us!</h4>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.</p>
                        <div className='font-semibold'>
                            <ul className='flex flex-col gap-4 font-medium'>
                                <li className='flex items-center gap-3 before:content-[""] before:w-2 before:h-2 before:bg-[#0AA8A7] hover:before:bg-red-500 before:rounded-full'>
                                    phone: +88 125 256 452
                                </li>
                                <li className='flex items-center gap-3 before:content-[""] before:w-2 before:h-2 before:bg-[#0AA8A7] hover:before:bg-red-500 before:rounded-full'>
                                    Mail: <Link to={'/'} className='hover:text-[#0AA8A7]'>info@bigspring.com</Link>
                                </li>
                                <li className='flex items-center gap-3 before:content-[""] before:w-2 before:h-2 before:bg-[#0AA8A7] hover:before:bg-red-500 before:rounded-full'>
                                    Address: 360 Main rd, Rio, Brazil
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact