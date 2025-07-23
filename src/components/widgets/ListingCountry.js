// components/CitySelectModal.js

import React from "react";
import Image from "next/image";

const cityData = [
  {
    title: "Top Cities",
    cities: [
      "All Cities", "Delhi NCR", "Mumbai", "Chennai", "Pune",
      "Lucknow", "Jaipur", "Kolkata", "Hyderabad", "Bangalore",
    ],
  },
  {
    title: "Popular Cities",
    cities: [
      "Gurgaon", "Goa", "Udaipur", "Chandigarh", "Indore",
      "Agra", "Kanpur", "Kochi", "Jaisalmer", "Bhopal",
    ],
  },
  {
    title: "Other Cities",
    cities: [
      "Nagpur", "Dehradun", "Thane", "Surat", "Vadodara",
      "Raipur", "Mysore", "Hubli", "Dhitara", "Toranagallu",
    ],
  },
  {
    title: "States",
    cities: ["Kerala", "Rajasthan", "Himachal Pradesh", "Maharashtra"],
  },
  {
    title: "International Cities",
    cities: ["Dubai", "Thailand", "Bali", "Abu Dhabi"],
  },
];

const CitySelectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-[#000000ad] backdrop-blur-[3px] bg-opacity-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-[60%] max-w-5xl px-10 pb-10 pt-14 modalAnim relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold cursor-pointer"
        >
          <Image width={18} height={18} src={'/images/cross.svg'} alt="svg"/>
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search City, State..."
          className="w-full border border-gray-300 rounded px-4 py-2 mb-6 text-[16px] placeholder:text-[#999] outline-none text-black"
        />

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cityData.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[#E72E77] font-semibold mb-3 text-[16px]">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.cities.map((city, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-black hover:underline cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySelectModal;
