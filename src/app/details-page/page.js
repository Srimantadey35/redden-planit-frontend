import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <ul className="flex items-center space-x-1 text-[#7C7C7C] font-[400] text-[12px] my-2.5">
          <li>Home &gt;</li>
          <li>Vendors &gt;</li>
          <li>Wedding Venues</li>
        </ul>

        <div className="flex">
          <div className="w-[60%]">
            <Image
              className="w-[720px] h-[375px] object-cover rounded-sm"
              width={820}
              height={375}
              src={"/images/final-home/bannerbg.png"}
              alt="bannerbg"
            />

            <div className="border rounded-md shadow-sm max-w-3xl mx-auto bg-white">
              {/* Top Section */}
              <div className="flex justify-between items-start p-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    The Grand Imperial Hotel
                  </h2>

                  <div className="my-2">
                    <p className="text-sm text-gray-600 flex items-center">
                      <Image
                        className="mr-1"
                        width={10}
                        height={10}
                        src={"/images/location.svg"}
                        alt="location"
                      />
                      <span>Rakabganj, Agra</span>
                      <span className="ml-1 cursor-pointer">(View on Map)</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1 pl-3.5">
                      The Grand Imperial, 32 / 107-A opposite DM Bungalow,
                      Mahatma Gandhi Rd, Ch...
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="mr-1"
                      width={14}
                      height={14}
                      src={"/images/phonegeey.svg"}
                      alt="location"
                    />
                    <p className="text-green-600 text-[14px] font-medium mt-1 cursor-pointer">
                      Contact
                    </p>
                  </div>
                </div>
                {/* Rating */}
                <div>
                  <div className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded flex items-center gap-1 justify-center">
                    4.5
                  </div>
                  <span className="text-sm text-gray-600 ">4 reviews</span>
                </div>
              </div>
              <div className="p-4">
                <div>
                    <Image width={18} height={18} src={'/images/img.svg'} alt="img cion"/>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-6 w-[40%]">
            <div className="mx-auto space-y-4">
              {/* Local Price */}
              <div className="border rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b">
                  <h2 className="font-semibold text-[#4a4a4a] text-[16px]">
                    Local Price
                  </h2>
                  <span className="text-pink-600 text-sm font-semibold cursor-pointer">
                    Pricing Info
                  </span>
                </div>
                <div className="px-4 py-3 border-b flex items-center justify-between">
                  <p className="text-[#e60026] font-semibold text-lg">
                    ₹ 1,600{" "}
                    <span className="text-sm text-gray-500 font-normal">
                      per plate (taxes extra)
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">Veg price</p>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-[#e60026] font-semibold text-lg">
                    ₹ 2,000{" "}
                    <span className="text-sm text-gray-500 font-normal">
                      per plate (taxes extra)
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">Non Veg price</p>
                </div>
              </div>

              {/* Destination Price */}
              <div className="bg-[#fff4f3] border border-[#ffe5e3] rounded-lg ">
                <p className="text-[16px] p-4 border-b border-b-[#e6e6e6] font-semibold text-[#4a4a4a] ">
                  Destination Price
                </p>

                <div className="flex items-center justify-between p-4">
                  <p className="text-[22px] font-semibold text-[#333] mt-1">
                    ₹9.00 <span className="text-lg font-medium">Lakhs</span>
                  </p>
                  <p className="text-[13px] text-[#474747] mt-1 font-semibold">
                    /day for 50 rooms <br />
                    <span className="text-[12px] font-normal text-[#5c5c5c]">
                      (incl. Rooms + 3 Meals + Venue)
                    </span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="cursor-pointer flex-1 bg-[#fc3f7c] hover:bg-[#e12e66] text-white text-sm py-3 px-4 rounded-full font-medium flex items-center justify-center">
                  <Image
                    className="invert-[1] mr-2"
                    width={20}
                    height={20}
                    src={"/images/message.svg"}
                    alt="message"
                  />
                  Send Message
                </button>
                <button className="cursor-pointer flex-1 bg-[#1baa4b] hover:bg-[#189a40] text-white text-sm py-2 px-4 rounded-full font-medium flex items-center justify-center">
                  <Image
                    className="invert-[1] mr-2"
                    width={20}
                    height={20}
                    src={"/images/phonegeey.svg"}
                    alt="message"
                  />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
