"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "swiper/modules";

const VenueSearches = ({
  imgOriginalSize,
  venuesearchData,
  imgSizeDesktop,
  slidesPerView,
  slidesPerViewTab,
  slidesPerViewMobo,
  top,
  slideKey,
}) => {
  const data = venuesearchData;
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  console.log(venuesearchData);
  

  return (
    <div className="venuwsearchslider relative">
      <div
        className="flex justify-between items-center absolute w-full z-[2] sliderbtns"
        style={{ top: `${top}` }}
      >
        <button
          ref={prevRef}
          className="size-[31px] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer ml-[-15px]"
        >
          <Image
            width={5}
            height={10}
            src={"/images/final-home/leftarrow.svg"}
            alt="leftarrow"
          />
        </button>
        <button
          ref={nextRef}
          className="size-[31px] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer mr-[-15px]"
        >
          <Image
            width={5}
            height={10}
            src={"/images/final-home/rightarrow.svg"}
            alt="leftarrow"
          />
        </button>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          1536: {
            spaceBetween: 30,
            navigation: { enabled: true },
          },
          1366: {
            spaceBetween: 20,
            navigation: { enabled: true },
          },
          768: {
            navigation: { enabled: true },
            slidesPerView: slidesPerView,
            spaceBetween: 20,
          },
          640: {
            spaceBetween: 10,
            slidesPerView: slidesPerViewTab,
            autoplay: false,
          },
          0: {
            spaceBetween: 10,
            navigation: { enabled: false },
            slidesPerView: slidesPerViewMobo,
            autoplay: true,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                className={`rounded-xl w-full object-cover ${imgSizeDesktop}`}
                width={imgOriginalSize[0]}
                height={imgOriginalSize[1]}
                src={`${item.image}`}
                alt={`place-${index}`}
              />
              {item.viewers && (
                <div className="flex items-center bg-[#FFFFFF] rounded-[3px] absolute top-2 right-2 py-1 px-2">
                  <Image
                    width={12}
                    height={8}
                    src={"/images/final-home/eye.svg"}
                    alt="eye"
                  />

                  <p className="font-normal text-[11px] text-[#696969] ml-1">
                    {item.viewers}
                  </p>
                </div>
              )}
              <div className="px-2">
                {item.date && (
                  <p className="font-normal text-[13px] text-[#EA0056] pt-5">
                    By Apoorva | 03 Jul 2025 | 7 min read{" "}
                  </p>
                )}
                <div
                  className={`${
                    slideKey === "event" ? "justify-center items-center" : "justify-between items-start md:items-center"
                  } flex pt-3 lg:pt-5 md:flex-row flex-col`}
                >
                  <h3 className="text-[#333333] font-medium text-[16px] 3xl:text-[18px]">
                    {item.title}
                  </h3>

                  {item.rating && (
                    <button className="bg-[#EA0056] rounded-[3px] flex items-center py-[2px] px-2">
                      <Image
                        width={10}
                        height={10}
                        src={"/images/star.svg"}
                        alt="star"
                      />
                      <p className="text-white text-[12px] font-medium ml-1">
                        {item.rating}
                      </p>
                    </button>
                  )}
                </div>
                {item.name && (
                  <h4 className="text-[#EA0056] text-[15px] font-medium my-2">
                    {item.name}
                  </h4>
                )}
                {item.desc && (
                  <p className="text-[#333333] font-normal text-[13px] leading-[1.4] mt-3">
                    {item.desc.slice(0, 80)}
                    {item.desc.length > 100 ? "..." : ""}
                  </p>
                )}
                {item.isShowMatchingInvitation && (
                  <Link
                    href={`${item.matchingInvitationLink}`}
                    className="font-normal text-[15px] text-[#EA0056] underline"
                  >
                    See matching invitations
                  </Link>
                )}

                {item.places && (
                  <>
                    <ul className="flex items-center text-[#333333] text-[13px] font-normal leading-[1] py-2">
                      {item.places.map((place, index) => (
                        <li
                          key={index}
                          className={
                            index === 0
                              ? "pr-1.5"
                              : index === item.places.length - 1
                              ? "pl-1.5"
                              : "px-1.5 border-x border-[#a4a4a4]"
                          }
                        >
                          {place}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.isShowMoreButton && (
                  <Link
                    href={`${item.moreBtnLink}`}
                    className="font-normal text-[15px] text-[#EA0056] underline"
                  >
                    More
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VenueSearches;
