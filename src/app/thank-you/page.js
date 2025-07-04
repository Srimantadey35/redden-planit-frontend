import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <Header />
        <div className="max-w-[560px] 3xl:max-w-[734px] mx-auto min-h-screen">
          <div className="py-[40px] 2xl:py-[60px] 3xl:py-[120px]">
            <div className="bg-[#F7F7F7] rounded-[8px] pt-[40px] 4xl:pt-[60px] pb-[70px] 4xl:pb-[90px]">
                <Image className="size-[52px] mx-auto" width={52} height={52} src={'/images/greentick.svg'} alt="greentick"/>

                <h3 className="font-normal text-[24px] 3xl:text-[28px] 4xl:text-[35px] text-[#151515] mt-6 text-center">Event created successfully.</h3>
                <p className="font-normal text-[16px] 3xl:text-[22px] text-[#151515] text-center">Your event has been set up and is ready for you to manage.</p>

                <Link href={'/home'} className="text-white font-extrabold text-[16px] 3xl:text-[18px] py-3 4xl:py-4 px-20 bg-[#ea0056] hover:bg-[#c70049] cursor-pointer rounded-lg mx-auto table mt-7">Go to dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
