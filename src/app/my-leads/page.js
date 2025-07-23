'use client'
import React, { useEffect, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";

const Page = () => {
  const [myLeads,setMyLeads] = useState([])
  const token = useSelector((state) => state.auth.accessToken);
  useEffect(()=>{
    const fetchMyLeads=async()=>{
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/my-leads`,
      {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      console.log('my leads',response)
      if(response.status === 200){
        setMyLeads(response.data.data)
      }
    } catch (error) {
      
    }
  }

  fetchMyLeads()
  },[token])
  const tableData = {
    thead: {
      heads: [
        "Client Name",
        "Event Type",
        "Date",
        "Location",
        "Message",
        "Status",
        "Actions",
      ],
      widths: ["25%", "18%", "18%", "18%", "25%", "5%"],
    },
    // tbody: [
    //   {
    //     bookingId: "#000125",
    //     client: {
    //       name: "Drishti Ram",
    //       image: "/images/sign-up/face-1.jpg",
    //     },
    //     eventType: "Wedding Party",
    //     location: {
    //       icon: "/images/vendor/location.svg",
    //       name: "Kolkata, India",
    //     },
    //     bookingDate: {
    //       icon: "/images/vendor/calender.svg",
    //       value: "Feb 06, 2025",
    //     },
    //     notes: "Looking for a traditional wedding setup with floral décor.",
    //     status: {
    //       statusName: "New",
    //       color: "#EA0056",
    //       bg: "#FFC0D7",
    //     },
    //     actions: "...",
    //   },
    //   {
    //     bookingId: "#000126",
    //     client: {
    //       name: "Durjaya Ghosal",
    //       image: "/images/sign-up/face-1.jpg",
    //     },
    //     eventType: "Wedding Party",
    //     location: {
    //       name: "Kolkata, India",
    //     },
    //     bookingDate: {
    //       value: "Feb 08, 2025",
    //     },
    //     notes: "Need full-day photography coverage for Bengali wedding.",
    //     status: {
    //       statusName: "Contacted",
    //       color: "#C74905",
    //       bg: "#F8DEC4",
    //     },
    //     actions: "...",
    //   },
    //   {
    //     bookingId: "#000127",
    //     client: {
    //       name: "Mohul Nara",
    //       image: "/images/sign-up/face-1.jpg",
    //     },
    //     eventType: "Wedding Party",
    //     location: {
    //       name: "Kolkata, India",
    //     },
    //     bookingDate: {
    //       value: "Feb 11, 2025",
    //     },
    //     notes: "Can you share sample menus and pricing?",
    //     status: {
    //       statusName: "Booked",
    //       color: "#339914",
    //       bg: "#CCE4C1",
    //     },
    //     actions: "...",
    //   },
    //   {
    //     bookingId: "#000128",
    //     client: {
    //       name: "Piyush Kaushik",
    //       image: "/images/sign-up/face-1.jpg",
    //     },
    //     eventType: "Wedding Party",
    //     location: {
    //       name: "Kolkata, India",
    //     },
    //     bookingDate: {
    //       value: "Feb 12, 2025",
    //     },
    //     notes: "utdoor setup required, Haldi & Mehendi theme included.",
    //     status: {
    //       statusName: "New",
    //       color: "#EA0056",
    //       bg: "#FFC0D7",
    //     },
    //     actions: "...",
    //   },
    // ],

    
  };
  return (
    <div>
      <Layouts>
        <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto min-h-screen mt-5">
          <div className="rounded-[10px] bg-[#F9F9F9] mb-5">
            <div className="px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[55px] py-4 flex items-center justify-between">
              <h4 className="font-semibold text-[20px] 4xl:text-[28px] text-[#303030]">
                My leads
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
                        className="py-4 px-[18px] 4xl:px-[30px] text-left"
                        style={{ width: tableData.thead.widths[index] }}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                {/* <tbody>
                  {tableData.tbody.map((row, index) => (
                    <tr
                      key={index}
                      className="text-[#505050]"
                      style={{
                        background: `${index % 2 == 0 ? "#F2F2F2" : "#E9E9E9"}`,
                      }}
                    >
                      <td className="py-4 px-[18px] 4xl:px-[30px]">
                        <div className="flex items-center">
                          <input
                            className="size-[15px] 3xl:size-[18px] border border-[#ededed] rounded-[4px] mr-3"
                            type="checkbox"
                            name="checkbox"
                            id={`${row.bookingId}`}
                          />
                          <label htmlFor={`${row.bookingId}`}>
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
                          </label>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] 4xl:px-[30px]">
                        <div className="flex items-center">
                          <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                            {row.eventType}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] 4xl:px-[30px]">
                        <div className="flex items-center">
                          <Image
                            width={12}
                            height={15}
                            src={"/images/vendor/calender.svg"}
                            alt="location"
                          />
                          <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                            {row.location.name}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] 4xl:px-[30px]">
                        <div className="flex items-center">
                          <Image
                            width={12}
                            height={15}
                            src={"/images/vendor/location.svg"}
                            alt="calendar"
                          />
                          <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px] ml-2">
                            {row.bookingDate.value}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-[18px] 4xl:px-[30px]">
                        <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px]">
                          {row.notes}
                        </p>
                      </td>
                      <td
                        style={{ color: row.status.color }}
                        className="py-4 px-[18px] 4xl:px-[30px]"
                      >
                        <p className="py-1.5 px-2 4xl:py-2 4xl:px-4 text-center rounded-[3px] text-[12px] 4xl:text-[14px]" style={{backgroundColor:`${row.status.bg}`}}>{row.status.statusName}</p>
                      </td>
                      <td className="py-4 px-[18px] 4xl:px-[30px]">
                        {row.actions}
                      </td>
                    </tr>
                  ))}
                </tbody> */}

                 <tbody>
        {myLeads.map((item) => (
          <tr key={item._id} className="border-b hover:bg-gray-50">
            {/* <td className="px-4 py-4">
              <input type="checkbox" />
            </td> */}
            <td className="px-4 py-4 flex items-center gap-2">
              <Image
                src="/avatar.png"
                alt="Avatar"
                className="w-8 h-8 rounded-full"
                width={24}
                height={24}
              />
              <span>{item.clientName}</span>
            </td>
            <td className="px-4 py-4">{item.eventType}</td>
            <td className="px-4 py-4  items-center  gap-1 text-pink-600">
               {item.viewedAt}
            </td>
            <td className="px-4 py-4 flex items-center gap-1 text-pink-600">
               {item.location || "Kolkata, India"}
            </td>
            <td className="px-4 py-4">{item.message}</td>
            <td className="px-4 py-4">
              <span
                className={`text-sm px-3 py-1 rounded-full font-medium ${item.status}`}
              >
                {item.status}
              </span>
            </td>
            <td className="px-4 py-4">
             
            </td>
          </tr>
        ))}
      </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default Page;
