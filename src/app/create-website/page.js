"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const tabHeader = ["Wedding", "Birthday", "Corporate", "Anniversary"];
  const [activetab, setActiveTab] = useState(tabHeader[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef(null);
  const tabsRef = useRef([]);

  const handleActiveTab = (tab) => setActiveTab(tab);

  useEffect(() => {
    const index = tabHeader.indexOf(activetab);
    const el = tabsRef.current[index];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activetab]);

  const cardData = [
    {
      url: "/images/create-website/card1.png",
      isNew: false,
      isTrending: false,
      slug: "card1",
    },
    {
      url: "/images/create-website/card2.png",
      isNew: true,
      isTrending: false,
      slug: "card2",
    },
    {
      url: "/images/create-website/card3.png",
      isNew: false,
      isTrending: false,
      slug: "card3",
    },
    {
      url: "/images/create-website/card4.png",
      isNew: false,
      isTrending: true,
      slug: "card4",
    },
    {
      url: "/images/create-website/card1.png",
      isNew: false,
      isTrending: false,
      slug: "card1b",
    },
    {
      url: "/images/create-website/card2.png",
      isNew: false,
      isTrending: true,
      slug: "card2b",
    },
  ];
  const cardData2 = [
    {
      url: "/images/create-website/card2.png",
      isNew: true,
      isTrending: false,
      slug: "card2c",
    },
    {
      url: "/images/create-website/card1.png",
      isNew: false,
      isTrending: false,
      slug: "card1c",
    },
    {
      url: "/images/create-website/card2.png",
      isNew: false,
      isTrending: true,
      slug: "card2d",
    },
    {
      url: "/images/create-website/card3.png",
      isNew: false,
      isTrending: false,
      slug: "card3b",
    },
    {
      url: "/images/create-website/card4.png",
      isNew: false,
      isTrending: true,
      slug: "card4b",
    },
    {
      url: "/images/create-website/card1.png",
      isNew: false,
      isTrending: false,
      slug: "card1d",
    },
  ];
  return (
    <div>
      <Header />
      {/* banner  */}
      <div
        className="bg-[#FFF3F7] bg-no-repeat bg-right object-contain bg-contain"
        style={{
          backgroundImage: `url('./images/create-website/bannerright.png')`,
        }}
      >
        <div className="container">
          <div>
            <div className="py-[55px]">
              <h3 className="text-[#151515] font-semibold text-[35px] 4xl:text-[45px]">
                Create your free Website
              </h3>
              <p className="text-[#333333] font-normal text-[16px] 3xl:text-[18px] 3xl:mt-2 mb-3 3xl:mb-5">
                Make your celebration unforgettable with a personalized website
                for your special day
              </p>
              <button className="text-white font-semibold text-[18px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#cc004b] py-2 4xl:py-3 px-8 4xl:px-14 rounded-[8px] cursor-pointer">
                Explore templates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* rest of the body  */}
      <div className="bg-white pt-[50px]">
        <div className="container">
          <h3 className="text-[#151515] font-semibold text-[28px] 3xl:text-[30px] 4xl:text-[35px] text-center mb-7">
            Kick Things Off With These Designs
          </h3>
          <div>
            <ul
              ref={containerRef}
              className="relative flex items-center mx-auto w-fit bg-[#F4F4F4] rounded-full px-1 py-1"
            >
              <div
                className="absolute h-full bg-[#EA0056] rounded-full transition-all duration-500 ease-in-out"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />

              {tabHeader.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (tabsRef.current[index] = el)}
                  onClick={() => handleActiveTab(item)}
                  className={`relative z-10 list-none cursor-pointer font-medium text-[15px] 3xl:text-[16px] 4xl:text-[18px] py-1 3xl:py-1.5 px-6 3xl:px-8 rounded-full transition-colors duration-200 ${
                    activetab === item ? "text-white" : "text-[#363636]"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {activetab === tabHeader[0] && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px] 3xl:gap-[40px] py-14">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="hover:shadow-2xl hover:p-1 hover:border rounded-xl transition-all ease-in-out duration-100 relative cursor-pointer group"
                >
                  <Image
                    className="w-[444px] rounded-xl"
                    width={444}
                    height={450}
                    src={`${item.url}`}
                    alt={`cardItem-${index}`}
                  />
                  {(item.isNew || item.isTrending) && (
                    <span className="text-white font-semibold text-[12px] 3xl:text-sm bg-[#DC0E0E] rounded-sm px-2 py-0.5 absolute top-[-10px] right-[-10px] z-[1]">
                      {item.isNew ? "New" : "Trending"}
                    </span>
                  )}
                  <div className="bg-[#ffffffab] absolute top-0 right-0 bottom-0 left-0 rounded-xl flex-col items-center justify-center hidden group-hover:flex transition-all ease">
                    <Link href={`/preview-website/${item.slug}`} className="w-[170px] cursor-pointer font-semibold text-[15px] text-white hover:bg-black transition ease bg-[#212121] py-2 px-7 rounded-sm">
                      Preview design
                    </Link>
                    <Link href={`/customise-website/${item.slug}`} className="w-[170px] cursor-pointer mt-4 font-semibold text-[15px] text-white hover:bg-[#EA0056] transition ease bg-[#EA0056] py-2 px-7 rounded-sm">
                      Customise design
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activetab === tabHeader[1] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] 3xl:gap-[40px] py-14">
              {cardData2.map((item, index) => (
                <div
                  key={index}
                  className="hover:shadow-2xl hover:p-1 hover:border rounded-xl transition-all ease-in-out duration-100 relative cursor-pointer group"
                >
                  <Image
                    className="w-[444px] rounded-xl"
                    width={444}
                    height={450}
                    src={`${item.url}`}
                    alt={`cardItem-${index}`}
                  />
                  {(item.isNew || item.isTrending) && (
                    <span className="text-white font-semibold text-[12px] 3xl:text-sm bg-[#DC0E0E] rounded-sm px-2 py-0.5 absolute top-[-10px] right-[-10px]">
                      {item.isNew ? "New" : "Trending"}
                    </span>
                  )}
                  <div className="bg-[#ffffffab] absolute top-0 right-0 bottom-0 left-0 rounded-xl flex-col items-center justify-center hidden group-hover:flex transition-all ease">
                    <button className="w-[170px] cursor-pointer font-semibold text-[15px] text-white hover:bg-black transition ease bg-[#212121] py-2 px-7 rounded-sm">
                      Preview design
                    </button>
                    <button className="w-[170px] cursor-pointer mt-4 font-semibold text-[15px] text-white hover:bg-[#EA0056] transition ease bg-[#EA0056] py-2 px-7 rounded-sm">
                      Customise design
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activetab === tabHeader[2] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] 3xl:gap-[40px] py-14">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="hover:shadow-2xl hover:p-1 hover:border rounded-xl transition-all ease-in-out duration-100 relative cursor-pointer group"
                >
                  <Image
                    className="w-[444px] rounded-xl"
                    width={444}
                    height={450}
                    src={`${item.url}`}
                    alt={`cardItem-${index}`}
                  />
                  {(item.isNew || item.isTrending) && (
                    <span className="text-white font-semibold text-[12px] 3xl:text-sm bg-[#DC0E0E] rounded-sm px-2 py-0.5 absolute top-[-10px] right-[-10px]">
                      {item.isNew ? "New" : "Trending"}
                    </span>
                  )}
                  <div className="bg-[#ffffffab] absolute top-0 right-0 bottom-0 left-0 rounded-xl flex-col items-center justify-center hidden group-hover:flex transition-all ease">
                    <button className="w-[170px] cursor-pointer font-semibold text-[15px] text-white hover:bg-black transition ease bg-[#212121] py-2 px-7 rounded-sm">
                      Preview design
                    </button>
                    <button className="w-[170px] cursor-pointer mt-4 font-semibold text-[15px] text-white hover:bg-[#EA0056] transition ease bg-[#EA0056] py-2 px-7 rounded-sm">
                      Customise design
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activetab === tabHeader[3] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] 3xl:gap-[40px] py-14">
              {cardData2.map((item, index) => (
                <div
                  key={index}
                  className="hover:shadow-2xl hover:p-1 hover:border rounded-xl transition-all ease-in-out duration-100 relative cursor-pointer group"
                >
                  <Image
                    className="w-[444px] rounded-xl"
                    width={444}
                    height={450}
                    src={`${item.url}`}
                    alt={`cardItem-${index}`}
                  />
                  {(item.isNew || item.isTrending) && (
                    <span className="text-white font-semibold text-[12px] 3xl:text-sm bg-[#DC0E0E] rounded-sm px-2 py-0.5 absolute top-[-10px] right-[-10px]">
                      {item.isNew ? "New" : "Trending"}
                    </span>
                  )}
                  <div className="bg-[#ffffffab] absolute top-0 right-0 bottom-0 left-0 rounded-xl flex-col items-center justify-center hidden group-hover:flex transition-all ease">
                    <button className="w-[170px] cursor-pointer font-semibold text-[15px] text-white hover:bg-black transition ease bg-[#212121] py-2 px-7 rounded-sm">
                      Preview design
                    </button>
                    <button className="w-[170px] cursor-pointer mt-4 font-semibold text-[15px] text-white hover:bg-[#EA0056] transition ease bg-[#EA0056] py-2 px-7 rounded-sm">
                      Customise design
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
