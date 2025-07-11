import React, { useState } from "react";

const Cake = () => {
  const [specializations, setSpecializations] = useState([]);
  const [startingPrice, setStartingPrice] = useState("");
  const [popularFlavors, setPopularFlavors] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [celebrityWeddings, setCelebrityWeddings] = useState("");
  const [advanceBookingDays, setAdvanceBookingDays] = useState("");

  const specializationOptions = [
    "Cake in a jar",
    "Ice Cream Cakes",
    "Wedding Cakes",
    "Cupcakes",
    "Chandelier Cakes"
  ];

  const toggleSpecialization = (item) => {
    setSpecializations((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="space-y-6">
      {/* Specialization */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          What do you specialise in?
        </label>
        <div className="space-y-2.5">
          {specializationOptions.map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="checkbox"
                className="accent-[#EA0056] size-4"
                checked={specializations.includes(item)}
                onChange={() => toggleSpecialization(item)}
              />
              <label className="ml-2 text-black font-normal text-[14px] cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Starting Price */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          For a wedding cake (fondant cake), what is the starting price per kg?
        </label>
        <input
          type="text"
          value={startingPrice}
          onChange={(e) => setStartingPrice(e.target.value)}
          className="h-[42px] 3xl:h-[53px] rounded-[8px] bg-white outline-none px-[22px] text-[14px] 3xl:text-[16px] font-medium text-black w-1/2"
        />
      </div>

      {/* Flavors */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          What are your most popular flavors?
        </label>
        <textarea
          rows={4}
          value={popularFlavors}
          onChange={(e) => setPopularFlavors(e.target.value)}
          placeholder="Enter flavors separated by commas"
          className="rounded-[8px] bg-white outline-none px-[22px] py-2 text-[14px] 3xl:text-[16px] font-medium text-black w-1/2"
        ></textarea>
      </div>

      {/* Delivery */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Do you arrange for delivery and transport of the cake to the venue?
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            name="deliveryOption"
            className="accent-[#EA0056] size-5"
            id="delivery"
            value="Delivery provided at an extra cost"
            checked={deliveryOption === "Delivery provided at an extra cost"}
            onChange={(e) => setDeliveryOption(e.target.value)}
          />
          <label htmlFor="delivery" className="text-black font-normal text-[14px] cursor-pointer">
            Delivery provided at an extra cost
          </label>
        </div>
      </div>

      {/* Celebrity Weddings */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Please mention any celebrity weddings you may have done
        </label>
        <textarea
          rows={4}
          value={celebrityWeddings}
          onChange={(e) => setCelebrityWeddings(e.target.value)}
          className="rounded-[8px] bg-white outline-none px-[22px] py-2 text-[14px] 3xl:text-[16px] font-medium text-black w-1/2"
        ></textarea>
      </div>

      {/* Advance Booking Days */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          How many days in advance should a booking be made?
        </label>
        <input
          type="text"
          value={advanceBookingDays}
          onChange={(e) => setAdvanceBookingDays(e.target.value)}
          className="h-[42px] 3xl:h-[53px] rounded-[8px] bg-white outline-none px-[22px] text-[14px] 3xl:text-[16px] font-medium text-black w-1/2"
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

export default Cake;
