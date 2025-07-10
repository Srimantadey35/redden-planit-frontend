"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Header */}
      <div className=" bg-white sticky top-0 z-[99999]">
        <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto">
          <div className="py-3 2xl:py-5 4xl:py-6 flex items-center justify-between">
            <h4 className="font-semibold text-[18px] 3xl:text-[24px] text-[#313131]">
              Hello, Rabina Paul
            </h4>
            {/* Right Icons */}
            <div className="flex items-center relative space-x-3 sm:space-x-5 3xl:space-x-6">
              {/* Bell */}
              <Image
                width={18}
                height={18}
                src="/images/bellicon.svg"
                className="cursor-pointer invert-[1]"
                alt="bell"
              />

              {/* Avatar */}
              <div ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="cursor-pointer mt-[5px]"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" />
                      <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                    </g>
                  </svg>
                </button>

                {/* Desktop Dropdown */}
                {isProfileOpen && (
                  <div className="hidden xl:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <div className="flex items-center space-x-3 p-4 border-b">
                      <Image
                        src="/images/userimg.png"
                        width={32}
                        height={32}
                        alt="user"
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        Rabina Paul
                      </span>
                    </div>
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

    </>
  );
};

export default Header;
