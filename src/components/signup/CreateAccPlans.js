"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CreateAccPlans = () => {
  
  const router = useRouter();
  const handlePlanSelect = (plan) => {
    router.push(`/sign-up/${plan.toLowerCase()}`);
  };

  const signupOptions = [
    {
      optionName: "Planner",
      btnText: "I want to plan my event",
      btnBg: "#ea0056",
      btnHover: "#bd0246",
    },
    {
      optionName: "Vendor",
      btnText: "I want to sell my service",
      btnBg: "#212121",
      btnHover: "#020202",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#ffffffe3] w-fit rounded-2xl modalAnim">
      <div className="">
        <div className="py-6 border-b border-b-black">
          <Image
            className="mx-auto w-[100px] 4xl:w-[158px]"
            width={158}
            height={52}
            src={"/images/PlanItLogo.png"}
            alt="logo"
          />
        </div>
        <div className="px-[40px] md:px-[60px] 4xl:px-[108px]">
          <h3 className="font-semibold text-[22px] sm:text-[24px] 2xl:text-[26px] text-black py-4 3xl:py-6 text-center">
            Create Account
          </h3>

          <div className="mb-[50px] sm:mb-[80px] md:mb-[100px] 4xl:mb-[178px]">
            {signupOptions.map((item, index) => (
              <div className="mt-3 sm:mt-5 4xl:mt-11" key={index}>
                <p className="font-semibold text-[18px] sm:text-[20px] text-black mb-3 text-center">
                  {item.optionName}
                </p>

                <button
                  className="cursor-pointer font-medium text-[16px] 3xl:text-[25px] text-white py-2.5 3xl:py-3 rounded-lg px-[20px] sm:px-[60px] md:px-[98px] transition-colors duration-200"
                  style={{
                    backgroundColor:
                      hoveredIndex === index ? item.btnHover : item.btnBg,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handlePlanSelect(item.optionName)}
                >
                  {item.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccPlans;
