import React from 'react'
import banner from './assets/banner.svg'
import cta from './assets/cta.svg'

function Experience() {
    return (
        <>
            <div className='flex flex-col gap-4 py-10'>
                <h4 className='text-4xl text-center font-semibold'>Experience the best workflow with us</h4>
                <img className='w-full' src={banner} alt="" />
            </div>
            <div className='w-full max-w-[800px] mx-auto py-20 px-5'>
                <div className="flex flex-col xl:flex-row items-center gap-8">
                    <img className='max-w-[350px] object-contain' src={cta} alt="" />
                    <div className="title w-full md:w-1/2 flex flex-col gap-4">
                        <h4 className='text-3xl font-semibold'>Ready to get started?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</p>
                        <div className="btn w-max bg-[#0AA8A7] text-white py-3 px-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer">
                            <a href="#" className='block w-full h-full'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience