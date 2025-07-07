"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const pathName = usePathname();
  
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "E - Card", href: "/create-your-invitation-card" },
    { label: "Manage guest", href: "/manage-guest" },
    { label: "Create your website", href: "/create-website" },
    { label: "Book vendors", href: "/vendors" },
    { label: "PlanIt AI", href: "/chat" },
  ];

  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setisProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white sticky top-0 z-[99999]">
      <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto">
        <div className="py-5 3xl:py-6 flex items-center justify-between">
          <h4 className="font-semibold text-[18px] 3xl:text-[24px] text-[#313131]">Hello, Rabina Paul</h4>
          {/* hamburger  */}
          <button
            onClick={(e) => setisMenuOpen(!isMenuOpen)}
            className={`flex xl:hidden flex-col ${
              isMenuOpen ? "space-y-0 " : "space-y-[6px] "
            } flex-[1] items-end mr-3 sm:mr-5`}
          >
            {/* {Array.from({ length: 3 }).map((_, index) => ( */}
            <span
              className={`${
                isMenuOpen ? "rotate-45 translate-y-0 translate-x-[0px]" : ""
              } transition ease duration-300 inline-block w-5 h-[1px] bg-white`}
            ></span>
            <span
              className={`${
                isMenuOpen ? "hidden" : " inline-block"
              } transition ease duration-300 w-5 h-[1px] bg-white`}
            ></span>
            <span
              className={`${
                isMenuOpen ? "-rotate-45 translate-y-0 translate-x-[0px]" : " "
              } transition ease duration-300 inline-block w-5 h-[1px] bg-white`}
            ></span>
            {/* // ))} */}
          </button>
          <ul
            className={`${
              isMenuOpen ? "right-0" : "right-[-100%] xl:right-auto"
            } transition-all ease duration-500 items-center space-y-2 sm:space-y-3 xl:space-y-0 xl:space-x-[22px] 2xl:space-x-[50px] xl:flex xl:relative fixed xl:bg-transparent bg-black xl:top-auto top-[48px] sm:top-[84px] xl:h-auto h-screen overflow-y-auto xl:pt-0 pt-8 xl:w-auto w-full sm:w-1/2`}
          >
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="font-normal text-[15px] 3xl:text-[19px] text-white xl:border-none border-b border-b-[#eede] xl:pb-0 pb-2 sm:pb-3 xl:pl-0 pl-8"
              >
                <Link
                  className={`${
                    pathName === item.href ? "text-[#f70399]" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center relative">
            <Image
              width={18}
              height={18}
              src={"/images/bellicon.svg"}
              alt="bellicon"
              className="invert-[1]"
            />
            <div ref={profileRef}>
              <button
                onClick={(e) => setisProfileOpen(!isProfileOpen)}
                className="flex items-center cursor-pointer ml-2"
              >
                
                <Image
                  className="rounded-full ml-3 mr-3 w-[30px] 3xl:w-[37px]"
                  width={37}
                  height={37}
                  src={"/images/userimg.png"}
                  alt="user"
                />

                <Image
                  width={10}
                  height={5}
                  src={"/images/downarrow.svg"}
                  alt="downarrow"
                  className={`${isProfileOpen ? "rotate-180" : ""} transition invert-[1]`}
                />
              </button>

              {isProfileOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
