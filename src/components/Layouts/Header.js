"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateSearchOut, setAnimateSearchOut] = useState(false);
  const pathName = usePathname();
  const profileRef = useRef(null);

  const navLinks = [
    {
      label: "Home",
      href: "/home",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5"
          />
        </svg>
      ),
    },
    {
      label: "E-Card",
      href: "/create-your-invitation-card",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a3 3 0 0 0 3.22 0L22 8"
          />
          <rect x="3" y="5" width="18" height="14" rx="2" />
        </svg>
      ),
    },
    {
      label: "Guests",
      href: "/manage-guest",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 0 0-5-4M9 20H4v-2a4 4 0 0 1 4-4m4-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6 0a4 4 0 0 0 0-8 4 4 0 0 0 0 8z"
          />
        </svg>
      ),
    },
    {
      label: "Website",
      href: "/create-website",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          />
        </svg>
      ),
    },
    {
      label: "Vendors",
      href: "/vendors",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13V6a2 2 0 0 0-2-2h-2.5l-1-2h-5l-1 2H6a2 2 0 0 0-2 2v7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCloseSlide = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setIsProfileOpen(false);
      setAnimateOut(false);
    }, 400);
  };

  const handleCloseSearch = () => {
    setAnimateSearchOut(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setAnimateSearchOut(false);
    }, 300);
  };

  return (
    <>
      {/* Header */}
      <div className=" bg-white sticky top-0 z-[99999]">
        <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto">
          <div className="py-5 3xl:py-6 flex items-center justify-between">
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

      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-[50] shadow-md backdrop-blur-sm">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center text-xs text-gray-700 hover:text-[#f70399]"
          >
            <div
              className={`mb-1 ${
                pathName === item.href ? "text-[#f70399]" : ""
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`${pathName === item.href ? "text-[#f70399]" : ""}`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
