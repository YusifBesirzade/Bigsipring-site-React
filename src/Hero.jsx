import React from 'react'
import hero from './assets/hero.svg'

function Hero() {
    return (
        <>
            <div className="container max-w-[800px] mx-auto py-20 flex flex-col gap-10 p-10">
                <div className="title text-center flex flex-col items-center gap-5">
                    <h2 className='font-semibold text-4xl xl:text-5xl'>Let us solve your critical website development challenges</h2>
                    <div className="desc text-[#897777]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque</p>
                        <p>totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
                    </div>
                </div>
                <div className="image">
                    <img src={hero} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero