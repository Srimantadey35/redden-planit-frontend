"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import FirstWebSite from "@/components/create-website/FirstWebSite";

const options = [
  { value: "desktop", label: "Desktop", icon: '/images/createwebsite/desktop.svg' },
  { value: "tab", label: "Tab", icon: '/images/createwebsite/tab.svg' },
  { value: "mobile", label: "Mobile", icon: '/images/createwebsite/mobile.svg' },
];

const Page = () => {
  const { slug } = useParams();
  const [view, setView] = useState("desktop");
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#eded]">
      {/* Header is full width */}
      <Header />

      {/* Main preview area with equal side gaps */}
      <div className="px-10 4xl:px-0 4xl:max-w-[1760px] my-10 mx-auto">
        <div className="flex items-center gap-2 justify-between bg-[#f7f7f7] p-5 rounded-xl">
          <div className="rounded-md">
            <div className="relative">
              <button
                type="button"
                className="flex items-center px-3 py-2 rounded-md border border-gray-300 bg-white text-black w-40"
                onClick={() => setOpen(!open)}
              >
                <img
                  src={options.find((o) => o.value === view).icon}
                  alt=""
                  className="w-5 h-5 mr-2"
                />
                {options.find((o) => o.value === view).label}
                <span className="ml-auto">&#9662;</span>
              </button>
              {open && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 text-black"
                      onClick={() => {
                        setView(option.value);
                        setOpen(false);
                      }}
                    >
                      <img
                        src={option.icon}
                        alt=""
                        className="w-5 h-5 mr-2"
                      />
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <p className="text-[16px] text-[#EA0056] font-normal">Close</p>
        </div>
        <FirstWebSite view={view} setView={setView} />
      </div>

      {/* Footer is full width */}
      <Footer />
    </div>
  );
};

export default Page;
