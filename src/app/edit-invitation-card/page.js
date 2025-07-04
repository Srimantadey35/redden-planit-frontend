import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="w-[280px] bg-[linear-gradient(180deg,_#100509_0%,_#59172F_123.14%)] px-3 flex flex-col py-8 h-screen">
        <div className="size-[130px] rounded-full bg-[#d9d9d936] flex items-center justify-center mx-auto">
          <Image
            className="w-[100]"
            width={100}
            height={100}
            src={"/images/logo.svg"}
            alt="logo"
          />
        </div>

        <ul className="mt-20">
            {['Dashboard','Generate invitation card ','Guest management', 'PlanIt AI','Website creation','Book vendors']}
          <li className="text-[19px] text-white font-normal flex items-center justify-center">
            <Image
              className="w-[22px] mr-6"
              width={22}
              height={22}
              src={"/images/sidebaricons/dashboard.svg"}
              alt="dashboard"
            />
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
