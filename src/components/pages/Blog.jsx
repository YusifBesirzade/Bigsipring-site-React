import React from 'react'
import blog1 from '../../assets/blog4.jpg'
import blog2 from '../../assets/blog3.jpg'
import blog3 from '../../assets/blog2.jpg'
import { Link } from 'react-router-dom'

function Blog() {
    const blogs = [
        { id: 1, image: blog1, title: "How to make toys from old Olarpaper" },
        { id: 2, image: blog2, title: "What you need to know about Photography" },
        { id: 3, image: blog3, title: "How to make toys from old Olarpaper" }
    ]
    return (
        <>
            <div className='container max-w-[1200px] mx-auto py-20 px-5'>
                <h3 className='text-center text-5xl font-semibold'>Latest news</h3>
                <div className='flex flex-col lg:flex-row items-center gap-5 py-20'>
                    <img className='max-w-[500px] rounded-md' src={blog1} alt="" />
                    <div className='flex flex-col gap-5'>
                        <Link className='text-3xl font-semibold'>Adversus is a web-based dialer and practical CRM solution</Link>
                        <p>##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He</p>
                        <div className='w-max bg-[#0AA8A7] text-white py-3 px-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer'>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-5 py-10'>
                    {
                        blogs.map(item => (
                            <div className='flex flex-col gap-5'>
                                <img src={item.image} alt={item.title} className='w-full object-cover rounded-md' />
                                <h5 className='text-3xl font-semibold'>{item.title}</h5>
                                <div className='w-max bg-[#0AA8A7] text-white py-3 px-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer'>
                                    <Link>Read More</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Blog