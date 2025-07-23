import React, { useState } from "react";

const WeddingPandit = () => {
  const [gender, setGender] = useState("");
  const [travelForDestination, setTravelForDestination] = useState("");
  const [languages, setLanguages] = useState([]);
  const [experience, setExperience] = useState("");
  const [culture, setCulture] = useState("");
  const [services, setServices] = useState([]);
  const [samagri, setSamagri] = useState("");

  const languageOptions = [
    "Hindi", "Tamil", "Telugu", "Marathi", "Kannada",
    "Punjabi", "Bengali", "Sanskrit", "English",
    "Gujarati", "Urdu"
  ];

  const serviceOptions = [
    "Pre-wedding", "Wedding", "Sagan", "Astrology"
  ];

  const toggleItem = (item, stateSetter, state) => {
    if (state.includes(item)) {
      stateSetter(state.filter(i => i !== item));
    } else {
      stateSetter([...state, item]);
    }
  };

  return (
    <div className="space-y-6 text-black">
      {[
        { label: "What are your charges for Pre-Wedding (Roka) Puja/Hawan?" },
        { label: "What are your charges for Sagan Puja/Hawan?" },
        { label: "Name" },
        { label: "Service Area" },
        { label: "What are your charges for Wedding Puja/Hawan?" },
        { label: "What are your charges for matching kundlis?" }
      ].map(({ label }, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="font-semibold text-[16px] text-[#151515] mb-2">{label}</label>
          <input className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2" />
        </div>
      ))}

      {/* Gender */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">Gender:</label>
        {['Female', 'Male', 'Prefer not to say'].map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              className="accent-[#EA0056]"
              name="gender"
              value={option}
              checked={gender === option}
              onChange={(e) => setGender(e.target.value)}
            />
            <span className="text-[14px]">{option}</span>
          </label>
        ))}
      </div>

      {/* Travel */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">Do you travel for destination weddings?</label>
        {["Travels for destination weddings", "Does not travel for destination weddings"].map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              className="accent-[#EA0056]"
              name="travel"
              value={option}
              checked={travelForDestination === option}
              onChange={(e) => setTravelForDestination(e.target.value)}
            />
            <span className="text-[14px]">{option}</span>
          </label>
        ))}
      </div>

      {/* Languages */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">What all languages do you know?</label>
        {languageOptions.map((lang) => (
          <label key={lang} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-[#EA0056]"
              checked={languages.includes(lang)}
              onChange={() => toggleItem(lang, setLanguages, languages)}
            />
            <span className="text-[14px]">{lang}</span>
          </label>
        ))}
      </div>

      {/* Experience */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">How many years of experience do you have?</label>
        {["Less than 1 year", "1–3 years", "3–5 years", "5+ years"].map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              className="accent-[#EA0056]"
              name="experience"
              value={option}
              checked={experience === option}
              onChange={(e) => setExperience(e.target.value)}
            />
            <span className="text-[14px]">{option}</span>
          </label>
        ))}
      </div>

      {/* Culture */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">Which culture weddings do you manage?</label>
        {["Hindu", "Muslim", "Christian"].map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              className="accent-[#EA0056]"
              name="culture"
              value={option}
              checked={culture === option}
              onChange={(e) => setCulture(e.target.value)}
            />
            <span className="text-[14px]">{option}</span>
          </label>
        ))}
      </div>

      {/* Services */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">What all services do you offer?</label>
        {serviceOptions.map(service => (
          <label key={service} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-[#EA0056]"
              checked={services.includes(service)}
              onChange={() => toggleItem(service, setServices, services)}
            />
            <span className="text-[14px]">{service}</span>
          </label>
        ))}
      </div>

      {/* Samagri */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">Samagri included or not included?</label>
        {["Included", "Not Included"].map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              className="accent-[#EA0056]"
              name="samagri"
              value={option}
              checked={samagri === option}
              onChange={(e) => setSamagri(e.target.value)}
            />
            <span className="text-[14px]">{option}</span>
          </label>
        ))}
      </div>

       <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default WeddingPandit;
