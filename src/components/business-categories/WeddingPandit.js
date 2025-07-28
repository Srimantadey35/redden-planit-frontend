// import React, { useState } from "react";

// const WeddingPandit = () => {
//   const [gender, setGender] = useState("");
//   const [travelForDestination, setTravelForDestination] = useState("");
//   const [languages, setLanguages] = useState([]);
//   const [experience, setExperience] = useState("");
//   const [culture, setCulture] = useState("");
//   const [services, setServices] = useState([]);
//   const [samagri, setSamagri] = useState("");

//   const languageOptions = [
//     "Hindi", "Tamil", "Telugu", "Marathi", "Kannada",
//     "Punjabi", "Bengali", "Sanskrit", "English",
//     "Gujarati", "Urdu"
//   ];

//   const serviceOptions = [
//     "Pre-wedding", "Wedding", "Sagan", "Astrology"
//   ];

//   const toggleItem = (item, stateSetter, state) => {
//     if (state.includes(item)) {
//       stateSetter(state.filter(i => i !== item));
//     } else {
//       stateSetter([...state, item]);
//     }
//   };

//   return (
//     <div className="space-y-6 text-black">
//       {[
//         { label: "What are your charges for Pre-Wedding (Roka) Puja/Hawan?" },
//         { label: "What are your charges for Sagan Puja/Hawan?" },
//         { label: "Name" },
//         { label: "Service Area" },
//         { label: "What are your charges for Wedding Puja/Hawan?" },
//         { label: "What are your charges for matching kundlis?" }
//       ].map(({ label }, idx) => (
//         <div key={idx} className="flex flex-col">
//           <label className="font-semibold text-[16px] text-[#151515] mb-2">{label}</label>
//           <input className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2" />
//         </div>
//       ))}

//       {/* Gender */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">Gender:</label>
//         {['Female', 'Male', 'Prefer not to say'].map(option => (
//           <label key={option} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               className="accent-[#EA0056]"
//               name="gender"
//               value={option}
//               checked={gender === option}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             <span className="text-[14px]">{option}</span>
//           </label>
//         ))}
//       </div>

//       {/* Travel */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">Do you travel for destination weddings?</label>
//         {["Travels for destination weddings", "Does not travel for destination weddings"].map(option => (
//           <label key={option} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               className="accent-[#EA0056]"
//               name="travel"
//               value={option}
//               checked={travelForDestination === option}
//               onChange={(e) => setTravelForDestination(e.target.value)}
//             />
//             <span className="text-[14px]">{option}</span>
//           </label>
//         ))}
//       </div>

//       {/* Languages */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">What all languages do you know?</label>
//         {languageOptions.map((lang) => (
//           <label key={lang} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="accent-[#EA0056]"
//               checked={languages.includes(lang)}
//               onChange={() => toggleItem(lang, setLanguages, languages)}
//             />
//             <span className="text-[14px]">{lang}</span>
//           </label>
//         ))}
//       </div>

//       {/* Experience */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">How many years of experience do you have?</label>
//         {["Less than 1 year", "1–3 years", "3–5 years", "5+ years"].map(option => (
//           <label key={option} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               className="accent-[#EA0056]"
//               name="experience"
//               value={option}
//               checked={experience === option}
//               onChange={(e) => setExperience(e.target.value)}
//             />
//             <span className="text-[14px]">{option}</span>
//           </label>
//         ))}
//       </div>

//       {/* Culture */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">Which culture weddings do you manage?</label>
//         {["Hindu", "Muslim", "Christian"].map(option => (
//           <label key={option} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               className="accent-[#EA0056]"
//               name="culture"
//               value={option}
//               checked={culture === option}
//               onChange={(e) => setCulture(e.target.value)}
//             />
//             <span className="text-[14px]">{option}</span>
//           </label>
//         ))}
//       </div>

//       {/* Services */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">What all services do you offer?</label>
//         {serviceOptions.map(service => (
//           <label key={service} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="accent-[#EA0056]"
//               checked={services.includes(service)}
//               onChange={() => toggleItem(service, setServices, services)}
//             />
//             <span className="text-[14px]">{service}</span>
//           </label>
//         ))}
//       </div>

//       {/* Samagri */}
//       <div className="flex flex-col">
//         <label className="font-semibold text-[16px] text-[#151515] mb-2">Samagri included or not included?</label>
//         {["Included", "Not Included"].map(option => (
//           <label key={option} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               className="accent-[#EA0056]"
//               name="samagri"
//               value={option}
//               checked={samagri === option}
//               onChange={(e) => setSamagri(e.target.value)}
//             />
//             <span className="text-[14px]">{option}</span>
//           </label>
//         ))}
//       </div>

//        <div className="pt-4">
//         <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WeddingPandit;


import React, { useState, useEffect } from "react";

