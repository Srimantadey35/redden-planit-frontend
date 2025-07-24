import React, { useState } from "react";

// Export all field keys for dynamic counting in parent
export const cateringFields = [
  "veg_plate_price",
  "non_veg_plate_price",
  "max_people",
  "standard_non_veg_menu",
  "cuisines_offered",
  "caterer_type",
  "business_start_year",
  "veg_caterer_only",
  "user_cancellation_policy",
  "provider_cancellation_policy",
  "provider_cancellation_terms",
  "min_people",
  "advance_booking_weeks",
];

const Catering = () => {
  const [selectedType, setSelectedType] = useState("");
  const [checkedCategoryIds, setCheckedCategoryIds] = useState([]);
  const [checkedCuisineIds, setCheckedCuisineIds] = useState([]);
  const [selectedCatererType, setSelectedCatererType] = useState("");
  const [selectedVegCategory, setSelectedVegCategory] = useState("");
  const [selectedCancellationPolicy, setSelectedCancellationPolicy] =
    useState("");

  const categories = [
    { id: 1, categoryName: "Jain Catering Only" },
    { id: 2, categoryName: "Vegetarian Only" },
    { id: 3, categoryName: "Chat & Street Food Only" },
    { id: 4, categoryName: "Small size gathering only" },
    { id: 5, categoryName: "Drinks only" },
  ];
  const cuisines = [
    {
      id: 1,
      cuisineName: "North Indian",
    },
    {
      id: 2,
      cuisineName: "South Indian",
    },
    {
      id: 3,
      cuisineName: "Chinese",
    },
    {
      id: 4,
      cuisineName: "Japanese",
    },
    {
      id: 5,
      cuisineName: "Italian",
    },
    {
      id: 6,
      cuisineName: "Greek",
    },
    {
      id: 7,
      cuisineName: "Lebanese",
    },
    {
      id: 8,
      cuisineName: "Thai",
    },
    {
      id: 9,
      cuisineName: "Desserts",
    },
    {
      id: 10,
      cuisineName: "Bengali",
    },
    {
      id: 11,
      cuisineName: "Gujarati",
    },
    {
      id: 12,
      cuisineName: "Rajasthani",
    },
    {
      id: 13,
      cuisineName: "Goan",
    },
    {
      id: 14,
      cuisineName: "Maharashtrian",
    },
  ];
  const catererTypes = [
    {
      id: "chat-provider",
      label: "Chat Provider Only",
    },
    {
      id: "live-counters",
      label:
        "Specialised Live Counter Items Only – Eg: Ice Creams, Drinks, Desserts, Etc",
    },
    {
      id: "single-cuisine",
      label:
        "You specialise in only one type of cuisine: Eg: Italian only, Thai only",
    },
    {
      id: "general-caterer",
      label: "General Caterer Providing all Services",
    },
  ];
  const policies = [
    "Partial Refund Offered",
    "No Refund Offered",
    "No Refund Offered However Date Adjustment Can Be Done",
    "Full Refund Offered",
  ];

  const toggleCategoryCheckbox = (categoryId) => {
    setCheckedCategoryIds((prevChecked) =>
      prevChecked.includes(categoryId)
        ? prevChecked.filter((id) => id !== categoryId)
        : [...prevChecked, categoryId]
    );
  };
  const toggleCuisineCheckbox = (id) => {
    setCheckedCuisineIds((prev) =>
      prev.includes(id)
        ? prev.filter((cuisineId) => cuisineId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          What is the starting per plate price for a Vegetarian menu (Assume 250
          pax)?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          name="plateprice"
        />
      </div>
      {/* checkbox  */}
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          What is the starting per plate price for a non vegetarian menu (Assume
          250 pax)?
        </label>
        <div className="flex flex-col space-y-2.5">
          {categories.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`${item.id}`}
                className="accent-[#EA0056] size-3.5 4xl:size-5"
                checked={checkedCategoryIds.includes(item.id)}
                onChange={() => toggleCategoryCheckbox(item.id)}
              />
              <label
                htmlFor={`${item.id}`}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {item.categoryName}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          What is the Maximum number of people you can cater to?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          name="plateprice"
        />
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          What does your standard non-veg menu include? (Mention number of
          starters, number of main course, veg and non veg)
        </label>
        <textarea
          className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2 py-2"
          placeholder="Enter your message"
        ></textarea>
      </div>
      {/* cuisines */}
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          Which of the following cuisines do you offer
        </label>
        <div className="flex flex-col space-y-2.5">
          {cuisines.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`cuisine-${item.id}`}
                className="accent-[#EA0056] size-3.5 4xl:size-5"
                checked={checkedCuisineIds.includes(item.id)}
                onChange={() => toggleCuisineCheckbox(item.id)}
              />
              <label
                htmlFor={`cuisine-${item.id}`}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {item.cuisineName}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* What Type Of Caterer Are You */}
      <div className="flex flex-col ">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          What Type Of Caterer Are You ?
        </p>

        <div className="space-y-2.5">
          {catererTypes.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                className="accent-[#EA0056] size-5"
                type="radio"
                name="CatererType"
                id={`caterer-${item.id}`}
                value={item.id}
                checked={selectedCatererType === item.id}
                onChange={(e) => setSelectedCatererType(e.target.value)}
              />
              <label
                htmlFor={`caterer-${item.id}`}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          In which year did you start your catering business?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          name="plateprice"
        />
      </div>
      {/* Are you a veg caterer only? */}
      <div className="flex flex-col ">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Are you a veg caterer only?
        </p>

        <div className="space-y-2.5">
          {["Veg", "veg & non veg"].map((item) => (
            <div key={item} className="flex items-center mb-2">
              <input
                className="accent-[#EA0056] size-5"
                type="radio"
                name="vegCategoryOption"
                id={`veg-${item.replace(/\s+/g, "-").toLowerCase()}`}
                value={item}
                checked={selectedVegCategory === item}
                onChange={(e) => setSelectedVegCategory(e.target.value)}
              />
              <label
                htmlFor={`veg-${item.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Please describe your cancellation policy (if a user initiates cancellation) including whether you provide refunds of booking amounts, and terms for doing so */}
      <div className="flex flex-col ">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Please describe your cancellation policy (if a user initiates
          cancellation) including whether you provide refunds of booking
          amounts, and terms for doing so.
        </p>

        <div className="space-y-2.5">
          {policies.map((item) => {
            const safeId = `policy-${item.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <div key={item} className="flex items-center mb-2">
                <input
                  className="accent-[#EA0056] size-5"
                  type="radio"
                  name="cancellationPolicyOption"
                  id={safeId}
                  value={item}
                  checked={selectedCancellationPolicy === item}
                  onChange={(e) =>
                    setSelectedCancellationPolicy(e.target.value)
                  }
                />
                <label
                  htmlFor={safeId}
                  className="text-black font-normal text-[14px] ml-2 cursor-pointer"
                >
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Please describe your cancellation policy (if you initiate a
          cancellation) including whether you provide refunds of booking amounts
          and terms for doing so.
        </p>

        <div className="space-y-2.5">
          {[
            "Partial Refund Offered",
            "No Refund Offered",
            " Full Refund Offered",
          ].map((item) => (
            <div key={item} className="flex items-center">
              <input
                className="accent-[#EA0056] size-5"
                type="radio"
                name="vegCategory"
                id={item}
                value={item}
                checked={selectedType === item}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <label
                htmlFor={item}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          What are the terms & conditions of your cancellation policy? (please
          describe in detail – eg: No refunds within a month of the wedding day
          or 50% amount refundable)
        </label>
        <textarea
          className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2 py-2"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          What is the minimum number of people you cater to?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          name="plateprice"
        />
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="plateprice"
          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
        >
          How many weeks in advance should a booking be made to get a slot?
        </label>
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          name="plateprice"
        />
      </div>

       <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div>
    </>
  );
};

export default Catering;
