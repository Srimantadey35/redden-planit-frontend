'use client'
import React, { useEffect, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup'
import toast from "react-hot-toast";
import { uploadToCloudinary } from "@/utils/cloudinary";

const Page = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const token = useSelector((state) => state.auth.accessToken);
  const [fetchedUser, setFetchedUser] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(fetchedUser?.firstName || "");
  const [lastName, setLastName] = useState(fetchedUser?.lastName || "");
  const [hasChanged, setHasChanged] = useState(false);
  const [loading, setLoading] = useState(true);

  

  const changePasswordSchema = Yup.object({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().required('New password is required')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
      .matches(/[0-9]/, 'Password must contain at least one number'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Please confirm your new password')
  })
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      console.log('password change ', values)
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/change-password`, values,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        if (response.status === 200 || response.success) {
          toast.success("Password Changed Successfully")
          setShowPasswordModal(false)
        }
      } catch (error) {
        toast.error('Password changed failed')
      }
    }
  })



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
    }finally {
    setLoading(false);
  }
  };

  // const [changePasswordForm,setChangePaswwordForm] = useState({
  //   currentPassword:"",
  //   newPassword:"",
  //   confirmNewPassword:""
  // })

  useEffect(() => {
    setFirstName(fetchedUser?.firstName || "");
    setLastName(fetchedUser?.lastName || "");
    setHasChanged(false);
  }, [fetchedUser]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    try {
      const cloudinaryUrl = await uploadToCloudinary(file);
      setSelectedImage(cloudinaryUrl)

    } catch (error) {
      toast.error("Image upload failed.");
    }
  }

  const uploadImage = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/upload-image`, { imageUrl: selectedImage },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 200) {
        toast.success("Image uploaded successfully")
        if (selectedImage) {
          setProfileImageUrl(selectedImage)
        }
        setShowUploadModal(false)
      }
    } catch (error) {
      console.log('iamge upload failed', error)
    }
  }
  return (
    
    // <div>
    //   <Layouts>
    //     <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center mb-8">
    //       <h3 className="font-semibold text-[#303030] text-[22px] 3xl:text-[25px] 4xl:text-[28px]">
    //         Account details
    //       </h3>

    //       <div className="mt-3 px-3 xl:px-6 py-3 xl:py-5 flex items-center bg-[#F2F2F2] rounded-[10px] justify-between">
    //         <div className="flex items-center">
    //           <div className="relative">
    //             <Image
    //               width={100}
    //               height={100}
    //               className="size-[60px] 3xl:size-[80px] 4xl:size-[100px] rounded-full object-cover"
    //               src={"/images/sign-up/face-1.jpg"}
    //               alt={`face-1`}
    //             />
    //             <button className="absolute bottom-[-5px] right-0 3xl:right-2 size-[25px] 3xl:size-[28px] 4xl:size-[33px] rounded-full bg-[#F9F9F9] grid place-items-center cursor-pointer">
    //               <Image
    //                 className="size-[15px] 3xl:size-[18px] 4xl:size-[20px] rounded-full object-cover"
    //                 width={20}
    //                 height={20}
    //                 src={"/images/acc-details/uploadicon.svg"}
    //                 alt="uploadicon"
    //               />
    //             </button>
    //           </div>
    //           <div className="ml-4">
    //             <h4 className="text-[#303030] font-bold text-[20px] 3xl:text-[24px]">
    //               {fetchedUser.name}
    //             </h4>
    //             <p className="text-[#505050] font-normal text-[15px] 3xl:text-[16px]">
    //               Upload your image
    //             </p>
    //           </div>
    //         </div>
    //         <Link href={'/add-business'} className="cursor-pointer border border-[#ededed] font-semibold text-[15px] 3xl:text-[17px] 4xl:text-[20px] text-[#505050] flex items-center bg-white rounded-[8px] py-3 px-4">
    //           <Image
    //             className="mr-3"
    //             width={16}
    //             height={16}
    //             src={"/images/acc-details/plusicon.svg"}
    //             alt="plusicon"
    //           />
    //           <span>Add Business</span>
    //         </Link>
    //       </div>
    //       <div className="px-3 xl:px-[35px] py-5 bg-[#F2F2F2] rounded-[10px] my-[28px]">
    //         <form>
    //           <div className="grid grid-cols-3 gap-[20px] xl:gap-[25px]">
    //             <div className="flex flex-col">
    //               <label
    //                 htmlFor="firstname"
    //                 className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
    //               >
    //                 Full name
    //               </label>
    //               <input
    //                 className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
    //                 placeholder="Rubina"
    //                 type="text"
    //                 name="firstname"
    //                 defaultValue={fetchedUser?.name || ""}
    //                 id="firstname"
    //               />
    //             </div>
    //             {/* <div className="flex flex-col">
    //               <label
    //                 htmlFor="lastname"
    //                 className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
    //               >
    //                 Last name
    //               </label>
    //               <input
    //                 className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
    //                 placeholder="last name"
    //                 type="text"
    //                 name="lastname"
    //                 id="lastname"
    //               />
    //             </div> */}
    //             <div className="flex flex-col">
    //               <label
    //                 htmlFor="email"
    //                 className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
    //               >
    //                 Email
    //               </label>
    //               <input
    //                 className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
    //                 placeholder="rubinapaul@mail.com"
    //                 type="text"
    //                 name="email"
    //                 defaultValue={fetchedUser?.email || ""}
    //                 id="email"
    //               />
    //             </div>
    //             <div className="flex flex-col">
    //               <label
    //                 htmlFor="Phone"
    //                 className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
    //               >
    //                 Phone
    //               </label>
    //               <input
    //                 className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
    //                 placeholder="(+91) 7586 123 456"
    //                 type="text"
    //                 defaultValue={fetchedUser?.phone || ""}
    //                 name="Phone"
    //                 id="Phone"
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2 mt-[25px]">
    //               Add Social Links
    //             </p>
    //             <div className="grid grid-cols-3 gap-6">
    //               {socialMedia.map((item, index) => (
    //                 <div key={index} className="flex items-center space-x-2.5">
    //                   <label htmlFor={`${item.socialMediaName}`} className="shrink-0 size-[28px] rounded-[4px] border border-[#dadada] bg-white flex items-center justify-center">
    //                     <Image
    //                       width={20}
    //                       height={20}
    //                       src={`${item.icon}`}
    //                       alt="facebook"
    //                     />
    //                   </label>
    //                   <input
    //                     className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-full"
    //                     placeholder={`${item.socialMediaName}`}
    //                     type="text"
    //                     name="firstname"
    //                     id={`${item.socialMediaName}`}
    //                   />
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="px-3 xl:px-[35px] py-5 bg-[#F2F2F2] rounded-[10px]">
    //         <form>
    //           <div className="grid grid-cols-2 gap-[20px] xl:gap-[25px]">
    //             <div className="flex flex-col">
    //               <label
    //                 htmlFor="password"
    //                 className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
    //               >
    //                 password
    //               </label>
    //               <input
    //                 className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
    //                 placeholder="password"
    //                 type="password"
    //                 name="password"
    //                 id="password"
    //               />
    //             </div>
    //             <div className="flex flex-col">
    //               <label
    //                 htmlFor="Cpassword"
    //                 className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
    //               >
    //                 confirm password
    //               </label>
    //               <input
    //                 className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
    //                 placeholder="confirm password"
    //                 type="password"
    //                 name="Cpassword"
    //                 id="Cpassword"
    //               />
    //             </div>
    //           </div>

    //           <div className="flex items-center justify-between mt-4">
    //             <div className="flex items-center w-[80%]">
    //               <div className="size-[24px] rounded-full bg-[#E4E4E4] grid place-items-center mr-2">
    //                 <Image
    //                   width={3}
    //                   height={13}
    //                   src={"/images/acc-details/iicon.svg"}
    //                   alt="iicon"
    //                 />
    //               </div>
    //               <p className="font-normal text-[14px] text-[#505050] ">
    //                 Required, min 8 characters password should have standard
    //                 practices e.g. One Special character , 1 numbers etc.
    //               </p>
    //             </div>
    //             <div className="w-[20%] flex justify-end">
    //               <button className="text-[#EA0056] font-semibold text-[14px] 3xl:text-[16px] cursor-pointer">
    //                 Change password
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>

    //       <div className="flex items-center mt-10 justify-end">
    //         <button className="cursor-pointer flex items-center font-semibold text-[#505050] text-[16px] 4xl:text-[20px] border border-[#ededed] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px] mr-4">
    //           Edit
    //           <Image
    //             className="ml-3"
    //             width={16}
    //             height={16}
    //             src={"/images/acc-details/editicon.svg"}
    //             alt="editicon"
    //           />
    //         </button>
    //         <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px]">
    //           Save Changes
    //         </button>
    //       </div>
    //     </div>
    //   </Layouts>
    // </div>
   <div>
   {loading ? (
  <div className="animate-pulse">
    <Layouts>
      <div className="w-full max-w-full px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center mb-8">
        {/* Title skeleton */}
        <div className="bg-gray-300 h-7 w-48 rounded mb-3"></div>

        {/* Profile section skeleton */}
        <div className="mt-3 px-3 xl:px-6 py-3 xl:py-5 flex items-center bg-[#F2F2F2] rounded-[10px] justify-between">
          <div className="flex items-center">
            <div className="relative">
              <div className="bg-gray-300 rounded-full w-[60px] h-[60px] 3xl:w-[80px] 3xl:h-[80px] 4xl:w-[100px] 4xl:h-[100px]"></div>
              <div className="absolute bottom-[-5px] right-0 3xl:right-2 size-[25px] 3xl:size-[28px] 4xl:size-[33px] rounded-full bg-gray-200"></div>
            </div>
            <div className="ml-4">
              <div className="bg-gray-300 h-6 w-32 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-24 rounded"></div>
            </div>
          </div>
          <div className="bg-gray-200 h-10 w-32 rounded-[8px]"></div>
        </div>

        {/* Form section skeleton */}
        <div className="px-3 xl:px-[35px] py-5 bg-[#F2F2F2] rounded-[10px] my-[28px]">
          {/* Input fields grid skeleton */}
          <div className="grid grid-cols-3 gap-[20px] xl:gap-[25px]">
            <div className="flex flex-col">
              <div className="bg-gray-300 h-4 w-20 rounded mb-2"></div>
              <div className="bg-gray-200 h-[42px] 3xl:h-[53px] rounded-[8px]"></div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-300 h-4 w-20 rounded mb-2"></div>
              <div className="bg-gray-200 h-[42px] 3xl:h-[53px] rounded-[8px]"></div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-300 h-4 w-16 rounded mb-2"></div>
              <div className="bg-gray-200 h-[42px] 3xl:h-[53px] rounded-[8px]"></div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-300 h-4 w-12 rounded mb-2"></div>
              <div className="bg-gray-200 h-[42px] 3xl:h-[53px] rounded-[8px]"></div>
            </div>
          </div>

          {/* Social links section skeleton */}
          <div className="mt-[25px]">
            <div className="bg-gray-300 h-4 w-32 rounded mb-2"></div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center space-x-2.5">
                  <div className="bg-gray-200 size-[28px] rounded-[4px]"></div>
                  <div className="bg-gray-200 h-[42px] 3xl:h-[53px] rounded-[8px] w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons section skeleton */}
        <div className="flex items-center mt-10 justify-end">
          <div className="bg-gray-200 h-10 w-40 rounded-[8px] mr-4"></div>
          <div className="bg-gray-300 h-10 w-20 rounded-[8px]"></div>
        </div>
      </div>
    </Layouts>
  </div>
):(
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
                  src={profileImageUrl || fetchedUser?.image || "/images/sign-up/face-1.jpg"}
                  alt="profile"
                />

                <button
                  className="absolute bottom-[-5px] right-0 3xl:right-2 size-[25px] 3xl:size-[28px] 4xl:size-[33px] rounded-full bg-[#F9F9F9] grid place-items-center cursor-pointer"
                  onClick={() => setShowUploadModal(true)}
                >
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
                  {fetchedUser?.name}
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
                    First name
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => {
                      setFirstName(e.target.value);
                      setHasChanged(
                        e.target.value !== (fetchedUser?.firstName || "") || lastName !== (fetchedUser?.lastName || "")
                      );
                    }}
                    type="text"
                    name="firstname"
                    id="firstname"
                    disabled={!isEditing}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lastname"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Last name
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => {
                      setLastName(e.target.value);
                      setHasChanged(
                        firstName !== (fetchedUser?.firstName || "") || e.target.value !== (fetchedUser?.lastName || "")
                      );
                    }}
                    type="text"
                    name="lastname"
                    id="lastname"
                    disabled={!isEditing}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                  >
                    Email
                  </label>
                  <input
                    className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                    placeholder="Email"
                    defaultValue={fetchedUser?.email || ""}
                    disabled={fetchedUser?.email}
                    type="text"
                    name="email"
                    id="email"
                    readOnly
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
                    placeholder="Phone"
                    type="text"
                    defaultValue={fetchedUser?.phone || ""}
                    disabled={fetchedUser?.phone}
                    name="Phone"
                    id="Phone"
                    readOnly
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
          {/* <div className="px-3 xl:px-[35px] py-5 bg-[#F2F2F2] rounded-[10px]">
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
          </div> */}

          <div className="flex items-center mt-10 justify-end">
            <button
              className="cursor-pointer flex items-center font-semibold text-[#505050] text-[16px] 4xl:text-[20px] border border-[#ededed] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px] mr-4"
              onClick={() => setShowPasswordModal(true)}
            >
              Change Password
              <Image
                className="ml-3"
                width={16}
                height={16}
                src={"/images/acc-details/editicon.svg"}
                alt="editicon"
              />
            </button>
            {/* <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px]">
              Edit
            </button> */}
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px]"
                type="button"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  // Save logic here (API call etc.)
                  setIsEditing(false);
                  setHasChanged(false);
                }}
                className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 4xl:py-3.5 px-[40px] 4xl:px-[62px]"
                type="button"
                disabled={!hasChanged}
              >
                Save Changes
              </button>
            )}
          </div>

          {/* Password Change Popup Modal */}
          {showPasswordModal && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm md:w-[calc(100%-200px)] md:ml-[200px] smd:w-[calc(100%-245px)] 3xl:w-[calc(100%-280px)] smd:ml-[245px] 3xl:ml-[280px]">
              <div className="bg-[#F2F2F2] rounded-[10px] p-6 w-full max-w-[400px] shadow-lg relative">
                <button
                  className="absolute top-3 right-3 text-[#EA0056] text-xl font-bold cursor-pointer"
                  onClick={() => setShowPasswordModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h4 className="font-semibold text-[18px] text-[#151515] mb-4 text-center">
                  Change Password
                </h4>
                <form
                  onSubmit={formik.handleSubmit}
                >
                  <div className="flex flex-col mb-3 relative">
                    <label htmlFor="currentPassword" className="font-semibold text-[15px] text-[#151515] mb-2">
                      Current Password
                    </label>
                    <input
                      className={`h-[42px] rounded-[8px] outline-none bg-white px-[16px] placeholder:text-[#525252] text-[14px] font-medium text-black ${(formik.errors.currentPassword && formik.touched.currentPassword) ? 'ring ring-red-500' : 'ring ring-blue-500'}`}
                      placeholder="Current password"
                      type={showCurrentPassword ? "text" : "password"}
                      value={formik.values.currentPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="currentPassword"
                      id="currentPassword"
                    />
                    <span
                      className="absolute right-3 top-10 cursor-pointer"
                      onClick={() => setShowCurrentPassword((prev) => !prev)}
                    >
                      {formik.values.currentPassword && showCurrentPassword ? (
                        <Image src="/images/eye-open.svg" width={20} height={20} alt="Hide" />
                      ) : (
                        <Image src="/images/eye-close.svg" width={20} height={20} alt="Show" />
                      )}
                    </span>
                    <div className="mb-4">
                      {formik.touched.currentPassword && formik.errors.currentPassword && <p className="text-red-600 mt-1  text-sm absolute w-sm">{formik.errors.currentPassword}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col mb-3 relative">
                    <label htmlFor="newPassword" className="font-semibold text-[15px] text-[#151515] mb-2">
                      New Password
                    </label>
                    <input
                      className={`h-[42px] rounded-[8px] outline-none bg-white px-[16px] placeholder:text-[#525252] text-[14px] font-medium text-black ${(formik.errors.newPassword && formik.touched.newPassword) ? 'ring ring-red-500' : 'ring ring-blue-500'}`}
                      placeholder="New password"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      id="newPassword"
                    />
                    <span
                      className="absolute right-3 top-10 cursor-pointer"
                      onClick={() => setShowNewPassword((prev) => !prev)}
                    >
                      {formik.values.newPassword && showNewPassword ? (
                        <Image src="/images/eye-open.svg" width={20} height={20} alt="Hide" />
                      ) : (
                        <Image src="/images/eye-close.svg" width={20} height={20} alt="Show" />
                      )}
                    </span>
                    <div className="mb-4">
                      {formik.touched.newPassword && formik.errors.newPassword && <p className="text-red-600 mt-1 text-sm absolute w-sm">{formik.errors.newPassword}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col mb-3 relative">
                    <label htmlFor="confirmNewPassword" className="font-semibold text-[15px] text-[#151515] mb-2">
                      Confirm New Password
                    </label>
                    <input
                      className={`h-[42px] rounded-[8px] outline-none bg-white px-[16px] placeholder:text-[#525252] text-[14px] font-medium text-black ${(formik.errors.confirmNewPassword && formik.touched.confirmNewPassword) ? 'ring ring-red-500' : 'ring ring-blue-500'}`}
                      placeholder="Confirm new password"
                      value={formik.values.confirmNewPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmNewPassword"
                      id="confirmNewPassword"
                    />
                    <span
                      className="absolute right-3 top-10 cursor-pointer"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {formik.values.confirmNewPassword && showConfirmPassword ? (
                        <Image src="/images/eye-open.svg" width={20} height={20} alt="Hide" />
                      ) : (
                        <Image src="/images/eye-close.svg" width={20} height={20} alt="Show" />
                      )}
                    </span>
                    <div className="mb-2">
                      {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && <p className="text-red-600 mt-1 text-sm absolute w-sm">{formik.errors.confirmNewPassword}</p>}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 font-semibold text-[16px] bg-[#EA0056] rounded-[8px] py-2 text-white cursor-pointer"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Image Upload Modal */}
          {showUploadModal && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm md:w-[calc(100%-200px)] md:ml-[200px] smd:w-[calc(100%-245px)] 3xl:w-[calc(100%-280px)] smd:ml-[245px] 3xl:ml-[280px]">
              <div className="bg-[#F2F2F2] rounded-[10px] p-6 w-full max-w-[400px] shadow-lg relative">
                <button
                  className="absolute top-3 right-3 text-[#EA0056] text-xl font-bold cursor-pointer"
                  onClick={() => setShowUploadModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h4 className="font-semibold text-[18px] text-[#151515] mb-4 text-center">
                  Upload Profile Image
                </h4>
                <form
                  onSubmit={uploadImage}>
                  {/* Upload area with + icon, border, and grey background */}
                  <label
                    htmlFor="profileImage"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-[#dadada] bg-[#f5f5f5] rounded-[8px] py-6 mb-4 cursor-pointer hover:bg-[#ececec] transition"
                  >
                    <span className="text-[#EA0056] text-3xl mb-2 border border-[#dadada] rounded-full bg-white w-12 h-12 flex items-center justify-center">
                      +
                    </span>
                    <span className="text-[#505050] text-[15px] font-medium">Click to upload</span>
                    <input
                      id="profileImage"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e)}
                      className="hidden"
                    />
                  </label>
                  {selectedImage && (
                    <div className="mb-4 flex justify-center">
                      <Image
                        width={24}
                        height={24}
                        src={selectedImage}
                        alt="Preview"
                        className="rounded-full w-24 h-24 object-cover"
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full mt-2 font-semibold text-[16px] bg-[#EA0056] rounded-[8px] py-2 text-white cursor-pointer"
                  >
                    Upload
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </Layouts>)}
      </div>
  );
};

export default Page;
