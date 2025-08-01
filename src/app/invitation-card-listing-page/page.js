"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardImages = [
    {
      list: 1,
      path: "/images/create-your-card/card-1.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-2.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-3.png",
    },
    {
      list: 1,
      path: "/images/create-your-card/card-4.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-5.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-6.png",
    },
    {
      list: 1,
      path: "/images/create-your-card/card-7.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-8.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-9.png",
    },
    {
      list: 1,
      path: "/images/create-your-card/card-10.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-11.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-12.png",
    },
  ];

  const modalShowingVal = (item) => {
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <Header />
      <div className="py-[120px] 2xl:py-[60px] 3xl:py-[120px] 2xl:max-w-[1200px] mx-auto ">
        <h2 className="text-[#151515] font-semibold text-[16px] sm:text-[24px] md:text-[28px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[45px] text-center">
          Create Your Invitation Card
        </h2>

        {/* Search Container */}
        <div className="w-full max-w-5xl mx-auto p-4 mt-8">
          <div className="flex items-center rounded-[10px] overflow-hidden border border-gray-200 shadow-sm">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search your template here..."
              className="flex-1 px-4 py-3 text-sm text-[#5D5D5D] outline-none"
            />

            {/* Event Type Dropdown */}
            <div className="relative">
              <select className="appearance-none px-4 pr-8 py-3 text-sm text-[#5D5D5D] border-l border-gray-200 outline-none bg-transparent">
                <option>Event type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="10" height="6" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="#5D5D5D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Style Dropdown */}
            <div className="relative">
              <select className="appearance-none px-4 pr-8 py-3 text-sm text-[#5D5D5D] border-l border-gray-200 outline-none bg-transparent">
                <option>Style</option>
                <option>Modern</option>
                <option>Traditional</option>
                <option>Minimal</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="#5D5D5D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Search Button */}
            <button className="px-6 py-3 bg-[#EA0056] text-white text-[14px] font-medium hover:bg-[#d4004e] transition">
              Search
            </button>
          </div>
        </div>

        <h3 className="font-medium text-[23px] md:mb-[20px] smd:mb-[28px] 3xl:text-[28px] text-black leading-[1.5] flex mt-[30px] 4xl:mt-[81px]">
          <span className="inline-block border-l-[5px] border-l-[#EA0056] mr-2 h-[35px]"></span>
          <span>
            Choose from beautifully designed templates and customize them for
            your event
          </span>
        </h3>

        <div>
          {/* Mobile Swiper Slider */}
          <div className="block lg:hidden pb-[90px]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {cardImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="cursor-pointer"
                    onClick={() => modalShowingVal(item)}
                  >
                    <div className="relative w-full pb-[100%] rounded-lg overflow-hidden">
                      <Image
                        src={item.path}
                        alt={`Card ${index + 1}`}
                        fill
                        className="object-cover hover:shadow-2xl hover:scale-[1.02] transition duration-500"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-[40px] 4xl:gap-[50px]">
            {[1, 2, 3].map((listNumber) => (
              <div key={listNumber} className="space-y-8 4xl:space-y-12">
                {cardImages
                  .filter((item) => item.list === listNumber)
                  .map((item, index) => (
                    <div
                      className="cursor-pointer"
                      onClick={() => modalShowingVal(item)}
                      key={index}
                    >
                      <Image
                        className="w-full h-auto hover:shadow-2xl hover:scale-[1.02] transition duration-500"
                        width={320}
                        height={450}
                        src={item.path}
                        alt={`Card ${index + 1}`}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button className="font-normal text-[18px] text-black border border-[#B2B2B2] rounded-[12px] py-3 px-8 mx-auto table cursor-pointer">
          View All Templates
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#0000008b] bg-opacity-50 flex justify-center items-center z-[9999999] p-4"
          onClick={closeModal}
        >
          <div
            className="flex flex-col justify-center w-full max-w-[991px] bg-white p-[20px] rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-light cursor-pointer"
            >
              ×
            </button>

            {/* Card + Info */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div className="relative w-full max-w-[320px] aspect-[3/4] sm:aspect-[320/450] rounded-2xl overflow-hidden">
                <Image
                  src={selectedCard?.path || ""}
                  alt="card-1"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center lg:text-left w-full pl-[100px]">
                <h3 className="font-semibold text-[#151515] text-[35px] 4xl:text-[40px]">
                  Indian Traditional <br className="hidden lg:block" /> Wedding
                  Invitation Card
                </h3>
                <p className="text-[#595959] mt-4 text-[16px] 3xl:text-[18px] 4xl:text-[20px]">
                  Size - 1080 x 1920 px
                </p>

                <div className="flex items-center justify-center lg:justify-start mt-6 3xl:mt-16 space-x-4 4xl:space-x-8">
                  <Link
                    href="#"
                    className="bg-[#EA0056] hover:bg-[#d1004c] text-white font-semibold text-[16px] 3xl:text-[20px] 4xl:text-[23px] px-6 4xl:px-16 py-2.5 4xl:py-4 rounded-[10px] transition duration-200"
                  >
                    Customise this template
                  </Link>
                  {/* <button className="hover:scale-110 transition duration-200">
                    <Image
                      src="/images/create-your-card/like_icon.svg"
                      alt="like"
                      width={28}
                      height={28}
                    />
                  </button>
                  <button className="hover:scale-110 transition duration-200">
                    <Image
                      src="/images/create-your-card/share.svg"
                      alt="share"
                      width={25}
                      height={25}
                    />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Page;
