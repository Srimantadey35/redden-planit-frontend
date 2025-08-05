"use client";
import Header from "@/components/Header";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import {toast} from "react-toastify";
            
const Page = () => {
  const [step, setStep] = useState(1);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const token = useSelector((state) => state.auth.accessToken);
  const router = useRouter();

  const [formData, setformData] = useState({
    eventType: "",
    eventDate: "",
    brideName: "",
    groomName: "",
    birthdayPersonName: "",
    eventCity: "",
    eventTime: "",
    guestCount: "",
    budget: 100000,
    notes: "",
  });

  const eventTypeFields = {
  wedding: ['brideName', 'groomName'],
  birthday: ['birthdayPersonName'],
  engagement: ['brideName', 'groomName'],
  anniversary: ['brideName', 'groomName'],
  // add more types as needed
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: name === "budget" ? Number(value) : value,
    }));
  };

  const handleOpenCalendar = (ref) => {
    ref.current?.showPicker?.();
    ref.current?.focus();
  };

  // Helper function to validate required fields based on event type
  const isFormValid = () => {
    // Base validation for all event types
    const baseValid = formData.eventType && formData.eventDate && formData.eventCity.trim();
    
    if (!baseValid) return false;
    
    // Step 2 specific validation
    if (step === 2 && !formData.eventTime) return false;
    
    // Event type specific validation
    if (formData.eventType === "Wedding") {
      return formData.brideName.trim() && formData.groomName.trim();
    } else if (formData.eventType === "Birthday") {
      return formData.birthdayPersonName.trim();
    } else if (formData.eventType === "Corporate") {
      return true; // No additional fields required
    }
    
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const baseFields = ['eventType', 'eventDate', 'eventTime', 'eventCity', 'guestCount', 'budget', 'notes'];
      const eventParticipantFields = eventTypeFields[formData.eventType?.toLowerCase()] || [];
    const trimmedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        if (typeof value === "string") return [key, value.trim()];
        return [key, value];
      })
    );

    const finalPayload = {};

  // Add base fields
  baseFields.forEach((field) => {
    if (trimmedData[field]) {
      finalPayload[field] = trimmedData[field];
    }
  });

  // Add event participants inside a nested object
  const eventParticipants = {};
  eventParticipantFields.forEach((field) => {
    if (trimmedData[field]) {
      eventParticipants[field] = trimmedData[field];
    }
  });

  finalPayload.eventParticipants = eventParticipants;


    try {
      if (step < 3) {
        setStep((prev) => prev + 1);
      } else {
        console.log("📦 Final submitted data:", trimmedData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/planners/create-event`,finalPayload,
           {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        )

        if(response.status === 201){
        toast.success("Event created successfully")
        localStorage.setItem("eventFormData", JSON.stringify(trimmedData));
        // alert("Form submitted successfully!");
        router.push("/thank-you");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const min = 10000;
  const max = 1000000;
  const percentage = ((formData.budget - min) / (max - min)) * 100;

  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-[914px] mx-auto">
        <div className="py-[40px] 2xl:py-[60px] 3xl:py-[120px]">
          <div className="bg-[#F7F7F7] p-[60px] rounded-[15px]">
            <h3 className="text-[22px] font-medium text-[#151515] text-center">
              Plan your event in 3 easy steps
            </h3>
            <div className="relative w-full flex items-center justify-between z-[1] mt-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`${
                    step === s
                      ? "bg-[#EA0056] text-white"
                      : step > s
                      ? "bg-[#EA0056] text-white"
                      : "bg-white text-black"
                  } 
    font-semibold text-[20px] size-[35px] 3xl:size-[40px] flex items-center justify-center rounded-full`}
                >
                  {s}
                </div>
              ))}

              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[6px] bg-[#E8E8E8] z-[-1]">
                <div
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                  className="h-full transition-all ease-in duration- bg-[#EA0056] rounded-r-full"
                ></div>
              </div>
            </div>
            <div className="mt-14">
              <h3 className="text-[25px] 3xl:text-[30px] font-semibold text-[#151515]">
                Tell us about your event
              </h3>
              {step === 1 && (
                <form className="mt-8" onSubmit={handleSubmit}>
                  <div className=" space-y-[25px]">
                    <div className="flex items-center">
                      <div className="flex flex-col w-full mr-7">
                        <label
                          htmlFor="eventType"
                          className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                        >
                          Event type<span className="text-[#FF2C2C]">*</span>
                        </label>
                        <select
                          required
                          name="eventType"
                          id="eventType"
                          value={formData.eventType}
                          className="text-[#919191] text-[14px] font-normal h-[44px] 3xl:h-[53px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Event Type
                          </option>
                          <option value="Wedding">Wedding</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Corporate">Corporate</option>
                          <option value="Engagement">Engagement</option>
                          <option value="Anniversary">Anniversary</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-full ">
                        <label
                          htmlFor="eventDate"
                          className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                        >
                          Event date<span className="text-[#FF2C2C]">*</span>
                        </label>
                        <div className="relative mt-1">
                          <input
                            required
                            ref={dateRef}
                            type="date"
                            className="text-[#919191] w-full text-[14px] font-normal h-[44px] 3xl:h-[53px] bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                            name="eventDate"
                            id="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                          />
                          <button
                            type="button"
                            onClick={() => handleOpenCalendar(dateRef)}
                            className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                          >
                            <Image
                              className="w-[20px] h-[20px]"
                              width={20}
                              height={20}
                              src="/images/calendericon.svg"
                              alt="calendar icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    {formData.eventType == 'Wedding' &&
                    <div className="flex items-center">
                      <div className="flex flex-col w-full mr-7">
                        <label
                          htmlFor="brideName"
                          className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                        >
                          Name of Bride<span className="text-[#FF2C2C]">*</span>
                        </label>
                        <input
                          required
                          className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                          placeholder="Enter bride’s name"
                          type="text"
                          name="brideName"
                          id="brideName"
                          value={formData.brideName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="groomName"
                          className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                        >
                          Name of Groom<span className="text-[#FF2C2C]">*</span>
                        </label>
                        <input
                          required={formData.eventType === "Wedding"}
                          className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                          placeholder="Enter Groom's name"
                          type="text"
                          name="groomName"
                          id="groomName"
                          value={formData.groomName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>}
                     {formData.eventType === "Birthday" && (
                          <>
                          <div className="flex flex-col w-full">
                            <label
                              htmlFor="birthdayPersonName"
                              className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                            >
                              Birthday Person Name<span className="text-[#FF2C2C]">*</span>
                            </label>
                            <input
                              required
                              className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                              placeholder="Enter birthday person's name"
                              type="text"
                              name="birthdayPersonName"
                              id="birthdayPersonName"
                              value={formData.birthdayPersonName}
                              onChange={handleChange}
                            />
                            </div>
                          </>
                        )}
                    <div className="flex flex-col w-full mb-[55px]  mr-7">
                      <label
                        htmlFor="eventCity"
                        className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                      >
                        Event city<span className="text-[#FF2C2C]">*</span>
                      </label>
                      <input
                        required
                        className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                        placeholder="Enter your city"
                        type="text"
                        name="eventCity"
                        id="eventCity"
                        value={formData.eventCity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`${
                      !isFormValid()
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#EA0056] hover:bg-[#d2004d] cursor-pointer"
                    } font-semibold text-[18px] 3xl:text-[20px] text-white rounded-lg py-2.5 3xl:py-4 px-[135px] mx-auto table`}
                  >
                    Next
                  </button>
                </form>
              )}
              {step === 2 && (
                <form className="mt-8" onSubmit={handleSubmit}>
                  <div className=" space-y-[25px]">
                    <div className="flex items-center">
                      <div className="flex flex-col w-full mr-7">
                        <label
                          htmlFor="eventTime"
                          className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                        >
                          Event time<span className="text-[#FF2C2C]">*</span>
                        </label>
                        <div className="relative mt-1">
                          <input
                            required
                            ref={timeRef}
                            className="text-[#919191] w-full text-[14px] font-normal h-[44px] 3xl:h-[53px] bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                            type="time"
                            name="eventTime"
                            id="eventTime"
                            value={formData.eventTime}
                            onChange={handleChange}
                          />

                          {!formData.eventTime && (
                            <span className="absolute bg-white left-5 top-[11px] 3xl:top-[15px] text-[#919191] text-[14px] pointer-events-none">
                              Select event time
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={() => handleOpenCalendar(timeRef)}
                            className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                          >
                            <Image
                              className="w-[20px] h-[20px]"
                              width={20}
                              height={20}
                              src="/images/timeicon.svg"
                              alt="calendar icon"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="guestCount"
                          className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                        >
                          Guest count<span className="text-[#FF2C2C]">*</span>
                        </label>
                        <input
                          required
                          className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                          placeholder="Enter number of guests"
                          type="number"
                          name="guestCount"
                          id="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-20 ">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="font-semibold text-[18px] 3xl:text-[20px] text-white rounded-lg py-2.5 3xl:py-4 px-[100px] 4xl:px-[126px] mr-7 bg-[#EA0056] hover:bg-[#d2004d] cursor-pointer"
                    >
                      Skip
                    </button>

                    <button
                      type="submit"
                      disabled={!isFormValid()}
                      className={`${
                        !isFormValid()
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-[#EA0056] hover:bg-[#d2004d] cursor-pointer"
                      } font-semibold text-[18px] 3xl:text-[20px] text-white rounded-lg py-2.5 3xl:py-4 px-[100px] 4xl:px-[126px]`}
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}
              {step === 3 && (
                <form className="mt-8" onSubmit={handleSubmit}>
                  <div className=" space-y-[25px]">
                    <div className="flex flex-col w-full ">
                      <p
                        htmlFor="eventDate"
                        className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                      >
                        Estimated budget
                      </p>
                      <div className="mt-10">
                        <div className="h-[9px] rounded-[10px] bg-[#E8E8E8] w-full relative">
                          {/* Left & Right static labels */}

                          {/* Filled progress */}
                          <div
                            className="bg-[#EA0056] rounded-[10px] h-full relative"
                            style={{ width: `${percentage}%` }}
                          >
                            {/* Thumb dot */}
                            <span className="size-[19px] rounded-full bg-white shadow-2xl absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 border border-[#ccc]" />

                            {/* Value label */}
                            <span
                              className="absolute text-[14px] text-[#505050] top-[-28px]"
                              style={{
                                right: 0,
                                transform: "translateX(50%)",
                              }}
                            >
                              {formData.budget >= 100000
                                ? `${(formData.budget / 100000).toFixed(
                                    1
                                  )} Lakh`
                                : `${(formData.budget / 1000).toFixed(0)}K`}
                            </span>
                          </div>

                          <div className="absolute flex items-center justify-between w-full bottom-[-26px]">
                            <span className="text-[14px] text-[#505050]">
                              10K
                            </span>
                            <span className="text-[14px] text-[#505050] ">
                              10Lakh
                            </span>
                          </div>

                          <input
                            type="range"
                            min={min}
                            max={max}
                            value={formData.budget}
                            onChange={(e) =>
                              setformData((prev) => ({
                                ...prev,
                                budget: Number(e.target.value),
                              }))
                            }
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full mt-10">
                      <label
                        htmlFor="groomName"
                        className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                      >
                        Notes
                      </label>

                      <textarea
                        className="mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none h-[100px] py-3.5 resize-none"
                        placeholder="Enter notes about event."
                        name="notes"
                        id="notes"
                        value={formData.notes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`${
                      !isFormValid()
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#EA0056] hover:bg-[#d2004d] cursor-pointer"
                    } font-semibold mt-20 text-[18px] 3xl:text-[20px] text-white rounded-lg py-2.5 3xl:py-4 px-[100px] 4xl:px-[126px] mx-auto table`}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
