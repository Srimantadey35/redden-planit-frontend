"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import FirstWebSite from "@/components/create-website/FirstWebSite";

const Page = () => {
  const { slug } = useParams();
  const [view, setView] = useState("desktop");

  return (
    <div className="bg-[#eded]">
      {/* Header is full width */}
      <Header />

      {/* Main preview area with equal side gaps */}
      <div className="px-10 4xl:px-0 4xl:max-w-[1760px] my-10">
        <div className="flex items-center gap-2 mb-4 justify-between bg-[#bcbcbcdd] p-5 rounded-xl">
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
        </div>
        <FirstWebSite view={view} setView={setView} />
      </div>

      {/* Footer is full width */}
      <Footer />
    </div>
  );
};

export default Page;
