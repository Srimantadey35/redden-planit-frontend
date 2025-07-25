"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateSearchOut, setAnimateSearchOut] = useState(false);
  const pathName = usePathname();
  const profileRef = useRef(null);
  const profilePanelRef = useRef(null);

  const navLinks = [
    {
      label: "Home",
      href: "/final-home",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
        </svg>
      ),
    },
    {
      label: "E-Card",
      href: "/create-your-invitation-card",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a3 3 0 0 0 3.22 0L22 8" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
        </svg>
      ),
    },
    {
      label: "Guests",
      href: "/manage-guest",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-5-4M9 20H4v-2a4 4 0 0 1 4-4m4-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6 0a4 4 0 0 0 0-8 4 4 0 0 0 0 8z" />
        </svg>
      ),
    },
    {
      label: "Website",
      href: "/create-website",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      label: "Vendors",
      href: "/vendor",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 0 0-2-2h-2.5l-1-2h-5l-1 2H6a2 2 0 0 0-2 2v7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z" />
        </svg>
      ),
    },
  ];

 useEffect(() => {
   const handleClickOutside = (event) => {
    if (animateOut) return;

    const clickedOutside =
      profileRef.current &&
      profilePanelRef.current &&
      !profileRef.current.contains(event.target) &&
      !profilePanelRef.current.contains(event.target);

    if (clickedOutside) {
      setIsProfileOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [animateOut]);

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
      <div className="banner_gradient sticky left-0 right-0 w-full top-0 z-[99999]">
        <div className="container">
          <div className="py-5 3xl:py-6 flex items-center justify-between">
            {/* Logo */}
            <Image
              className="w-[70px] sm:w-[90px] 3xl:w-[158px]"
              width={158}
              height={52}
              src={"/images/PlanItLogoWhite.svg"}
              alt="planItLogo"
            />

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={` xl:hidden hidden cursor-pointer flex-col ${
                isMenuOpen ? "space-y-0" : "space-y-[6px]"
              } flex-[1] items-end mr-3 sm:mr-5`}
            >
              <span className={`transition duration-300 w-5 h-[1px] bg-white ${isMenuOpen ? "rotate-45" : ""}`} />
              <span className={`transition duration-300 w-5 h-[1px] bg-white ${isMenuOpen ? "hidden" : "inline-block"}`} />
              <span className={`transition duration-300 w-5 h-[1px] bg-white ${isMenuOpen ? "-rotate-45" : ""}`} />
            </button>

            {/* Navigation */}
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
                    className={pathName === item.href ? "text-[#f70399]" : "hover:text-[#f70399]"}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Icons */}
            <div className="flex items-center relative space-x-3 sm:space-x-5 3xl:space-x-6">
              {/* Search */}
              <button className="cursor-pointer" onClick={() => setIsSearchOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
              </button>

              {/* Bell */}
              <Image width={18} height={18} src="/images/bellicon.svg" className="cursor-pointer" alt="bell" />

              {/* Avatar */}
              <div ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="cursor-pointer mt-[5px]"
                >
                  {/* <Image
                    className="rounded-full w-[30px] 3xl:w-[37px]"
                    width={37}
                    height={37}
                    src="/images/avatar-icon.svg"
                    alt="avatar"
                  /> */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
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

      {/* Mobile Slide-In Profile Panel */}
      {isProfileOpen && (
          <div
            ref={profilePanelRef}
            className={`xl:hidden fixed inset-0 bg-white z-[999999] transition-transform duration-500 ${
              animateOut ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <button onClick={handleCloseSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="#000" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"/></svg>
            </button>
            <span className="text-lg font-semibold">My Account</span>
            <span className="w-6" />
          </div>
          <div className="flex items-center space-x-4 px-4 mt-6">
            <Image
              src="/images/userimg.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="user"
            />
             <div>
            <div>
              <span className="text-sm block font-medium text-gray-900">
                        Rabina Paul
              </span>
                <span
                className="text-base font-medium text-[#f70399] cursor-pointer"
                onClick={() => {
                  setAnimateOut(true);
                  setTimeout(() => {
                    setIsProfileOpen(false);
                    setAnimateOut(false);
                    setIsProfileEditOpen(true);
                  }, 300);
                }}
              >
                View Profile
              </span>
              </div>
            </div>
          </div>
          <ul className="mt-6 text-base text-gray-700">
            <li className="px-4 py-3 border-b hover:bg-gray-50">Profile</li>
            <li className="px-4 py-3 border-b hover:bg-gray-50">Settings</li>
            <li className="px-4 py-3 hover:bg-gray-50">Logout</li>
          </ul>
        </div>
      )}

      {/* Search Modal */}
      {(isSearchOpen || animateSearchOut) && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-start z-[999999] p-6 ${
            animateSearchOut ? "animate-modal-out" : "animate-modal-in"
          }`}
          onAnimationEnd={() => {
            if (animateSearchOut) {
              setIsSearchOpen(false);
              setAnimateSearchOut(false);
            }
          }}
        >
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-lg font-semibold">Search</h2>
              <button
                onClick={handleCloseSearch}
                className="text-white cursor-pointer text-2xl"
              >
                ✕
              </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-md border border-white text-white text-lg mb-6"
            />
            <div>
              <h4 className="text-white text-sm mb-2">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {["Wedding", "E-Card", "Vendors", "Guest List", "Themes"].map(
                  (tag) => (
                    <button
                      key={tag}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-neutral-300 transition"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    
      {/* Slide Panel: Edit Profile (Mobile) */}
      {isProfileEditOpen && (
        <div className="xl:hidden fixed inset-0 bg-white z-[999999] transition-transform animate-slide-in">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <button
                onClick={() => {
                  setIsProfileEditOpen(false);
                  setIsProfileOpen(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" viewBox="0 0 24 24">
                  <path d="M19 11H7.83l4.88-4.88a1 1 0 0 0-1.41-1.41L4.71 12l6.59 6.59a1 1 0 1 0 1.41-1.41L7.83 13H19a1 1 0 0 0 0-2z" />
                </svg>
             </button>
            <span className="text-lg font-semibold">Edit Profile</span>
            <span className="w-6" />
          </div>

          <div className="p-4 space-y-5 overflow-y-auto h-[calc(100vh-64px)]">
            {/* Image */}
            <div className="relative w-[80px] h-[80px] mx-auto">
              <Image
                src="/images/userimg.png"
                alt="user"
                layout="fill"
                className="rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md cursor-pointer">
                ✏️
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="text-sm font-medium block">Gender</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-sm font-medium">Mobile</label>
              <input
                type="tel"
                placeholder="1234567890"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-red-500 text-white py-2 rounded-md">
                Logout
              </button>
              <button className="w-full border border-red-500 text-red-600 py-2 rounded-md">
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      )}


       <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-[50] shadow-md backdrop-blur-sm">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center text-xs text-gray-700 hover:text-[#f70399]"
          >
            <div className={`mb-1 ${pathName === item.href ? "text-[#f70399]" : ""}`}>{item.icon}</div>
            <span className={`${pathName === item.href ? "text-[#f70399]" : ""}`}>{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
