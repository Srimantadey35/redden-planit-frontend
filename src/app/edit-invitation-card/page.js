import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const sidebarData = [
    {
      name: "Dashboard",
      icon: "/images/sidebaricons/dashboard.svg",
      link: "#",
    },
    {
      name: "Generate invitation card",
      icon: "/images/sidebaricons/generateInvitationcard.svg",
      link: "#",
    },
    {
      name: "Guest management",
      icon: "/images/sidebaricons/guestmanagement.svg",
      link: "#",
    },
    {
      name: "PlanIt AI",
      icon: "/images/sidebaricons/planitai.svg",
      link: "#",
    },
    {
      name: "Website creation",
      icon: "/images/sidebaricons/websitecreation.svg",
      link: "#",
    },
    {
      name: "Book vendors",
      icon: "/images/sidebaricons/bookvendor.svg",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="w-[280px] bg-[linear-gradient(180deg,_#100509_0%,_#59172F_123.14%)] px-4 flex flex-col justify-between py-8 h-full">
        <div>
          <div className="size-[130px] rounded-full bg-[#d9d9d936] flex items-center justify-center mx-auto">
            <Image
              className="w-[100]"
              width={100}
              height={100}
              src={"/images/logo.svg"}
              alt="logo"
            />
          </div>

          <ul className="mt-20 space-y-4">
            {sidebarData.map((item, index) => (
              <Link
                href={`${item.link}`}
                key={index}
                className="text-[19px] text-white font-normal flex items-center py-3 px-3 rounded-[4px] hover:bg-[#ffffff36]"
              >
                <Image
                  className="w-[22px] mr-2"
                  width={22}
                  height={22}
                  src={`${item.icon}`}
                  alt="dashboard"
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 after:outline-none dark:peer-focus:none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-[#35DD18] before_img"></div>
            {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle me
            </span> */}
          </label>
        </div>
      </div>
    </div>
  );
};

export default page;
