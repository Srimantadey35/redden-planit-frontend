'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';
import rightPurpleArw from "@/app/assets/images/icons/right-purple-arw.svg"
import cardWbdOne from "@/app/assets/images/card021.jpg"
import cardWbdTwo from "@/app/assets/images/card022.jpg"
import cardWbdThree from "@/app/assets/images/card023.jpg"
import cardWbdFour from "@/app/assets/images/card024.jpg"
import cardWbdFive from "@/app/assets/images/card025.jpg"

function PlanItCardSlider({ isInChat }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);
  return (
    <div className="relative">
      {!isInChat &&
        <h4 className='text-xl font-medium text-black border-l-4 border-[#EA0056] pl-3 mb-8'>See what can you get more from PlanIt</h4>
      }

      {swiperReady && (
        <Swiper slidesPerView={'auto'} spaceBetween={20} navigation={{ prevEl: prevRef.current, nextEl: nextRef.current, }} modules={[Navigation]} className="wedd-posterSlider px-4" onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = prevRef.current; swiper.params.navigation.nextEl = nextRef.current; }}>
          {[cardWbdOne, cardWbdTwo, cardWbdThree, cardWbdFour, cardWbdFive].map((img, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white shadow-md rounded-xl p-2'>
                {!isInChat ? (
                  <div className='mt-1.5 mb-3 min-h-10'>
                    <Link href="#" className='no-underline flex items-center text-sm text-black font-normal w-fit hover:underline group'>
                      {[
                        'Beautiful wedding cards',
                        'Top Wedding locations in Kolkata',
                        'Excusive bridal makeup services',
                        'Continental food service',
                        'Open garden party ground'
                      ][index]}
                      <Image src={rightPurpleArw} className='ml-1.5 group-hover:translate-x-1 transition' alt="arrow" width="14" height="16" />
                    </Link>
                  </div>
                ) : ('')

                }
                <div className='relative before:block before:w-full before:pt-[141.31%] rounded-xl overflow-hidden'>
                  <Image src={img} className='absolute size-full object-cover z-10 top-0 right-0 bottom-0 left-0' alt="slide" width="230" height="325" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Navigation Buttons */}
      <div ref={prevRef} className="swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-2xl text-black size-12 shadow-2xl flex items-center justify-center rounded-full bg-white hover:bg-[#EA0056] hover:text-white">
        &#10094;
      </div>
      <div ref={nextRef} className="swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-2xl text-black size-12 shadow-2xl flex items-center justify-center rounded-full bg-white hover:bg-[#EA0056] hover:text-white">
        &#10095;
      </div>
    </div>
  );
}

export default PlanItCardSlider;
