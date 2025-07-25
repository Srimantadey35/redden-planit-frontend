'use client';
import React, { useEffect, useState } from 'react';

const BridalMakeup = ({categoryRef,onFieldCount}) => {
  const [form, setForm] = useState({
    services: [],
    outstationPrice: '',
    productsUsed: '',
    awards: '',
    firstClientYear: '',
    businessType: '',
    cancellationPolicy: '',
    advancePercentage: '',
    trainedUnder: '',
    signatureLook: '',
    reasonMua: '',
    bookingWeeks: '',
    seniorPrice: '',
    juniorPrice: '',
    travelToVenue: '',
    makeupPriceIncludes: [],
    hdMakeup: [],
    trialPolicy: '',
  });


useEffect(() => {
  const timer = setTimeout(() => {
    if (categoryRef.current) {
      const allFields = categoryRef.current.querySelectorAll("input, select, textarea");

      const visibleFields = Array.from(allFields).filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          el.offsetParent !== null &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          el.name?.trim() !== "" // ensure it has a name
        );
      });

      // ✅ Extract unique field names
      const uniqueNames = new Set(visibleFields.map((el) => el.name));
      const uniqueCount = uniqueNames.size;

      console.log("✅ Unique visible field count:", uniqueCount);
      console.log("🧾 Field names:", [...uniqueNames]);

      // ✅ Send count back to parent
      onFieldCount(uniqueCount);
    }
  }, 0);

  return () => clearTimeout(timer);
}, []);




  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCheckbox = (key, item) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(item)
        ? prev[key].filter((v) => v !== item)
        : [...prev[key], item],
    }));
  };

  const renderInput = (label, key, placeholder = 'Enter here') => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <input
        name={key} // <-- add name attribute
        type="text"
        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );

  const renderTextarea = (label, key) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <textarea
        name={key} // <-- add name attribute
        className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        placeholder="Enter your message*"
      ></textarea>
    </div>
  );

  const renderRadioGroup = (label, key, options) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</p>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const id = `${key}-${opt.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
          return (
            <div key={opt} className="flex items-center mb-2">
              <input
                name={key} // <-- add name attribute
                type="radio"
                id={id}
                value={opt}
                checked={form[key] === opt}
                onChange={(e) => handleChange(key, e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label htmlFor={id} className="text-black font-normal text-[14px] ml-2 cursor-pointer">{opt}</label>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCheckboxGroup = (label, key, options) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</p>
      <div className="space-y-2.5">
        {options.map((item) => {
          const id = `${key}-${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
          return (
            <div key={item} className="flex items-center mb-2">
              <input
                name={key} // <-- add name attribute
                type="checkbox"
                id={id}
                value={item}
                checked={form[key].includes(item)}
                onChange={() => toggleCheckbox(key, item)}
                className="accent-[#EA0056] size-4"
              />
              <label htmlFor={id} className="text-black font-normal text-[14px] ml-2 cursor-pointer">{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div ref={categoryRef} className="space-y-6">
      {renderCheckboxGroup("Which of the following do you offer?", "services", [
        "Bridal Makeup",
        "Airbrush Makeup",
        "Party Makeup (for family)",
        "Engagement makeup",
        "Extensions",
      ])}

      {renderInput("If you travel outside of your hometown for bridal makeup, how much do you charge for one event?", "outstationPrice")}

      {renderTextarea("Which Products do you use for bridal makeup", "productsUsed")}
      {renderTextarea("Have you received any awards you would like to mention?", "awards")}
      {renderInput("What year did you work on your first client professionally?", "firstClientYear")}
      {renderRadioGroup("Describe your Business", "businessType", ["Freelance Artist", "Bridal Makeup studio", "Salon Chain"])}
      {renderTextarea("What are the terms & conditions of your cancellation policy?", "cancellationPolicy")}
      {renderInput("What Percentage of Booking Advance should be paid", "advancePercentage")}
      {renderTextarea("Have you been trained under someone? Please name them", "trainedUnder")}
      {renderTextarea("Describe your signature makeup look in 3 words", "signatureLook")}
      {renderTextarea("I chose to be a MUA because", "reasonMua")}
      {renderInput("How many weeks in advance should a booking be made?", "bookingWeeks")}
      {renderInput("What is the price of bridal makeup from a senior artist in your team", "seniorPrice")}
      {renderInput("What is the price of bridal makeup from the junior artist in your team", "juniorPrice")}
      {renderRadioGroup("Do you travel to the venue?", "travelToVenue", ["Yes", "No"])}

      {renderCheckboxGroup("What does the bridal makeup price include?", "makeupPriceIncludes", [
        "Hair Styling",
        "Draping",
        "Nail Polish Change",
        "Makeup",
        "Extensions",
        "False Lashes",
      ])}

      {renderCheckboxGroup("Do you offer After/HD Makeup?", "hdMakeup", [
        "Offer HD Makeup",
        "Offer Airbrush Makeup",
      ])}

      {renderRadioGroup("What is your policy on trials?", "trialPolicy", [
        "Offer free trial",
        "Offer paid trial",
        "Offer paid trial - Money adjusted if booked",
        "Trial not Available",
      ])}

      <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default BridalMakeup;