const WeddingPandit = ({ prefilledValues = {}, defaultValues = {}, onDataChange }) => {
  const [form, setForm] = useState({
    preWeddingCharges: prefilledValues.preWeddingCharges || defaultValues.preWeddingCharges || "",
    saganCharges: prefilledValues.saganCharges || defaultValues.saganCharges || "",
    name: prefilledValues.name || defaultValues.name || "",
    serviceArea: prefilledValues.serviceArea || defaultValues.serviceArea || "",
    weddingCharges: prefilledValues.weddingCharges || defaultValues.weddingCharges || "",
    kundliMatchingCharges: prefilledValues.kundliMatchingCharges || defaultValues.kundliMatchingCharges || "",
    gender: prefilledValues.gender || defaultValues.gender || "",
    travelForDestination: prefilledValues.travelForDestination || defaultValues.travelForDestination || "",
    languages: prefilledValues.languages || defaultValues.languages || [],
    experience: prefilledValues.experience || defaultValues.experience || "",
    culture: prefilledValues.culture || defaultValues.culture || "",
    services: prefilledValues.services || defaultValues.services || [],
    samagri: prefilledValues.samagri || defaultValues.samagri || "",
  });

  const languageOptions = [
    "Hindi", "Tamil", "Telugu", "Marathi", "Kannada",
    "Punjabi", "Bengali", "Sanskrit", "English",
    "Gujarati", "Urdu"
  ];

  const serviceOptions = [
    "Pre-wedding", "Wedding", "Sagan", "Astrology"
  ];

  const genderOptions = ['Female', 'Male', 'Prefer not to say'];
  
  const travelOptions = [
    "Travels for destination weddings", 
    "Does not travel for destination weddings"
  ];

  const experienceOptions = [
    "Less than 1 year", 
    "1–3 years", 
    "3–5 years", 
    "5+ years"
  ];

  const cultureOptions = ["Hindu", "Muslim", "Christian"];
  
  const samagriOptions = ["Included", "Not Included"];

  const handleChange = (field, value) => {
    const updatedForm = { ...form, [field]: value };
    setForm(updatedForm);
    
    if (onDataChange) {
      const filledCount = countFilledFields(updatedForm);
      const totalFields = getTotalFields();
      onDataChange(updatedForm, filledCount, totalFields);
    }
  };

  const toggleLanguage = (language) => {
    const updatedLanguages = form.languages.includes(language)
      ? form.languages.filter(l => l !== language)
      : [...form.languages, language];
    handleChange("languages", updatedLanguages);
  };

  const toggleService = (service) => {
    const updatedServices = form.services.includes(service)
      ? form.services.filter(s => s !== service)
      : [...form.services, service];
    handleChange("services", updatedServices);
  };

  const countFilledFields = (formData) => {
    let count = 0;
    
    // Text/select fields
    const textFields = [
      'preWeddingCharges', 'saganCharges', 'name', 'serviceArea', 
      'weddingCharges', 'kundliMatchingCharges', 'gender', 
      'travelForDestination', 'experience', 'culture', 'samagri'
    ];
    
    textFields.forEach(field => {
      if (formData[field] && formData[field].toString().trim() !== '') {
        count++;
      }
    });
    
    // Array fields
    if (formData.languages && formData.languages.length > 0) count++;
    if (formData.services && formData.services.length > 0) count++;
    
    return count;
  };

  const getTotalFields = () => {
    return 13; // Total number of form fields
  };

  useEffect(() => {
    if (onDataChange) {
      const filledCount = countFilledFields(form);
      const totalFields = getTotalFields();
      onDataChange(form, filledCount, totalFields);
    }
  }, []);

  const renderInput = (field, label, placeholder = "", type = "text") => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
        {label}
      </label>
      <input
        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
        type={type}
        value={form[field]}
        placeholder={placeholder}
        onChange={(e) => handleChange(field, e.target.value)}
      />
    </div>
  );

  const renderRadioGroup = (field, label, options, nameAttr) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
        {label}
      </p>
      <div className="space-y-2.5">
        {options.map((option) => {
          const id = `${field}-${option.replace(/\s+/g, "-").toLowerCase()}`;
          return (
            <div key={option} className="flex items-center mb-2">
              <input
                className="accent-[#EA0056] size-5"
                type="radio"
                name={nameAttr}
                id={id}
                value={option}
                checked={form[field] === option}
                onChange={(e) => handleChange(field, e.target.value)}
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
  );

  const renderCheckboxGroup = (field, label, options, toggleFunction) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
        {label}
      </label>
      <div className="flex flex-col space-y-2.5">
        {options.map((option) => {
          const id = `${field}-${option.replace(/\s+/g, "-").toLowerCase()}`;
          const isChecked = form[field].includes(option);
          
          return (
            <div key={option} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={id}
                className="accent-[#EA0056] size-3.5 4xl:size-5"
                checked={isChecked}
                onChange={() => toggleFunction(option)}
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
  );

  return (
    <>
      {renderInput("preWeddingCharges", "What are your charges for Pre-Wedding (Roka) Puja/Hawan?")}
      
      {renderInput("saganCharges", "What are your charges for Sagan Puja/Hawan?")}
      
      {renderInput("name", "Name")}
      
      {renderInput("serviceArea", "Service Area")}
      
      {renderInput("weddingCharges", "What are your charges for Wedding Puja/Hawan?")}
      
      {renderInput("kundliMatchingCharges", "What are your charges for matching kundlis?")}
      
      {renderRadioGroup("gender", "Gender:", genderOptions, "genderOption")}
      
      {renderRadioGroup("travelForDestination", "Do you travel for destination weddings?", travelOptions, "travelOption")}
      
      {renderCheckboxGroup("languages", "What all languages do you know?", languageOptions, toggleLanguage)}
      
      {renderRadioGroup("experience", "How many years of experience do you have?", experienceOptions, "experienceOption")}
      
      {renderRadioGroup("culture", "Which culture weddings do you manage?", cultureOptions, "cultureOption")}
      
      {renderCheckboxGroup("services", "What all services do you offer?", serviceOptions, toggleService)}
      
      {renderRadioGroup("samagri", "Samagri included or not included?", samagriOptions, "samagriOption")}

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </>
  );
};

export default WeddingPandit;