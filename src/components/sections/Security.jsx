import React from 'react'
import security from '@/assets/security.png'
import { FaArrowRight } from "react-icons/fa";

function Security() {
    return (
        <>
            <div className="w-full bg-[#EDF6F5] py-10">
                <div className='max-w-[1200px] mx-auto p-10 flex flex-col xl:flex-row items-center gap-8'>
                    <div className="image">
                        <img src={security} alt="" />
                    </div>
                    <div className="content max-w-[600px] flex flex-col gap-4">
                        <h4 className='text-black font-semibold text-4xl'>It is a privately owned Information and cyber security company</h4>
                        <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                        <a href="#" className='text-[#0AA8AA]'>
                            <div className="div flex items-center gap-2">
                                <p>Check it out</p>
                                <FaArrowRight />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Security