'use client'
import React, { useEffect, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";

const Page = () => {
   const token = useSelector((state) => state.auth.accessToken);
   const [fetchedUser,setFetchedUser] = useState({})

  const socialMedia = [
    {
      icon: "/images/acc-details/facebook.svg",
      socialMediaName: "Facebook",
    },
    {
      icon: "/images/acc-details/instagram.svg",
      socialMediaName: "Instagram",
    },
    {
      icon: "/images/acc-details/twitter.svg",
      socialMediaName: "Twitter",
    },
  ];
   useEffect(() => {
    if (token) {
      fetchUserDetails(token);
    }
  }, [token]);

  const fetchUserDetails = async (token) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/current-user`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('user response', response);
    setFetchedUser(response.data.data)
  } catch (error) {
    console.error('fetch error', error);
  }
};
  return (
    <div>
      <Layouts>
        <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center mb-8">
          <h3 className="font-semibold text-[#303030] text-[22px] 3xl:text-[25px] 4xl:text-[28px]">
            Account details
          </h3>

          <div className="mt-3 px-3 xl:px-6 py-3 xl:py-5 flex items-center bg-[#F2F2F2] rounded-[10px] justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  width={100}
                  height={100}
                  className="size-[60px] 3xl:size-[80px] 4xl:size-[100px] rounded-full object-cover"
                  src={"/images/sign-up/face-1.jpg"}
                  alt={`face-1`}
                />
                <button className="absolute bottom-[-5px] right-0 3xl:right-2 size-[25px] 3xl:size-[28px] 4xl:size-[33px] rounded-full bg-[#F9F9F9] grid place-items-center cursor-pointer">
                  <Image
                    className="size-[15px] 3xl:size-[18px] 4xl:size-[20px] rounded-full object-cover"
                    width={20}
                    height={20}
                    src={"/images/acc-details/uploadicon.svg"}
                    alt="uploadicon"
                  />
                </button>
              </div>
              <div className="ml-4">
                <h4 className="text-[#303030] font-bold text-[20px] 3xl:text-[24px]">
                  {fetchedUser.name}
                </h4>
                <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px]">
                  Upload your image
                </p>
              </div>
            </div>
            <Link href={'/add-business'} className="cursor-pointer border border-[#ededed] font-semibold text-[15px] 3xl:text-[17px] 4xl:text-[20px] text-[#505050] flex items-center bg-white rounded-[8px] py-3 px-4">
              <Image
                className="mr-3"
                width={16}
                height={16}
                src={"/images/acc-details/plusicon.svg"}
                alt="plusicon"
              />
              <span>Add Business</span>
            </Link>
          </div>
          <div className="px-3 xl:px-[35px] py-5 bg-[#F2F2F2] rounded-[10px] my-[28px]">
            <form>
              <div className="grid grid-cols-3 gap-[20px] xl:gap-[25px]">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstname"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Full name
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="Rubina"
                    type="text"
                    name="firstname"
                    defaultValue={fetchedUser?.name || ""}
                    id="firstname"
                  />
                </div>
                {/* <div className="flex flex-col">
                  <label
                    htmlFor="lastname"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Last name
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="last name"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div> */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Email
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="rubinapaul@mail.com"
                    type="text"
                    name="email"
                    defaultValue={fetchedUser?.email || ""}
                    id="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="Phone"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="(+91) 7586 123 456"
                    type="text"
                    defaultValue={fetchedUser?.phone || ""}
                    name="Phone"
                    id="Phone"
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2 mt-[25px]">
                  Add Social Links
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {socialMedia.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2.5">
                      <label htmlFor={`${item.socialMediaName}`} className="shrink-0 size-[28px] rounded-[4px] border border-[#dadada] bg-white flex items-center justify-center">
                        <Image
                          width={20}
                          height={20}
                          src={`${item.icon}`}
                          alt="facebook"
                        />
                      </label>
                      <input
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-full"
                        placeholder={`${item.socialMediaName}`}
                        type="text"
                        name="firstname"
                        id={`${item.socialMediaName}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="px-3 xl:px-[35px] py-5 bg-[#F2F2F2] rounded-[10px]">
            <form>
              <div className="grid grid-cols-2 gap-[20px] xl:gap-[25px]">
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    password
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="password"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="Cpassword"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    confirm password
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="confirm password"
                    type="password"
                    name="Cpassword"
                    id="Cpassword"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center w-[80%]">
                  <div className="size-[24px] rounded-full bg-[#E4E4E4] grid place-items-center mr-2">
                    <Image
                      width={3}
                      height={13}
                      src={"/images/acc-details/iicon.svg"}
                      alt="iicon"
                    />
                  </div>
                  <p className="font-normal text-[14px] text-[#505050] ">
                    Required, min 8 characters password should have standard
                    practices e.g. One Special character , 1 numbers etc.
                  </p>
                </div>
                <div className="w-[20%] flex justify-end">
                  <button className="text-[#EA0056] font-semibold text-[14px] 3xl:text-[16px] cursor-pointer">
                    Change password
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center mt-10 justify-end">
            <button className="cursor-pointer flex items-center font-semibold text-[#505050] text-[16px] 4xl:text-[20px] border border-[#ededed] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px] mr-4">
              Edit
              <Image
                className="ml-3"
                width={16}
                height={16}
                src={"/images/acc-details/editicon.svg"}
                alt="editicon"
              />
            </button>
            <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px]">
              Save Changes
            </button>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default Page;
