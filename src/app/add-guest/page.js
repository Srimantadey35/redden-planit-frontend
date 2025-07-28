
// "use client";
// import Header from "@/components/Header";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useFormik } from "formik";

// const Page = () => {
//   const [guestList, setGuestList] = useState([]);
//   const [checkedGuests, setCheckedGuests] = useState({});

//   useEffect(() => {
//     const storedGuests = JSON.parse(localStorage.getItem("guests") || "[]");
//     setGuestList(storedGuests);
//   }, []);

//   const initialValues = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     number: "",
//     address: "",
//     guestType: "",
//     dietary: "",
//     notes: ""
//   }
//   const { values, handleChange, handleSubmit, handleBlur } = useFormik({
//     initialValues,
//     onSubmit: async () => {
//       const newGuest = { ...values };
//       const updatedList = [...guestList, newGuest];

//       localStorage.setItem("guests", JSON.stringify(updatedList));
//       setGuestList(updatedList);
//       setCheckedGuests({});
//       formik.resetForm();
//     }
//   })
//   const guestNames = [

//   ];


//   const handleCheck = (name) => {
//     setCheckedGuests((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   // This will always be up-to-date with the selected values
//   const selectedGuests = Object.keys(checkedGuests).filter(
//     (name) => checkedGuests[name]
//   );

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Selected guests to submit:", selectedGuests);
//   // };

//   return (
//     <div className="bg-white">
//       <Header />
//       <div className="min-h-screen flex items-center">
//         <div className="container">
//           <div className="py-[100px] 3xl:py-[120px] md:flex  items-stretch">
//             <div className="bg-[#F7F7F7] p-[40px] 2xl:p-[60px] rounded-2xl md:w-[60%] w-full 3xl:w-[800px]">
//               <h3 className="text-[22px] 3xl:text-[30px] font-semibold text-[#151515] mb-[43px]">
//                 Add guest
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-[30px]">
//                 {/* First & Last Name */}
//                 <div className="flex flex-col md:flex-row gap-5">
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="firstname"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       First name<span className="text-[#FF2C2C]">*</span>
//                     </label>
//                     <input
//                       className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
//                       placeholder="Enter guest's first name"
//                       type="text"
//                       value={values.firstname}
//                       name="firstname"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       id="firstname"
//                     />
//                   </div>
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="lastname"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Last name<span className="text-[#FF2C2C]">*</span>
//                     </label>
//                     <input
//                       className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
//                       placeholder="Enter guest's last name"
//                       type="text"
//                       value={values.lastname}
//                       name="lastname"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       id="lastname"
//                     />
//                   </div>
//                 </div>

//                 {/* Email & Phone */}
//                 <div className="flex flex-col md:flex-row gap-5">
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="email"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Email
//                     </label>
//                     <input
//                       className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
//                       placeholder="Enter guest's email"
//                       type="email"
//                       value={values.email}
//                       name="email"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       id="email"
//                     />
//                   </div>
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="number"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Phone number<span className="text-[#FF2C2C]">*</span>
//                     </label>
//                     <input
//                       className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
//                       placeholder="Enter guest's number"
//                       type="text"
//                       value={values.number}
//                       name="number"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       id="number"
//                     />
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div>
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="address"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Address
//                     </label>
//                     <input
//                       className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
//                       placeholder="Enter guest's address"
//                       type="text"
//                       value={values.address}
//                       name="address"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       id="address"
//                     />
//                   </div>
//                 </div>

//                 {/* Guest Type & Dietary Preference */}
//                 <div className="flex flex-col md:flex-row gap-5">
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="guestType"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Guest Type
//                     </label>
//                     <select
//                       name="guestType"
//                       value={values.guestType}
//                       id="guestType"
//                       defaultValue=""
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className="text-[#919191] text-[14px] font-normal h-[44px] 3xl:h-[53px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
//                     >
//                       <option value="" disabled hidden>
//                         Select type
//                       </option>
//                       <option value="family">Family</option>
//                       <option value="friend">Friend</option>
//                       <option value="colleague">Colleague</option>
//                       <option value="vip">VIP</option>
//                     </select>
//                   </div>
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="dietary"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Dietary Preference
//                     </label>
//                     <select
//                       name="dietary"
//                       id="dietary"
//                       value={values.dietary}
//                       defaultValue=""
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className="text-[#919191] text-[14px] font-normal h-[44px] 3xl:h-[53px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
//                     >
//                       <option value="" disabled hidden>
//                         Select dietary
//                       </option>
//                       <option value="vegetarian">Vegetarian</option>
//                       <option value="vegan">Vegan</option>
//                       <option value="gluten-free">Gluten-Free</option>
//                       <option value="non-vegeterian">Non Vegeterian</option>
//                       <option value="dietary 4">No preference</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Notes */}
//                 <div>
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="notes"
//                       className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
//                     >
//                       Notes
//                     </label>
//                     <textarea
//                       className="h-[80px] 3xl:h-[100px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none pt-3 resize-none"
//                       placeholder="Enter notes about your guests."
//                       name="notes"
//                       value={values.notes}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       id="notes"
//                     ></textarea>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   className="cursor-pointer transition font-semibold text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-white py-3 3xl:py-3.5 bg-[#EA0056] hover:bg-[#c9004a] rounded-lg w-full max-w-[317px] mx-auto block"
//                 >
//                   Add to list
//                 </button>
//               </form>

