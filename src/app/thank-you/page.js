import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="bg-[#FBFBFB]">
        <Header />
        <div className="mx-auto min-h-screen grid place-items-center">
          <div>
            <div className="py-[50px] px-[75px] max-w-[525px] bg-white border border-[#F0F0F0] rounded-[8px] shadow-sm">
                <Image className="w-[130px] 4xl:w-[178px] mx-auto" width={178} height={143} src={'/images/thank-you-thibms-up.svg'} alt="thank-you-thibms-up.svg"/>

                <h3 className="font-normal text-[33px] text-[#151515] mt-6 text-center">Event created successfully.</h3>
                <p className="font-normal text-[16px] 3xl:text-[21px] text-[#151515] text-center mt-2">Your event has been set up and is ready <br/> for you to manage.</p>

                {/* <Link href={'/home'} className="text-white font-extrabold text-[16px] 3xl:text-[18px] py-3 4xl:py-4 px-20 bg-[#ea0056] hover:bg-[#c70049] cursor-pointer rounded-lg mx-auto table mt-7">Go to dashboard</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
