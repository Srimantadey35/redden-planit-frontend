// import React, { useState } from "react";

// const PreWeddingPhotographersForm = () => {
//   const [processedPics, setProcessedPics] = useState("");
//   const [services, setServices] = useState([]);
//   const [paymentTerms, setPaymentTerms] = useState("");
//   const [awards, setAwards] = useState("");
//   const [preShootCost, setPreShootCost] = useState("");
//   const [travelLodgingCost, setTravelLodgingCost] = useState("");
//   const [preWeddingStillsPrice, setPreWeddingStillsPrice] = useState("");
//   const [cancellationTerms, setCancellationTerms] = useState("");
//   const [outstationCost, setOutstationCost] = useState("");
//   const [preWeddingFilmPrice, setPreWeddingFilmPrice] = useState("");
//   const [experienceYears, setExperienceYears] = useState("");

//   const processedOptions = [
//     "Less than 25",
//     "25–50",
//     "50–100"
//   ];

//   const servicesList = [
//     "Still Photography",
//     "Videography",
//     "Albums"
//   ];

//   const paymentOptions = [
//     "25% Advance",
//     "50% Advance",
//     "100% Advance"
//   ];

//   const preShootOptions = [
//     "Borne by client",
//     "Borne by photographer (Only Local)"
//   ];

//   const travelLodgingOptions = [
//     "Cost of stay and travel borne by client",
//     "Cost of stay borne by client and travel by photographer"
//   ];

//   const outstationOptions = [
//     "Cost of stay and travel borne by client",
//     "Cost of stay borne by client and travel by you",
//     "Both borne by you"
//   ];

//   const toggleService = (service) => {
//     setServices((prev) =>
//       prev.includes(service)
//         ? prev.filter((s) => s !== service)
//         : [...prev, service]
//     );
//   };

//   return (
//     <div className="space-y-6">
//       {/* Processed Pictures */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           How many processed (edited) pictures do you usually deliver to the client?
//         </p>
//         <div className="space-y-2.5">
//           {processedOptions.map((item) => (
//             <div key={item} className="flex items-center">
//               <input
//                 type="radio"
//                 name="processedPics"
//                 value={item}
//                 checked={processedPics === item}
//                 onChange={(e) => setProcessedPics(e.target.value)}
//                 className="accent-[#EA0056] size-5"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Services Offered */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Which services do you offer?
//         </p>
//         <div className="space-y-2.5">
//           {servicesList.map((service) => (
//             <div key={service} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={services.includes(service)}
//                 onChange={() => toggleService(service)}
//                 className="accent-[#EA0056] size-4"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {service}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Payment Terms */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           What are your payment terms?
//         </p>
//         <div className="space-y-2.5">
//           {paymentOptions.map((item) => (
//             <div key={item} className="flex items-center">
//               <input
//                 type="radio"
//                 name="paymentTerms"
//                 value={item}
//                 checked={paymentTerms === item}
//                 onChange={(e) => setPaymentTerms(e.target.value)}
//                 className="accent-[#EA0056] size-5"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Awards */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           Please mention any awards you have received:
//         </label>
//         <input
//           type="text"
//           value={awards}
//           onChange={(e) => setAwards(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
//         />
//       </div>

//       {/* Pre-wedding shoot cost */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Who bears the pre-wedding shoot location cost?
//         </p>
//         <div className="space-y-2.5">
//           {preShootOptions.map((item) => (
//             <div key={item} className="flex items-center">
//               <input
//                 type="radio"
//                 name="preShootCost"
//                 value={item}
//                 checked={preShootCost === item}
//                 onChange={(e) => setPreShootCost(e.target.value)}
//                 className="accent-[#EA0056] size-5"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Travel & Lodging */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Who bears cost of travel and lodging when travelling to a different city?
//         </p>
//         <div className="space-y-2.5">
//           {travelLodgingOptions.map((item) => (
//             <div key={item} className="flex items-center">
//               <input
//                 type="radio"
//                 name="travelLodgingCost"
//                 value={item}
//                 checked={travelLodgingCost === item}
//                 onChange={(e) => setTravelLodgingCost(e.target.value)}
//                 className="accent-[#EA0056] size-5"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pricing Fields */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           Pricing for Pre-wedding stills? (Per day)
//         </label>
//         <input
//           type="text"
//           value={preWeddingStillsPrice}
//           onChange={(e) => setPreWeddingStillsPrice(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
//         />
//       </div>

