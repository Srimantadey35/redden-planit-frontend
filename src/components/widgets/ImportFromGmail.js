import React from "react";
import Image from "next/image";

const ImportFromGmail = ({setisModalOpen}) => {
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
          <div className="px-[20px] md:px-[30px] 3xl:px-[50px] mt-[50px] sm:mt-[30px] 3xl:mt-[55px] pb-[20px]">
            <div className="flex items-center justify-center mb-[20px] 3xl:mb-[40px]">
              <h3 className="font-semibold text-[24px] 3xl:text-[30px] text-[#151515] flex items-center ">
                <span>Import guest from gmail</span>
                <Image className="ml-3 w-[41px]" width={41} height={41} src={'/images/gmaillogo.svg'} alt="gmaillogo"/>
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
               <span className="text-[#EA0056] font-medium">PlanIt</span> needs your permission in order to start installing.
              </h4>

              <p className="my-5 font-normal text-[16px] text-[#505050]">By clicking <span className="text-black">Continue</span>, you acknowledge that your information will be used in accordance with the terms of service and privacy policy of this application.</p>

              <div className="flex items-center">
                <input className="size-[18px]" type="checkbox" name="checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="text-[#505050] rounded-[4px] text-[14px] font-normal ml-2">I agree to the PlanIt Terms of Service, including the Privacy Policy .</label>
              </div>
            </div>
          </div>
          <div className="mt-[50px] 3xl:mt-[90px] px-[30px] 3xl:px-[50px] mb-9 3xl:mb-14">
            
            <button className="font-semibold text-[16px] 3xl:text-[20px] text-white bg-[#EA0056] hover:bg-[#c30048] rounded-lg px-[90px] 3xl:px-[115px] py-3 3xl:py-3.5 mx-auto table cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportFromGmail;
