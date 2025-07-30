'use client';
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Guest type");
  const [selectedGuestTypes, setSelectedGuestTypes] = useState([]);
  const [selectedDietaryPrefs, setSelectedDietaryPrefs] = useState([]);

  const handleGuestTypeChange = (type) => {
    setSelectedGuestTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const handleDietaryPrefChange = (pref) => {
    setSelectedDietaryPrefs((prev) =>
      prev.includes(pref)
        ? prev.filter((item) => item !== pref)
        : [...prev, pref]
    );
  };

  const applyFilters = () => {
    // Apply your filter logic here
    console.log("Guest Types:", selectedGuestTypes);
    console.log("Dietary Preferences:", selectedDietaryPrefs);
    setIsFilterOpen(false);
  };

  const tableData = [
    {
      name: "Jaydon Curtis",
      email: "jaydoncurtis@gmail.com",
      phNumber: "+91 8952370146",
      address:
        "12/P Alipore Road, Alipore, Kolkata - 700027, West Bengal, India",
      guestType: "Family",
      dietaryPreference: "Vegan",
    },
    {
      name: "Madelyn Levin",
      email: "madelynlevin@gmail.com",
      phNumber: null,
      address:
        "12/P Ballygunge Circular Road, Ballygunge, Kolkata - 700019, West Bengal, India",
      guestType: "Friends",
      dietaryPreference: "Jain",
    },
    {
      name: "Tiana Philips",
      email: "tianaphilips@gmail.com",
      phNumber: "+91 8922378524",
      address:
        "12/P Jessore Road, Barasat, Kolkata - 700124, West Bengal, India",
      guestType: "VIP",
      dietaryPreference: "Vegan",
    },
    {
      name: "Marcus Schleifer",
      email: null,
      phNumber: "+91 89785123146",
      address: null,
      guestType: "Friends",
      dietaryPreference: "Jain",
    },
    {
      name: "Jaydon Curtis",
      email: "jaydoncurtis@gmail.com",
      phNumber: "+91 8952370146",
      address:
        "12/P Alipore Road, Alipore, Kolkata - 700027, West Bengal, India",
      guestType: "Family",
      dietaryPreference: "Vegan",
    },
    {
      name: "Madelyn Levin",
      email: "madelynlevin@gmail.com",
      phNumber: null,
      address:
        "12/P Ballygunge Circular Road, Ballygunge, Kolkata - 700019, West Bengal, India",
      guestType: "Friends",
      dietaryPreference: "Jain",
    },
    {
      name: "Tiana Philips",
      email: "tianaphilips@gmail.com",
      phNumber: "+91 8922378524",
      address:
        "12/P Jessore Road, Barasat, Kolkata - 700124, West Bengal, India",
      guestType: "VIP",
      dietaryPreference: "Vegan",
    },
    {
      name: "Marcus Schleifer",
      email: null,
      phNumber: "+91 89785123146",
      address: null,
      guestType: "Friends",
      dietaryPreference: "Jain",
    },
    {
      name: "Jaydon Curtis",
      email: "jaydoncurtis@gmail.com",
      phNumber: "+91 8952370146",
      address:
        "12/P Alipore Road, Alipore, Kolkata - 700027, West Bengal, India",
      guestType: "Family",
      dietaryPreference: "Vegan",
    },
    {
      name: "Madelyn Levin",
      email: "madelynlevin@gmail.com",
      phNumber: null,
      address:
        "12/P Ballygunge Circular Road, Ballygunge, Kolkata - 700019, West Bengal, India",
      guestType: "Friends",
      dietaryPreference: "Jain",
    },
    {
      name: "Tiana Philips",
      email: "tianaphilipdsdsdsdsdss@gmail.com",
      phNumber: "+91 8922378524",
      address:
        "12/P Jessore Road, Barasat, Kolkata - 700124, West Bengal, India",
      guestType: "VIP",
      dietaryPreference: "Vegan",
    },
    {
      name: "Marcus Schleifer",
      email: null,
      phNumber: "+91 89785123146",
      address: null,
      guestType: "Friends",
      dietaryPreference: "Jain",
    },
  ];
  const tHeadData = [
    { title: "Name", w: "w-[20%]" },
    { title: "Email", w: "w-[20%]" },
    { title: "Phone number", w: "w-[20%]" },
    { title: "Address", w: "w-[16%]" },
    { title: "Guest <br /> type", w: "w-[8%]" },
    { title: "Dietary <br /> preference", w: "w-[8%]" },
    { title: null, w: "w-[8%]" },
  ];
  return (
    <div className="bg-[#FBFBFB]">
      <Header />
      <div className="container">
        <div className="py-[40px] 3xl:py-[120px]">
          <h4 className="font-medium text-[#151515] text-[25px] 4xl:text-[32px] pb-[20px]">
            Guest Management
          </h4>
          <div className="p-[18px] bg-white shadow-sm rounded-[5px] mb-[40px]">
            <div className="flex w-full">
              <div className="px-[28px] xl:px-[35px] 3xl:px-[60px] w-full py-4 xl:py-6 bg-[#FAF2F2] mr-[40px] flex flex-col">
                <h2 className="font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[45px] 3xl:text-[60px] text-[#EA0056] leading-[1] mt-auto  mb-2">
                  549
                </h2>
                <h4 className="text-[#151515] font-normal text-[16px] xl:text-[20px]">
                  Total number of guest
                </h4>
              </div>
              <div className="w-full py-4 xl:py-6 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    width={51}
                    height={39}
                    src={"/images/guest-list/mail.svg"}
                    alt=""
                  />

                  <div className="flex flex-col items-start ml-3">
                    <p className="text-[#EA0056] font-semibold text-[28px] xl:text-[37px] text-center leading-[1] mt-auto">
                      14
                    </p>
                    <h4 className="text-[#151515] font-normal text-[16px] text-center">
                      Missing email
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 xl:py-6 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    width={39}
                    height={50}
                    src={"/images/guest-list/location.svg"}
                    alt=""
                  />

                  <div className="flex flex-col items-start ml-3">
                    <p className="text-[#EA0056] font-semibold text-[28px] xl:text-[37px] text-center leading-[1] mt-auto">
                      26
                    </p>
                    <h4 className="text-[#151515] font-normal text-[16px] text-center">
                      Missing address
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 xl:py-6 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    width={42}
                    height={42}
                    src={"/images/guest-list/call.svg"}
                    alt=""
                  />

                  <div className="flex flex-col items-start ml-3">
                    <p className="text-[#EA0056] font-semibold text-[28px] xl:text-[37px] text-center leading-[1] mt-auto">
                      36
                    </p>
                    <h4 className="text-[#151515] font-normal text-[16px] text-center">
                      Missing phone number
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl">
            <div className="flex items-center justify-between py-[16px] 3xl:py-[20px] sticky top-0">
              <h3 className="font-normal text-[20px] xl:text-[28px] text-[#151515]">
                Guest list
              </h3>
              <div className="flex items-center space-x-6">
                {/* Search */}
                {isSearchOpen ? (
                  <div className="flex items-center bg-white rounded-full px-4 py-2 border border-gray-200">
                    <input
                      type="text"
                      placeholder="Search by name, email, phone etc."
                      className="outline-none bg-transparent text-[15px] w-64 placeholder:text-[#6B6B6B] placeholder:text-[12px] text-black text-[14px]"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                    <Image
                      width={18}
                      height={18}
                      src={"/images/search.svg"}
                      alt="search"
                      className="ml-3"
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="cursor-pointer"
                  >
                    <Image
                      width={18}
                      height={18}
                      src={"/images/search.svg"}
                      alt="search"
                    />
                  </button>
                )}

                {/* Filter */}
                {isFilterOpen ? (
                  <div className="relative">
                    <div className="flex items-center bg-gray-100 rounded-full border border-gray-200">
                      <button
                        onClick={() => setActiveFilter("Guest type")}
                        className={`px-4 py-2 rounded-full text-[16px] font-medium transition-all cursor-pointer ${
                          activeFilter === "Guest type"
                            ? "bg-white text-black"
                            : "text-[#333333]"
                        }`}
                      >
                        Guest type
                      </button>
                      <button
                        onClick={() => setActiveFilter("Dietary preference")}
                        className={`px-4 py-2 rounded-full text-[16px] font-medium transition-all cursor-pointer ${
                          activeFilter === "Dietary preference"
                            ? "bg-white text-black"
                            : "text-[#333333]"
                        }`}
                      >
                        Dietary preference
                      </button>
                      <Image
                        width={20}
                        height={16}
                        src={"/images/filter.svg"}
                        alt="filter"
                        className="ml-3 mr-2 cursor-pointer"
                        onClick={() => setIsFilterOpen(false)}
                      />
                    </div>

                    {/* Floating Filter Dropdown */}
                    {activeFilter === "Guest type" && (
                      <div className="absolute top-14 right-0 p-4 rounded-xl shadow-md bg-white w-fit z-10">
                        <div className="flex items-center gap-6 mb-4">
                          <label className="flex items-center gap-2 text-[#5D5D5D] text-[16px] font-normal">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={selectedGuestTypes.includes("Friends")}
                              onChange={() => handleGuestTypeChange("Friends")}
                            />
                            Friends
                          </label>
                          <label className="flex items-center gap-2 text-[#5D5D5D] text-[16px] font-normal">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={selectedGuestTypes.includes("Family")}
                              onChange={() => handleGuestTypeChange("Family")}
                            />
                            Family
                          </label>
                          <label className="flex items-center gap-2 text-[#5D5D5D] text-[16px] font-normal">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={selectedGuestTypes.includes("VIP")}
                              onChange={() => handleGuestTypeChange("VIP")}
                            />
                            VIP
                          </label>
                        </div>
                        <button
                          onClick={applyFilters}
                          className="bg-[#EA0056] text-white text-[13px] font-medium px-4 py-2 rounded"
                        >
                          Apply
                        </button>
                      </div>
                    )}

                    {/* Dietary Preference Filter Dropdown */}
                    {activeFilter === "Dietary preference" && (
                      <div className="absolute top-14 right-0 p-4 rounded-xl shadow-md bg-white w-fit z-10">
                        <div className="flex items-center gap-6 mb-4">
                          <label className="flex items-center gap-2 text-[#5D5D5D] text-[16px] font-normal">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={selectedDietaryPrefs.includes("Vegan")}
                              onChange={() => handleDietaryPrefChange("Vegan")}
                            />
                            Vegan
                          </label>
                          <label className="flex items-center gap-2 text-[#5D5D5D] text-[16px] font-normal">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={selectedDietaryPrefs.includes("Jain")}
                              onChange={() => handleDietaryPrefChange("Jain")}
                            />
                            Jain
                          </label>
                        </div>
                        <button
                          onClick={applyFilters}
                          className="bg-[#EA0056] text-white text-[13px] font-medium px-4 py-2 rounded"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button onClick={() => setIsFilterOpen(true)} className="cursor-pointer">
                    <Image
                      width={20}
                      height={16}
                      src={"/images/filter.svg"}
                      alt="filter"
                    />
                  </button>
                )}

                <Link
                  href={"/add-guest"}
                  className="text-center text-[15px] 3xl:text-[18px] font-semibold text-white bg-[#EA0056] rounded-md px-[30px] py-2 cursor-pointer"
                >
                  Add more guest
                </Link>
              </div>
            </div>

            <div className="h-[calc(100vh-360px)] overflow-y-auto scrollable-element bg-white shadow-xl">
              <table className="datatable min-w-[1199px] overflow-x-auto w-full table-auto">
                <tbody>
                  <tr className="border-b border-b-[#E0E0E0]">
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[15%]">
                      Name
                    </th>
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[10%]">
                      Email
                    </th>
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[15%]">
                      Phone number
                    </th>
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[15%]">
                      Address
                    </th>
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[12%]">
                      Guest type
                    </th>
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[15%]">
                      Dietary preference
                    </th>
                    <th className="text-[#151515] font-medium text-[17px] text-left py-[15px] w-[8%]"></th>
                  </tr>
                  {tableData.map((items, index) => (
                    <tr key={index}>
                      <td className="flex items-center py-[20px]">
                        <input
                          type="checkbox"
                          id={`checkbox-${index}`}
                          className="size-[15px] 3xl:size-[18px] border border-[#B9B9B9] rounded-[4px] mr-3"
                        />
                        <label
                          htmlFor={`checkbox-${index}`}
                          className="text-[#151515] font-normal text-[15px] 3xl:text-[16px]"
                        >
                          {items.name}
                        </label>
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.email
                          ? items.email.length > 25
                            ? `${items.email.slice(0, 25)}...`
                            : items.email
                          : "--------------------"}
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.phNumber || "---------------------------"}
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.address
                          ? items.address.length > 12 &&
                            `${items.address.slice(0, 12)}...`
                          : "--------------------"}
                      </td>
                      <td
                        className={`${
                          items.guestType === "VIP"
                            ? "text-[#EA0056]"
                            : "text-[#5D5D5D]"
                        } font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]`}
                      >
                        {items.guestType}
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.dietaryPreference}
                      </td>
                      <td className="text-[#5D5D5D] font-normal py-[20px] flex items-center justify-end">
                        <button className="mr-2 w-[18px] 3xl:w-[20px]">
                          <Image
                            className="mr-4 cursor-pointer"
                            width={20}
                            height={20}
                            src={"/images/edit.svg"}
                            alt="edit"
                          />
                        </button>
                        <button className="w-[18px] 3xl:w-[20px]">
                          <Image
                            className="cursor-pointer"
                            width={15}
                            height={16}
                            src={"/images/delete.svg"}
                            alt="delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
