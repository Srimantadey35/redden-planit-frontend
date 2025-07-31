"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const page = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const cardData = [
    {
      img: "/images/create-your-event/card-1.png",
      title: "Top wedding locations in Kolkata",
      link: "/wedding-locations-kolkata",
    },
    {
      img: "/images/create-your-event/card-2.png",
      title: "Continental food service for your event",
      link: "/food-service",
    },
    {
      img: "/images/create-your-event/card-3.png",
      title: "Open garden party ground near you",
      link: "/party-ground",
    },
    {
      img: "/images/create-your-event/card-4.png",
      title: "Exclusive bridal makeup services for your wedding",
      link: "/bridal-makeup",
    },
    {
      img: "/images/create-your-event/card-5.png",
      title: "Beautiful wedding cards designed for you",
      link: "/wedding-cards",
    },
    {
      img: "/images/create-your-event/card-6.png",
      title: "Beautiful card design for you",
      link: "/card-design",
    },
    {
      img: "/images/create-your-event/card-7.png",
      title: "Top rated Bars in your location",
      link: "/bar-service",
    },
    {
      img: "/images/create-your-event/card-8.png",
      title: "Exclusive website designs for weddings",
      link: "/wedding-websites",
    },
    {
      img: "/images/create-your-event/card-9.png",
      title: "Explore vendor services in Kolkata",
      link: "/vendor-services-kolkata",
    },
    {
      img: "/images/create-your-event/card-10.png",
      title: "Top wedding venues in your location",
      link: "/wedding-venues",
    },
    {
      img: "/images/create-your-event/card-11.png",
      title: "Top brands and DJs in your location",
      link: "/dj-services",
    },
    {
      img: "/images/create-your-event/card-12.png",
      title: "Explore wedding banquet hall options near you",
      link: "/banquet-halls",
    },
    {
      img: "/images/create-your-event/card-13.png",
      title: "Beautiful cakes & desserts services in your location",
      link: "/cakes-desserts",
    },
    {
      img: "/images/create-your-event/card-14.png",
      title: "Explore catering services for you",
      link: "/catering",
    },
    {
      img: "/images/create-your-event/card-15.png",
      title: "Exclusive photography services for events",
      link: "/photography",
    },
  ];

  return (
    <div className="bg-[#FBFBFB]">
      <Header />
      <div className="pt-[20px] sm:pt-[40px] 2xl:pt-[60px] w-full 2xl:px-0 px-[22px] sm:px-6 smd:px-10 2xl:max-w-[1200px] mx-auto ">
        <div className="bg-white rounded-[12px] border border-[#F0F0F0] py-[30px] sm:py-[5px] px-[25px] sm:px-[30px] smd:px-[50px] 4xl:px-[90px] flex items-center justify-between shadow-sm sm:flex-row flex-col-reverse">
          <div className="pt-[30px] sm:py-[30px]">
            <h4 className="font-normal text-[13px] sm:text-left text-center sm:text-[17px] 3xl:text-[20px] text-[#333333]">
              Let&apos;s make everlasting experiences with us.
            </h4>
            <h2 className="sm:text-left text-center font-semibold text-[30px] 2xl:text-[35px] 3xl:text-[42px] text-black leading-[1.2]">
              <span className="text-[#EA0056]">Create</span> Your Event With US
            </h2>
            <button className="mt-[20px] 2xl:mt-[30px] font-semibold sm:w-fit w-full text-[16px] 3xl:text-[18px] text-white bg-[#EA0056] hover:bg-[#c60149] transition-all cursor-pointer rounded-lg px-[35px] py-[6px] sm:py-[10px]">
              Create you event now
            </button>
          </div>
          <div>
            <Image
              className="w-full sm:w-[200px] lg:w-[294px]"
              width={294}
              height={209}
              src={"/images/event-righ.svg"}
              alt="event"
            />
          </div>
        </div>

        <div className="mt-[30px] 2xl:mt-[50px] 3xl:mt-[80px] pb-[20px] md:pb-[60px] 2xl:pb-[90px] 3xl:pb-[115px]">
          <h3 className="font-medium text-[23px] md:mb-[20px] smd:mb-[28px] 3xl:text-[28px] text-black leading-[1.5] flex ">
            <span className="inline-block border-l-[5px] border-l-[#EA0056] mr-2 h-[35px]"></span>
            <span>See what can you get more from PlanIt</span>
          </h3>

          <div className="md:grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 hidden ">
            {cardData.map((card, index) => (
              <div key={index} className="cursor-pointer">
                <Image
                  width={216}
                  height={312}
                  className=" w-full h-auto rounded-xl"
                  src={card.img}
                  alt={`card-${index}`}
                />
                <Link
                  href={`${card.link}`}
                  className="flex items-end mt-[13px] 3xl:mt-[18px]"
                >
                  <h4 className="font-medium text-[16px] text-[#333333] flex-1 mr-2 leading-[1.5]">
                    {card.title}
                  </h4>
                  <Image
                    className="pb-[7px]"
                    width={9}
                    height={11}
                    src={"/images/create-your-event/rightarrow.svg"}
                    alt={`rightarrow`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-10 ml-[22px] sm:ml-6 md:hidden block relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2.5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            setSwiperInstance(swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={false}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
            },
            0: {
              slidesPerView: 1.5,
            },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer">
                <Image
                  width={216}
                  height={312}
                  className="rounded-[12px] w-full h-auto"
                  src={card.img}
                  alt={`card-${index}`}
                />
                <Link
                  href={`${card.link}`}
                  className="flex items-end mt-[13px] 3xl:mt-[18px]"
                >
                  <h4 className="font-medium text-[16px] text-[#333333] flex-1 mr-2 leading-[1.5]">
                    {card.title}
                  </h4>
                  <Image
                    className="pb-[7px]"
                    width={9}
                    height={11}
                    src={"/images/create-your-event/rightarrow.svg"}
                    alt={`rightarrow`}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="flex justify-between items-center absolute w-full z-[2] sliderbtns"
          style={{ top: '27%' }}
        >
          <button
            className="size-[31px] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer ml-[-15px]"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <Image
              width={5}
              height={10}
              src={"/images/final-home/leftarrow.svg"}
              alt="leftarrow"
            />
          </button>
          {/* <button
            className="size-[31px] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer mr-[-15px]"
            onClick={() => swiperInstance?.slideNext()}
          >
            <Image
              width={5}
              height={10}
              src={"/images/final-home/rightarrow.svg"}
              alt="rightarrow"
            />
          </button> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
