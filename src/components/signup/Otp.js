"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Otp = () => {
  const [otp, setOtp] = useState(["6", "4", "3", "2", "0", "3"]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="bg-[#ffffff] w-fit rounded-2xl py-[40px] px-[85px]">
      <div className="mb-6">
        <Image
          className="mx-auto w-[120px] 4xl:w-[152px]"
          width={158}
          height={52}
          src={"/images/PlanItLogo.png"}
          alt="logo"
        />
      </div>

      <h2 className="font-normal text-[26px] 4xl:text-[32px] text-black text-center">
        Enter verification code
      </h2>
      <p className="font-normal text-[16px] 3xl:text-[18px] text-[#5D5D5D] mt-5 mb-3">
        Enter the verification code that we&apos;ve send your email <br />
        <span className="font-semibold text-[#151515]">
          {" "}
          he******@**mail.com
        </span>
      </p>

      <form>
        <div className="w-fit mx-auto">
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center justify-center space-x-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-[45px] h-[38px] 3xl:w-[62px] 3xl:h-[54px] text-center text-[16px] 3xl:text-[25px] font-medium border border-[#B0B0B0] rounded-lg outline-none text-black"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>
          </div>

          <p className="text-[16px] 3xl:text-[20px] font-normal text-[#5B5B5B] mt-3 text-end">
            Resend code in <span className="font-semibold">00:30</span>
          </p>
        </div>

        <button className="font-semibold text-[16px] 4xl:text-[18px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 3xl:py-4 mt-7 cursor-pointer w-full">
          Verify my account
        </button>
      </form>
      <p className="text-[#505050] font-normal text-[14px] text-center mt-8">
        Didn&apos;t get any code?
        <Link href="#" className="text-[#EA0056] font-semibold ml-1">
          Resend code
        </Link>
      </p>
    </div>
  );
};

export default Otp;
