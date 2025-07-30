"use client";
import Header from "@/components/Header";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import InvitationCardModal from "@/components/widgets/InvitationCardModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Page = () => {
  const targetRef = useRef(null);
  const [isChatShow, setisChatShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const scrollTriggerTop = 0;

      if (rect.top <= scrollTriggerTop) {
        setisChatShow(true);
      } else {
        setisChatShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef, isChatShow]);

  const [modalVal, setModalVal] = useState(null);
  const modalShowingVal = (e) => {
    setModalVal(e);
  };
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
  console.log(modalVal);

  const items = ["Search by", "Event type", "Style"];
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openIndex !== null &&
        refs.current[openIndex] &&
        !refs.current[openIndex].contains(event.target)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openIndex]);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white">
      <Header />
      <div
        className={`transition-all duration-500 ease-in-out
    ${
      isChatShow
        ? "max-h-[160px] opacity-100 translate-y-0 pointer-events-auto"
        : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
    }
    py-0.5 banner_gradient backdrop-blur sticky top-[75px] z-[99] shadow-sm modalAnim`}
      >
        <div className="container flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-1.5 sm:gap-3">
          <form className="w-full sm:flex-1 md:min-w-[120px] md:max-w-[320px] relative rounded-[8px] border border-gray-200 bg-[#f7f7f7] mb-1 sm:mb-0">
            <label className="size-full inline-block">
              <input
                className="bg-white rounded-[8px] w-full text-black font-normal text-[13px] placeholder:text-[#b0b0b0] pl-3 pr-10 outline-none border-none py-1"
                type="text"
                name="text"
                id="text"
                placeholder="Search your template here."
              />
              <button className="absolute top-0 bottom-0 right-0 cursor-pointer h-full px-2 flex items-center justify-center bg-[#FF4F93] rounded-[6px]">
                <Image
                  className="w-[14px]"
                  width={14}
                  height={14}
                  src={"/images/searchIcon.svg"}
                  alt="searchIcon.svg"
                />
              </button>
            </label>
          </form>
          <div className="flex flex-col sm:flex-row gap-1.5 w-full sm:w-auto">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => (refs.current[index] = el)}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full sm:w-auto font-normal text-[12px] text-black cursor-pointer flex items-center justify-between bg-white border border-gray-200 rounded-[7px] py-1 px-3 transition-all duration-150 hover:border-[#FF4F93] focus:border-[#FF4F93] ${
                    openIndex === index ? "ring-1 ring-[#FF4F93]" : ""
                  }`}
                  style={{ fontWeight: 500, minWidth: 0 }}
                >
                  <span className="mr-1">{item}</span>
                  <Image
                    width={10}
                    height={10}
                    src={"/images/downarrw.svg"}
                    alt="downarrow"
                    className={`ml-1 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="absolute left-0 top-full mt-1 w-full min-w-[120px] bg-white border border-gray-200 rounded-lg shadow z-10 animate-fade-in">
                    <p className="text-xs text-gray-700 p-2">
                      Content for: {item}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="lg:py-[55px] py-[100px] lg:pb-0 pb-[55px]">
          <h3 className="font-semibold text-[28px] 3xl:text-[36px] 4xl:text-[45px] text-[#151515] text-center">
            Create Your Invitation Card
          </h3>

          <div className="max-w-[910px] mx-auto my-8" ref={targetRef}>
            <form
              className={`bg-[#F2F2F2] py-5 4xl:py-6 px-[26px] 4xl:px-[33px] relative rounded-[10px] w-full`}
            >
              <label className="relative">
                <input
                  className="bg-white rounded-[10px] 3xl:rounded-[15px] w-full text-black h-[40px] 3xl:h-[46px] 4xl:h-[50px] font-normal text-[15px] 3xl:text-[20px] placeholder:text-[#9E9E9E] placeholder:font-normal placeholder:text-[15px] 3xl:placeholder:text-[20px] pl-5 pr-20 outline-none"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Search your template here."
                />
                <button className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer">
                  <Image
                    className="w-[16px]"
                    width={16}
                    height={16}
                    src={"/images/searchIcon.svg"}
                    alt="searchIcon.svg"
                  />
                </button>
              </label>
            </form>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2.5 space-y-2.5 sm:space-y-0 mt-5 justify-end relative">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full sm:w-auto"
                  ref={(el) => (refs.current[index] = el)}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full sm:w-auto font-normal text-[14px] cursor-pointer 4xl:text-[16px] text-[#363636] flex items-center justify-between bg-[#F6F6F6] rounded-lg py-2 px-6"
                  >
                    <span className="mr-2">{item}</span>
                    <Image
                      width={9}
                      height={4}
                      src={"/images/downarrw.svg"}
                      alt="downarrow"
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {openIndex === index && (
                    <div className="absolute sm:left-0 left-0 top-full mt-2 w-full sm:w-max min-w-[200px] bg-white border rounded-lg shadow z-10">
                      <p className="text-sm text-gray-600 p-4">
                        Content for: {item}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* <h4 className="text-black text-[23px] 4xl:text-[25px] font-medium lg:mb-5">
            Choose from beautifully designed templates and customize them for
            your event
          </h4> */}
          <h3 className="font-medium text-[23px] md:mb-[20px] smd:mb-[28px] 3xl:text-[28px] text-black leading-[1.5] flex ">
            <span className="inline-block border-l-[5px] border-l-[#EA0056] mr-2 h-[35px]"></span>
            <span>Choose from beautifully designed templates and customize them for
            your event</span>
          </h3>
        </div>

        {/* <div className="grid grid-cols-3 gap-[40px] 4xl:gap-[50px]">
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
                      className="size-full hover:shadow-2xl hover:scale-[1.02] transition duration-500"
                      width={320}
                      height={450}
                      src={item.path}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div> */}
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
      </div>

      {modalVal && (
        <InvitationCardModal modalVal={modalVal} setModalVal={setModalVal} />
      )}
    </div>
  );
};

export default Page;
