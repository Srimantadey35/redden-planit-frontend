// import React, { useState } from "react";

// const DJForm = () => {
//   const [basicPackage, setBasicPackage] = useState("");
//   const [packageInclusion, setPackageInclusion] = useState("");
//   const [clubName, setClubName] = useState("");
//   const [yearsExperience, setYearsExperience] = useState("");
//   const [experienceType, setExperienceType] = useState("");
//   const [cancellationTerms, setCancellationTerms] = useState("");
//   const [userCancellationPolicy, setUserCancellationPolicy] = useState("");
//   const [providerCancellationPolicy, setProviderCancellationPolicy] = useState("");
//   const [businessStartYear, setBusinessStartYear] = useState("");
//   const [bookingLeadTime, setBookingLeadTime] = useState("");
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const genres = [
//     "Commercial",
//     "Punjabi",
//     "Hip Hop",
//     "EDM",
//     "House",
//     "Bollywood",
//   ];

//   const userCancelOptions = [
//     "Partial Refund Offered",
//     "No Refund Offered",
//     "No Refund Offered, However Date Adjustment Can Be Done",
//     "Full Refund Offered",
//   ];

//   const providerCancelOptions = [
//     "Partial Refund Offered",
//     "No Refund Offered",
//     "Full Refund Offered",
//   ];

//   const experienceYearsOptions = [
//     "Less than 1 year",
//     "1–3 years",
//     "3–5 years",
//     "More than 5 years",
//   ];

//   const experienceTypeOptions = [
//     "Celebrity Weddings",
//     "International Weddings",
//   ];

//   const toggleGenre = (genre) => {
//     setSelectedGenres((prev) =>
//       prev.includes(genre)
//         ? prev.filter((g) => g !== genre)
//         : [...prev, genre]
//     );
//   };

//   return (
//     <div className="flex flex-col space-y-6">
//       {/* Basic Starting Package */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           What is your basic starting package?
//         </label>
//         <input
//           type="text"
//           value={basicPackage}
//           onChange={(e) => setBasicPackage(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
//         />
//       </div>

//       {/* Package Inclusions */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           What does the above price include? (e.g., Includes equipment, lighting)
//         </label>
//         <textarea
//           value={packageInclusion}
//           onChange={(e) => setPackageInclusion(e.target.value)}
//           className="h-[90px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
//           placeholder="Enter your message"
//         ></textarea>
//       </div>

//       {/* Genres */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Favourite Music Genres
//         </p>
//         <div className="space-y-2.5">
//           {genres.map((genre) => (
//             <div key={genre} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id={genre}
//                 value={genre}
//                 className="accent-[#EA0056] size-4"
//                 checked={selectedGenres.includes(genre)}
//                 onChange={() => toggleGenre(genre)}
//               />
//               <label
//                 htmlFor={genre}
//                 className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//               >
//                 {genre}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Club */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           Do you regularly play at any club? Please mention Club Name.
//         </label>
//         <textarea
//           value={clubName}
//           onChange={(e) => setClubName(e.target.value)}
//           className="h-[90px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
//           placeholder="Enter your message"
//         ></textarea>
//       </div>

//       {/* Years of Experience */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           How many years have you been DJ’ing for?
//         </p>
//         <div className="space-y-2.5">
//           {experienceYearsOptions.map((option) => (
//             <div key={option} className="flex items-center mb-2">
//               <input
//                 type="radio"
//                 className="accent-[#EA0056] size-5"
//                 name="yearsExperience"
//                 value={option}
//                 checked={yearsExperience === option}
//                 onChange={(e) => setYearsExperience(e.target.value)}
//               />
//               <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Most Experienced In */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           What are you most experienced in?
//         </p>
//         <div className="space-y-2.5">
//           {experienceTypeOptions.map((option) => (
//             <div key={option} className="flex items-center mb-2">
//               <input
//                 type="radio"
//                 className="accent-[#EA0056] size-5"
//                 name="experienceType"
//                 value={option}
//                 checked={experienceType === option}
//                 onChange={(e) => setExperienceType(e.target.value)}
//               />
//               <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Terms & Conditions */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           What are the terms & conditions of your cancellation policy?
//         </label>
//         <textarea
//           value={cancellationTerms}
//           onChange={(e) => setCancellationTerms(e.target.value)}
//           className="h-[90px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
//           placeholder="Enter your message"
//         ></textarea>
//       </div>

//       {/* User Cancellation */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Please describe your cancellation policy (if a user initiates cancellation)
//         </p>
//         <div className="space-y-2.5">
//           {userCancelOptions.map((option) => (
//             <div key={option} className="flex items-center mb-2">
//               <input
//                 type="radio"
//                 className="accent-[#EA0056] size-5"
//                 name="userCancellation"
//                 value={option}
//                 checked={userCancellationPolicy === option}
//                 onChange={(e) => setUserCancellationPolicy(e.target.value)}
//               />
//               <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Provider Cancellation */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] text-[#151515] mb-2">
//           Please describe your cancellation policy (if you initiate a cancellation)
//         </p>
//         <div className="space-y-2.5">
//           {providerCancelOptions.map((option) => (
//             <div key={option} className="flex items-center mb-2">
//               <input
//                 type="radio"
//                 className="accent-[#EA0056] size-5"
//                 name="providerCancellation"
//                 value={option}
//                 checked={providerCancellationPolicy === option}
//                 onChange={(e) => setProviderCancellationPolicy(e.target.value)}
//               />
//               <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Business Start Year */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           In which year did you start your business?
//         </label>
//         <input
//           type="text"
//           value={businessStartYear}
//           onChange={(e) => setBusinessStartYear(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2"
//         />
//       </div>

//       {/* Booking Lead Time */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">
//           How many weeks in advance should a booking be made?
//         </label>
//         <input
//           type="text"
//           value={bookingLeadTime}
//           onChange={(e) => setBookingLeadTime(e.target.value)}
//           className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2"
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

// export default DJForm;

'use client';
import React, { useEffect, useState } from 'react';

const DJForm = ({prefilledValues,defaultValues,onDataChange}) => {
  const [form, setForm] = useState({
    basicPackage: '',
    packageInclusion: '',
    selectedGenres: [],
    clubName: '',
    yearsExperience: '',
    experienceType: '',
    cancellationTerms: '',
    userCancellationPolicy: '',
    providerCancellationPolicy: '',
    businessStartYear: '',
    bookingLeadTime: '',
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
  console.log('dj length',Object.keys(form))

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

  const genres = [
    "Commercial",
    "Punjabi",
    "Hip Hop",
    "EDM",
    "House",
    "Bollywood",
  ];

  const userCancelOptions = [
    "Partial Refund Offered",
    "No Refund Offered",
    "No Refund Offered, However Date Adjustment Can Be Done",
    "Full Refund Offered",
  ];

  const providerCancelOptions = [
    "Partial Refund Offered",
    "No Refund Offered",
    "Full Refund Offered",
  ];

  const experienceYearsOptions = [
    "Less than 1 year",
    "1–3 years",
    "3–5 years",
    "More than 5 years",
  ];

  const experienceTypeOptions = [
    "Celebrity Weddings",
    "International Weddings",
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
      {renderInput("What is your basic starting package?", "basicPackage")}

      {renderTextarea("What does the above price include? (e.g., Includes equipment, lighting)", "packageInclusion")}

      {renderCheckboxGroup("Favourite Music Genres", "selectedGenres", genres)}

      {renderTextarea("Do you regularly play at any club? Please mention Club Name.", "clubName")}

      {renderRadioGroup("How many years have you been DJ'ing for?", "yearsExperience", experienceYearsOptions)}

      {renderRadioGroup("What are you most experienced in?", "experienceType", experienceTypeOptions)}

      {renderTextarea("What are the terms & conditions of your cancellation policy?", "cancellationTerms")}

      {renderRadioGroup("Please describe your cancellation policy (if a user initiates cancellation)", "userCancellationPolicy", userCancelOptions)}

      {renderRadioGroup("Please describe your cancellation policy (if you initiate a cancellation)", "providerCancellationPolicy", providerCancelOptions)}

      {renderInput("In which year did you start your business?", "businessStartYear")}

      {renderInput("How many weeks in advance should a booking be made?", "bookingLeadTime")}

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default DJForm;