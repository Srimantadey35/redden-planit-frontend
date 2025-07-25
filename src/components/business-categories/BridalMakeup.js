'use client';
import React, { useEffect, useState } from 'react';

const BridalMakeup = ({prefilledValues,defaultValues,onDataChange}) => {
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
    if (prefilledValues && Object.keys(prefilledValues).length > 0) {
      setForm(prefilledValues);
    }
  }, [prefilledValues]);

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
      setForm(defaultValues);
    }
  }, [defaultValues]);

  const countFilledFields = (formObj) => {
  let count = 0;
  Object.entries(formObj).forEach(([key, value]) => {
    let filled = false;
    if (Array.isArray(value)) {
      filled = value.length > 0;
    } else if (typeof value === 'string') {
      filled = value.trim() !== "";
    } else if (value) {
      filled = true;
    }
    if (filled) count++;
    console.log(key, value, filled, count);
  });
  return count;
};

  const getTotalFields = (formObj) => Object.keys(formObj).length;

  // useEffect(() => {
  //   onDataChange(form);
  // }, [form, onDataChange]);

  const handleChange = (key, value) => {
    const updated = { ...form, [key]: value };
    setForm(updated);
    onDataChange(updated,countFilledFields(updated),getTotalFields(updated));
  };

  const toggleCheckbox = (key, item) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(item)
        ? prev[key].filter((v) => v !== item)
        : [...prev[key], item],
    }));
  };

   useEffect(() => {
      onDataChange(form, countFilledFields(form),getTotalFields(form));
    }, [form]);

  const renderInput = (label, key, placeholder = 'Enter here') => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <input
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
                type="radio"
                id={id}
                name={key}
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
    <div className="space-y-6">
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

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default BridalMakeup;
