"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import CitySelectModal from "@/components/widgets/ListingCountry";

const Page = () => {
  const [options, setOptions] = useState("Grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const viewOptions = [
    {
      label: "List",
      icon: "/images/list.svg",
      hoverIcon: "/images/list-hover.svg",
      iconWidth: 22,
      iconHeight: 12,
    },
    {
      label: "Grid",
      icon: "/images/grid.svg",
      hoverIcon: "/images/grid-hover.svg",
      iconWidth: 12,
      iconHeight: 12,
    },
    {
      label: "Map",
      icon: "/images/location2.svg",
      hoverIcon: "/images/location-hover.svg",
      iconWidth: 12,
      iconHeight: 18,
    },
  ];

  const Places = [
    {
      image: "/images/randomplace.jpg",
      placeName: "Kolkata",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Mumbai",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Bangalore",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Hyedrabad",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Goa",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Jaipur",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Chennai",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Pune",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Delhi",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Lucknow",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "anothe1r",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "another2",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "another3",
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-full 2xl:px-0 px-[6rem] 2xl:max-w-[1200px] mx-auto">
        <div className="mt-2.5">
          <ul className="flex items-center space-x-1 text-[#7C7C7C] font-[400] text-[12px]">
            <li>Home &gt;</li>
            <li>Vendors &gt;</li>
            <li>Wedding Venues</li>
          </ul>

          <div className="flex items-start justify-between mt-5">
            <div className="w-[60%]">
              <h5 className="text-black font-normal text-[25px]">
                4 Star & Above Wedding Hotels
              </h5>
              <p className="font-normal text-[15px] text-[#595959]">
                Showing <span className="text-black">1893 results</span> as per
                your search criteria
              </p>
              <div className="mt-7">
                <div className="flex items-center">
                  <label className="relative block w-[258px]">
                    <input
                      className="border border-[#D9D9D9] outline-none rounded-full placeholder:text-[11px] placeholder:font-normal placeholder:text-[#888888] w-[258px] pl-4 text-black h-[45px]"
                      type="text"
                      id="text"
                      placeholder="4 Star & Above Wedding Hotels"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-1.5 flex items-center justify-center pl-5 pr-2 cursor-pointer"
                    >
                      <Image
                        width={16}
                        height={16}
                        src="/images/cross-2.svg"
                        alt="search_grey"
                      />
                    </button>
                  </label>

                  <p className="text-black underline font-medium text-[14px] ml-4">
                    Clear all
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-[292px]">
                <label className="relative block w-full">
                  <input
                    className="border border-[#D9D9D9] outline-none rounded-[10px] placeholder:text-[18px] placeholder:font-normal placeholder:text-[#797979] w-full pl-[40px] text-black h-[45px]"
                    type="text"
                    id="text"
                    placeholder="Search Wedding Venues......"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center justify-center pl-4 pr-2 cursor-pointer"
                  >
                    <Image
                      width={17}
                      height={17}
                      src="/images/search_grey.svg"
                      alt="search_grey"
                    />
                  </button>
                </label>
              </div>
              <div className="flex items-center space-x-[22px] ml-[22px]">
                {viewOptions.map((item, index) => (
                  <button
                    onClick={() => setOptions(item.label)}
                    key={index}
                    className="cursor-pointer flex items-center group"
                  >
                    <Image
                      className={`${
                        options === item.label ? "hidden" : "block"
                      }`}
                      width={item.iconWidth}
                      height={item.iconHeight}
                      src={item.icon}
                      alt={item.label}
                    />
                    <Image
                      className={`${
                        options === item.label ? "block" : "hidden"
                      }`}
                      width={item.iconWidth}
                      height={item.iconHeight}
                      src={item.hoverIcon}
                      alt={`${item.label}-hover`}
                    />

                    <h4
                      className={`${
                        options === item.label
                          ? "text-[#E72E77]"
                          : "text-[#8D8D8D]"
                      } text-[18px] font-normal ml-1 group-hover:text-[#E72E77]`}
                    >
                      {item.label}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-10 flex-wrap gap-y-4">
          {Places.slice(0, 10).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                className="size-[80px] rounded-full object-cover mx-auto"
                width={80}
                height={80}
                src={item.image}
                alt={item.placeName}
              />
              <p className="font-normal text-black text-[16px] text-center h-[24px] mt-2">
                {item.placeName}
              </p>
            </div>
          ))}

          {Places.length > 10 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="size-[80px] rounded-full mx-auto bg-[#4A4A4A] flex items-center justify-center text-white text-[18px] font-semibold">
                +{Places.length - 10}
              </div>
              <p className="font-normal text-black text-[16px] text-center h-[24px] mt-2 invisible">
                spacer
              </p>
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-[40px]">
          <div>
            <div className="relative w-fit">
              <Image
                className="rounded-md"
                width={373}
                height={225}
                src={"/images/randomplace.jpg"}
                alt="randomplace"
              />
              <Image
                className="absolute bottom-3 right-3"
                width={16}
                height={16}
                src={"/images/i.svg"}
                alt="i"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-black font-normal text-[20px]">
                Park Boulevard Ho...
              </p>

              <div className="flex items-center">
                <div className="bg-[#EA0056] rounded-[3px] flex items-center w-fit py-0.5 px-2">
                  <Image
                    width={11}
                    height={10}
                    src={"/images/star.svg"}
                    alt="star"
                  />
                  <span className="text-[13px] font-medium text-white ml-2">
                    5.0
                  </span>
                </div>
                <p className="font-normal text-[#777777] text-[12px] ml-2">
                  (55 reviews)
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-fit">
              <Image
                className="rounded-md"
                width={373}
                height={225}
                src={"/images/randomplace.jpg"}
                alt="randomplace"
              />
              <Image
                className="absolute bottom-3 right-3"
                width={16}
                height={16}
                src={"/images/i.svg"}
                alt="i"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-black font-normal text-[20px]">
                Park Boulevard Ho...
              </p>

              <div className="flex items-center">
                <div className="bg-[#EA0056] rounded-[3px] flex items-center w-fit py-0.5 px-2">
                  <Image
                    width={11}
                    height={10}
                    src={"/images/star.svg"}
                    alt="star"
                  />
                  <span className="text-[13px] font-medium text-white ml-2">
                    5.0
                  </span>
                </div>
                <p className="font-normal text-[#777777] text-[12px] ml-2">
                  (55 reviews)
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-fit">
              <Image
                className="rounded-md"
                width={373}
                height={225}
                src={"/images/randomplace.jpg"}
                alt="randomplace"
              />
              <Image
                className="absolute bottom-3 right-3"
                width={16}
                height={16}
                src={"/images/i.svg"}
                alt="i"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-black font-normal text-[20px]">
                Park Boulevard Ho...
              </p>

              <div className="flex items-center">
                <div className="bg-[#EA0056] rounded-[3px] flex items-center w-fit py-0.5 px-2">
                  <Image
                    width={11}
                    height={10}
                    src={"/images/star.svg"}
                    alt="star"
                  />
                  <span className="text-[13px] font-medium text-white ml-2">
                    5.0
                  </span>
                </div>
                <p className="font-normal text-[#777777] text-[12px] ml-2">
                  (55 reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CitySelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Page;
