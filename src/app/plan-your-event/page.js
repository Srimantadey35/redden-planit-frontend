"use client";
import Header from "@/components/Header";
import React, { useRef } from "react";
import Image from "next/image";

const page = () => {
  const inputRef = useRef(null);

  const handleOpenCalendar = () => {
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker(); // modern way
    } else {
      inputRef.current.focus(); // fallback
    }
  };
  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-[914px] mx-auto">
        <div className="py-[40px] 2xl:py-[60px] 3xl:py-[120px]">
          <div className="bg-[#F7F7F7] p-[60px] rounded-[15px]">
            <h3 className="text-[22px] font-medium text-[#151515] text-center">
              Plan your event in 3 easy steps
            </h3>
            <div className="relative w-full flex items-center justify-between z-[1] mt-6">
              <div className="font-semibold text-[20px] text-black bg-[#fff] size-[40px] flex items-center justify-center rounded-full">
                1
              </div>
              <div className="font-semibold text-[20px] text-black bg-[#fff] size-[40px] flex items-center justify-center rounded-full">
                2
              </div>
              <div className="font-semibold text-[20px] text-black bg-[#fff] size-[40px] flex items-center justify-center rounded-full">
                3
              </div>
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[6px] bg-[#E8E8E8] z-[-1]">
                <div className="h-full w-[0%] transition ease-in duration-500 bg-[#EA0056] rounded-r-full"></div>
              </div>
            </div>
            <div className="mt-14">
              <h3 className="text-[30px] font-semibold text-[#151515]">
                Tell us about your event
              </h3>
              <form className="mt-8 space-y-[25px]">
                <div className="flex items-center">
                  <div className="flex flex-col w-full mr-7">
                    <label
                      htmlFor="guest"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Event type<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <select
                      name="guest"
                      id="guest"
                      defaultValue=""
                      className="text-[#919191] text-[14px] font-normal h-[44px] 3xl:h-[53px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                    >
                      <option value="guest 1">Wedding</option>
                      <option value="guest 2">Wedding 2</option>
                      <option value="guest 3">Wedding 3</option>
                      <option value="guest 4">Wedding 4</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full ">
                    <label
                      htmlFor="calender"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Event date<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <div className="relative mt-1">
                      <input
                        ref={inputRef}
                        className="text-[#919191] w-full text-[14px] font-normal h-[44px] 3xl:h-[53px] bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                        type="date"
                        name="calender"
                        id="calender"
                      />
                      <button
                        type="button"
                        onClick={handleOpenCalendar}
                        className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      >
                        <Image
                          className="w-[20px] h-[20px]"
                          width={20}
                          height={20}
                          src="/images/calendericon.svg"
                          alt="calendar icon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col w-full mr-7">
                    <label
                      htmlFor="bride"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Name of Bride<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter bride’s name"
                      type="text"
                      name="bride"
                      id="bride"
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <label
                      htmlFor="Groom"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Name of Groom<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter Groom's name"
                      type="text"
                      name="Groom"
                      id="Groom"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-[55px] w-[383px] mr-7">
                  <label
                    htmlFor="Groom"
                    className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                  >
                   Event city<span className="text-[#FF2C2C]">*</span>
                  </label>
                  <input
                    className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                    placeholder="Enter your city"
                    type="text"
                    name="Groom"
                    id="Groom"
                  />
                </div>
                <button className="font-semibold text-[20px] text-white bg-[#EA0056] hover:bg-[#d2004d] cursor-pointer rounded-lg py-4 px-[135px] mx-auto table">Next</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
