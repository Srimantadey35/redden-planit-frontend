// "use client";

// import React, { useState } from "react";

// const MehendiArtist = () => {
//   const [mehendiPrice, setMehendiPrice] = useState("");
//   const [businessStartYear, setBusinessStartYear] = useState("");
//   const [usp, setUsp] = useState("");
//   const [celebrityWeddings, setCelebrityWeddings] = useState("");
//   const [cancellationByUser, setCancellationByUser] = useState("");
//   const [cancellationByYou, setCancellationByYou] = useState("");
//   const [cancellationTerms, setCancellationTerms] = useState("");
//   const [maxGuestsPerHour, setMaxGuestsPerHour] = useState("");
//   const [specializations, setSpecializations] = useState([]);
//   const [mehendiSpecialization, setMehendiSpecialization] = useState("");


//   const cancelOptionsUser = [
//     "Partial Refund Offered",
//     "No Refund Offered",
//     "No Refund Offered However Date Adjustment Can Be Done",
//     "Full Refund Offered",
//   ];

//   const cancelOptionsYou = [
//     "Partial Refund Offered",
//     "No Refund Offered",
//     "Full Refund Offered",
//   ];

//   const specializationOptions = [
//     "Caricature Mehendi",
//     "Portrait Mehendi",
//     "Baraat Figures",
//     "Arabic Mehendi",
//     "Traditional Mehendi",
//   ];

//   const toggleSpecialization = (type) => {
//     setSpecializations((prev) =>
//       prev.includes(type) ? prev.filter((i) => i !== type) : [...prev, type]
//     );
//   };

//   return (
//     <div className="space-y-6">
//       {/* Starting Prices */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What are the starting prices for bridal mehendi for both hands?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] text-[14px] font-medium text-black w-1/2"
//           value={mehendiPrice}
//           onChange={(e) => setMehendiPrice(e.target.value)}
//         />
//       </div>

//       {/* Start Year */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           In which year did you start your business?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//           value={businessStartYear}
//           onChange={(e) => setBusinessStartYear(e.target.value)}
//         />
//       </div>

//       {/* USP */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What is your style USP?
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
//           value={usp}
//           onChange={(e) => setUsp(e.target.value)}
//         />
//       </div>

//       {/* Celebrity Weddings */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Please mention any celebrity weddings you may have done.
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
//           value={celebrityWeddings}
//           onChange={(e) => setCelebrityWeddings(e.target.value)}
//         />
//       </div>

//       {/* Specialization */}
//       {/* Mehendi Specialization */}
//       <div className="flex flex-col mb-6">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What kind of Mehendi do you specialize in?
//         </p>
//         <div className="space-y-2.5">
//           {[
//             "Caricature Mehendi",
//             "Portrait Mehendi",
//             "Baraat Figures",
//             "Arabic Mehendi",
//             "Traditional Mehendi",
//           ].map((option) => {
//             const id = `mehendi-special-${option
//               .toLowerCase()
//               .replace(/\s+/g, "-")}`;
//             return (
//               <div key={option} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="mehendiSpecialization"
//                   id={id}
//                   value={option}
//                   checked={mehendiSpecialization === option}
//                   onChange={(e) => setMehendiSpecialization(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {option}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Cancellation by User */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Cancellation policy (if user initiates cancellation)
//         </p>
//         <div className="space-y-2.5">
//           {cancelOptionsUser.map((opt) => {
//             const id = `cancel-user-${opt.replace(/\s+/g, "-").toLowerCase()}`;
//             return (
//               <div key={opt} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="cancelUser"
//                   id={id}
//                   value={opt}
//                   checked={cancellationByUser === opt}
//                   onChange={(e) => setCancellationByUser(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {opt}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Cancellation by You */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Cancellation policy (if you initiate cancellation)
//         </p>
//         <div className="space-y-2.5">
//           {cancelOptionsYou.map((opt) => {
//             const id = `cancel-you-${opt.replace(/\s+/g, "-").toLowerCase()}`;
//             return (
//               <div key={opt} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="cancelYou"
//                   id={id}
//                   value={opt}
//                   checked={cancellationByYou === opt}
//                   onChange={(e) => setCancellationByYou(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {opt}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Terms & Conditions */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Terms & conditions of cancellation policy
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
//           value={cancellationTerms}
//           onChange={(e) => setCancellationTerms(e.target.value)}
//         />
//       </div>

//       {/* Guests per hour */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           How many max guests can your team cater to in one hour?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2"
//           value={maxGuestsPerHour}
//           onChange={(e) => setMaxGuestsPerHour(e.target.value)}
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

// export default MehendiArtist;


'use client';
import React, { useEffect, useState } from 'react';

const MehendiArtist = ({prefilledValues,defaultValues,onDataChange}) => {
  const [form, setForm] = useState({
    mehendiPrice: '',
    businessStartYear: '',
    usp: '',
    celebrityWeddings: '',
    mehendiSpecialization: '',
    cancellationByUser: '',
    cancellationByYou: '',
    cancellationTerms: '',
    maxGuestsPerHour: '',
    specializations: [],
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

  const mehendiSpecializationOptions = [
    "Caricature Mehendi",
    "Portrait Mehendi",
    "Baraat Figures",
    "Arabic Mehendi",
    "Traditional Mehendi",
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
      {renderInput("What are the starting prices for bridal mehendi for both hands?", "mehendiPrice")}

      {renderInput("In which year did you start your business?", "businessStartYear")}

      {renderTextarea("What is your style USP?", "usp")}

      {renderTextarea("Please mention any celebrity weddings you may have done.", "celebrityWeddings")}

      {renderRadioGroup("What kind of Mehendi do you specialize in?", "mehendiSpecialization", mehendiSpecializationOptions)}

      {renderRadioGroup("Cancellation policy (if user initiates cancellation)", "cancellationByUser", cancelOptionsUser)}

      {renderRadioGroup("Cancellation policy (if you initiate cancellation)", "cancellationByYou", cancelOptionsYou)}

      {renderTextarea("Terms & conditions of cancellation policy", "cancellationTerms")}

      {renderInput("How many max guests can your team cater to in one hour?", "maxGuestsPerHour")}

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default MehendiArtist;
