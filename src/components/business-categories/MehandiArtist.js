"use client";

import React, { useState } from "react";

const MehendiArtist = () => {
  const [mehendiPrice, setMehendiPrice] = useState("");
  const [businessStartYear, setBusinessStartYear] = useState("");
  const [usp, setUsp] = useState("");
  const [celebrityWeddings, setCelebrityWeddings] = useState("");
  const [cancellationByUser, setCancellationByUser] = useState("");
  const [cancellationByYou, setCancellationByYou] = useState("");
  const [cancellationTerms, setCancellationTerms] = useState("");
  const [maxGuestsPerHour, setMaxGuestsPerHour] = useState("");
  const [specializations, setSpecializations] = useState([]);
  const [mehendiSpecialization, setMehendiSpecialization] = useState("");


  const cancelOptionsUser = [
    "Partial Refund Offered",
    "No Refund Offered",
    "No Refund Offered However Date Adjustment Can Be Done",
    "Full Refund Offered",
  ];

  const cancelOptionsYou = [
    "Partial Refund Offered",
    "No Refund Offered",
    "Full Refund Offered",
  ];

  const specializationOptions = [
    "Caricature Mehendi",
    "Portrait Mehendi",
    "Baraat Figures",
    "Arabic Mehendi",
    "Traditional Mehendi",
  ];

  const toggleSpecialization = (type) => {
    setSpecializations((prev) =>
      prev.includes(type) ? prev.filter((i) => i !== type) : [...prev, type]
    );
  };

  return (
    <div className="space-y-6">
      {/* Starting Prices */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          What are the starting prices for bridal mehendi for both hands?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] text-[14px] font-medium text-black w-1/2"
          value={mehendiPrice}
          onChange={(e) => setMehendiPrice(e.target.value)}
        />
      </div>

      {/* Start Year */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          In which year did you start your business?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
          value={businessStartYear}
          onChange={(e) => setBusinessStartYear(e.target.value)}
        />
      </div>

      {/* USP */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          What is your style USP?
        </label>
        <textarea
          className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
          value={usp}
          onChange={(e) => setUsp(e.target.value)}
        />
      </div>

      {/* Celebrity Weddings */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Please mention any celebrity weddings you may have done.
        </label>
        <textarea
          className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
          value={celebrityWeddings}
          onChange={(e) => setCelebrityWeddings(e.target.value)}
        />
      </div>

      {/* Specialization */}
      {/* Mehendi Specialization */}
      <div className="flex flex-col mb-6">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          What kind of Mehendi do you specialize in?
        </p>
        <div className="space-y-2.5">
          {[
            "Caricature Mehendi",
            "Portrait Mehendi",
            "Baraat Figures",
            "Arabic Mehendi",
            "Traditional Mehendi",
          ].map((option) => {
            const id = `mehendi-special-${option
              .toLowerCase()
              .replace(/\s+/g, "-")}`;
            return (
              <div key={option} className="flex items-center mb-2">
                <input
                  className="accent-[#EA0056] size-5"
                  type="radio"
                  name="mehendiSpecialization"
                  id={id}
                  value={option}
                  checked={mehendiSpecialization === option}
                  onChange={(e) => setMehendiSpecialization(e.target.value)}
                />
                <label
                  htmlFor={id}
                  className="text-black font-normal text-[14px] ml-2 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cancellation by User */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Cancellation policy (if user initiates cancellation)
        </p>
        <div className="space-y-2.5">
          {cancelOptionsUser.map((opt) => {
            const id = `cancel-user-${opt.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <div key={opt} className="flex items-center mb-2">
                <input
                  className="accent-[#EA0056] size-5"
                  type="radio"
                  name="cancelUser"
                  id={id}
                  value={opt}
                  checked={cancellationByUser === opt}
                  onChange={(e) => setCancellationByUser(e.target.value)}
                />
                <label
                  htmlFor={id}
                  className="text-black font-normal text-[14px] ml-2 cursor-pointer"
                >
                  {opt}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cancellation by You */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Cancellation policy (if you initiate cancellation)
        </p>
        <div className="space-y-2.5">
          {cancelOptionsYou.map((opt) => {
            const id = `cancel-you-${opt.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <div key={opt} className="flex items-center mb-2">
                <input
                  className="accent-[#EA0056] size-5"
                  type="radio"
                  name="cancelYou"
                  id={id}
                  value={opt}
                  checked={cancellationByYou === opt}
                  onChange={(e) => setCancellationByYou(e.target.value)}
                />
                <label
                  htmlFor={id}
                  className="text-black font-normal text-[14px] ml-2 cursor-pointer"
                >
                  {opt}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Terms & conditions of cancellation policy
        </label>
        <textarea
          className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
          value={cancellationTerms}
          onChange={(e) => setCancellationTerms(e.target.value)}
        />
      </div>

      {/* Guests per hour */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          How many max guests can your team cater to in one hour?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2"
          value={maxGuestsPerHour}
          onChange={(e) => setMaxGuestsPerHour(e.target.value)}
        />
      </div>

       <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default MehendiArtist;
