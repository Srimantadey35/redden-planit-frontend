import React from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const bookingChart = [
    {
      title: "Leads This Week",
      icon: "/images/vendor/leads.svg",
      value: "120",
    },
    {
      title: "Bookings This Month",
      icon: "/images/vendor/bookings.svg",
      value: "120",
    },
    {
      title: "Reviews",
      icon: "/images/vendor/reviews.svg",
      value: "120",
    },
  ];
  const leadsFData = [
    {
      image: "/images/sign-up/face-1.jpg",
      name: "Drishti Ram",
      location: "Noida, India",
      detailsLink: "#",
    },
    {
      image: "/images/sign-up/face-2.jpg",
      name: "Zeenat Wason",
      location: "Pune, India",
      detailsLink: "#",
    },
    {
      image: "/images/sign-up/face-3.jpg",
      name: "Kajol Kabra",
      location: "Lucknow, India",
      detailsLink: "#",
    },
    {
      image: "/images/sign-up/face-4.jpg",
      name: "Sunita Mohan",
      location: "Kolkata, India",
      detailsLink: "#",
    },
    {
      image: "/images/sign-up/face-5.jpg",
      name: "Ankita Somani",
      location: "Mumbai, India",
      detailsLink: "#",
    },
    {
      image: "/images/sign-up/face-6.jpg",
      name: "Sid Mukherjee",
      location: "Mumbai, India",
      detailsLink: "#",
    },
  ];
  const reviewsData = [
    {
      image: "/images/sign-up/face-1.jpg",
      name: "Lalita Sandal",
      rating: 4.5,
      desc: "“Rabina have captured the most precious moments of my life”",
      date: "January 2, 2025",
    },
    {
      image: "/images/sign-up/face-2.jpg",
      name: "Sona Pingle",
      rating: 3.5,
      desc: "“Rabina have a great experience for phtography”",
      date: "January 3, 2025",
    },
    {
      image: "/images/sign-up/face-3.jpg",
      name: "Malik Kar",
      rating: 4.0,
      desc: "“Rabina&apos;s team is the most outstanding one.”",
      date: "January 4, 2025",
    },
  ];
  const profileData = [
    {
      name: "Upload profile photo",
      link: "#",
    },
    {
      name: "Business category",
      link: "#",
    },
    {
      name: "Business name",
      link: "#",
    },
    {
      name: "Verify phone",
      link: "#",
    },
    {
      name: "Update address",
      link: "#",
    },
    {
      name: "Add Operating Hours",
      link: "#",
    },
  ];
  const tableData = {
    thead: {
      heads: [
        "Booking id",
        "Client Name",
        "Location",
        "Booking date",
        "Notes",
        "Actions",
      ],
      widths: ["15%", "20%", "20%", "20%", "25%", "5%"],
    },
    tbody: [
      {
        bookingId: "#000125",
        client: {
          name: "Drishti Ram",
          image: "/images/sign-up/face-1.jpg",
        },
        location: {
          icon: "/images/vendor/location.svg",
          name: "Kolkata, India",
        },
        bookingDate: {
          icon: "/images/vendor/calender.svg",
          value: "Feb 06, 2025",
        },
        notes: "Looking for a traditional wedding setup with floral décor.",
        actions: "...",
      },
      {
        bookingId: "#000126",
        client: {
          name: "Durjaya Ghosal",
          image: "/images/sign-up/face-1.jpg",
        },
        location: {
          name: "Kolkata, India",
        },
        bookingDate: {
          value: "Feb 08, 2025",
        },
        notes: "Need full-day photography coverage for Bengali wedding.",
        actions: "...",
      },
      {
        bookingId: "#000127",
        client: {
          name: "Mohul Nara",
          image: "/images/sign-up/face-1.jpg",
        },
        location: {
          name: "Kolkata, India",
        },
        bookingDate: {
          value: "Feb 11, 2025",
        },
        notes: "Can you share sample menus and pricing?",
        actions: "...",
      },
      {
        bookingId: "#000128",
        client: {
          name: "Piyush Kaushik",
          image: "/images/sign-up/face-1.jpg",
        },
        location: {
          name: "Kolkata, India",
        },
        bookingDate: {
          value: "Feb 12, 2025",
        },
        notes: "utdoor setup required, Haldi & Mehendi theme included.",
        actions: "...",
      },
    ],
  };
