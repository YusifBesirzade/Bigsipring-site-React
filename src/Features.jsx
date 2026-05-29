import React from 'react'
import code from './assets/feature1.svg'
import oop from './assets/feature2.svg'
import service from './assets/feature3.svg'
import love from './assets/feature4.svg'
import speed from './assets/feature5.svg'
import cloud from './assets/feature6.svg'

function Features() {
    return (
        <>
            <div className="w-full bg-[#EDF6F5] py-10 text-center">
                <h3 className='text-2xl font-semibold'>Something You Need To Know</h3>
                <div className="cards max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                    <div className="card w-full bg-white flex flex-col items-center gap-2 p-5 rounded-2xl">
                        <img className='w-[50px]' src={code} alt="" />
                        <h4 className='text-black font-semibold'>Clean Code</h4>
                        <p className='text-[#847777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
                    </div>
                    <div className="card w-full bg-white flex flex-col items-center gap-2 p-5 rounded-2xl">
                        <img className='w-[50px]' src={oop} alt="" />
                        <h4 className='text-black font-semibold'>Object Oriented</h4>
                        <p className='text-[#847777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
                    </div>
                    <div className="card w-full bg-white flex flex-col items-center gap-2 p-5 rounded-2xl">
                        <img className='w-[50px]' src={service} alt="" />
                        <h4 className='text-black font-semibold'>24h Service</h4>
                        <p className='text-[#847777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
                    </div>
                    <div className="card w-full bg-white flex flex-col items-center gap-2 p-5 rounded-2xl">
                        <img className='w-[50px]' src={love} alt="" />
                        <h4 className='text-black font-semibold'>Value for Money</h4>
                        <p className='text-[#847777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
                    </div>
                    <div className="card w-full bg-white flex flex-col items-center gap-2 p-5 rounded-2xl">
                        <img className='w-[50px]' src={speed} alt="" />
                        <h4 className='text-black font-semibold'>Faster Response</h4>
                        <p className='text-[#847777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
                    </div>
                    <div className="card w-full bg-white flex flex-col items-center gap-2 p-5 rounded-2xl">
                        <img className='w-[50px]' src={cloud} alt="" />
                        <h4 className='text-black font-semibold'>Cloud Support</h4>
                        <p className='text-[#847777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features