//       {/* Cancellation Terms */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           What are the terms & conditions of your cancellation policy?
//         </label>
//         <textarea
//           value={cancellationTerms}
//           onChange={(e) => setCancellationTerms(e.target.value)}
//           className="h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] text-black w-1/2"
//           placeholder="e.g., No refunds within a month of the wedding day or 50% amount refundable"
//         ></textarea>
//       </div>

//       {/* Outstation Cost */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Who bears the travel and stay cost for outstation weddings?
//         </p>
//         <div className="space-y-2.5">
//           {outstationOptions.map((item) => (
//             <div key={item} className="flex items-center">
//               <input
//                 type="radio"
//                 name="outstationCost"
//                 value={item}
//                 checked={outstationCost === item}
//                 onChange={(e) => setOutstationCost(e.target.value)}
//                 className="accent-[#EA0056] size-5"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pre-wedding film pricing */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           Pricing for Pre-wedding Films? (Per day)
//         </label>
//         <input
//           type="text"
//           value={preWeddingFilmPrice}
//           onChange={(e) => setPreWeddingFilmPrice(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
//         />
//       </div>

//       {/* Years of experience */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           How long have you been doing pre-wedding photography?
//         </label>
//         <input
//           type="text"
//           value={experienceYears}
//           onChange={(e) => setExperienceYears(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
//         />
//       </div>

//        <div className="pt-4">
//         <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PreWeddingPhotographersForm; 


'use client';
import React, { useEffect, useState } from 'react';

const PreWeddingPhotographersForm = ({prefilledValues,defaultValues,onDataChange}) => {
  const [form, setForm] = useState({
    processedPics: '',
    services: [],
    paymentTerms: '',
    awards: '',
    preShootCost: '',
    travelLodgingCost: '',
    preWeddingStillsPrice: '',
    cancellationTerms: '',
    outstationCost: '',
    preWeddingFilmPrice: '',
    experienceYears: '',
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

  const processedOptions = [
    "Less than 25",
    "25–50",
    "50–100"
  ];

  const servicesList = [
    "Still Photography",
    "Videography",
    "Albums"
  ];

  const paymentOptions = [
    "25% Advance",
    "50% Advance",
    "100% Advance"
  ];

  const preShootOptions = [
    "Borne by client",
    "Borne by photographer (Only Local)"
  ];

  const travelLodgingOptions = [
    "Cost of stay and travel borne by client",
    "Cost of stay borne by client and travel by photographer"
  ];

  const outstationOptions = [
    "Cost of stay and travel borne by client",
    "Cost of stay borne by client and travel by you",
    "Both borne by you"
  ];

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
      {renderRadioGroup("How many processed (edited) pictures do you usually deliver to the client?", "processedPics", processedOptions)}

      {renderCheckboxGroup("Which services do you offer?", "services", servicesList)}

      {renderRadioGroup("What are your payment terms?", "paymentTerms", paymentOptions)}

      {renderInput("Please mention any awards you have received:", "awards")}

      {renderRadioGroup("Who bears the pre-wedding shoot location cost?", "preShootCost", preShootOptions)}

      {renderRadioGroup("Who bears cost of travel and lodging when travelling to a different city?", "travelLodgingCost", travelLodgingOptions)}

      {renderInput("Pricing for Pre-wedding stills? (Per day)", "preWeddingStillsPrice")}

      {renderTextarea("What are the terms & conditions of your cancellation policy?", "cancellationTerms")}

      {renderRadioGroup("Who bears the travel and stay cost for outstation weddings?", "outstationCost", outstationOptions)}

      {renderInput("Pricing for Pre-wedding Films? (Per day)", "preWeddingFilmPrice")}

      {renderInput("How long have you been doing pre-wedding photography?", "experienceYears")}

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default PreWeddingPhotographersForm;
