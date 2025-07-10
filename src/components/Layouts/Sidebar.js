'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const sidebarData = [
    {
      name: "Dashboard",
      icon: "/images/sidebaricons/dashboard.svg",
      link: "/dashboard",
    },
    {
      name: "Account Details",
      icon: "/images/sidebaricons/acc-details.svg",
      link: "/account-details",
    },
    {
      name: "Add Business",
      icon: "/images/sidebaricons/add-business.svg",
      link: "/add-business",
    },
    {
      name: "Services",
      icon: "/images/sidebaricons/services.svg",
      link: "/services",
    },
    {
      name: "My Leads",
      icon: "/images/sidebaricons/myleads.svg",
      link: "/my-leads",
    },
    {
      name: "Bookings",
      icon: "/images/sidebaricons/bookings.svg",
      link: "/bookings",
    },
    {
      name: "Reviews",
      icon: "/images/sidebaricons/reviews.svg",
      link: "/reviews",
    },
    {
      name: "Support",
      icon: "/images/sidebaricons/support.svg",
      link: "#",
    },
  ];
  return (
    <div className="fixed top-0 left-0 overflow-y-auto w-[245px] 3xl:w-[280px] bg-[linear-gradient(180deg,_#100509_0%,_#59172F_123.14%)] px-2 3xl:px-4 flex flex-col justify-between py-8 min-h-screen max-h-screen">
      <div>
        <div className="size-[96px] 3xl:size-[115px] 4xl:size-[130px] rounded-full bg-[#d9d9d936] flex items-center justify-center mx-auto">
          <Image
            className="w-[70px] 3xl:w-[80px] 4xl:w-[100px]"
            width={100}
            height={100}
            src={"/images/logo.svg"}
            alt="logo"
          />
        </div>

        <ul className="mt-14 3xl:mt-16 space-y-2 3xl:space-y-3 4xl:space-y-4">
          {sidebarData.map((item, index) => (
            <li key={index} className={`${pathName == item.link ? 'bg-[#ffffff36]':''} hover:bg-[#ffffff36] rounded-[4px]`}>
              <Link
                href={`${item.link}`}
                className="text-[15px] 3xl:text-[19px] text-white font-normal flex items-center py-2 3xl:py-2.5 4xl:py-3 px-3 "
              >
                <Image
                  className="w-[15px] 3xl:w-[22px] mr-2"
                  width={22}
                  height={22}
                  src={`${item.icon}`}
                  alt="dashboard"
                />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="mt-20">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 after:outline-none dark:peer-focus:none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-[#35DD18] before_img"></div>
          
        </label>
      </div> */}
    </div>
  );
};

export default Sidebar;
