import React, { useState } from "react";

const PreWeddingPhotographersForm = () => {
  const [processedPics, setProcessedPics] = useState("");
  const [services, setServices] = useState([]);
  const [paymentTerms, setPaymentTerms] = useState("");
  const [awards, setAwards] = useState("");
  const [preShootCost, setPreShootCost] = useState("");
  const [travelLodgingCost, setTravelLodgingCost] = useState("");
  const [preWeddingStillsPrice, setPreWeddingStillsPrice] = useState("");
  const [cancellationTerms, setCancellationTerms] = useState("");
  const [outstationCost, setOutstationCost] = useState("");
  const [preWeddingFilmPrice, setPreWeddingFilmPrice] = useState("");
  const [experienceYears, setExperienceYears] = useState("");

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

  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="space-y-6">
      {/* Processed Pictures */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          How many processed (edited) pictures do you usually deliver to the client?
        </p>
        <div className="space-y-2.5">
          {processedOptions.map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="radio"
                name="processedPics"
                value={item}
                checked={processedPics === item}
                onChange={(e) => setProcessedPics(e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label className="ml-2 text-[14px] text-black cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Services Offered */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Which services do you offer?
        </p>
        <div className="space-y-2.5">
          {servicesList.map((service) => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                checked={services.includes(service)}
                onChange={() => toggleService(service)}
                className="accent-[#EA0056] size-4"
              />
              <label className="ml-2 text-[14px] text-black cursor-pointer">
                {service}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Terms */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          What are your payment terms?
        </p>
        <div className="space-y-2.5">
          {paymentOptions.map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="radio"
                name="paymentTerms"
                value={item}
                checked={paymentTerms === item}
                onChange={(e) => setPaymentTerms(e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label className="ml-2 text-[14px] text-black cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          Please mention any awards you have received:
        </label>
        <input
          type="text"
          value={awards}
          onChange={(e) => setAwards(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
        />
      </div>

      {/* Pre-wedding shoot cost */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Who bears the pre-wedding shoot location cost?
        </p>
        <div className="space-y-2.5">
          {preShootOptions.map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="radio"
                name="preShootCost"
                value={item}
                checked={preShootCost === item}
                onChange={(e) => setPreShootCost(e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label className="ml-2 text-[14px] text-black cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Travel & Lodging */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Who bears cost of travel and lodging when travelling to a different city?
        </p>
        <div className="space-y-2.5">
          {travelLodgingOptions.map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="radio"
                name="travelLodgingCost"
                value={item}
                checked={travelLodgingCost === item}
                onChange={(e) => setTravelLodgingCost(e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label className="ml-2 text-[14px] text-black cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Fields */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          Pricing for Pre-wedding stills? (Per day)
        </label>
        <input
          type="text"
          value={preWeddingStillsPrice}
          onChange={(e) => setPreWeddingStillsPrice(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
        />
      </div>

      {/* Cancellation Terms */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          What are the terms & conditions of your cancellation policy?
        </label>
        <textarea
          value={cancellationTerms}
          onChange={(e) => setCancellationTerms(e.target.value)}
          className="h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 text-[14px] text-black w-1/2"
          placeholder="e.g., No refunds within a month of the wedding day or 50% amount refundable"
        ></textarea>
      </div>

      {/* Outstation Cost */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] text-[#151515] mb-2">
          Who bears the travel and stay cost for outstation weddings?
        </p>
        <div className="space-y-2.5">
          {outstationOptions.map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="radio"
                name="outstationCost"
                value={item}
                checked={outstationCost === item}
                onChange={(e) => setOutstationCost(e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label className="ml-2 text-[14px] text-black cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-wedding film pricing */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          Pricing for Pre-wedding Films? (Per day)
        </label>
        <input
          type="text"
          value={preWeddingFilmPrice}
          onChange={(e) => setPreWeddingFilmPrice(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
        />
      </div>

      {/* Years of experience */}
      <div className="flex flex-col">
        <label className="font-semibold text-[16px] text-[#151515] mb-2">
          How long have you been doing pre-wedding photography?
        </label>
        <input
          type="text"
          value={experienceYears}
          onChange={(e) => setExperienceYears(e.target.value)}
          className="h-[42px] rounded-[8px] outline-none bg-white px-[22px] text-[14px] text-black w-1/2"
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

export default PreWeddingPhotographersForm;
