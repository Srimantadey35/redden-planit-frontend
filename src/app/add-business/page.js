"use client";
import React, { useRef, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Venue from "@/components/business-categories/Venue";
import Catering from "@/components/business-categories/Catering";
import PhotographerForm from "@/components/business-categories/Photography";
import BridalMakeup from "@/components/business-categories/BridalMakeup";
import Decorators from "@/components/business-categories/Decorators";
import WeddingPlannerForm from "@/components/business-categories/WeddingPlannerForm";
import MehendiArtist from "@/components/business-categories/MehandiArtist";
import DJForm from "@/components/business-categories/Dj";
import PreWeddingPhotographersForm from "@/components/business-categories/PreWeddingPhotographersForm";
import WeddingPandit from "@/components/business-categories/WeddingPandit";
import Cake from "@/components/business-categories/Cake";
import Bartenders from "@/components/business-categories/Bartenders";

const Page = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("18:00");
  const [openAccordion, setopenAccordion] = useState("add-business");
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("selectedCategory", selectedCategory);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImageServices = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleAccordionToggle = (id) => {
    setopenAccordion(openAccordion === id ? null : id);
  };

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  const formatTime = (value) => {
    const [hours, minutes] = value.split(":");
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;
    return `${String(formattedHour).padStart(2, "0")}:${minutes} ${ampm}`;
  };

  // services
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setSelectedFiles((prev) => [...prev, ...images]);
  };

  const removeImage = (index) => {
    const updated = [...selectedFiles];
    updated.splice(index, 1);
    setSelectedFiles(updated);
  };
  const included = [
    {
      checkboxid: 1,
      checkboxName: "Within City",
    },
    {
      checkboxid: 2,
      checkboxName: "Outside City",
    },
    {
      checkboxid: 3,
      checkboxName: "All over india",
    },
  ];

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags((prev) => [...prev, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Layouts>
        <div className="w-full max-w-full px-5 4xl:px-[7rem] 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col py-8">
          {/* add-business  */}
          <button
            onClick={() => handleAccordionToggle("add-business")}
            className={`cursor-pointer flex items-center justify-between  mb-3 bg-[#ededed] px-6 py-2 4xl:py-4 rounded-md`}
          >
            <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
              Add Business
            </h3>
            <Image
              className={`${
                openAccordion === "add-business" ? "rotate-180" : ""
              } transition-all ease invert-[1]`}
              width={18}
              height={18}
              src={"/images/downarrow.svg"}
              alt="downarrow"
            />
          </button>
          {/* content of add-business */}
          {openAccordion === "add-business" && (
            <div className="px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
              <form>
                <div className="space-y-[25px]">
                  <div className="flex items-center w-full">
                    <div className="flex flex-col w-full mr-[25px]">
                      <label
                        htmlFor="businessname"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Business name
                      </label>
                      <input
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                        placeholder="Rubina"
                        type="text"
                        name="businessname"
                        id="businessname"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="businesscategory"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Business Category
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        name="businesscategory"
                        id="businesscategory"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="catering">Catering Services</option>
                        <option value="venues">Venues</option>
                        <option value="photography">Photography</option>
                        <option value="bridalmakeup">Bridal Makeup</option>
                        <option value="decorators">Decorators</option>
                        <option value="wedding-planners">
                          Wedding Planners
                        </option>
                        <option value="mehandi-artist">Mehandi Artist</option>
                        <option value="dj">Dj&apos;s</option>
                        <option value="pre-wedding-photographers">
                          Pre Wedding Photographers
                        </option>
                        <option value="wedding-pandit">Wedding Pandit&apos;s</option>
                        <option value="cake">Cake</option>
                        <option value="bartenders">Bartenders</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="businessaddress"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Business Address
                    </label>

                    <div className="relative">
                      <textarea
                        placeholder="Choose your location"
                        name="businessaddress"
                        id="businessaddress"
                        className="h-[72px] w-full rounded-[8px] outline-none bg-white px-[40px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3 resize-none"
                      ></textarea>

                      <Image
                        className="absolute top-[14.5px] left-[18px] pointer-events-none"
                        width={14}
                        height={17}
                        src="/images/add-business/locationicon.svg"
                        alt="locationicon"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-[25px]">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="City"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        City
                      </label>
                      <input
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                        placeholder="Kolkata"
                        type="text"
                        name="City"
                        id="City"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="Phone"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        State
                      </label>
                      <select
                        name="cars"
                        id="cars"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="volvo">West Bengal</option>
                        <option value="saab">Pune</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="Pin"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Pin code
                      </label>
                      <input
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                        placeholder="700002"
                        type="text"
                        name="Pin"
                        id="Pin"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col w-[40%]">
                      <label
                        htmlFor="Languages"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Languages Spoken
                      </label>
                      <select
                        name="Languages"
                        id="Languages"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="volvo">English</option>
                        <option value="saab">Bengali</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="flex items-center w-[60%] pt-[40px] ml-14">
                      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-4">
                        Travel availability:
                      </p>

                      <div className="mr-4 flex items-center">
                        <input
                          className="accent-[#EA0056] size-5"
                          type="radio"
                          name="travelAvailability"
                          id="withincity"
                        />
                        <label
                          htmlFor="withincity"
                          className="text-black font-normal text-[14px] ml-2"
                        >
                          Within City
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="accent-[#EA0056] size-5"
                          type="radio"
                          name="travelAvailability"
                          id="outsidecity"
                        />
                        <label
                          htmlFor="outsidecity"
                          className="text-black font-normal text-[14px] ml-2"
                        >
                          Outside City
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* opening hours  */}
          <button
            onClick={() => handleAccordionToggle("opening-hours")}
            className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md`}
          >
            <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
              Opening Hours
            </h3>
            <Image
              className={`${
                openAccordion === "opening-hours" ? "rotate-180" : ""
              } transition-all ease invert-[1]`}
              width={18}
              height={18}
              src={"/images/downarrow.svg"}
              alt="downarrow"
            />
          </button>
          {/* opening hours content  */}
          {openAccordion === "opening-hours" && (
            <div className="px-[28px] py-5 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
              <form>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 w-fit">
                    <div
                      onClick={() => setIsToggled(!isToggled)}
                      className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        isToggled ? "bg-[#EA0056]" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${
                          isToggled ? "translate-x-[20px]" : "translate-x-0"
                        } `}
                      ></div>
                    </div>
                    <p className="text-black font-medium text-[16px]">Monday</p>
                  </div>
                  <div className="flex w-[70%] mx-auto">
                    {/* From Time Picker */}
                    <div className="relative w-full mr-4">
                      <div className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full">
                        <span className="text-[#525252] text-[14px] font-medium">
                          From
                        </span>
                        <span
                          className="text-[#525252] text-[14px] font-medium cursor-pointer"
                          onClick={() => fromInputRef.current?.showPicker()}
                        >
                          {formatTime(fromTime)}
                        </span>
                      </div>
                      <input
                        ref={fromInputRef}
                        type="time"
                        value={fromTime}
                        onChange={(e) => setFromTime(e.target.value)}
                        className="absolute opacity-0 pointer-events-none"
                      />
                    </div>

                    {/* To Time Picker */}
                    <div className="relative w-full">
                      <div className="flex items-center justify-between w-full h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px]">
                        <span className="text-[#525252] text-[14px] font-medium">
                          To
                        </span>
                        <span
                          className="text-[#525252] text-[14px] font-medium cursor-pointer"
                          onClick={() => toInputRef.current?.showPicker()}
                        >
                          {formatTime(toTime)}
                        </span>
                      </div>
                      <input
                        ref={toInputRef}
                        type="time"
                        value={toTime}
                        onChange={(e) => setToTime(e.target.value)}
                        className="absolute opacity-0 pointer-events-none"
                      />
                    </div>
                  </div>
                  <button className="font-normal text-[14px] text-[#EA0056] flex items-center">
                    Add fields
                    <Image
                      className="ml-3"
                      width={12}
                      height={12}
                      src={"/images/add-business/plusicontheme.svg"}
                      alt="plusicontheme"
                    />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* services  */}
          <button
            onClick={() => handleAccordionToggle("services")}
            className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md`}
          >
            <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
              Services
            </h3>
            <Image
              className={`${
                openAccordion === "services" ? "rotate-180" : ""
              } transition-all ease invert-[1]`}
              width={18}
              height={18}
              src={"/images/downarrow.svg"}
              alt="downarrow"
            />
          </button>
          {/* services content  */}
          {openAccordion === "services" && (
            <div>
              <form>
                <div className="space-y-[25px] bg-[#F2F2F2] px-[30px] 3xl:px-[60px] py-9 rounded-[10px] mb-[24px]">
                  {/* //business category  */}
                  <div className="flex items-center w-full">
                    <div className="flex flex-col w-full mr-[25px]">
                      <label
                        htmlFor="businesscategory"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Business Category
                      </label>
                      <select
                        name="businesscategory"
                        id="businesscategory"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="volvo">Volvo</option>
                        <option value="volvo">Business Category</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="businessname"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Business Name
                      </label>
                      <input
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                        placeholder="Photography"
                        type="text"
                        name="businessname"
                        id="businessname"
                      />
                    </div>
                  </div>
                  {/* whats included */}
                  <div className="flex flex-col w-full mr-[25px]">
                    <label
                      htmlFor="businesscategory"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      What&apos;s Included
                    </label>
                    <textarea
                      className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                      placeholder="add your description"
                    ></textarea>
                  </div>
                  {/* availability */}
                  <div className="flex items-center">
                    <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-3">
                      Availability:
                    </p>
                    <div className="flex items-center space-x-5">
                      {included.map((item) => (
                        <div
                          key={item.checkboxid}
                          className="flex items-center"
                        >
                          <input
                            className="accent-[#EA0056] size-3.5 4xl:size-5"
                            type="checkbox"
                            id={`checkbox-${item.checkboxid}`}
                            checked={checkedItems.includes(item.checkboxid)}
                            onChange={() =>
                              handleCheckboxChange(item.checkboxid)
                            }
                          />
                          <label
                            htmlFor={`checkbox-${item.checkboxid}`}
                            className="text-black font-normal text-[14px] ml-2"
                          >
                            {item.checkboxName}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Upload Box */}
                  <div className="flex items-center">
                    <div className="relative w-[118px] h-[106px] mr-[25px]">
                      <label
                        htmlFor="file"
                        className="cursor-pointer w-full h-full rounded-[8px] bg-white flex flex-col items-center justify-center border border-[#ededed]"
                      >
                        <Image
                          className="mx-auto"
                          width={20}
                          height={17}
                          src="/images/services/uploadimage.svg"
                          alt="uploadimage"
                        />
                        <p className="text-[#505050] font-normal text-[14px] mt-2">
                          Upload Image
                        </p>
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 size-full opacity-0 cursor-pointer"
                      />
                    </div>

                    {/* Preview Thumbnails */}
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {images.map((img, index) => (
                        <div key={index} className="w-[77px] h-[67px] relative">
                          <Image
                            className="size-full object-contain rounded-lg"
                            width={100}
                            height={100}
                            src={img.url}
                            alt={`upload-${index}`}
                          />
                          <span
                            onClick={() => removeImageServices(index)}
                            className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
                          >
                            x
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="flex flex-col w-full mr-[25px]">
                      <label
                        htmlFor="businesscategory"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Delivery timeline
                      </label>
                      <select
                        name="businesscategory"
                        id="businesscategory"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="volvo">Within 2 weeks</option>
                        <option value="saab">Within 3 weeks</option>
                        <option value="mercedes">Within 4 weeks</option>
                        <option value="audi">Within 5 weeks</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-full mr-[25px]">
                      <label
                        htmlFor="businesscategory"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Price Range
                      </label>
                      <select
                        name="businesscategory"
                        id="businesscategory"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="volvo">Full Refund</option>
                        <option value="saab">Within 3 weeks</option>
                        <option value="mercedes">Within 4 weeks</option>
                        <option value="audi">Within 5 weeks</option>
                      </select>
                    </div>
                  </div>

                  {/* show category based on selected category from add business  */}
                  {/* catering services  */}
                  <div>
                    {selectedCategory.length !== 0 && (
                      <h3 className="py-3 w-full text-black bg-[#ddddddee] px-4 mb-6 rounded-sm">
                        {selectedCategory}
                      </h3>
                    )}

                    {/* catering  */}
                    <div className="space-y-[25px]">
                      {selectedCategory === "catering" && <Catering />}
                      {selectedCategory === "venues" && <Venue />}
                      {selectedCategory === "photography" && (
                        <PhotographerForm />
                      )}
                      {selectedCategory === "bridalmakeup" && <BridalMakeup />}
                      {selectedCategory === "decorators" && <Decorators />}
                      {selectedCategory === "wedding-planners" && (
                        <WeddingPlannerForm />
                      )}
                      {selectedCategory === "mehandi-artist" && (
                        <MehendiArtist />
                      )}
                      {selectedCategory === "dj" && <DJForm />}
                      {selectedCategory === "pre-wedding-photographers" && (
                        <PreWeddingPhotographersForm />
                      )}
                      {selectedCategory === "wedding-pandit" && (
                        <WeddingPandit />
                      )}
                      {selectedCategory === "cake" && <Cake />}
                      {selectedCategory === "bartenders" && <Bartenders />}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* upload portfolio  */}
          <button
            onClick={() => handleAccordionToggle("upload-portfolio")}
            className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md`}
          >
            <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
              Upload Portfolio
            </h3>
            <Image
              className={`${
                openAccordion === "upload-portfolio" ? "rotate-180" : ""
              } transition-all ease invert-[1]`}
              width={18}
              height={18}
              src={"/images/downarrow.svg"}
              alt="downarrow"
            />
          </button>
          {/* portfolio content  */}
          {openAccordion === "upload-portfolio" && (
            <div className="space-y-[25px] bg-[#F2F2F2] px-[30px] py-6 rounded-[10px] mb-[20px]">
              {/* file upload  */}
              <div>
                <div className="bg-white rounded-[8px] py-6 relative">
                  <label className="absolute inset-0 cursor-pointer">
                    <input
                      className="hidden"
                      type="file"
                      name="file"
                      id="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>

                  <Image
                    className="mx-auto"
                    width={20}
                    height={20}
                    src={"/images/services/servicesIcon.svg"}
                    alt="servicesIcon"
                  />

                  <p className="text-[#505050] font-medium text-[14px] text-center my-1.5">
                    Drag & drop files here, or click to select files
                  </p>
                  <p className="text-[#787878] font-normal text-[12px] text-center">
                    Supported File Types: .jpg, .png
                  </p>
                </div>
                {/* Preview Thumbnails */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedFiles.map((img, index) => (
                    <div key={index} className="w-[77px] h-[67px] relative">
                      <Image
                        className="size-full object-contain rounded-lg"
                        width={100}
                        height={100}
                        src={img.url}
                        alt={`upload-${index}`}
                      />
                      <span
                        onClick={() => removeImage(index)}
                        className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
                      >
                        x
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* tags  */}
              <div>
                <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
                  Tags
                </p>
                <div className="rounded-[18px] bg-white py-4 px-4">
                  <ul className="flex items-center flex-wrap gap-3">
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]"
                      >
                        <span>{tag}</span>
                        <button
                          className="cursor-pointer grid place-items-center size-[21px] bg-[#E5E5E5] rounded-full"
                          onClick={() => removeTag(index)}
                        >
                          <Image
                            width={7}
                            height={7}
                            src={"/images/services/crossIcon.svg"}
                            alt="crossIcon"
                          />
                        </button>
                      </li>
                    ))}
                    <li className="flex items-center">
                      <input
                        type="text"
                        className="outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4"
                        placeholder="Type & press Enter"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </li>
                  </ul>
                </div>
              </div>

              {/* event type & location  */}
              <div className="flex items-center w-full">
                <div className="flex flex-col w-full mr-[25px]">
                  <label
                    htmlFor="businesscategory"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Event Type
                  </label>
                  <select
                    name="businesscategory"
                    id="businesscategory"
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                  >
                    <option value="volvo">Engagement</option>
                    <option value="saab">Love</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="businessname"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[25px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                      placeholder="Kolkata"
                      type="text"
                      name="businessname"
                      id="businessname"
                    />
                    <Image
                      className="absolute top-1/2 left-2 -translate-y-1/2"
                      width={12}
                      height={14}
                      src={"/images/location.svg"}
                      alt="location"
                    />
                  </div>
                </div>
              </div>

              {/* description  */}
              <div className="flex flex-col w-full mr-[25px]">
                <label
                  htmlFor="businesscategory"
                  className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                >
                  Description
                </label>
                <textarea
                  className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                  placeholder="Write your short description"
                ></textarea>
              </div>
            </div>
          )}

          <div className="flex items-center mt-2 justify-end">
            <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
              Save & Publish
            </button>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default Page;
