import React, { useState } from "react";

const DJForm = () => {
  const [basicPackage, setBasicPackage] = useState("");
  const [packageInclusion, setPackageInclusion] = useState("");
  const [clubName, setClubName] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [experienceType, setExperienceType] = useState("");
  const [cancellationTerms, setCancellationTerms] = useState("");
  const [userCancellationPolicy, setUserCancellationPolicy] = useState("");
  const [providerCancellationPolicy, setProviderCancellationPolicy] = useState("");
  const [businessStartYear, setBusinessStartYear] = useState("");
  const [bookingLeadTime, setBookingLeadTime] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

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

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Basic Starting Package */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          What is your basic starting package?
        </label>
        <input
          type="text"
          value={basicPackage}
          onChange={(e) => setBasicPackage(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] text-[14px] font-medium text-black w-1/2"
        />
      </div>

      {/* Package Inclusions */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          What does the above price include? (e.g., Includes equipment, lighting)
        </label>
        <textarea
          value={packageInclusion}
          onChange={(e) => setPackageInclusion(e.target.value)}
          className="h-[90px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
          placeholder="Enter your message"
        ></textarea>
      </div>

      {/* Genres */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Favourite Music Genres
        </p>
        <div className="space-y-2.5">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={genre}
                value={genre}
                className="accent-[#EA0056] size-4"
                checked={selectedGenres.includes(genre)}
                onChange={() => toggleGenre(genre)}
              />
              <label
                htmlFor={genre}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Club */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          Do you regularly play at any club? Please mention Club Name.
        </label>
        <textarea
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          className="h-[90px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
          placeholder="Enter your message"
        ></textarea>
      </div>

      {/* Years of Experience */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          How many years have you been DJ’ing for?
        </p>
        <div className="space-y-2.5">
          {experienceYearsOptions.map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                className="accent-[#EA0056] size-5"
                name="yearsExperience"
                value={option}
                checked={yearsExperience === option}
                onChange={(e) => setYearsExperience(e.target.value)}
              />
              <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Most Experienced In */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          What are you most experienced in?
        </p>
        <div className="space-y-2.5">
          {experienceTypeOptions.map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                className="accent-[#EA0056] size-5"
                name="experienceType"
                value={option}
                checked={experienceType === option}
                onChange={(e) => setExperienceType(e.target.value)}
              />
              <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          What are the terms & conditions of your cancellation policy?
        </label>
        <textarea
          value={cancellationTerms}
          onChange={(e) => setCancellationTerms(e.target.value)}
          className="h-[90px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] font-medium text-black w-1/2"
          placeholder="Enter your message"
        ></textarea>
      </div>

      {/* User Cancellation */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Please describe your cancellation policy (if a user initiates cancellation)
        </p>
        <div className="space-y-2.5">
          {userCancelOptions.map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                className="accent-[#EA0056] size-5"
                name="userCancellation"
                value={option}
                checked={userCancellationPolicy === option}
                onChange={(e) => setUserCancellationPolicy(e.target.value)}
              />
              <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Provider Cancellation */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Please describe your cancellation policy (if you initiate a cancellation)
        </p>
        <div className="space-y-2.5">
          {providerCancelOptions.map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                className="accent-[#EA0056] size-5"
                name="providerCancellation"
                value={option}
                checked={providerCancellationPolicy === option}
                onChange={(e) => setProviderCancellationPolicy(e.target.value)}
              />
              <label className="text-black font-normal text-[14px] ml-2 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Business Start Year */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          In which year did you start your business?
        </label>
        <input
          type="text"
          value={businessStartYear}
          onChange={(e) => setBusinessStartYear(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2"
        />
      </div>

      {/* Booking Lead Time */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          How many weeks in advance should a booking be made?
        </label>
        <input
          type="text"
          value={bookingLeadTime}
          onChange={(e) => setBookingLeadTime(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] font-medium text-black w-1/2"
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

export default DJForm;