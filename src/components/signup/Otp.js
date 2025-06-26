import React from "react";
import Image from "next/image";
import Link from "next/link";

const Otp = () => {
  const otp = [2, 4, 5, 7, 2, 0];
  return (
    <div className="bg-[#ffffffe3] w-fit rounded-2xl py-6 3xl:py-[90px] px-[40px] md:px-[60px] 2xl:px-[108px] 3xl:px-24">
      <div className="mb-6">
        <Image
          className="mx-auto w-[100px] 2xl:w-[158px]"
          width={158}
          height={52}
          src={"/images/PlanItLogo.png"}
          alt="logo"
        />
      </div>

      <h2 className="font-medium text-[22px] sm:text-[24px] 2xl:text-[44px] text-black text-center">
        Enter verification code
      </h2>
      <p className="font-normal text-[16px] 3xl:text-[18px] text-[#151515] mt-2 mb-8 flex flex-col 3xl:flex-row items-center justify-center">
        Enter the verification code that we&apos;ve send your email{" "}
        <span className="font-semibold text-black">he******@**mail.com</span>
      </p>

      <form>
        <div className="w-fit mx-auto">
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center justify-center space-x-5">
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-[45px] h-[38px] 3xl:w-[62px] 3xl:h-[54px] text-center text-[25px] font-medium border border-[#B0B0B0] rounded-lg outline-none text-black"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name={`otp-${index}`}
                  id={`otp-${index}`}
                />
              ))}
            </div>
          </div>

          <p className="text-[16px] 3xl:text-[20px] font-normal text-[#151515] mt-3 text-end">
            Resend code in <span className="font-semibold">00:30</span>
          </p>
        </div>

        <button className="font-semibold text-[15px] 2xl:text-[16px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 3xl:py-4 mt-7 cursor-pointer w-full">
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
