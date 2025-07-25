import React, { useEffect, useState } from "react";

const PhotographerForm = ({defaultValues,onDataChange,prefilledValues,onInitialTotalCount}) => {
  const [form, setForm] = useState({
    deliveryWeeks: "",
    mostBookedValue: "",
    serviceDays: "",
    serviceType: "",
    userCancellationPolicy: "",
    vendorCancellationPolicy: "",
    cancellationTerms: "",
    photoWords: "",
    cityCount: "",
    whyLove: "",
    advanceWeeks: "",
    startedYear: "",
    specialty: "",
    engagementPrice: "",
    imageDeliveryCount: "",
    paymentTerm: "",
    travelCost: "",
    oneDayPhotoPackage: "",
    oneDayFullPackage: "",
    defaultPackage: "",
    selectedServices: [],
  });

//   const updateParent = (updatedForm) => {
//   setForm(updatedForm); 
//   onChange && onChange(updatedForm); // notify parent
//  };

// const handleChange = (key, value) => {
//   const updatedForm = { ...form, [key]: value };
//   updateParent(updatedForm);
// };

useEffect(() => {
  const totalCount = getTotalFields(form);
  if (onInitialTotalCount) {
    onInitialTotalCount(totalCount);
  }
}, []);

console.log('prefilledValues',prefilledValues)
useEffect(() => {
  if (prefilledValues && Object.keys(prefilledValues).length > 0) {
    setForm(prefilledValues);
  }
}, [prefilledValues]);


  const services = [
    "Candid Photography",
    "Wedding Films",
    "Traditional Photography",
    "Pre-Wedding",
    "Albums",
    "Maternity Shoots",
    "Fashion Shoots",
    "Pre wedding Films",
    "Traditional Videography",
    "Drone Photography",
    "Live Streaming",
    "Small Function Photography",
  ];

  useEffect(() => {
  if (defaultValues && Object.keys(defaultValues).length > 0) {
    setForm(defaultValues);
  }
}, [defaultValues]);


  // Helper to count filled fields (excluding arrays)
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
    // Send both form and filled count to parent
    onDataChange(updated, countFilledFields(updated),getTotalFields(updated));
  };

  // const toggleService = (service) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     selectedServices: prev.selectedServices.includes(service)
  //       ? prev.selectedServices.filter((item) => item !== service)
  //       : [...prev.selectedServices, service],
        
  //   }));
  // };
  const toggleService = (service) => {
    const updatedServices = form.selectedServices.includes(service)
      ? form.selectedServices.filter((s) => s !== service)
      : [...form.selectedServices, service];

    handleChange("selectedServices", updatedServices);
  };

  // On mount or when form changes (prefilled/default), send count to parent
  useEffect(() => {
    onDataChange(form, countFilledFields(form),getTotalFields(form));
  }, [form]);

  const renderInput = (label, key, placeholder = "Enter here") => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <input
        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );

  const renderTextarea = (label, key, rows = 4) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <textarea
        className={`h-[${rows * 25}px] 3xl:h-[${rows * 30}px] rounded-[8px] outline-none bg-white px-[22px] py-2 placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2`}
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        placeholder="Enter your message"
      ></textarea>
    </div>
  );

  const renderRadioGroup = (label, options, key) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</p>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const id = `${key}-${opt.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
          return (
            <div key={opt} className="flex items-center mb-2">
              <input
                className="accent-[#EA0056] size-5"
                type="radio"
                name={key}
                id={id}
                value={opt}
                checked={form[key] === opt}
                onChange={(e) => handleChange(key, e.target.value)}
              />
              <label htmlFor={id} className="text-black font-normal text-[14px] ml-2 cursor-pointer">{opt}</label>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderDualInputWithRadio = (label, key, radioValue) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter here"
          className="h-[42px] w-1/2 rounded-[8px] bg-white px-[22px] outline-none text-[14px] text-black font-medium placeholder:text-[#525252]"
          value={form[key]}
          onChange={(e) => handleChange(key, e.target.value)}
        />
        <label className="flex items-center text-[14px] cursor-pointer text-black">
          <input
            type="radio"
            name="defaultPackage"
            className="accent-[#EA0056] mr-2"
            value={radioValue}
            checked={form.defaultPackage === radioValue}
            onChange={(e) => handleChange("defaultPackage", e.target.value)}
          />
          Set as default
        </label>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderInput("How many weeks do you take to deliver the photos?", "deliveryWeeks", "e.g. 6 weeks")}
      {renderInput("What is the value of your most booked package?", "mostBookedValue", "e.g. 300000")}
      {renderRadioGroup("The above package includes services for how many days?", ["1 day", "2 days", "3 days", "4 days", "5+ days"], "serviceDays")}
      {renderRadioGroup("The above package includes which services?", ["Photo", "Photo + Video", "Photo + Video + Pre-wedding"], "serviceType")}
      {renderRadioGroup("Please describe your cancellation policy (user initiated)", ["Partial Refund Offered", "No Refund Offered", "No Refund Offered However Date Adjustment Can Be Done", "Full Refund Offered"], "userCancellationPolicy")}
      {renderRadioGroup("Please describe your cancellation policy (if you cancel)", ["Partial Refund Offered", "No Refund Offered", "Full Refund Offered"], "vendorCancellationPolicy")}
      {renderTextarea("What are the terms & conditions of your cancellation policy?", "cancellationTerms")}
      {renderTextarea("Describe your photography in three words", "photoWords", 3)}
      {renderInput("How many cities have you covered weddings in till date?", "cityCount")}
      {renderTextarea("We love wedding photography because", "whyLove", 4)}
      {renderInput("How many weeks in advance should a booking be made?", "advanceWeeks")}
      {renderInput("Which year you started shooting weddings?", "startedYear")}

      <div className="flex flex-col">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">Which services do you offer?</p>
        <div className="space-y-2.5">
          {services.map((srv) => {
            const id = `service-${srv.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
            return (
              <div key={srv} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={id}
                  value={srv}
                  className="accent-[#EA0056] size-4"
                  checked={form.selectedServices.includes(srv)}
                  onChange={() => toggleService(srv)}
                />
                <label htmlFor={id} className="text-black font-normal text-[14px] ml-2 cursor-pointer">{srv}</label>
              </div>
            );
          })}
        </div>
      </div>

      {renderRadioGroup("What is your specialty?", ["Candid Specialist", "Traditional + Candid Specialist"], "specialty")}
      {renderInput("Price for covering a small event like an engagement or roka", "engagementPrice")}
      {renderRadioGroup("How many processed (edited) pictures are delivered to the client?", ["<300", "300–500", "500–700", ">700"], "imageDeliveryCount")}
      {renderRadioGroup("What are your payment terms?", ["Upto 25% Advance", "Approx 50% Advance while booking", "100% Advance while booking"], "paymentTerm")}
      {renderRadioGroup("Who bears cost of travel and lodging when traveling to a different city?", ["Cost of Stay borne by Client, Travel borne by Us", "Cost of Stay & Travel borne by Client"], "travelCost")}

      {renderDualInputWithRadio("Candid Photography and Traditional Photography one day package for wedding day (Assume 300 pax)", "oneDayPhotoPackage", "photoPackage")}
      {renderDualInputWithRadio("Candid Photography, Traditional Photography and Cinematic Video one day package (Assume 300 pax wedding day)", "oneDayFullPackage", "fullPackage")}

       {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default PhotographerForm;