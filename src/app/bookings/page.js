'use client'
import React, { useEffect, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import { useSelector } from "react-redux";
import axios from "axios";

const Page = () => {
   const [myBookings,setMyBookings] = useState([])
     const token = useSelector((state) => state.auth.accessToken);
      useEffect(()=>{
       const fetchMyBookings=async()=>{
       try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/my-bookings`,
         {
         withCredentials: true,
         headers: {
           Authorization: `Bearer ${token}`
         }
       })
         console.log('my bookings',response)
         if(response.status === 200){
           setMyBookings(response.data.data)
         }
       } catch (error) {
         
       }
     }
   
     fetchMyBookings()
     },[token])
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
  return (
    <div>
      <Layouts>
        <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto min-h-screen">
          <div className="rounded-[10px] bg-[#F9F9F9] mb-5">
            <div className="px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[55px] py-4 flex items-center justify-between">
              <h4 className="font-semibold text-[20px] 2xl:text-[25px] text-[#303030]">
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

            <div className="w-full scroll-visible min-[900px]:overflow-x-auto">
              <table className="vendortable w-full min-w-[900px] text-black text-[15px] 3xl:text-[18px] font-medium">
                <thead>
                  <tr className="bg-[#DBDBDB]">
                    {tableData.thead.heads.map((title, index) => (
                      <th
                        key={index}
                        className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px] text-left"
                        style={{ width: tableData.thead.widths[index] }}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* {tableData.tbody.map((row, index) => (
                    <tr
                      key={index}
                      className="text-[#505050]"
                      style={{
                        background: `${index % 2 == 0 ? "#F2F2F2" : "#E9E9E9"}`,
                      }}
                    >
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
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
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
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
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
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
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
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
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px]">
                          {row.notes}
                        </p>
                      </td>
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        {row.actions}
                      </td>
                    </tr>
                  ))} */}
                   {myBookings.map((row, index) => (
                    <tr
                      key={index}
                      className="text-[#505050]"
                      style={{
                        background: `${index % 2 == 0 ? "#F2F2F2" : "#E9E9E9"}`,
                      }}
                    >
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
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
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        <div className="flex items-center">
                          {/* <Image
                            className="size-[28px] object-cover rounded-full"
                            width={28}
                            height={28}
                            src={row?.client.image || ""}
                            alt={row?.client.name || ""}
                          /> */}
                          <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                            {row.clientName}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        <div className="flex items-center">
                          <Image
                            width={12}
                            height={15}
                            src={"/images/vendor/location.svg"}
                            alt="location"
                          />
                          <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                            {row.location}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        <div className="flex items-center">
                          <Image
                            width={12}
                            height={15}
                            src={"/images/vendor/calender.svg"}
                            alt="calendar"
                          />
                          <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                            {row.bookingDate}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px]">
                          {row.notes}
                        </p>
                      </td>
                      <td className="py-4 px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[50px]">
                        {row?.actions || ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex space-x-2 justify-end">
              {[1, 2, 3, 4, "Next"].map((item, index) => (
                <button
                  key={index}
                  className={`${item === 'Next' ? 'px-4 py-1':'size-[32px] '} text-[#505050] font-medium text-[14px] rounded-[4px] border-[1px] border-[#bbbbbb] hover:bg-[#EA0056] hover:text-white cursor-pointer`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default Page;
