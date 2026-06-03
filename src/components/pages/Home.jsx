import React from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Marketing from '../sections/Marketing'
import Security from '../sections/Security'
import Team from '../sections/Team'
import Company from '../sections/Company'
import Experience from '../sections/Experience'

function Home() {
    return (
        <>
            <main className='w-full min-h-screen'>
                <Hero />
                <Features />
                <Marketing />
                <Security />
                <Team />
                <Company />
                <Experience />
            </main>
        </>
    )
}

export default Home