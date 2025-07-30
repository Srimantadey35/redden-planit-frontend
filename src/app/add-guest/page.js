"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const guestNames = [
    "Jaydon Curtis",
    "Madelyn Levin",
    "Tiana Philips",
    "Marcus Schleifer",
    "Nolan Torff",
    "Tiana Baptista",
  ];

  const [checkedGuests, setCheckedGuests] = useState({});

  const handleCheck = (name) => {
    setCheckedGuests((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // This will always be up-to-date with the selected values
  const selectedGuests = Object.keys(checkedGuests).filter(
    (name) => checkedGuests[name]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected guests to submit:", selectedGuests);
  };

  return (
    <div className="bg-[#FBFBFB]">
      <Header />
      <div className="min-h-screen flex items-center">
        <div className="container">
          <div className="py-[50px] md:flex  items-stretch px-12">
            <div className="bg-white p-[50px] rounded-l-[12px] md:w-[70%] w-full  shadow-sm">
              <h3 className="text-[22px] 3xl:text-[30px] font-semibold text-[#151515] mb-[28px]">
                Add guest
              </h3>

              <form className="space-y-[14px]">
                {/* First & Last Name */}
                <div className="flex flex-col md:flex-row gap-[15px]">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      First name<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[42px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter your first name"
                      type="text"
                      name="firstname"
                      id="firstname"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="lastname"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Last name<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[42px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter your last name"
                      type="text"
                      name="lastname"
                      id="lastname"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-[15px]">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="email"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Email
                    </label>
                    <input
                      className="h-[42px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="number"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Phone number<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[42px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter your number"
                      type="text"
                      name="number"
                      id="number"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="address"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Address
                    </label>
                    <input
                      className="h-[42px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter address"
                      type="text"
                      name="address"
                      id="address"
                    />
                  </div>
                </div>

                {/* Guest Type & Dietary Preference */}
                <div className="flex flex-col md:flex-row gap-[15px]">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="guest"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Guest Type
                    </label>
                    <select
                      name="guest"
                      id="guest"
                      defaultValue=""
                      className="text-[#919191] text-[14px] font-normal h-[42px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                    >
                      <option value="" disabled hidden>
                        Select type
                      </option>
                      <option value="guest 1">guest 1</option>
                      <option value="guest 2">guest 2</option>
                      <option value="guest 3">guest 3</option>
                      <option value="guest 4">guest 4</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="dietary"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Dietary Preference
                    </label>
                    <select
                      name="dietary"
                      id="dietary"
                      defaultValue=""
                      className="text-[#919191] text-[14px] font-normal h-[42px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                    >
                      <option value="" disabled hidden>
                        Select dietary
                      </option>
                      <option value="dietary 1">dietary 1</option>
                      <option value="dietary 2">dietary 2</option>
                      <option value="dietary 3">dietary 3</option>
                      <option value="dietary 4">dietary 4</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="notes"
                      className="font-normal text-[#151515] text-[17px]"
                    >
                      Notes
                    </label>
                    <textarea
                      className="h-[80px] 3xl:h-[100px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none pt-3 resize-none"
                      placeholder="Enter notes about your guests."
                      name="notes"
                      id="notes"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="cursor-pointer mt-[28px] w-full transition font-semibold text-[15px] 2xl:text-[16px]  text-white py-3 3xl:py-3.5 bg-[#EA0056] hover:bg-[#c9004a] rounded-lg mx-auto block"
                >
                  Add to list
                </button>
             </form>

            </div>
            <div className="bg-[#F8F8F8] shadow-sm py-[50px] px-[30px] rounded-r-[12px] md:w-[30%] w-full  flex flex-col">
              <h3 className="text-[22px] 3xl:text-[30px] font-semibold text-[#151515] mb-[43px]">
                Add guest
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-[30px] flex flex-col h-full"
              >
                {guestNames.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <input
                        name="checkbox"
                        id={`checkbox-${index}`}
                        type="checkbox"
                        className="size-[16px] 3xl:size-[20px] mr-3.5"
                        checked={!!checkedGuests[item]}
                        onChange={() => handleCheck(item)}
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        className="font-normal text-[15px] 3xl:text-[20px] text-[#151515]"
                      >
                        {item.length > 15 ? `${item.slice(0, 15)}...` : item}
                      </label>
                    </div>
                    <div className="flex items-center space-x-3.5">
                      <button type="button" className="cursor-pointer w-[17px] 3xl:w-[20px]">
                        <Image
                          width={20}
                          height={20}
                          src="/images/edit.svg"
                          alt="edit"
                        />
                      </button>
                      <button type="button" className="cursor-pointer w-[17px] 3xl:w-[20px]">
                        <Image
                          width={20}
                          height={20}
                          src="/images/delete.svg"
                          alt="delete"
                        />
                      </button>
                    </div>
                  </div>
                ))}

                <Link href={'/guest-list'}
                  type="submit"
                  className="cursor-pointer mt-auto font-semibold text-[15px] 2xl:text-[16px] text-[#EA0056] py-3 3xl:py-3.5 border border-[#EA0056] transition rounded-lg  mx-auto table text-center w-full"
                >
                  Submit all
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