//             </div>
//             <div className="bg-[#F7F7F7] p-[40px] 2xl:p-[60px] rounded-2xl md:w-[40%] w-full 3xl:w-[calc(100%-800px)] md:ml-[30px] ml-0 3xl:ml-[40px] flex flex-col">
//               <h3 className="text-[22px] 3xl:text-[30px] font-semibold text-[#151515] mb-[43px]">
//                 Guest list
//               </h3>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-[30px] flex flex-col h-full"
//               >
//                 {guestList.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between"
//                   >
//                     <div className="flex items-center">
//                       <input
//                         name="checkbox"
//                         id={`checkbox-${index}`}
//                         type="checkbox"
//                         className="size-[16px] 3xl:size-[20px] mr-3.5"
//                         checked={!!checkedGuests[item]}
//                         onChange={() => handleCheck(item)}
//                       />
//                       <label
//                         htmlFor={`checkbox-${index}`}
//                         className="font-normal text-[15px] 3xl:text-[20px] text-[#151515]"
//                       >
//                         {item.length > 15 ? `${item.slice(0, 15)}...` : item}
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-3.5">
//                       <button type="button" className="cursor-pointer w-[17px] 3xl:w-[20px]">
//                         <Image
//                           width={20}
//                           height={20}
//                           src="/images/edit.svg"
//                           alt="edit"
//                         />
//                       </button>
//                       <button type="button" className="cursor-pointer w-[17px] 3xl:w-[20px]">
//                         <Image
//                           width={20}
//                           height={20}
//                           src="/images/delete.svg"
//                           alt="delete"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 ))}

//                 <Link href={'/guest-list'}
//                   type="submit"
//                   className="cursor-pointer mt-auto font-semibold text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-white py-3 3xl:py-3.5 bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg  mx-auto table text-center"
//                 >
//                   Submit all
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;



