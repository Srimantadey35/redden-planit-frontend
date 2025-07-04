"use client";
import Header from "@/components/Header";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import InvitationCardModal from "@/components/widgets/InvitationCardModal";

const Page = () => {
  
  const [modalVal, setModalVal] = useState(null);
  const modalShowingVal = (e) => {
    setModalVal(e);
    // setisModalShow(!isModalShow)
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
      <div className="container">
        <div className="py-[55px]">
          <h3 className="font-semibold text-[28px] 3xl:text-[36px] 4xl:text-[45px] text-[#151515] text-center">
            Create Your Invitation Card
          </h3>

          <div className="max-w-[910px] mx-auto my-8">
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
            <div className="flex items-center space-x-2.5 mt-5 justify-end relative">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={(el) => (refs.current[index] = el)}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="font-normal text-[14px] cursor-pointer 4xl:text-[16px] text-[#363636] flex items-center bg-[#F6F6F6] rounded-lg py-2 px-6"
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
                    <div className="absolute left-0 top-full mt-2 w-max min-w-[200px] bg-white border rounded-lg shadow z-10">
                      <p className="text-sm text-gray-600 p-4">
                        Content for: {item}
                      </p>
                      {/* Replace with actual dropdown/filter content */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <h4 className="text-black text-[23px] 4xl:text-[25px] font-medium">
            Choose from beautifully designed templates and customize them for
            your event
          </h4>
        </div>

        <div className="grid grid-cols-3 gap-[40px] 4xl:gap-[50px]">
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
        </div>
      </div>

      {modalVal && (
        <InvitationCardModal modalVal={modalVal} setModalVal={setModalVal} />
      )}
    </div>
  );
};

export default Page;
