"use client";
import FirstWebSite from "@/components/create-website/FirstWebSite";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [view, setView] = useState("desktop");
   const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="bg-[#eded]">
      <Header />
      <div className="px-10 4xl:px-0 4xl:max-w-[1760px] mx-auto my-10">
        <div className="flex ">
          <div className="w-[70%]">
            {/* <div className="flex items-center gap-2 mb-4 justify-between bg-[#bcbcbcdd] p-5 rounded-xl">
              <div className="rounded-md">
                <button
                  className={`px-3 py-1 rounded-l-md cursor-pointer ${
                    view === "desktop"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setView("desktop")}
                >
                  Desktop
                </button>
                <button
                  className={`px-3 py-1 cursor-pointer ${
                    view === "tab"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setView("tab")}
                >
                  Tab
                </button>
                <button
                  className={`px-3 py-1 rounded-r-md cursor-pointer ${
                    view === "mobile"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setView("mobile")}
                >
                  Mobile
                </button>
              </div>
              <p className="text-[16px] text-[#EA0056] font-normal">Close</p>
            </div> */}
            <FirstWebSite view={view} setView={setView} />
          </div>
          <div className="w-[30%] ml-5">
            <div className="max-w-sm mx-auto p-4 font-sans bg-white rounded-xl size-full">
              {/* Top Section */}
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-medium text-gray-500">Pages</h2>
                  <button className="text-xs text-pink-600 hover:underline">
                    Reorder pages
                  </button>
                </div>

                {/* Nav Items */}
                {["Home", "Our Story", "Gallery"].map((item) => (
                  <div key={item}>
                    <button
                      onClick={() => toggleItem(item)}
                      className="w-full flex justify-between items-center py-3 text-left border-b cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-black">
                        {item}
                      </span>
                      <span className="text-lg text-black text-[12px]">
                        {openItem === item ? "\u25BC" : "\u25B6"}
                      </span>
                    </button>
                    {openItem === item && (
                      <div className="pl-4 py-2 text-sm text-gray-600 border-gray-200">
                        Add content for <strong>{item}</strong>
                      </div>
                    )}
                  </div>
                ))}

                {/* Add Custom Page */}
                <div className="mt-4 pt-4 text-center">
                  <button
                    className="w-full text-sm text-pink-600 border-1 border-dashed border-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 transition"
                  >
                    + Add a custom page
                  </button>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="space-y-4">
                <div className="flex items-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <Image
                    src="https://i.ibb.co/3B1T6Y3/card1.png" // Replace with your own
                    alt="card"
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-800">
                      See invitation cards
                    </p>
                    <button className="mt-2 text-xs bg-pink-600 text-white px-3 py-1 rounded">
                      See cards
                    </button>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <Image
                    src="https://i.ibb.co/BqzvcdK/card2.png" // Replace with your own
                    alt="venue"
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-800">
                      Looking for a venue?
                    </p>
                    <button className="mt-2 text-xs bg-pink-600 text-white px-3 py-1 rounded">
                      See venues
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