const profileComPercentage = '40%'
  return (
    <Layouts>
      <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto">
        <div className="rounded-[10px] border-[5px] 3xl:border-[10px] border-[#FAFAFA] mt-3">
          <div
            className="rounded-[8px] py-[60px] 2xl:py-[75px]"
            style={{
              backgroundColor: "#FAF1F2",
              backgroundImage: "url('/images/vendorbannerbg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-black font-semibold text-[27px] 2xl:text-[34px] 3xl:text-[40px] 4xl:text-[48px] text-center">
              Welcome to Your PlanIt Vendor Hub
            </h2>
            <p className="font-normal text-[15px] 2xl:text-[18px] 3xl:text-[20px] text-[#505050] text-center">
              Manage leads, update your profile, and grow your business with
              ease
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[12px] 4xl:gap-[16px] mt-6 4xl:mt-8 mb-3 4xl:mb-5">
          {bookingChart.map((item, index) => (
            <div
              key={index}
              className="p-[20px] 2xl:p-[27px] rounded-[10px] bg-[#F7F7F7] flex flex-col justify-center"
            >
              <h3 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
                {item.title}
              </h3>
              <div className="flex items-center mt-2">
                <Image
                  className="w-[20px] 2xl:w-[23px] 3xl:w-[26px] 4xl:w-[30px]"
                  width={30}
                  height={30}
                  src={`${item.icon}`}
                  alt="leads"
                />
                <h4 className="ml-2 font-semibold text-[#EA0056] text-[24px] 2xl:text-[28px] 3xl:text-[34px] 4xl:text-[40px]">
                  {item.value}
                </h4>
              </div>
            </div>
          ))}

          <div className="p-[27px] rounded-[10px] bg-[#F7F7F7]">
            <h3 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
              Profile completion
            </h3>
            <div className="mt-2">
              <h5 className="font-semibold text-[23px] text-[#EA0056]">{profileComPercentage}</h5>
              <div className="h-[7px] bg-[#E2E0E0] rounded-3xl w-full">
                <div className="size-full bg-[#363636] rounded-3xl" style={{width:`${profileComPercentage}`}}></div>
              </div>
              <p className="text-[14px] text-[#151515] font-normal mt-1">
                Complete your profile
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[15px] 4xl:gap-[20px] mb-5">
          <div className="bg-[#F7F7F7] rounded-[10px]">
            <div className=" px-[20px] py-[16px] flex items-center justify-between border-b border-b-[#ededed]">
              <h4 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
                Leads
              </h4>{" "}
              <div className="flex items-center space-x-3">
                <button className="font-normal text-[14px] text-[#505050] rounded-[5px] bg-white border-[1px] border-[#F0EDED] py-[6px] px-[13px] flex items-center">
                  <span className="mr-2">This week</span>
                  <Image
                    width={15}
                    height={12}
                    src={"/images/filter.svg"}
                    alt="filter icon"
                  />
                </button>
                <button className="font-normal text-[14px] text-[#151515] rounded-[5px] bg-[#D7D7D7] border-[1px] border-[#F0EDED] py-[6px] px-[13px] flex items-center">
                  Explore more
                </button>
              </div>
            </div>
            <div className="px-[15px] py-2.5">
              <ul className="space-y-[10px]">
                {leadsFData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-2 rounded-[5px]"
                  >
                    <div className="w-full flex items-center">
                      <Image
                        className="rounded-full size-[30px] object-cover"
                        width={30}
                        height={30}
                        src={`${item.image}`}
                        alt={`${item.image + 1}`}
                      />
                      <span className="font-normal text-black text-[14px] 2xl:text-[15px] 3xl:text-[18px] ml-3">
                        {item.name}
                      </span>
                    </div>

                    <div className="w-full flex items-center justify-center">
                      <div className="flex items-center w-[120px] 2xl:w-[140px]">
                        <Image
                          width={14}
                          height={17}
                          src={"/images/vendor/location.svg"}
                          alt="location"
                        />
                        <span className="font-normal text-black text-[14px] 2xl:text-[15px] 3xl:text-[18px] ml-3">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`${item.detailsLink}`}
                      className="w-[60%] font-normal text-[14px] 2xl:text-[15px] text-[#EA0056] flex items-center justify-end"
                    >
                      <span>View details</span>
                      <Image
                        className="ml-2"
                        width={7}
                        height={12}
                        src={"/images/vendor/arrowright.svg"}
                        alt="arrowright"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-[10px]">
            <div className="px-[20px] py-[16px] border-b border-b-[#ededed]">
              <h4 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
                Complete your profile
              </h4>
            </div>
            <div className="px-[15px] py-2.5">
              <ul className="space-y-[10px]">
                {profileData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-2 rounded-[5px]"
                  >
                    <div className="w-full flex items-center">
                      <span className="font-normal text-black text-[15px] 3xl:text-[18px] ml-3">
                        {item.name}
                      </span>
                    </div>

                    <Link
                      href={`${item.link}`}
                      className="w-full font-normal text-[15px] text-[#EA0056] flex items-center justify-end"
                    >
                      <span>Complete now</span>
                      <Image
                        className="ml-2"
                        width={7}
                        height={12}
                        src={"/images/vendor/arrowright.svg"}
                        alt="arrowright"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-[10px] col-[1_/_3]">
            <div className="px-[20px] py-[16px] flex items-center justify-between border-b border-b-[#ededed]">
              <h4 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
                Reviews
              </h4>{" "}
              <button className="font-normal text-[14px] text-[#151515] rounded-[5px] bg-[#D7D7D7] border-[1px] border-[#F0EDED] py-[6px] px-[13px] flex items-center">
                Explore more
              </button>
            </div>
            <div className="px-[14px] my-2.5">
              <ul className="space-y-[14px]">
                {reviewsData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-2 rounded-[5px]"
                  >
                    <div className="flex items-center mr-8 w-[25%]">
                      <Image
                        className="size-[30px] 2xl:size-[35px] 3xl:size-[50px] rounded-full object-cover"
                        width={36}
                        height={36}
                        src={`${item.image}`}
                        alt={`${item.name}`}
                      />
                      <span className="font-medium text-black text-[15px] 2xl:text-[16px] 3xl:text-[20px] ml-3 whitespace-nowrap inline-block">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex flex-col w-[65%]">
                      <div className="flex items-center">
                        <span className="font-normal text-[15px] 2xl:text-[16px] text-black pt-[3px]">
                          {item.rating}
                        </span>
                        <div className="grid grid-cols-5 justify-items-center ml-2 gap-[3px]">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Image
                              key={i}
                              width={15}
                              height={15}
                              src={
                                i <= Math.floor(item.rating)
                                  ? "/images/vendor/starfill.svg"
                                  : "/images/vendor/starnotfill.svg"
                              }
                              alt={
                                i <= Math.floor(item.rating)
                                  ? "starfill"
                                  : "starnotfill"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-black text-[15px] 2xl:text-[16px] 3xl:text-[18px] font-normal my-1 2xl:my-1.5">
                        {item.desc}
                      </p>
                      <p className="text-[#505050] text-[14px] 3xl:text-[16px] font-normal">
                        {item.date}
                      </p>
                    </div>
                    <div className="w-[15%] 2xl:w-[10%]">
                      <Link
                        href={`${item.detailsLink}`}
                        className="w-full font-normal text-[15px] 3xl:text-[18px] text-[#EA0056] flex items-center"
                      >
                        <span>View details</span>
                        <Image
                          className="ml-2"
                          width={7}
                          height={12}
                          src={"/images/vendor/arrowright.svg"}
                          alt="arrowright"
                        />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-[#F9F9F9] mb-5">
          <div className="px-[55px] py-4 flex items-center justify-between">
            <h4 className="font-semibold text-[20px] 2xl:text-[28px] text-[#303030]">
              Bookings
            </h4>

            <div className="flex items-center justify-between">
              <form>
                <label className="relative">
                  <input
                    className="rounded-[5px] bg-white border-[1px] border-[#F0EDED] h-[37px] w-[320px] placeholder:text-[#6B6B6B] placeholder:font-normal placeholder:text-[12px] text-black text-[12px] font-normal px-[13px] outline-none"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search by name"
                  />

                  <button className="size-[27px] rounded-full bg-[#E8E8E8] flex items-center justify-center absolute right-[13px] top-1/5 -translate-y-1/5 cursor-pointer outline-none">
                    <Image
                      width={12}
                      height={12}
                      src={"/images/vendor/search.svg"}
                      alt="search"
                    />
                  </button>
                </label>
              </form>
              <div className="flex items-center ml-[13px]">
                <button className="font-normal text-[14px] text-[#505050] rounded-[5px] bg-white border-[1px] border-[#F0EDED] py-[6px] px-[13px] flex items-center">
                  <span className="mr-2">This week</span>
                  <Image
                    width={15}
                    height={12}
                    src={"/images/filter.svg"}
                    alt="filter icon"
                  />
                </button>
              </div>
            </div>
          </div>

          <table className="vendortable w-full text-black text-[15px] 3xl:text-[18px] font-medium">
            <thead>
              <tr className="bg-[#DBDBDB]">
                {tableData.thead.heads.map((title, index) => (
                  <th
                    key={index}
                    className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px] text-left"
                    style={{ width: tableData.thead.widths[index] }}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.tbody.map((row, index) => (
                <tr
                  key={index}
                  className="text-[#505050]"
                  style={{
                    background: `${index % 2 == 0 ? "#F2F2F2" : "#E9E9E9"}`,
                  }}
                >
                  <td className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                    <div className="flex items-center">
                      <input
                        className="size-[15px] 3xl:size-[18px] border border-[#ededed] rounded-[4px] mr-3"
                        type="checkbox"
                        name="checkbox"
                        id={`${row.bookingId}`}
                      />
                      <label htmlFor={`${row.bookingId}`}>
                        {row.bookingId}
                      </label>
                    </div>
                  </td>
                  <td className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                    <div className="flex items-center">
                      <Image
                        className="size-[28px] object-cover rounded-full"
                        width={28}
                        height={28}
                        src={row.client.image}
                        alt={row.client.name}
                      />
                      <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                        {row.client.name}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                    <div className="flex items-center">
                      <Image
                        width={12}
                        height={15}
                        src={"/images/vendor/location.svg"}
                        alt="location"
                      />
                      <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                        {row.location.name}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                    <div className="flex items-center">
                      <Image
                        width={12}
                        height={15}
                        src={"/images/vendor/calender.svg"}
                        alt="calendar"
                      />
                      <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                        {row.bookingDate.value}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                    <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px]">
                      {row.notes}
                    </p>
                  </td>
                  <td className="py-4 px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                    {row.actions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layouts>
  );
};

export default page;
