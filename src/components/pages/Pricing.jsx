import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <>
            <div className="container max-w-[1200px] mx-auto py-20">
                <h4 className='text-5xl font-semibold text-center'>Pricing</h4>
                <div className="cards flex flex-col gap-5 lg:flex-row justify-center items-center lg:gap-0 p-10 lg:px-0">
                    <div className="card flex flex-col justify-center items-center gap-5 relative z-10 w-full max-w-[380px] h-[400px] border lg:border-r-white border-[#DFDFDF] rounded-l-md">
                        <h5 className='text-2xl font-bold'>Basic Plan</h5>
                        <div className='flex items-end gap-1'>
                            <p className='text-4xl font-semibold'>$49</p>
                            <p className='text-gray-500'>/ month</p>
                        </div>
                        <p className='text-gray-500 text-xl'>Best For Small Individuals</p>
                        <ul className='text-gray-500 text-center'>
                            <li>Express Service</li>
                            <li>Customs Clearance</li>
                            <li>Time-Critical Services</li>
                        </ul>
                        <Link className="text-md font-bold px-6 py-2 text-gray-500 border-1 border-[#0AA8A7] rounded-3xl cursor-pointer hover:text-[#0AA8A7] hover:border-gray-500 hover:scale-105 transition-transform">Get started for free</Link>
                    </div>
                    <div className="card flex flex-col justify-center items-center gap-5 relative z-50 w-full max-w-[360px] h-[460px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white rounded-md">
                        <h5 className='text-2xl font-bold'>Professional Plan</h5>
                        <div className='flex items-end gap-1'>
                            <p className='text-4xl font-semibold'>$69</p>
                            <p className='text-gray-500'>/ month</p>
                        </div>
                        <p className='text-gray-500 text-xl'>Best For Professionals</p>
                        <ul className='text-gray-500 text-center'>
                            <li>Express Service</li>
                            <li>Customs Clearance</li>
                            <li>Time-Critical Services</li>
                            <li>Cloud Service</li>
                            <li>Best Dashboard</li>
                        </ul>
                        <Link className="text-md font-bold p-3 bg-[#0AA8A7] text-white rounded-3xl hover:scale-105 transition-transform cursor-pointer">Get started</Link>
                    </div>
                    <div className="card flex flex-col justify-center items-center gap-5 relative z-10 w-full max-w-[380px] h-[400px] border lg:border-l-white border-[#DFDFDF] rounded-r-md">
                        <h5 className='text-2xl font-bold'>Business Plan</h5>
                        <div className='flex items-end gap-1'>
                            <p className='text-4xl font-semibold'>$99</p>
                            <p className='text-gray-500'>/ month</p>
                        </div>
                        <p className='text-gray-500 text-xl'>Best For Large Individuals</p>
                        <ul className='text-gray-500 text-center'>
                            <li>Express Service</li>
                            <li>Customs Clearance</li>
                            <li>Time-Critical Services</li>
                        </ul>
                        <Link className="text-md font-bold px-6 py-2 text-gray-500 border-1 border-[#0AA8A7] rounded-3xl cursor-pointer hover:text-[#0AA8A7] hover:border-gray-500 hover:scale-105 transition-transform">Get started for free</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing