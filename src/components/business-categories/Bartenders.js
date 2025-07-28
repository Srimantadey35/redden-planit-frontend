// import React, { useState } from "react";

// const Bartenders = () => {
//   const [startYear, setStartYear] = useState("");
//   const [celebrityWeddings, setCelebrityWeddings] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [experienceYears, setExperienceYears] = useState("");
//   const [bartendersProvided, setBartendersProvided] = useState("");
//   const [bartenderTypes, setBartenderTypes] = useState([]);
//   const [servicesOffered, setServicesOffered] = useState([]);
//   const [chargesFor200, setChargesFor200] = useState("");

//   const bartenderRangeOptions = ["1–5", "6–10", "11–20", "21–40", "41–1000000"];

//   const bartenderTypeOptions = [
//     "General Bartenders",
//     "Flair Bartenders",
//     "International Bartenders",
//   ];

//   const servicesOptions = [
//     "Only Bartenders",
//     "Glassware",
//     "Mixers & Garnishes",
//     "Ice",
//     "Theme based bar counters",
//   ];

//   const toggleCheckbox = (value, state, setState) => {
//     setState((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           In which year did you start your business?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={startYear}
//           onChange={(e) => setStartYear(e.target.value)}
//           placeholder="Enter year"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           Have you done any celebrity weddings? Please mention the name of the
//           celebrity.
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={celebrityWeddings}
//           onChange={(e) => setCelebrityWeddings(e.target.value)}
//           placeholder="Enter celebrity names"
//         ></textarea>
//       </div>

//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           What’s the name of your company?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           placeholder="Enter company name"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           What is your contact number?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={contactNumber}
//           onChange={(e) => setContactNumber(e.target.value)}
//           placeholder="Enter contact number"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           How many years of experience do you have?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={experienceYears}
//           onChange={(e) => setExperienceYears(e.target.value)}
//           placeholder="Enter experience in years"
//         />
//       </div>

//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           How many bartenders can you provide?
//         </p>
//         <div className="space-y-2.5">
//           {bartenderRangeOptions.map((option) => (
//             <div key={option} className="flex items-center">
//               <input
//                 type="radio"
//                 name="bartenderCount"
//                 value={option}
//                 checked={bartendersProvided === option}
//                 onChange={(e) => setBartendersProvided(e.target.value)}
//                 className="accent-[#EA0056] size-5"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           What type of bartenders do you provide?
//         </p>
//         <div className="space-y-2.5">
//           {bartenderTypeOptions.map((option) => (
//             <div key={option} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={bartenderTypes.includes(option)}
//                 onChange={() =>
//                   toggleCheckbox(option, bartenderTypes, setBartenderTypes)
//                 }
//                 className="accent-[#EA0056] size-4"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           What all services do you offer?
//         </p>
//         <div className="space-y-2.5">
//           {servicesOptions.map((option) => (
//             <div key={option} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={servicesOffered.includes(option)}
//                 onChange={() =>
//                   toggleCheckbox(option, servicesOffered, setServicesOffered)
//                 }
//                 className="accent-[#EA0056] size-4"
//               />
//               <label className="ml-2 text-[14px] text-black cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           For an average gathering of 200 people, what are your charges?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={chargesFor200}
//           onChange={(e) => setChargesFor200(e.target.value)}
//           placeholder="Enter charges"
//         />
//       </div>

//       <div>
//         <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Bartenders;


'use client';
import React, { useEffect, useState } from 'react';

const Bartenders = ({prefilledValues,defaultValues,onDataChange}) => {
  const [form, setForm] = useState({
    startYear: '',
    celebrityWeddings: '',
    companyName: '',
    contactNumber: '',
    experienceYears: '',
    bartendersProvided: '',
    bartenderTypes: [],
    servicesOffered: [],
    chargesFor200: '',
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

  const bartenderRangeOptions = ["1–5", "6–10", "11–20", "21–40", "41–1000000"];

  const bartenderTypeOptions = [
    "General Bartenders",
    "Flair Bartenders",
    "International Bartenders",
  ];

  const servicesOptions = [
    "Only Bartenders",
    "Glassware",
    "Mixers & Garnishes",
    "Ice",
    "Theme based bar counters",
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
      {renderInput("In which year did you start your business?", "startYear", "Enter year")}

      {renderTextarea("Have you done any celebrity weddings? Please mention the name of the celebrity.", "celebrityWeddings")}

      {renderInput("What's the name of your company?", "companyName", "Enter company name")}

      {renderInput("What is your contact number?", "contactNumber", "Enter contact number")}

      {renderInput("How many years of experience do you have?", "experienceYears", "Enter experience in years")}

      {renderRadioGroup("How many bartenders can you provide?", "bartendersProvided", bartenderRangeOptions)}

      {renderCheckboxGroup("What type of bartenders do you provide?", "bartenderTypes", bartenderTypeOptions)}

      {renderCheckboxGroup("What all services do you offer?", "servicesOffered", servicesOptions)}

      {renderInput("For an average gathering of 200 people, what are your charges?", "chargesFor200", "Enter charges")}

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default Bartenders;