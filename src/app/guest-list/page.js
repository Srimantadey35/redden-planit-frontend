'use client'
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import axios from "axios";

const Page = () => {
   const [guest,setGuest] = useState([])
    const token = useSelector((state) => state.auth.accessToken);
  
  const getAllContacts = async()=>{
    try{
   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/planners/get-all-contacts`,
      {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      console.log('my guest',response)
      if(response.status === 200){
        setGuest(response.data.data.contacts)
      }
    } catch (error) {
      
    }
  }
   useEffect(()=>{
    if(token){
      getAllContacts()
    }
   },[token])
  // const tableData = [
  //   {
  //     name: "Jaydon Curtis",
  //     email: "jaydoncurtis@gmail.com",
  //     phNumber: "+91 8952370146",
  //     address:
  //       "12/P Alipore Road, Alipore, Kolkata - 700027, West Bengal, India",
  //     guestType: "Family",
  //     dietaryPreference: "Vegan",
  //   },
  //   {
  //     name: "Madelyn Levin",
  //     email: "madelynlevin@gmail.com",
  //     phNumber: null,
  //     address:
  //       "12/P Ballygunge Circular Road, Ballygunge, Kolkata - 700019, West Bengal, India",
  //     guestType: "Friends",
  //     dietaryPreference: "Jain",
  //   },
  //   {
  //     name: "Tiana Philips",
  //     email: "tianaphilips@gmail.com",
  //     phNumber: "+91 8922378524",
  //     address:
  //       "12/P Jessore Road, Barasat, Kolkata - 700124, West Bengal, India",
  //     guestType: "VIP",
  //     dietaryPreference: "Vegan",
  //   },
  //   {
  //     name: "Marcus Schleifer",
  //     email: null,
  //     phNumber: "+91 89785123146",
  //     address: null,
  //     guestType: "Friends",
  //     dietaryPreference: "Jain",
  //   },
  //   {
  //     name: "Jaydon Curtis",
  //     email: "jaydoncurtis@gmail.com",
  //     phNumber: "+91 8952370146",
  //     address:
  //       "12/P Alipore Road, Alipore, Kolkata - 700027, West Bengal, India",
  //     guestType: "Family",
  //     dietaryPreference: "Vegan",
  //   },
  //   {
  //     name: "Madelyn Levin",
  //     email: "madelynlevin@gmail.com",
  //     phNumber: null,
  //     address:
  //       "12/P Ballygunge Circular Road, Ballygunge, Kolkata - 700019, West Bengal, India",
  //     guestType: "Friends",
  //     dietaryPreference: "Jain",
  //   },
  //   {
  //     name: "Tiana Philips",
  //     email: "tianaphilips@gmail.com",
  //     phNumber: "+91 8922378524",
  //     address:
  //       "12/P Jessore Road, Barasat, Kolkata - 700124, West Bengal, India",
  //     guestType: "VIP",
  //     dietaryPreference: "Vegan",
  //   },
  //   {
  //     name: "Marcus Schleifer",
  //     email: null,
  //     phNumber: "+91 89785123146",
  //     address: null,
  //     guestType: "Friends",
  //     dietaryPreference: "Jain",
  //   },
  //   {
  //     name: "Jaydon Curtis",
  //     email: "jaydoncurtis@gmail.com",
  //     phNumber: "+91 8952370146",
  //     address:
  //       "12/P Alipore Road, Alipore, Kolkata - 700027, West Bengal, India",
  //     guestType: "Family",
  //     dietaryPreference: "Vegan",
  //   },
  //   {
  //     name: "Madelyn Levin",
  //     email: "madelynlevin@gmail.com",
  //     phNumber: null,
  //     address:
  //       "12/P Ballygunge Circular Road, Ballygunge, Kolkata - 700019, West Bengal, India",
  //     guestType: "Friends",
  //     dietaryPreference: "Jain",
  //   },
  //   {
  //     name: "Tiana Philips",
  //     email: "tianaphilipdsdsdsdsdss@gmail.com",
  //     phNumber: "+91 8922378524",
  //     address:
  //       "12/P Jessore Road, Barasat, Kolkata - 700124, West Bengal, India",
  //     guestType: "VIP",
  //     dietaryPreference: "Vegan",
  //   },
  //   {
  //     name: "Marcus Schleifer",
  //     email: null,
  //     phNumber: "+91 89785123146",
  //     address: null,
  //     guestType: "Friends",
  //     dietaryPreference: "Jain",
  //   },
  // ];
  const tableData = guest.map((guest) => ({
  name: guest.fullName,
  email: guest.email ?? null,
  phNumber: guest.phone ? `+91 ${guest.phone}` : null,
  address: guest?.address || null,
  guestType: guest?.guestType || "others", // default or from another source
  dietaryPreference: guest?.dietaryPreference || "" // default or from another source
}));
  
  const tHeadData = [
    { title: "Name", w: "w-[20%]" },
    { title: "Email", w: "w-[20%]" },
    { title: "Phone number", w: "w-[20%]" },
    { title: "Address", w: "w-[16%]" },
    { title: "Guest <br /> type", w: "w-[8%]" },
    { title: "Dietary <br /> preference", w: "w-[8%]" },
    { title: null, w: "w-[8%]" },
  ];
  return (
    <div className="bg-white">
      <Header />
      <div className="container">
        <div className="py-[40px] 3xl:py-[120px]">
          <div className="flex w-full mb-[40px]">
            <div className="rounded-xl px-[28px] xl:px-[35px] 3xl:px-[60px] w-full py-4 xl:py-6 bg-[#F7F7F7] mr-[40px] flex flex-col">
              <h4 className="text-[#151515] font-semibold text-[16px] xl:text-[20px] mb-4">
                Total number of guest
              </h4>

              <h2 className="font-semibold lg:text-[28px] xl:text-[36px] 2xl:text-[45px] 3xl:text-[60px] text-[#EA0056] leading-[1] mt-auto">
                {guest?.length}
              </h2>
            </div>

            <div className="w-full py-4 xl:py-6 bg-[#F7F7F7]">
              <div className="border-r border-r-[#CECECE] flex flex-col h-full">
                <h4 className="text-[#151515] font-semibold text-[16px] xl:text-[20px] text-center mb-4">
                  Missing email
                </h4>
                <p className="text-[#EA0056] font-semibold text-[28px] xl:text-[38px] 2xl:text-[40px] text-center leading-[1] mt-auto">
                  3
                </p>
              </div>
            </div>
            <div className="w-full py-4 xl:py-6 bg-[#F7F7F7]">
              <div className="border-r border-r-[#CECECE] flex flex-col h-full">
                <h4 className="text-[#151515] font-semibold text-[16px] xl:text-[20px] text-center mb-4">
                  Missing address
                </h4>
                <p className="text-[#EA0056] font-semibold text-[28px] xl:text-[38px] 2xl:text-[40px] text-center leading-[1] mt-auto">
                  3
                </p>
              </div>
            </div>
            <div className="w-full py-4 xl:py-6 bg-[#F7F7F7]">
              <div className="flex flex-col h-full">
                <h4 className="text-[#151515] font-semibold text-[16px] xl:text-[20px] text-center mb-4">
                  Missing phone number
                </h4>
                <p className="text-[#EA0056] font-semibold text-[28px] xl:text-[38px] 2xl:text-[40px] text-center leading-[1] mt-auto">
                  4
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F8F8F8]">
            <div className="flex items-center justify-between px-[60px] py-[16px] 3xl:py-[20px] sticky top-0 bg-[#f8f8f8]">
              <h3 className="font-semibold text-[20px] xl:text-[23px] 3xl:text-[30px] text-[#151515]">
                Guest list
              </h3>
              <div className="flex items-center space-x-6">
                <Image
                  width={18}
                  height={18}
                  src={"/images/search.svg"}
                  alt="search"
                />
                <Image
                  width={20}
                  height={16}
                  src={"/images/filter.svg"}
                  alt="filter"
                />

                <button className="text-[15px] 3xl:text-[18px] font-semibold text-white bg-[#EA0056] rounded-md px-[50px] py-1.5">
                  Add more guest
                </button>
              </div>
            </div>

            <div className="h-[calc(100vh-360px)] overflow-y-auto scrollable-element">
              <table className="datatable min-w-[1199px] overflow-x-auto w-full table-auto">
                <tbody>
                  <tr className="bg-[#F1F1F1]">
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[20px] w-[20%]">
                      Name
                    </th>
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[20px] w-[20%]">
                      Email
                    </th>
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[20px] w-[20%]">
                      Phone number
                    </th>
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[20px] w-[16%]">
                      Address
                    </th>
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[23px] w-[8%]">
                      Guest <br /> type
                    </th>
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[22px] w-[8%]">
                      Dietary <br /> preference
                    </th>
                    <th className="text-[#151515] font-medium text-[16px] 3xl:text-[18px] text-left py-1 3xl:py-2.5 2xl:py-[20px] w-[8%]"></th>
                  </tr>
                  {tableData.map((items, index) => (
                    <tr key={index}>
                      <td className="flex items-center py-[20px]">
                        <input
                          type="checkbox"
                          id={`checkbox-${index}`}
                          className="size-[15px] 3xl:size-[18px] border border-[#B9B9B9] rounded-[4px] mr-3"
                        />
                        <label
                          htmlFor={`checkbox-${index}`}
                          className="text-[#151515] font-normal text-[15px] 3xl:text-[16px]"
                        >
                          {items.name}
                        </label>
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.email
                          ? items.email.length > 25
                            ? `${items.email.slice(0, 25)}...`
                            : items.email
                          : "--------------------"}
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.phNumber || "---------------------------"}
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.address
                          }
                      </td>
                      <td
                        className={`${
                          items.guestType === "VIP"
                            ? "text-[#EA0056]"
                            : "text-[#5D5D5D]"
                        } font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]`}
                      >
                        {items.guestType}
                      </td>
                      <td className="text-[#5D5D5D] font-normal text-[15px] 3xl:text-[16px] text-left py-[20px]">
                        {items.dietaryPreference}
                      </td>
                      <td className="text-[#5D5D5D] font-normal py-[20px] flex items-center justify-end">
                        <button className="mr-2 w-[18px] 3xl:w-[20px]">
                          <Image
                            className="mr-4 cursor-pointer"
                            width={20}
                            height={20}
                            src={"/images/edit.svg"}
                            alt="edit"
                          />
                        </button>
                        <button className="w-[18px] 3xl:w-[20px]">
                          <Image
                            className="cursor-pointer"
                            width={15}
                            height={16}
                            src={"/images/delete.svg"}
                            alt="delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