"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Page = () => {
  const [guestList, setGuestList] = useState([]);
  const [checkedGuests, setCheckedGuests] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const storedGuests = JSON.parse(localStorage.getItem("guests")) || [];
    setGuestList(storedGuests);
    setHasMounted(true);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      guestType: "",
      dietaryPreference: "",
      notes: ""
    },
    onSubmit: async () => {
      const newGuest = { ...formik.values };
      let updatedList;

      if (editIndex !== null) {
        updatedList = [...guestList];
        updatedList[editIndex] = newGuest;
        setEditIndex(null);
        toast.success('Guest updated successfully');
      } else {
        updatedList = [...guestList, newGuest];
        toast.success('Guest added to list');
      }
      localStorage.setItem("guests", JSON.stringify(updatedList));
      setGuestList(updatedList);
      setCheckedGuests({});
      formik.resetForm();
    },
  });

  const handleCheck = (index) => {
    setCheckedGuests((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleEdit = (index) => {
    const guestToEdit = guestList[index];
    formik.setValues(guestToEdit);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = guestList.filter((_, i) => i !== index);
    setGuestList(updatedList);
    localStorage.setItem("guests", JSON.stringify(updatedList));
    setCheckedGuests((prev) => {
      const newChecked = { ...prev };
      delete newChecked[index];
      return newChecked;
    });
    toast.success('Guest deleted successfully')
  };

  const handleSubmitAllBusiness = async (e) => {
    e.preventDefault()
    const selectedGuests = guestList.filter((_, index) => checkedGuests[index]);

    if (selectedGuests.length === 0) {
      toast.error('Please select at least one guest to submit');
      return;
    }
    console.log("Sending guests:", selectedGuests);

    try {
      toast.loading('Submitting guests...', { id: 'submit-loading' });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/planners/create-contacts`,
        { contacts: selectedGuests }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
      toast.dismiss('submit-loading');
      if (response.data.statusCode === 201) {
        toast.success('Contact details added successfully')
        const remainingGuests = guestList.filter((_, index) => !checkedGuests[index]);
        setGuestList(remainingGuests);
        localStorage.setItem("guests", JSON.stringify(remainingGuests));
        setCheckedGuests({})
      }
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error sending guests:", error);
    }
  }

  if (!hasMounted) return null;


  return (
    <div className="bg-white">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px",     // optional: for better readability
            borderRadius: "6px",  // optional: smooth look
          },
          success: {
            icon: '✅',
          },
          error: {
            icon: '❌',
          },
        }}
        containerStyle={{ marginTop: '110px' }} // instead of containerClassName
      />

      <Header />
      <div className="min-h-screen flex items-center">
        <div className="container">
          <div className="py-[100px] 3xl:py-[120px] md:flex  items-stretch">
            <div className="bg-[#F7F7F7] p-[40px] 2xl:p-[60px] rounded-2xl md:w-[60%] w-full 3xl:w-[800px]">
              <h3 className="text-[22px] 3xl:text-[30px] font-semibold text-[#151515] mb-[43px]">
                Add guest
              </h3>

              <form onSubmit={formik.handleSubmit} className="space-y-[30px]">
                {/* First & Last Name */}
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstName"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      First name<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter guest's first name"
                      type="text"
                      value={formik.values.firstName}
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="firstName"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="lastName"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Last name<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter guest's last name"
                      type="text"
                      value={formik.values.lastName}
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="lastName"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="email"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Email
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter guest's email"
                      type="email"
                      value={formik.values.email}
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="phone"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Phone number<span className="text-[#FF2C2C]">*</span>
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter guest's number"
                      type="text"
                      value={formik.values.phone}
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="phone"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="address"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Address
                    </label>
                    <input
                      className="h-[44px] 3xl:h-[53px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none"
                      placeholder="Enter guest's address"
                      type="text"
                      value={formik.values.address}
                      name="address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="address"
                    />
                  </div>
                </div>

                {/* Guest Type & Dietary Preference */}
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="guestType"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Guest Type
                    </label>
                    <select
                      name="guestType"
                      value={formik.values.guestType}
                      id="guestType"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="text-[#919191] text-[14px] font-normal h-[44px] 3xl:h-[53px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                    >
                      <option value="" disabled hidden>
                        Select type
                      </option>
                      <option value="family">Family</option>
                      <option value="friend">Friend</option>
                      <option value="colleague">Colleague</option>
                      <option value="vip">VIP</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="dietaryPreference"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Dietary Preference
                    </label>
                    <select
                      name="dietaryPreference"
                      id="dietaryPreference"
                      value={formik.values.dietaryPreference}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="text-[#919191] text-[14px] font-normal h-[44px] 3xl:h-[53px] mt-1 bg-white px-5 border border-[#EEEEEE] rounded-lg outline-none"
                    >
                      <option value="" disabled hidden>
                        Select dietary
                      </option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-Free</option>
                      <option value="non-vegeterian">Non Vegeterian</option>
                      <option value="dietary 4">No preference</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="notes"
                      className="font-normal text-[#151515] text-[16px] 3xl:text-[18px]"
                    >
                      Notes
                    </label>
                    <textarea
                      className="h-[80px] 3xl:h-[100px] mt-1 bg-white placeholder:text-[#919191] placeholder:text-[14px] placeholder:font-normal px-5 border border-[#EEEEEE] rounded-lg text-black outline-none pt-3 resize-none"
                      placeholder="Enter notes about your guests."
                      name="notes"
                      value={formik.values.notes}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="notes"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="cursor-pointer transition font-semibold text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-white py-3 3xl:py-3.5 bg-[#EA0056] hover:bg-[#c9004a] rounded-lg w-full max-w-[317px] mx-auto block"
                >
                  Add to list
                </button>
              </form>

            </div>
            <div className="bg-[#F7F7F7] p-[40px] 2xl:p-[60px] rounded-2xl md:w-[40%] w-full 3xl:w-[calc(100%-800px)] md:ml-[30px] ml-0 3xl:ml-[40px] flex flex-col">
              <h3 className="text-[22px] 3xl:text-[30px] font-semibold text-[#151515] mb-[43px]">
                Guest list
              </h3>

              <form
                onSubmit={handleSubmitAllBusiness}
                className="space-y-[30px] flex flex-col h-full"
              >
                {guestList.map((item, index) => {
                  const guestName = `${item.firstName || ''} ${item.lastName || ''}`.trim() || 'Unnamed Guest';
                  const displayName = guestName.length > 25 ? `${guestName.slice(0, 25)}...` : guestName;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <input
                          name="checkbox"
                          id={`checkbox-${index}`}
                          type="checkbox"
                          className="size-[16px] 3xl:size-[20px] mr-3.5"
                          checked={!!checkedGuests[index]}
                          onChange={() => handleCheck(index)}
                        />
                        <label
                          htmlFor={`checkbox-${index}`}
                          className="font-normal text-[15px] 3xl:text-[20px] text-[#151515]"
                        >
                          {displayName}
                        </label>
                      </div>
                      <div className="flex items-center space-x-3.5">
                        <button onClick={() => handleEdit(index)} type="button" className="cursor-pointer w-[17px] 3xl:w-[20px]">
                          <Image
                            width={20}
                            height={20}
                            src="/images/edit.svg"
                            alt="edit"
                          />
                        </button>
                        <button onClick={() => handleDelete(index)} type="button" className="cursor-pointer w-[17px] 3xl:w-[20px]">
                          <Image
                            width={20}
                            height={20}
                            src="/images/delete.svg"
                            alt="delete"
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}

                <button
                  type="submit"
                  className="cursor-pointer mt-auto font-semibold text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-white py-3 3xl:py-3.5 3xl:px-3 bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg  mx-auto table text-center"
                >
                  Submit all
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

