"use client";
import React, { useRef, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";

const Page = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("18:00");

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  const formatTime = (value) => {
    const [hours, minutes] = value.split(":");
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;
    return `${String(formattedHour).padStart(2, "0")}:${minutes} ${ampm}`;
  };

  return (
    <div>
      <Layouts>
        <div className="w-full max-w-full px-5 4xl:px-[7rem] 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center mb-8 ">
          <h3 className="font-semibold text-[#303030] text-[22px] 3xl:text-[25px] 4xl:text-[28px] mb-3">
            Add Business
          </h3>
          <div className="px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
            <form>
              <div className="space-y-[25px]">
                <div className="flex items-center w-full">
                  <div className="flex flex-col w-full mr-[25px]">
                    <label
                      htmlFor="businessname"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Business name
                    </label>
                    <input
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                      placeholder="Rubina"
                      type="text"
                      name="businessname"
                      id="businessname"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="businesscategory"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Business Category
                    </label>
                    <select
                      name="businesscategory"
                      id="businesscategory"
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                    >
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <label
                    htmlFor="businessaddress"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Business Address
                  </label>

                  <div className="relative">
                    <textarea
                      placeholder="Choose your location"
                      name="businessaddress"
                      id="businessaddress"
                      className="h-[72px] w-full rounded-[8px] outline-none bg-white px-[40px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3 resize-none"
                    ></textarea>

                    <Image
                      className="absolute top-[14.5px] left-[18px] pointer-events-none"
                      width={14}
                      height={17}
                      src="/images/add-business/locationicon.svg"
                      alt="locationicon"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-[25px]">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="City"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      City
                    </label>
                    <input
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                      placeholder="Kolkata"
                      type="text"
                      name="City"
                      id="City"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="Phone"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      State
                    </label>
                    <select
                      name="cars"
                      id="cars"
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                    >
                      <option value="volvo">West Bengal</option>
                      <option value="saab">Pune</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="Pin"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Pin code
                    </label>
                    <input
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                      placeholder="700002"
                      type="text"
                      name="Pin"
                      id="Pin"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col w-[40%]">
                    <label
                      htmlFor="Languages"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Languages Spoken
                    </label>
                    <select
                      name="Languages"
                      id="Languages"
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                    >
                      <option value="volvo">English</option>
                      <option value="saab">Bengali</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="flex items-center w-[60%] pt-[40px] ml-14">
                    <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-4">
                      Travel availability:
                    </p>

                    <div className="mr-4 flex items-center">
                      <input
                        className="accent-[#EA0056] size-5"
                        type="radio"
                        name="travelAvailability"
                        id="withincity"
                      />
                      <label
                        htmlFor="withincity"
                        className="text-black font-normal text-[14px] ml-2"
                      >
                        Within City
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="accent-[#EA0056] size-5"
                        type="radio"
                        name="travelAvailability"
                        id="outsidecity"
                      />
                      <label
                        htmlFor="outsidecity"
                        className="text-black font-normal text-[14px] ml-2"
                      >
                        Outside City
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <h3 className="font-semibold text-[#303030] text-[22px] 3xl:text-[25px] 4xl:text-[28px] mb-3">
            Opening hours
          </h3>

          <div className="px-[28px] py-5 bg-[#F2F2F2] rounded-[10px]">
            <form>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 w-fit">
                  <div
                    onClick={() => setIsToggled(!isToggled)}
                    className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                      isToggled ? "bg-[#EA0056]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${
                        isToggled ? "translate-x-[20px]" : "translate-x-0"
                      } `}
                    ></div>
                  </div>
                  <p className="text-black font-medium text-[16px]">Monday</p>
                </div>
                <div className="flex w-[70%] mx-auto">
                  {/* From Time Picker */}
                  <div className="relative w-full mr-4">
                    <div className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full">
                      <span className="text-[#525252] text-[14px] font-medium">
                        From
                      </span>
                      <span
                        className="text-[#525252] text-[14px] font-medium cursor-pointer"
                        onClick={() => fromInputRef.current?.showPicker()}
                      >
                        {formatTime(fromTime)}
                      </span>
                    </div>
                    <input
                      ref={fromInputRef}
                      type="time"
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                      className="absolute opacity-0 pointer-events-none"
                    />
                  </div>

                  {/* To Time Picker */}
                  <div className="relative w-full">
                    <div className="flex items-center justify-between w-full h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px]">
                      <span className="text-[#525252] text-[14px] font-medium">
                        To
                      </span>
                      <span
                        className="text-[#525252] text-[14px] font-medium cursor-pointer"
                        onClick={() => toInputRef.current?.showPicker()}
                      >
                        {formatTime(toTime)}
                      </span>
                    </div>
                    <input
                      ref={toInputRef}
                      type="time"
                      value={toTime}
                      onChange={(e) => setToTime(e.target.value)}
                      className="absolute opacity-0 pointer-events-none"
                    />
                  </div>
                </div>
                <button className="font-normal text-[14px] text-[#EA0056] flex items-center">
                    Add fields
                    <Image className="ml-3" width={12} height={12} src={'/images/add-business/plusicontheme.svg'} alt="plusicontheme"/>
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center mt-10 justify-end">
            <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
              Save & Continue
            </button>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default Page;
