"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddMultipleGuests from "@/components/widgets/AddMultipleGuests";
import ImportFromGmail from "@/components/widgets/ImportFromGmail";

const Page = () => {
  const [isMultipleGuestsOpen, setisMultipleGuestsOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(null);
  console.log(isModalOpen);

  const cardData = [
    {
      img: "/images/home/add.svg",
      cardName: "Add Guest Manually",
      cardDesc: "Type your guests' contact info directly onto your guest list.",
      btnText: "Add a guest",
      href: "/add-guest",
    },
    {
      img: "/images/home/list.svg",
      cardName: "Import a list",
      cardDesc:
        "Already have a list? Use a spreadsheet to quickly add multiple guests.",
      btnText: "Add multiple guests",
      href: "/add-guest",
    },
    {
      img: "/images/home/gmail.svg",
      cardName: "Import from Gmail",
      cardDesc:
        "Import from you Gmail to add the guest list synced from your contacts.",
      btnText: "Import",
      href: "/add-guest",
    },
  ];
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container">
        <div className="sm:py-[40px] py-[100px] 2xl:py-[60px] 3xl:py-[120px]">
          <h3 className="text-center font-medium text-[27px] 2xl:text-[30px] text-[#151515]">
            {/* Hi{" "} */}
            <span
              className="text-black text-[44px] 3xl:text-[50px]"
              style={{ fontFamily: "allura-font" }}
            >
            </span>
          </h3>
          <h2 className="text-[#151515] font-semibold text-[16px] sm:text-[24px] md:text-[28px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[45px] text-center">
            Add guests in one of three ways to easily <br /> keep all your guest
            info organized:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] lg:gap-[24px] xl:gap-[40px] mt-8 sm:mt-12 md:mt-16 2xl:mt-[75px]">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] rounded-2xl p-[28px] xl:p-[50px] hover:scale-[1.03] transition ease-in-out duration-300 hover:shadow-xl flex flex-col"
              >
                <div className="mx-auto sm:mx-0 size-[45px] lg:size-[50px] 2xl:size-[55px] 3xl:size-[74px] rounded-full bg-white grid place-items-center p-3.5">
                  <Image width={38} height={38} src={item.img} alt={item.img} />
                </div>
                <h3 className="text-[#151515] sm:text-left text-center font-semibold text-[18px] lg:text-[18px] xl:text-[22px] 3xl:text-[30px] mt-2">
                  {item.cardName}
                </h3>
                <p className="sm:text-left text-center leading-[1.2] text-[18px] 3xl:text-[20px] font-normal text-[#212121] mt-5 mb-6">
                  {item.cardDesc}
                </p>
                {item.btnText === "Add a guest" ? (
                  <Link
                    href={`${item.href}`}
                    className="text-center font-semibold cursor-pointer text-[15px] 3xl:text-[20px] text-white bg-[#EA0056] hover:bg-[#c9004a] rounded-lg py-2 xl:py-2.5 2xl:py-3 3xl:py-3.5 px-3 w-full mt-auto"
                  >
                    {item.btnText}
                  </Link>
                ) : (
                  <button
                    onClick={() => setisModalOpen(item.btnText)}
                    className="text-center font-semibold cursor-pointer text-[15px] 3xl:text-[20px] text-white bg-[#EA0056] hover:bg-[#c9004a] rounded-lg py-2 xl:py-2.5 2xl:py-3 3xl:py-3.5 px-3 w-full mt-auto"
                  >
                    {item.btnText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen === "Add multiple guests" && (
        <AddMultipleGuests setisModalOpen={setisModalOpen} />
      )}
      {isModalOpen === "Import" && (
        <ImportFromGmail setisModalOpen={setisModalOpen}/>
      )}
    </div>
  );
};

export default Page;
