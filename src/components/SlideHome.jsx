"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function SlideHome() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setSlidesPerView(4); // lg
    } else if (width >= 768) {
      setSlidesPerView(3); // md
    } else if (width <= 639) {
      setSlidesPerView(3); // sm and xs
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    updateSlidesPerView(); // Set the initial value
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full h-[200px]"
        grabCursor={true}
      >
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="bg-white text-black flex items-center justify-center rounded-md text-center h-full">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
}
