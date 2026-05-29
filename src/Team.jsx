import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import slide1 from './assets/slide1.png'
import slide2 from './assets/slide2.png'
import slide3 from './assets/slide3.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

import { Pagination } from 'swiper/modules';

function Team() {
    return (
        <>
            <div className="container max-w-[1300px] mx-auto p-20">
                <div className='flex flex-col lg:flex-row items-center gap-10'>
                    <div className="content max-w-[600px] flex flex-col gap-4">
                        <h4 className='text-black font-semibold text-4xl'>It’s a team of experienced and skilled people with distributions</h4>
                        <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                        <a href="#" className='text-[#0AA8AA]'>
                            <div className="div flex items-center gap-2">
                                <p>Check it out</p>
                                <FaArrowRight />
                            </div>
                        </a>
                    </div>
                    <div className="slider w-full lg:w-1/2 min-w-0 h-[400px]">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={slide1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={slide2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={slide3} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team