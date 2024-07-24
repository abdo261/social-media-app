"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function PostImageSlide() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full lg:h-[300px] md:h-[200px] h-[170px]  rounded-md"
        spaceBetween={3}
        grabCursor={true}
      >
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 1</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 2</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 3</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 4</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 5</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 6</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 7</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 8</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-gray-500 rounded-md flex justify-center items-center'>Image 9</SwiperSlide>
      </Swiper>
    </>
  );
}
