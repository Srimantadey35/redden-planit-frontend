"use client";
import Header from "@/components/Header";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Guest type");
  const [selectedGuestTypes, setSelectedGuestTypes] = useState([]);
  const [selectedDietaryPrefs, setSelectedDietaryPrefs] = useState([]);

  // Add refs for outside click detection
  const searchRef = useRef(null);
  const filterRef = useRef(null);
  const mobileSearchRef = useRef(null); // Add this new ref

  // Modified useEffect for outside click handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // For screens between sm (640px) and md (768px), check if click is on mobile search box
      if (window.innerWidth >= 640 && window.innerWidth < 768) {
        if (
          mobileSearchRef.current &&
          mobileSearchRef.current.contains(event.target)
        ) {
          return; // Exit early, don't close anything
        }
      }

      // Apply outside click detection
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        // Only close search on desktop (md and above)
        if (window.innerWidth >= 768) {
          setIsSearchOpen(false);
        }
      }

      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
        setActiveFilter("Guest type");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add useEffect to set search open by default on smaller screens
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setIsSearchOpen(true);
      } else {
        setIsSearchOpen(false);
      }
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
        <div className="pb-[70px] pt-[30px] md:pt-[40px] 4xl:py-[70px]">
          <h4 className="font-medium text-[#151515] text-[25px] 4xl:text-[32px] pb-[10px] smd:pb-[20px]">
            Guest Management
          </h4>
          <div className="pt-2.5 px-2.5 smd:p-[10px] lg:p-[18px] bg-white shadow-sm rounded-[5px] mb-3 md:mb-[40px]">
            <div className="grid-cols-1 grid sm:grid-cols-2 smd:grid-cols-4 w-full">
              <div className="pl-3 sm:pl-[60px] smd:px-4 lg:px-[28px] xl:px-[35px] 3xl:px-[60px] w-full py-4 xl:py-6 bg-[#FAF2F2] flex flex-col justify-start smd:justify-center">
                <h2 className="font-semibold text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] 3xl:text-[60px] text-[#EA0056] leading-[1] ">
                  549
                </h2>
                <h4 className="text-[#151515] font-normal text-[16px] xl:text-[20px]">
                  Total number of guest
                </h4>
              </div>
              <div className="pl-3 sm:pl-[60px] smd:w-full py-4 xl:py-6 flex items-center justify-start smd:justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    className="4xl:w-[51px] lg:w-[30px] w-[25px]"
                    width={51}
                    height={39}
                    src={"/images/guest-list/mail.svg"}
                    alt=""
                  />

                  <div className="flex flex-col items-start ml-3">
                    <p className="text-[#EA0056] font-semibold text-[20px] md:text-[24px] xl:text-[37px] text-center leading-[1] mt-auto">
                      14
                    </p>
                    <h4 className="text-[#151515] font-normal text-[16px] text-center">
                      Missing email
                    </h4>
                  </div>
                </div>
              </div>
              <div className="pl-3 sm:pl-[60px] smd:w-full py-4 xl:py-6 flex items-center justify-start smd:justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    className="4xl:w-[51px] lg:w-[30px] w-[25px]"
                    width={39}
                    height={50}
                    src={"/images/guest-list/location.svg"}
                    alt=""
                  />

                  <div className="flex flex-col items-start ml-3">
                    <p className="text-[#EA0056] font-semibold text-[20px] md:text-[24px] xl:text-[37px] text-center leading-[1] mt-auto">
                      26
                    </p>
                    <h4 className="text-[#151515] font-normal text-[16px] text-center">
                      Missing address
                    </h4>
                  </div>
                </div>
              </div>
              <div className="pl-3 sm:pl-[60px] smd:w-full py-4 xl:py-6 flex items-center justify-start smd:justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    className="4xl:w-[51px] lg:w-[30px] w-[25px]"
                    width={42}
                    height={42}
                    src={"/images/guest-list/call.svg"}
                    alt=""
                  />

                  <div className="flex flex-col items-start ml-3">
                    <p className="text-[#EA0056] font-semibold text-[20px] md:text-[24px] xl:text-[37px] text-center leading-[1] mt-auto">
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
            <div className="flex items-start md:mt-0 md:items-center justify-between py-[16px] 3xl:py-[20px] sticky top-0 md:flex-row flex-col">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-normal text-[20px] xl:text-[28px] text-[#151515]">
                  Guest list
                </h3>

                <Link
                  href={"/add-guest"}
                  className="text-center text-[15px] 3xl:text-[18px] font-semibold text-white bg-[#EA0056] rounded-md px-[18px] md:px-[30px] py-1.5 md:py-2 cursor-pointer block md:hidden"
                >
                  Add more guest
                </Link>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-2 md:space-x-6 w-full md:mt-0 mt-3 justify-end md:justify-end ">
                {/* Search - Works like desktop from sm and above */}
                {isSearchOpen ? (
                  <div
                    ref={searchRef}
                    className="sm:flex hidden items-center bg-white rounded-full px-3 sm:px-4 py-2 border border-gray-200"
                  >
                    <input
                      type="text"
                      placeholder="Search by name, email, phone etc."
                      className="outline-none bg-transparent w-48 sm:w-64 placeholder:text-[#6B6B6B] placeholder:text-[12px] text-black text-[14px]"
                      autoFocus
                      // onBlur={() => setIsSearchOpen(false)}
                    />
                    <button className="rounded-full p-[7px] bg-[#E8E8E8] shrink-0 size-[30px] flex items-center justify-center">
                      <Image
                        width={18}
                        height={18}
                        src={"/images/search.svg"}
                        alt="search"
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`${
                      isSearchOpen ? "bg-[#ededed]" : ""
                    } cursor-pointer shrink-0 sm:block hidden`}
                  >
                    <Image
                      width={18}
                      height={18}
                      src={"/images/search.svg"}
                      alt="search"
                    />
                  </button>
                )}

                {/* Search box always visible only for very small screens */}
                <div ref={mobileSearchRef} className="sm:hidden block w-full">
                  <div className="flex items-center bg-white rounded-full px-3 py-2 border border-gray-200">
                    <input
                      type="text"
                      placeholder="Search by name, email, phone etc."
                      className="outline-none bg-transparent w-full placeholder:text-[#6B6B6B] placeholder:text-[11px] text-black text-[13px]"
                    />
                    <Image
                      width={16}
                      height={16}
                      src={"/images/search.svg"}
                      alt="search"
                      className="ml-2"
                    />
                  </div>
                </div>

                {/* Filter - Responsive design */}
                <div
                  ref={filterRef}
                  className="grid place-items-center shrink-0"
                >
                  {isFilterOpen ? (
                    <div className="relative">
                      <div className="flex items-center bg-gray-100 rounded-full border border-gray-200">
                        <button
                          onClick={() => setActiveFilter("Guest type")}
                          className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[15px] lg:text-[16px] font-medium transition-all cursor-pointer ${
                            activeFilter === "Guest type"
                              ? "bg-white text-black"
                              : "text-[#333333]"
                          }`}
                        >
                          <span className="hidden sm:inline">Guest type</span>
                          <span className="sm:hidden">Guest</span>
                        </button>
                        <button
                          onClick={() => setActiveFilter("Dietary preference")}
                          className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[15px] lg:text-[16px] font-medium transition-all cursor-pointer ${
                            activeFilter === "Dietary preference"
                              ? "bg-white text-black"
                              : "text-[#333333]"
                          }`}
                        >
                          <span className="hidden sm:inline">
                            Dietary preference
                          </span>
                          <span className="sm:hidden">Diet</span>
                        </button>
                        <Image
                          width={18}
                          height={14}
                          src={"/images/filter.svg"}
                          alt="filter"
                          className="ml-2 sm:ml-3 mr-1 sm:mr-2 cursor-pointer"
                          onClick={() => {
                            setIsFilterOpen(false);
                            setActiveFilter("Guest type");
                          }}
                        />
                      </div>

                      {/* Floating Filter Dropdown - Responsive positioning */}
                      {activeFilter === "Guest type" && (
                        <div
                          className="absolute top-12 sm:top-14 right-0 p-3 sm:p-4 rounded-xl shadow-md bg-white w-fit z-10 min-w-[280px] sm:min-w-[320px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-4">
                            <label className="flex items-center gap-2 text-[#5D5D5D] text-[14px] sm:text-[15px] md:text-[16px] font-normal">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                                checked={selectedGuestTypes.includes("Friends")}
                                onChange={() =>
                                  handleGuestTypeChange("Friends")
                                }
                              />
                              Friends
                            </label>
                            <label className="flex items-center gap-2 text-[#5D5D5D] text-[14px] sm:text-[15px] md:text-[16px] font-normal">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                                checked={selectedGuestTypes.includes("Family")}
                                onChange={() => handleGuestTypeChange("Family")}
                              />
                              Family
                            </label>
                            <label className="flex items-center gap-2 text-[#5D5D5D] text-[14px] sm:text-[15px] md:text-[16px] font-normal">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                                checked={selectedGuestTypes.includes("VIP")}
                                onChange={() => handleGuestTypeChange("VIP")}
                              />
                              VIP
                            </label>
                          </div>
                          <button
                            onClick={applyFilters}
                            className="bg-[#EA0056] text-white text-[12px] sm:text-[13px] font-medium px-3 sm:px-4 py-1.5 md:py-2 rounded w-full sm:w-auto"
                          >
                            Apply
                          </button>
                        </div>
                      )}

                      {/* Dietary Preference Filter Dropdown - Responsive */}
                      {activeFilter === "Dietary preference" && (
                        <div
                          className="absolute top-12 sm:top-14 right-0 p-3 sm:p-4 rounded-xl shadow-md bg-white w-fit z-10 min-w-[240px] sm:min-w-[280px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-4">
                            <label className="flex items-center gap-2 text-[#5D5D5D] text-[14px] sm:text-[16px] font-normal">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                                checked={selectedDietaryPrefs.includes("Vegan")}
                                onChange={() =>
                                  handleDietaryPrefChange("Vegan")
                                }
                              />
                              Vegan
                            </label>
                            <label className="flex items-center gap-2 text-[#5D5D5D] text-[14px] sm:text-[16px] font-normal">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                                checked={selectedDietaryPrefs.includes("Jain")}
                                onChange={() => handleDietaryPrefChange("Jain")}
                              />
                              Jain
                            </label>
                          </div>
                          <button
                            onClick={applyFilters}
                            className="bg-[#EA0056] text-white text-[12px] sm:text-[13px] font-medium px-3 sm:px-4 py-1.5 md:py-2 rounded w-full sm:w-auto"
                          >
                            Apply
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsFilterOpen(true)}
                      className="cursor-pointer"
                    >
                      <Image
                        width={18}
                        height={14}
                        src={"/images/filter.svg"}
                        alt="filter"
                      />
                    </button>
                  )}
                </div>

                <Link
                  href={"/add-guest"}
                  className="shrink-0 text-center text-[13px] sm:text-[15px] 3xl:text-[18px] font-semibold text-white bg-[#EA0056] rounded-md px-[20px] sm:px-[30px] py-1.5 sm:py-2 cursor-pointer md:block hidden"
                >
                  <span className="hidden sm:inline">Add more guest</span>
                  <span className="sm:hidden">Add guest</span>
                </Link>
              </div>
            </div>

            <div className="h-[calc(100vh-260px)] overflow-y-auto scrollable-element bg-white shadow-xl scroll-visible">
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
