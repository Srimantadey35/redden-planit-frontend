import React from "react";
import Image from "next/image";

const AddMultipleGuests = () => {
  return (
    <div className="fixed top-0 left-0 bg-[#000000a5] z-[99999] size-full">
      <div className="flex items-center justify-center size-full">
        <div className="bg-white rounded-[15px] relative">
          <div className="px-[50px] mt-[55px] pb-[20px]">
            <div className="flex items-center mb-[50px]">
              <h3 className="font-semibold text-[30px] text-[#151515]">
                Add multiple guests
              </h3>
              <Image
                width={25}
                height={25}
                src={"/images/cross.svg"}
                alt="cross icon"
              />
            </div>
            <div>
              <h4 className="text-[#151515] font-medium text-[22px]">
                Upload a Spreadsheet
              </h4>
            </div>
          </div>
          <div className="border-t border-t-[#DFDFDF] pt-[35px] px-[50px]">
           <p className="text-[#151515] font-medium text-[18px]">Follow the guidelines below to adapt an existing spreadsheet.</p>
           <ul className="pt-[20px]">
            <li className="font-normal text-[#505050] text-[16px]">Enter column headers (eg. Name, Plus One, Street Address) in the first row.</li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMultipleGuests;
