import React from "react";
import Image from "next/image";

const AddMultipleGuests = ({setisModalOpen}) => {
  const liElements = [
    "Enter column headers (eg. Name, Plus One, Street Address) in the first row.",
    "Enter guests and their plus ones or family members on the same line.",
    "Split addresses into four columns: street address, city, state, and zip code.",
    "Enter all required fields (Name, Phone number).",
  ];
  return (
    <div className="fixed top-0 left-0 bg-[#000000a5] z-[99999] size-full">
      <div className="flex items-center justify-center size-full">
        <div className="bg-white rounded-[15px] relative max-w-full mx-4 sm:mx-0 my-4 sm:max-w-[600px] 3xl:max-w-[914px] w-full modalAnim">
          <div className="px-[20px] md:px-[30px] 3xl:px-[50px] mt-[30px] 3xl:mt-[55px] pb-[20px]">
            <div className="flex items-center mb-[20px] 3xl:mb-[40px]">
              <h3 className="font-semibold text-[24px] 3xl:text-[30px] text-[#151515]">
                Add multiple guests
              </h3>
              <button onClick={()=>setisModalOpen(null)} className="absolute top-5 right-5 cursor-pointer">
                <Image
                className="w-[18px] 3xl:w-[25px]"
                  width={25}
                  height={25}
                  src={"/images/cross.svg"}
                  alt="cross icon"
                />
              </button>
            </div>
            <div>
              <h4 className="text-[#151515] font-medium text-[17px] 3xl:text-[22px]">
                Upload a Spreadsheet
              </h4>
            </div>
          </div>
          <div className="border-t border-t-[#DFDFDF] pt-[35px] px-[20px] md:px-[30px] 3xl:px-[50px] mb-9 3xl:mb-14">
            <p className="text-[#151515] font-medium text-[17px] 3xl:text-[18px]">
              Follow the guidelines below to adapt an existing spreadsheet.
            </p>
            <ul className="mt-[20px] space-y-2.5 mb-9 3xl:mb-11">
              {liElements.map((item, index) => (
                <li
                  key={index}
                  className="font-normal text-[#505050] text-[16px] flex items-center"
                >
                  <Image
                    className="mr-2 w-[17px]"
                    width={17}
                    height={17}
                    src={"/images/pinktick.svg"}
                    alt="pinktick mark"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button className="font-semibold text-[16px] 3xl:text-[20px] text-white bg-[#EA0056] hover:bg-[#c30048] rounded-lg px-[90px] 3xl:px-[115px] py-3 3xl:py-3.5 mx-auto table cursor-pointer">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMultipleGuests;
