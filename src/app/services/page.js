"use client";
import React, { useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";

const page = () => {
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
      checkboxName: "Rooms",
    },
    {
      checkboxid: 2,
      checkboxName: "Catering Policy",
    },
    {
      checkboxid: 3,
      checkboxName: "Decor Policy",
    },
    {
      checkboxid: 4,
      checkboxName: "Small Party Venue",
    },
    {
      checkboxid: 5,
      checkboxName: "Parking",
    },
    {
      checkboxid: 6,
      checkboxName: "Space",
    },
    {
      checkboxid: 7,
      checkboxName: "DJ policy",
    },
    {
      checkboxid: 8,
      checkboxName: "Outside Alcohol",
    },
  ];

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div>
      <Layouts>
        <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto min-h-screen mb-8 mt-5">
          <h4 className="font-semibold text-[20px] 2xl:text-[25px] text-[#303030] mb-3">
            Services
          </h4>
          <div>
            <form>
              <div className="space-y-[25px] bg-[#F2F2F2] px-[60px] py-9 rounded-[10px] mb-[24px]">
                <div className="flex items-center w-full">
                  <div className="flex flex-col w-full mr-[25px]">
                    <label
                      htmlFor="businesscategory"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Service Category
                    </label>
                    <select
                      name="businesscategory"
                      id="businesscategory"
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                    >
                      <option value="volvo">Volvo</option>
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
                      Type of event
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

                <div className="flex items-center w-full">
                  <div className="flex flex-col w-full mr-[25px]">
                    <label
                      htmlFor="businesscategory"
                      className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                    >
                      Service Title
                    </label>
                    <select
                      name="businesscategory"
                      id="businesscategory"
                      className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                    >
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
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
                      <option value="volvo">₹1,200/ per plate</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="space-y-[25px] bg-[#F2F2F2] px-[60px] py-9 rounded-[10px] mb-[20px]">
                <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515]">
                  What&apos;s Included
                </p>
                <div className="flex items-center space-x-5">
                  {included.map((item) => (
                    <div key={item.checkboxid} className="flex items-center">
                      <input
                        className="accent-[#EA0056] size-3.5 4xl:size-5"
                        type="checkbox"
                        id={`checkbox-${item.checkboxid}`}
                        checked={checkedItems.includes(item.checkboxid)}
                        onChange={() => handleCheckboxChange(item.checkboxid)}
                      />
                      <label
                        htmlFor={`checkbox-${item.checkboxid}`}
                        className="text-black font-normal text-[14px] ml-2"
                      >
                        {item.checkboxName}
                      </label>
                    </div>
                  ))}

                  {/* <div className="flex items-center">
                    <input
                      className="accent-[#EA0056] size-5"
                      type="checkbox"
                      name="travelAvailability"
                      id="cateringpolicy"
                    />
                    <label
                      htmlFor="cateringpolicy"
                      className="text-black font-normal text-[14px] ml-2"
                    >
                      Catering Policy
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="accent-[#EA0056] size-5"
                      type="checkbox"
                      name="travelAvailability"
                      id="decorpolicy"
                    />
                    <label
                      htmlFor="decorpolicy"
                      className="text-black font-normal text-[14px] ml-2"
                    >
                      Decor Policy
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="accent-[#EA0056] size-5"
                      type="checkbox"
                      name="travelAvailability"
                      id="smallpartyvenue"
                    />
                    <label
                      htmlFor="smallpartyvenue"
                      className="text-black font-normal text-[14px] ml-2"
                    >
                      Small Party Venue
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="accent-[#EA0056] size-5"
                      type="checkbox"
                      name="travelAvailability"
                      id="Parking"
                    />
                    <label
                      htmlFor="Parking"
                      className="text-black font-normal text-[14px] ml-2"
                    >
                      Parking
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="accent-[#EA0056] size-5"
                      type="checkbox"
                      name="travelAvailability"
                      id="Space"
                    />
                    <label
                      htmlFor="Space"
                      className="text-black font-normal text-[14px] ml-2"
                    >
                      Space
                    </label>
                  </div> */}
                </div>
                <div className="flex flex-col w-full mr-[25px]">
                  <label
                    htmlFor="businesscategory"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Add your nots
                  </label>
                  <textarea
                    className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                    placeholder="Write your nots"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <h4 className="font-semibold text-[20px] 2xl:text-[25px] text-[#303030] mb-3">
            Upload portfolio
          </h4>
          <div className="space-y-[25px] bg-[#F2F2F2] px-[30px] py-4 rounded-[10px] mb-[24px]">
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
            <div>
                <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">Optional tags</p>
                <div className="rounded-[18px] bg-white py-4 px-4">
                    <ul className="flex items-center space-x-3">
                        <li className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]">
                            <span>Pre-wedding </span>
                            <button className="cursor-pointer grid place-items-center size-[21px] bg-[#E5E5E5] rounded-full ">
                                <Image width={7} height={7} src={'/images/services/crossIcon.svg'} alt="crossIcon"/>
                            </button>
                        </li>
                        <li className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]">
                            <span>Pre-wedding </span>
                            <button className="cursor-pointer grid place-items-center size-[21px] bg-[#E5E5E5] rounded-full ">
                                <Image width={7} height={7} src={'/images/services/crossIcon.svg'} alt="crossIcon"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default page;
