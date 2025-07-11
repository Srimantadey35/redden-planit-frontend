'use client'
import React, { useState } from 'react';

const DecoratorsForm = () => {
  const [form, setForm] = useState({
    banquetPanel: '',
    startYear: '',
    decorServices: [],
    celebrityWeddings: '',
    usp: '',
    mostExperienced: '',
    userCancellationPolicy: '',
    vendorCancellationPolicy: '',
    cancellationTerms: '',
    advanceBookingWeeks: '',
    weddingDecorPrice: '',
    indoorDecorPrice: '',
    homeFunctionPrice: '',
    indoorMinPrice: 30000,
    indoorMaxPrice: 2500000,
    outdoorMinPrice: 75000,
    outdoorMaxPrice: 3000000,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCheckbox = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  const renderInput = (label, key, placeholder = 'Enter your message') => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] text-[#151515] mb-2">{label}</label>
      <input
        type="text"
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        className="h-[42px] rounded-[8px] bg-white px-[22px] text-black text-[14px] font-medium placeholder:text-[#525252] w-1/2 outline-none"
        placeholder={placeholder}
      />
    </div>
  );

  const renderTextarea = (label, key) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] text-[#151515] mb-2">{label}</label>
      <textarea
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
        placeholder="Enter your message"
      ></textarea>
    </div>
  );

  const renderRadioGroup = (label, key, options) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] text-[#151515] mb-2">{label}</p>
      <div className="space-y-2.5">
        {options.map((option) => {
          const id = `${key}-${option.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
          return (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                id={id}
                name={key}
                value={option}
                checked={form[key] === option}
                onChange={(e) => handleChange(key, e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label htmlFor={id} className="ml-2 text-black text-[14px] cursor-pointer">
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCheckboxGroup = (label, key, options) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] text-[#151515] mb-2">{label}</label>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const id = `${key}-${opt.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
          return (
            <div key={opt} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={id}
                className="accent-[#EA0056] size-4"
                checked={form[key].includes(opt)}
                onChange={() => toggleCheckbox(key, opt)}
              />
              <label htmlFor={id} className="text-black text-[14px] ml-2 cursor-pointer">
                {opt}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderPriceRange = (label, minKey, maxKey, minLimit, maxLimit) => (
    <div className="flex flex-col gap-3">
      <label className="font-semibold text-[16px] text-[#151515]">{label}</label>

      <div className="flex justify-between text-sm text-black font-medium px-1">
        <span>{minLimit.toLocaleString()}</span>
        <span>{maxLimit.toLocaleString()}</span>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step="1000"
          value={form[minKey]}
          onChange={(e) => handleChange(minKey, Number(e.target.value))}
          className="w-full accent-[#EA0056] cursor-pointer"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step="1000"
          value={form[maxKey]}
          onChange={(e) => handleChange(maxKey, Number(e.target.value))}
          className="w-full accent-[#EA0056] cursor-pointer"
        />
      </div>

      <div className="flex items-center gap-4 w-full max-w-[400px] text-[14px] font-medium text-black">
        <div className="flex items-center gap-1 w-1/2">
          <span>Min:</span>
          <input
            type="number"
            value={form[minKey]}
            min={minLimit}
            max={form[maxKey]}
            onChange={(e) => handleChange(minKey, Number(e.target.value))}
            className="w-full rounded-[8px] px-[14px] py-[6px] border border-gray-300 outline-none bg-white text-black"
          />
        </div>
        <div className="flex items-center gap-1 w-1/2">
          <span>Max:</span>
          <input
            type="number"
            value={form[maxKey]}
            min={form[minKey]}
            max={maxLimit}
            onChange={(e) => handleChange(maxKey, Number(e.target.value))}
            className="w-full rounded-[8px] px-[14px] py-[6px] border border-gray-300 outline-none bg-white text-black"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-4">
      {renderTextarea('Are you enlisted on the Panel of some banquets/ hotels? Please mention a few', 'banquetPanel')}
      {renderInput('When did you start your company?', 'startYear')}
      {renderCheckboxGroup('What are the different type of decor services provided by you?', 'decorServices', [
        'Floral Decor',
        'Mandap Decor',
        'Stage Decor',
        'Photobooth',
      ])}
      {renderTextarea('Please mention any celebrity weddings you may have done.', 'celebrityWeddings')}
      {renderTextarea('What is your USP?', 'usp')}
      {renderRadioGroup('What are you most experienced in?', 'mostExperienced', [
        'Celebrity Weddings',
        'Destination Weddings',
        'International Wedding',
        'Intimate Weddings',
        'Local Weddings',
        'Eco Friendly Weddings',
      ])}
      {renderRadioGroup('Cancellation policy (user initiated)', 'userCancellationPolicy', [
        'Partial Refund Offered',
        'No Refund Offered',
        'No Refund Offered However Date Adjustment Can Be Done',
        'Full Refund Offered',
      ])}
      {renderRadioGroup('Cancellation policy (you initiated)', 'vendorCancellationPolicy', [
        'Partial Refund Offered',
        'No Refund Offered',
        'Full Refund Offered',
      ])}
      {renderTextarea('What are the terms & conditions of your cancellation policy?', 'cancellationTerms')}
      {renderInput('How many weeks in advance should a booking be made to get a slot?', 'advanceBookingWeeks')}
      {renderInput('Starting price for a wedding decor package covering 3 events (e.g., Haldi, Cocktail, Wedding)?', 'weddingDecorPrice')}
      {renderInput('Starting price for indoor decor (assume 250 pax)', 'indoorDecorPrice')}
      {renderInput('Starting package for home function decor?', 'homeFunctionPrice')}

      {renderPriceRange(
        'For an indoor banquet function, of approx 250 pax what is the price range that you would be comfortable doing',
        'indoorMinPrice',
        'indoorMaxPrice',
        30000,
        2500000
      )}

      {renderPriceRange(
        'For an outdoor function, what would the price range be?',
        'outdoorMinPrice',
        'outdoorMaxPrice',
        75000,
        3000000
      )}

      <button className="mt-6 bg-[#EA0056] text-white font-semibold text-[16px] px-6 py-2 rounded-md hover:bg-[#c40047] transition-all duration-200">
        Save
      </button>
    </div>
  );
};

export default DecoratorsForm;
