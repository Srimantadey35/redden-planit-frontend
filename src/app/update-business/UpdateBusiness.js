// "use client";
// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import Layouts from "@/components/Layouts";
// import Image from "next/image";
// import Venue from "@/components/business-categories/Venue";
// import Catering from "@/components/business-categories/Catering";
// import PhotographerForm from "@/components/business-categories/Photography";
// import BridalMakeup from "@/components/business-categories/BridalMakeup";
// import Decorators from "@/components/business-categories/Decorators";
// import WeddingPlannerForm from "@/components/business-categories/WeddingPlannerForm";
// import MehendiArtist from "@/components/business-categories/MehandiArtist";
// import DJForm from "@/components/business-categories/Dj";
// import PreWeddingPhotographersForm from "@/components/business-categories/PreWeddingPhotographersForm";
// import WeddingPandit from "@/components/business-categories/WeddingPandit";
// import Cake from "@/components/business-categories/Cake";
// import Bartenders from "@/components/business-categories/Bartenders";
// import { categoryFieldKeys } from "@/components/business-categories/CategoryFieldValues";
// import { useFormik } from "formik";
// import { values } from "lodash";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { uploadToCloudinary } from "@/utils/cloudinary";
// import { State } from "country-state-city";
// import { useSearchParams } from "next/navigation";



// const UpdateBusiness = () => {
//   const searchParams = useSearchParams();
//   const[formValues,setFormValues] = useState({})
//   const indianStates = State.getStatesOfCountry("IN");
//   const id = searchParams.get('id');
//   const token = useSelector((state) => state.auth.accessToken); // Returns array of state objects
//   const [categoryForms, setCategoryForms] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [categoryData, setCategoryData] = useState({});
//   const [isToggled, setIsToggled] = useState(false);
//   const [fromTime, setFromTime] = useState("09:00");
//   const [toTime, setToTime] = useState("18:00");
//   const [openAccordion, setopenAccordion] = useState("add-business");
//   const [images, setImages] = useState([]);
//   const [uploadedImageUrls, setUploadedImageUrls] = useState([])
//   const [allBusiness, setAllBusiness] = useState([])
//   const [openingHoursButton, setOpeningHoursButton] = useState(false)
//   const [serviceButton,setServiceButton] = useState(false)
//   const [portfolioButton,setPortFolioButton] = useState(false)

// console.log('update accessToken',token)

//    function capitalizeFirstLetter(string) {
//     return string?.charAt(0).toUpperCase() + string?.slice(1);
//   }


//   useEffect(() => {
//     const isAddBusinessSubmitted = localStorage.getItem('addBusinessSubmitted');
//     const isOpeningHoursSubmitted = localStorage.getItem('isOpeningHoursSubmitted')
//     const isServiceSubmitted  = localStorage.getItem('isServiceSubmitted')
//     if (isAddBusinessSubmitted) {
//       setOpeningHoursButton(true)
//     }
//     if(isOpeningHoursSubmitted){
//       setServiceButton(true)
//     }
//     if(isServiceSubmitted){
//       setPortFolioButton(true)
//     }
//   }, [])

//   console.log("selectedCategory", selectedCategory);

//   const formik = useFormik({
//     initialValues: {
//       businessName: "",
//       category: "",
//       businessAddress: "",
//       city: "",
//       state: "",
//       pin: "",
//       languages: "",
//       travelAvailability: "",
//       description: "",
//       availability: [],
//       images: [],
//       deliveryTimeline: "",
//       priceRange: "",
//       portfolioDescription: "",
//       portfolioLocation: "",
//       portfolioEventType: "",
//       portfolioTags: "",
//       openingHours: [
//         { day: "Monday", isOpen: true, from: "", to: "" }
//       ]

//     },
//     // onSubmit: async (values) => {
//     //   const payload = {
//     //     vendorDetails: {
//     //       businessName: values.businessName,
//     //       category: selectedCategory,
//     //       address: values.businessAddress,
//     //       city: values.city,
//     //       state: values.state,
//     //       pin: values.pin,
//     //       languages: values.languages,
//     //       travelAvailability: values.travelAvailability,
//     //     },
//     //     serviceInfo: {
//     //       description: values.description,
//     //       availability: values.availability,
//     //       images: values.images,
//     //       deliveryTimeline: values.deliveryTimeline,
//     //       priceRange: values.priceRange,
//     //     },
//     //     categorySpecificData: categoryData,
//     //     portfolioInfo: {
//     //       portfolioTags: values.portfolioTags,
//     //       portfolioDescription: values.portfolioDescription,
//     //       portfolioLocation: values.portfolioLocation,
//     //       portfolioEventType: values.portfolioEventType,

//     //     },
//     //     openingHours: values.openingHours
//     //   };

//     // console.log("Final Payload:", payload);
//     // await axios.post('/api/vendors', payload);
//     // },
//   });

//   // const fetchAllBusinessDetails = async()=>{
//   //   try {
//   //     const response = await axios.get(`${NEXT_PUBLIC_API_URL_SYSTEM}/vendors/my-businesses`,
//   //     {
//   //         withCredentials: true,
//   //         headers: {
//   //           Authorization: `Bearer ${accessToken}`,
//   //         },
//   //       })
//   //     console.log('all business',response);

//   //     if(response.status === 200){
//   //       setAllBusiness(response.data.data.business)
//   //     }
//   //   } catch (error) {
//   //     console.error("business fetching failed:", error);
//   //     toast.error("business fetching failed . Please try again.");
//   //   }

//   // }

//   // useEffect(()=>{
//   //   fetchAllBusinessDetails()
//   // },[])

//   useEffect(() => {
//   if (id && token) {
//     const fetchBusiness = async () => {
//      try {
//         console.log("single service details",token)
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/single-service-show/${id}`,
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//       console.log('single business', response);

//       if (response.status === 200) {
//         setFormValues(response.data.data)
//          const data = response.data.data;
//          setSelectedCategory(data?.business?.category)
//         formik.setValues({
//           businessName: data?.business?.name || "",
//         //   category: capitalizeFirstLetter(data?.business?.category || ""),
//           businessAddress: data?.business?.address || "",
//           city: data?.business?.city || "",
//           state: data?.business?.state || "",
//           pin: data?.business?.pincode || "",
//           languages: data?.business?.languagesSpoken || "",
//           travelAvailability: data?.business?.travelAvailability || "",
//           description: data?.service?.serviceInfo?.description || "",
//           availability: data?.serviceInfo?.availability || [],
//           images: data?.serviceInfo?.images || [],
//           deliveryTimeline: data?.service?.serviceInfo?.deliveryTimeline || "",
//           priceRange: data?.service?.serviceInfo?.priceRange || "",
//           portfolioDescription: data?.service?.portfolioData?.portfolioDescription || "",
//           portfolioLocation: data?.service?.portfolioData?.portfolioLocation || "",
//           portfolioEventType: data?.service?.portfolioData?.portfolioEventType || "",
//           portfolioTags: data?.service?.portfolioData?.portfolioTags || "",
//           openingHours: Array.isArray(data?.business?.openingHours) ? data.business.openingHours : [],
//         });

//       }
//     } catch (error) {
//       console.error("business fetching failed:", error);
//       toast.error("business fetching failed . Please try again.");
//     }

//     };

//     fetchBusiness();
//   }
// }, [id,token]);

//   const handleCategoryDataChange = useCallback((data) => {
//   setCategoryForms((prev) => ({
//     ...prev,
//     ...data,
//   }));
// }, [selectedCategory]);


//   const allWeekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//   const addNextDay = () => {
//     const addedDays = formik.values.openingHours.map((d) => d.day);
//     const nextDay = allWeekdays.find((d) => !addedDays.includes(d));
//     if (nextDay) {
//       formik.setFieldValue("openingHours", [
//         ...formik.values.openingHours,
//         { day: nextDay, isOpen: true, from: "", to: "" },
//       ]);
//     }
//   };

//   const toggleDay = (index) => {
//     const updated = [...formik.values.openingHours];
//     updated[index].isOpen = !updated[index].isOpen;
//     formik.setFieldValue("openingHours", updated);
//   };


//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//   };

//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = [];

//     for (const file of files) {
//       try {
//         const cloudinaryUrl = await uploadToCloudinary(file);

//         newImages.push({
//           file,                          // optional, for tracking
//           preview: URL.createObjectURL(file), // used for UI display
//           url: cloudinaryUrl             // uploaded Cloudinary URL
//         });
//       } catch (err) {
//         toast.error("Image upload failed.");
//       }
//     }

//     setImages((prev) => [...prev, ...newImages]); // For UI display
//     setUploadedImageUrls((prev) => [...prev, ...newImages.map(img => img.url)]); // Only URLs for backend
//   };


//   const removeImageServices = (index) => {
//     const updated = [...images];
//     updated.splice(index, 1);
//     setImages(updated);
//   };

//   const handleAccordionToggle = (id) => {
//     setopenAccordion(openAccordion === id ? null : id);
//   };

//   const fromInputRef = useRef(null);
//   const toInputRef = useRef(null);

//   const formatTime = (value) => {
//     const [hours, minutes] = value.split(":");
//     const h = parseInt(hours, 10);
//     const ampm = h >= 12 ? "PM" : "AM";
//     const formattedHour = h % 12 || 12;
//     return `${String(formattedHour).padStart(2, "0")}:${minutes} ${ampm}`;
//   };

//   // services
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [checkedItems, setCheckedItems] = useState([]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const images = files.map((file) => ({
//       url: URL.createObjectURL(file),
//       file,
//     }));
//     setSelectedFiles((prev) => [...prev, ...images]);
//   };

//   const removeImage = (index) => {
//     const updated = [...selectedFiles];
//     updated.splice(index, 1);
//     setSelectedFiles(updated);
//   };
//   const included = [
//     {
//       checkboxid: 1,
//       checkboxName: "Within City",
//     },
//     {
//       checkboxid: 2,
//       checkboxName: "Outside City",
//     },
//     {
//       checkboxid: 3,
//       checkboxName: "All over india",
//     },
//   ];

//   const handleCheckboxChange = (id) => {
//     setCheckedItems((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && inputValue.trim()) {
//       e.preventDefault();
//       if (!tags.includes(inputValue.trim())) {
//         setTags((prev) => [...prev, inputValue.trim()]);
//       }
//       setInputValue("");
//     }
//   };

//   const removeTag = (index) => {
//     setTags(tags.filter((_, i) => i !== index));
//   };

//   const saveAndPublish = () => {
//     console.log('categorySpecificData', categoryData);

//   }

//   const handleAddBusiness = async (e) => {
//     e.preventDefault()
//     const {
//       businessName,
//       businessAddress,
//       city,
//       state,
//       pin,
//       languages,
//       travelAvailability } = formik.values

//     const businessData = {
//       name: businessName,
//       address: businessAddress,
//       category:selectedCategory,
//       city,
//       state,
//       pincode: pin,
//       languagesSpoken: languages,
//       travelAvailability
//     };

//     console.log('businessData', businessData)

//     try {
//       const response = await axios.put(
//         `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-business/${id}`,
//         businessData,
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("businessAdded", response);

//       if (response.status === 200) {
//         toast.success("Business details updated successfully");
//         localStorage.setItem('addBusinessSubmitted', 'true')
//         setOpeningHoursButton(true)
//       }
//     } catch (error) {
//       console.error("Error adding business:", error);
//       toast.error("Failed to add business. Please try again.");
//     }

//   }
//   const handleAddService = async (e) => {
//     e.preventDefault()
//     const { description, availability, deliveryTimeline, priceRange} = formik.values
//     const serviceInfo = {
//       description, availability, deliveryTimeline, priceRange,
//       images: uploadedImageUrls,
//       ...categoryForms
//     }
//     // const portfolioInfo = {
//     //   portfolioTags, portfolioDescription, portfolioLocation, portfolioEventType
//     // }
//     console.log("service info", categoryForms)
//     // const formData = new FormData();
//     // formData.append("serviceInfo", JSON.stringify(serviceInfo));
//     // formData.append("portfolioInfo", JSON.stringify(portfolioInfo));

//     // images.forEach(({ file }) => {
//     //   formData.append("images", file);
//     // });
//     try {
//       const response = await axios.put(
//         `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-service`,
//         {serviceInfo,category:selectedCategory},
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         toast.success("Service info updated successfully!")
//         localStorage.setItem('isServiceSubmitted','true')
//         setPortFolioButton(true)
//         // setopenAccordion('services')
//       }
//     } catch (error) {
//       console.error("Error adding service info:", error);
//       toast.error("Failed to add service info. Please try again.");
//     }
//   }

//   const handleAddPortfolio = async(e)=>{
//     e.preventDefault()
//     const {portfolioTags, portfolioDescription, portfolioLocation, portfolioEventType } = formik.values
//     const portfolioInfo = {
//       portfolioTags, portfolioDescription, portfolioLocation, portfolioEventType
//     }

//     try {
//       const response = await axios.put(
//         `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-portfolio`,
//          {portfolioInfo,category:selectedCategory},
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         toast.success("Portfolio  info updated successfully!")
//         // setopenAccordion('services')
//       }
//     } catch (error) {
//       console.error("Error adding service info:", error);
//       toast.error("Failed to add service info. Please try again.");
//     }
//   }
//   const handleAddOpeningHours = async (e) => {
//     e.preventDefault()
//     const { openingHours } = formik.values
//     console.log("opening hours", openingHours)
//     try {
//       const response = await axios.put(
//         `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-opening-hours`,
//         { openingHours,category:selectedCategory },
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         toast.success("Opening hours updated successfully!")
//         localStorage.setItem('isOpeningHoursSubmitted','true')
//         setServiceButton(true)
//         setopenAccordion('services')
//       }
//     } catch (error) {
//       console.error("Error adding opening hours:", error);
//       toast.error("Failed to add opening hours. Please try again.");
//     }
//   }
//   const [isShowAddBusiness, setisShowAddBusiness] = useState(false);
//   console.log('update forms',formValues)

//   const prefilled = useMemo(() => {
//   return formValues?.service?.serviceInfo || {};
// }, [formValues?.service]);

//   return (
//     <div>
//       <Layouts>

//         {/* {!isShowAddBusiness && (
//           <div onClick={() => setisShowAddBusiness(true)} className="cursor-pointer px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-5 w-fit h-[50vh] flex items-center justify-center flex-col">
//             <Image
//               className="mx-auto mb-5"
//               width={50}
//               height={50}
//               src={"/images/plus.svg"}
//               alt="plus"
//             />

//             <button

//               className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]"
//             >
//               Add Your Business
//             </button>
//           </div>
//         )} */}

//         {/* <form onSubmit={formik.handleSubmit}> */}
//         <div className="w-full max-w-full px-5 4xl:px-[7rem] 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col py-8">
//           {/* add-business  */}
//           <button
//             onClick={() => handleAccordionToggle("add-business")} type="button"
//             className={`cursor-pointer flex items-center justify-between  mb-3 bg-[#ededed] px-6 py-2 4xl:py-4 rounded-md`}
//           >
//             <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
//               Update Business
//             </h3>
//             <Image
//               className={`${openAccordion === "add-business" ? "rotate-180" : ""
//                 } transition-all ease invert-[1]`}
//               width={18}
//               height={18}
//               src={"/images/downarrow.svg"}
//               alt="downarrow"
//             />
//           </button>
//           {/* content of add-business */}
//           {openAccordion === "add-business" && (
//             <div className="px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
//               <form onSubmit={handleAddBusiness}>
//                 <div className="space-y-[25px]">
//                   <div className="flex items-center w-full">
//                     <div className="flex flex-col w-full mr-[25px]">
//                       <label
//                         htmlFor="businessName"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Business name
//                       </label>
//                       <input
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
//                         placeholder="Enter your Name"
//                         type="text"
//                         value={formik.values.businessName}
//                         onChange={formik.handleChange}
//                         name="businessName"
//                         id="businessName"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full">
//                       <label
//                         htmlFor="businesscategory"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Business Category
//                       </label>
//                       <select
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                         disabled={formValues}
//                         name="businesscategory"
//                         id="businesscategory"
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                       >
//                         <option value="" disabled>
//                           Select Category
//                         </option>
//                         <option value="catering">Catering Services</option>
//                         <option value="venues">Venues</option>
//                         <option value="photography">Photography</option>
//                         <option value="bridalmakeup">Bridal Makeup</option>
//                         <option value="decorators">Decorators</option>
//                         <option value="wedding-planners">
//                           Wedding Planners
//                         </option>
//                         <option value="mehandi-artist">Mehandi Artist</option>
//                         <option value="dj">DJ&#39;s</option>
//                         <option value="pre-wedding-photographers">
//                           Pre Wedding Photographers
//                         </option>
//                         <option value="wedding-pandit">Wedding Pandit&#39;s</option>
//                         <option value="cake">Cake</option>
//                         <option value="bartenders">Bartenders</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="flex flex-col relative">
//                     <label
//                       htmlFor="businessAddress"
//                       className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                     >
//                       Business Address
//                     </label>

//                     <div className="relative">
//                       <textarea
//                         placeholder="Choose your location"
//                         value={formik.values.businessAddress}
//                         onChange={formik.handleChange}
//                         name="businessAddress"
//                         id="businessAddress"
//                         className="h-[72px] w-full rounded-[8px] outline-none bg-white px-[40px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3 resize-none"
//                       ></textarea>

//                       <Image
//                         className="absolute top-[14.5px] left-[18px] pointer-events-none"
//                         width={14}
//                         height={17}
//                         src="/images/add-business/locationicon.svg"
//                         alt="locationicon"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-[25px]">
//                     <div className="flex flex-col w-full">
//                       <label
//                         htmlFor="city"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         City
//                       </label>
//                       <input
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
//                         placeholder="Enter City"
//                         value={formik.values.city}
//                         onChange={formik.handleChange}
//                         type="text"
//                         name="city"
//                         id="city"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full">
//                       <label
//                         htmlFor="state"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         State
//                       </label>
//                       <select
//                         name="state"
//                         value={formik.values.state}
//                         onChange={formik.handleChange}
//                         id="state"
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                       > <option value="" disabled>
//                           Select State
//                         </option>
//                         {indianStates.map(state => (
//                           <option key={state.isoCode} value={state.name}>{state.name}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex flex-col w-full">
//                       <label
//                         htmlFor="pin"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Pin code
//                       </label>
//                       <input
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
//                         placeholder="Enter Pincode"
//                         value={formik.values.pin}
//                         onChange={formik.handleChange}
//                         type="text"
//                         name="pin"
//                         id="pin"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-between">
//                     {/* <div className="flex flex-col w-[40%]">
//                       <label
//                         htmlFor="languages"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Languages Spoken
//                       </label>
//                       <select
//                         value={formik.values.languages}
//                         onChange={formik.handleChange}
//                         name="languages"
//                         id="languages"
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                       >
//                         <option value="english">English</option>
//                         <option value="bengali">Bengali</option>
//                         <option value="hindi">Hindi</option>
//                         <option value="tamil">Tamil</option>
//                         <option value="telegu">Telegu</option>
//                       </select>
//                     </div> */}
//                     <div className="flex flex-col w-[40%]">
//                       <label
//                         htmlFor="languages"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Languages Spoken
//                       </label>

//                       <div className="flex flex-row gap-2">
//                         {["English", "Bengali", "Hindi", "Tamil", "Telugu"].map((lang) => (
//                           <label key={lang} className="flex items-center gap-2 text-[#525252] text-[14px] 3xl:text-[16px] font-medium">
//                             <input
//                               type="checkbox"
//                               name="languages"
//                               value={lang.toLowerCase()}
//                               checked={formik.values.languages.includes(lang.toLowerCase())}
//                               onChange={(e) => {
//                                 const { checked, value } = e.target;
//                                 const prev = formik.values.languages || [];
//                                 const updated = checked
//                                   ? [...prev, value]
//                                   : prev.filter((v) => v !== value);
//                                 formik.setFieldValue("languages", updated);
//                               }}
//                             />
//                             {lang}
//                           </label>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex items-center w-[60%] pt-[40px] ml-14">
//                       <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-4">
//                         Travel availability:
//                       </p>

//                       <div className="mr-4 flex items-center">
//                         <input
//                           className="accent-[#EA0056] size-5"
//                           type="radio"
//                           name="travelAvailability"
//                           id="withincity"
//                           value="withincity"
//                           checked={formik.values.travelAvailability === "withincity"}
//                           onChange={formik.handleChange}
//                         />
//                         <label
//                           htmlFor="withincity"
//                           className="text-black font-normal text-[14px] ml-2"
//                         >
//                           Within City
//                         </label>
//                       </div>
//                       <div className="flex items-center">
//                         <input
//                           className="accent-[#EA0056] size-5"
//                           type="radio"
//                           name="travelAvailability"
//                           id="outsidecity"
//                           value="outsidecity"
//                           checked={formik.values.travelAvailability === "outsidecity"}
//                           onChange={formik.handleChange}
//                         />
//                         <label
//                           htmlFor="outsidecity"
//                           className="text-black font-normal text-[14px] ml-2"
//                         >
//                           Outside City
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4 flex  items-end">
//                     <button type="submit" className={`bg-[#EA0056] ml-auto table text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]`}>
//                       Save & Change
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* opening hours  */}
//           <button
//             onClick={() => handleAccordionToggle("opening-hours")}
//             className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md`}
//           >
//             <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
//               Update Opening Hours
//             </h3>
//             <Image
//               className={`${openAccordion === "opening-hours" ? "rotate-180" : ""
//                 } transition-all ease invert-[1]`}
//               width={18}
//               height={18}
//               src={"/images/downarrow.svg"}
//               alt="downarrow"
//             />
//           </button>
//           {/* opening hours content  */}
//           {/* {openAccordion === "opening-hours" && (
//               <div className="px-[28px] py-5 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3 w-fit">
//                     <div
//                       onClick={() => setIsToggled(!isToggled)}
//                       className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isToggled ? "bg-[#EA0056]" : "bg-gray-300"
//                         }`}
//                     >
//                       <div
//                         className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? "translate-x-[20px]" : "translate-x-0"
//                           } `}
//                       ></div>
//                     </div>
//                     <p className="text-black font-medium text-[16px]">Monday</p>
//                   </div>
//                   <div className="flex w-[70%] mx-auto">
//                     <div className="relative w-full mr-4">
//                       <div className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full">
//                         <span className="text-[#525252] text-[14px] font-medium">
//                           From
//                         </span>
//                         <span
//                           className="text-[#525252] text-[14px] font-medium cursor-pointer"
//                           onClick={() => fromInputRef.current?.showPicker()}
//                         >
//                           {formatTime(fromTime)}
//                         </span>
//                       </div>
//                       <input
//                         ref={fromInputRef}
//                         type="time"
//                         value={fromTime}
//                         onChange={(e) => setFromTime(e.target.value)}
//                         className="absolute opacity-0 pointer-events-none"
//                       />
//                     </div>

//                     <div className="relative w-full">
//                       <div className="flex items-center justify-between w-full h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px]">
//                         <span className="text-[#525252] text-[14px] font-medium">
//                           To
//                         </span>
//                         <span
//                           className="text-[#525252] text-[14px] font-medium cursor-pointer"
//                           onClick={() => toInputRef.current?.showPicker()}
//                         >
//                           {formatTime(toTime)}
//                         </span>
//                       </div>
//                       <input
//                         ref={toInputRef}
//                         type="time"
//                         value={toTime}
//                         onChange={(e) => setToTime(e.target.value)}
//                         className="absolute opacity-0 pointer-events-none"
//                       />
//                     </div>
//                   </div>
//                   <button className="font-normal text-[14px] text-[#EA0056] flex items-center">
//                     Add fields
//                     <Image
//                       className="ml-3"
//                       width={12}
//                       height={12}
//                       src={"/images/add-business/plusicontheme.svg"}
//                       alt="plusicontheme"
//                     />
//                   </button>
//                 </div>
//               </div>
//             )} */}

//           {openAccordion === "opening-hours" && (
//             <div className="px-[28px] py-5 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
//               <form onSubmit={handleAddOpeningHours}>
//                 {formik.values.openingHours.map((entry, index) => (
//                   <div key={entry.day}>
//                     <div className="flex items-center justify-between  mb-[20px]">
//                       {/* Toggle + Day Label */}
//                       <div className="flex items-center gap-3 w-fit">
//                         <div
//                           onClick={() => toggleDay(index)}
//                           className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${entry.isOpen ? "bg-[#EA0056]" : "bg-gray-300"
//                             }`}
//                         >
//                           <div
//                             className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${entry.isOpen ? "translate-x-[20px]" : "translate-x-0"
//                               }`}
//                           ></div>
//                         </div>
//                         <p className="text-black font-medium text-[16px]">{entry.day}</p>
//                       </div>

//                       {/* Time Inputs */}
//                       <div className="flex  w-[70%]">
//                         {/* From */}
//                         <div className="relative w-full mr-4">
//                           <div
//                             className="flex items-center justify-between  h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full"
//                             onClick={() =>
//                               entry.isOpen && document.getElementById(`${entry.day}-from-${index}`)?.showPicker()
//                             }
//                           >
//                             <span className="text-[#525252] text-[14px] font-medium">From</span>
//                             <span className="text-[#525252] text-[14px] font-medium cursor-pointer">
//                               {entry.from || "Select"}
//                             </span>
//                           </div>
//                           <input
//                             id={`${entry.day}-from-${index}`}
//                             type="time"
//                             name={`openingHours[${index}].from`}
//                             value={entry.from}
//                             onChange={formik.handleChange}
//                             disabled={!entry.isOpen}
//                             className="absolute opacity-0 pointer-events-none"
//                           />
//                         </div>

//                         {/* To */}
//                         <div className="relative w-full">
//                           <div
//                             className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full"
//                             onClick={() =>
//                               entry.isOpen && document.getElementById(`${entry.day}-to-${index}`)?.showPicker()
//                             }
//                           >
//                             <span className="text-[#525252] text-[14px] font-medium">To</span>
//                             <span className="text-[#525252] text-[14px] font-medium cursor-pointer">
//                               {entry.to || "Select"}
//                             </span>
//                           </div>
//                           <input
//                             id={`${entry.day}-to-${index}`}
//                             type="time"
//                             name={`openingHours[${index}].to`}
//                             value={entry.to}
//                             onChange={formik.handleChange}
//                             disabled={!entry.isOpen}
//                             className="absolute opacity-0 pointer-events-none"
//                           />
//                         </div>
//                       </div>

//                       {/* Add Fields Button (only on last item) */}
//                       {/* {index === formik.values.openingHours.length - 1 &&
//                       formik.values.openingHours.length < 7 && (
//                         <button
//                           type="button"
//                           onClick={addNextDay}
//                           className="font-normal text-[14px] text-[#EA0056] flex items-center ml-4"
//                         >
//                           Add fields
//                           <Image
//                             className="ml-3"
//                             width={12}
//                             height={12}
//                             src="/images/add-business/plusicontheme.svg"
//                             alt="plusicontheme"
//                           />
//                         </button>
//                       )} */}
//                     </div>
//                     {index === formik.values.openingHours.length - 1 &&
//                       formik.values.openingHours.length < 7 && (
//                         <button
//                           type="button"
//                           onClick={addNextDay}
//                           className="font-normal text-[14px] text-[#EA0056] flex items-center ml-auto mr-0 cursor-pointer"
//                         >
//                           Add fields
//                           <Image
//                             className="ml-3"
//                             width={12}
//                             height={12}
//                             src="/images/add-business/plusicontheme.svg"
//                             alt="plusicontheme"
//                           />
//                         </button>
//                       )}
//                   </div>
//                 ))}
//                 <div className="pt-4">

//                     <button
//                       className="bg-[#EA0056] ml-auto cursor-pointer table text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]"
//                     >
//                       Save & Change
//                     </button>
//                 </div>
//               </form>
//             </div>
//           )}



//           {/* services  */}
//           <div>
//             <button
//               onClick={() => handleAccordionToggle("services")} type="button"
//               className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md w-full`}
//             >
//               <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
//                  Update Services
//               </h3>
//               <Image
//                 className={`${openAccordion === "services" ? "rotate-180" : ""
//                   } transition-all ease invert-[1]`}
//                 width={18}
//                 height={18}
//                 src={"/images/downarrow.svg"}
//                 alt="downarrow"
//               />
//             </button>
//             {/* services content  */}
//             {openAccordion === "services" && (
//               <div>
//                 <form onSubmit={handleAddService}>
//                 <div className="space-y-[25px] bg-[#F2F2F2] px-[30px] 3xl:px-[60px] py-9 rounded-[10px] mb-[24px]">
//                   {/* //business category  */}
//                   <div className="flex items-center w-full">
//                     {/* <div className="flex flex-col w-full mr-[25px]">
//                         <label
//                           htmlFor="businesscategory"
//                           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                         >
//                           Business Category
//                         </label>
//                         <select
//                           name="businesscategory"
//                           id="businesscategory"
//                           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                         >
//                           <option value="volvo">Volvo</option>
//                           <option value="volvo">Business Category</option>
//                           <option value="saab">Saab</option>
//                           <option value="mercedes">Mercedes</option>
//                           <option value="audi">Audi</option>
//                         </select>
//                       </div> */}
//                     <div className="flex flex-col w-full">
//                         <label
//                           htmlFor="businesscategory"
//                           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                         >
//                           Business Category
//                         </label>
//                         {/* <select
//                           value={selectedCategory}
//                           onChange={handleCategoryChange}
//                           name="businesscategory"
//                           id="businesscategory"
//                           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[20px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                         >
//                           <option value="" disabled>
//                             Select Category
//                           </option>
//                           <option value="catering">Catering Services</option>
//                           <option value="venues">Venues</option>
//                           <option value="photography">Photography</option>
//                           <option value="bridalmakeup">Bridal Makeup</option>
//                           <option value="decorators">Decorators</option>
//                           <option value="wedding-planners">
//                             Wedding Planners
//                           </option>
//                           <option value="mehandi-artist">Mehandi Artist</option>
//                           <option value="dj">Dj&apos;s</option>
//                           <option value="pre-wedding-photographers">
//                             Pre Wedding Photographers
//                           </option>
//                           <option value="wedding-pandit">Wedding Pandit&apos;s</option>
//                           <option value="cake">Cake</option>
//                           <option value="bartenders">Bartenders</option>
//                         </select> */}
//                         <input
//                           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
//                           value={selectedCategory}
//                           disabled
//                           name="businessCategory"
//                           id="businessCategory"
//                         />
//                       </div>
//                     <div className="flex flex-col w-full ml-4">
//                       <label
//                         htmlFor="businessname"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Business Name
//                       </label>
//                       <input
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
//                         type="text"
//                         value={formik.values.businessName}
//                         disabled
//                         name="businessname"
//                         id="businessname"
//                       />
//                     </div>
//                   </div>
//                   {/* whats included */}
//                   <div className="flex flex-col w-full mr-[25px]">
//                     <label
//                       htmlFor="description"
//                       className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                     >
//                       What&apos;s Included
//                     </label>
//                     <textarea
//                       value={formik.values.description}
//                       onChange={formik.handleChange}
//                       name="description"
//                       className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
//                       placeholder="Add your description"
//                     ></textarea>
//                   </div>
//                   {/* availability */}
//                   {/* <div className="flex items-center">
//                     <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-3">
//                       Availability:
//                     </p>
//                     <div className="flex items-center space-x-5">
//                       {included.map((item) => (
//                         <div
//                           key={item.checkboxid}
//                           className="flex items-center"
//                         >
//                           <input
//                             className="accent-[#EA0056] size-3.5 4xl:size-5"
//                             type="checkbox"
//                             name="availability"
//                             value={formik.values.availability}

//                             id={`checkbox-${item.checkboxid}`}
//                             checked={checkedItems.includes(item.checkboxid)}
//                             onChange={() =>{
//                               formik.handleChange;
//                               handleCheckboxChange(item.checkboxid)}
//                             }
//                           />
//                           <label
//                             htmlFor={`checkbox-${item.checkboxid}`}
//                             className="text-black font-normal text-[14px] ml-2"
//                           >
//                             {item.checkboxName}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div> */}
//                   <div className="flex items-center">
//                     <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-3">
//                       Availability:
//                     </p>
//                     <div className="flex items-center space-x-5">
//                       {included.map((item) => (
//                         <div key={item.checkboxid} className="flex items-center">
//                           <input
//                             className="accent-[#EA0056] size-3.5 4xl:size-5"
//                             type="radio"
//                             name="availability"  // all radios share the same name
//                             id={`radio-${item.checkboxid}`}
//                             value={item.checkboxName}
//                             checked={formik.values.availability === item.checkboxid}
//                             onChange={() => formik.setFieldValue("availability", item.checkboxid)}
//                           />
//                           <label
//                             htmlFor={`radio-${item.checkboxid}`}
//                             className="text-black font-normal text-[14px] ml-2"
//                           >
//                             {item.checkboxName}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Upload Box */}
//                   <div className="flex items-center">
//                     <div className="relative w-[118px] h-[106px] mr-[25px]">
//                       <label
//                         htmlFor="file"
//                         className="cursor-pointer w-full h-full rounded-[8px] bg-white flex flex-col items-center justify-center border border-[#ededed]"
//                       >
//                         <Image
//                           className="mx-auto"
//                           width={20}
//                           height={17}
//                           src="/images/services/uploadimage.svg"
//                           alt="uploadimage"
//                         />
//                         <p className="text-[#505050] font-normal text-[14px] mt-2">
//                           Upload Image
//                         </p>
//                       </label>
//                       <input
//                         type="file"
//                         id="file"
//                         name="file"
//                         multiple
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         className="absolute inset-0 size-full opacity-0 cursor-pointer"
//                       />
//                     </div>

//                     {/* Preview Thumbnails */}
//                     <div className="flex gap-2 mt-4 flex-wrap">
//                       {images.map((img, index) => (
//                         <div key={index} className="w-[77px] h-[67px] relative">
//                           <Image
//                             className="size-full object-contain rounded-lg"
//                             width={100}
//                             height={100}
//                             src={img.url}
//                             alt={`upload-${index}`}
//                           />
//                           <span
//                             onClick={() => removeImageServices(index)}
//                             className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
//                           >
//                             x
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex items-center w-full">
//                     <div className="flex flex-col w-full mr-[25px]">
//                       <label
//                         htmlFor="deliveryTimeline"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Delivery timeline
//                       </label>
//                       <select
//                         name="deliveryTimeline"
//                         value={formik.values.deliveryTimeline}
//                         onChange={formik.handleChange}
//                         id="deliveryTimeline"
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                       >
//                         <option value="" disabled>Select Delivery Timeline</option>
//                         <option value="2 weeks">Within 2 weeks</option>
//                         <option value="3 weeks">Within 3 weeks</option>
//                         <option value="4 weeks">Within 4 weeks</option>
//                         <option value="5 weeks">Within 5 weeks</option>
//                       </select>
//                     </div>
//                     <div className="flex flex-col w-full mr-[25px]">
//                       <label
//                         htmlFor="priceRange"
//                         className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                       >
//                         Price Range
//                       </label>
//                       <select
//                         name="priceRange"
//                         value={formik.values.priceRange}
//                         onChange={formik.handleChange}
//                         id="priceRange"
//                         className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                       >
//                         <option value="" disabled>Select Price Range</option>
//                         <option value="full refund">Full Refund</option>
//                         <option value="within 3 weeks">Within 3 weeks</option>
//                         <option value="within 4 weeks">Within 4 weeks</option>
//                         <option value="within 5 weeks">Within 5 weeks</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* show category based on selected category from add business  */}
//                   {/* catering services  */}
//                   <div>
//                     {selectedCategory.length !== 0 && (
//                       <h3 className="py-3 w-full text-black bg-[#ddddddee] px-4 mb-6 rounded-sm">
//                         {selectedCategory}
//                       </h3>
//                     )}

//                     {/* catering  */}
//                     <div className="space-y-[25px]">
//                       {selectedCategory === "catering" && <Catering />}
//                       {selectedCategory === "venues" && <Venue />}
//                       {selectedCategory === "photography" && (
//                         <PhotographerForm prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
//                           onDataChange={handleCategoryDataChange} />
//                       )}
//                       {selectedCategory === "bridalmakeup" && <BridalMakeup  prefilledValues={prefilled} defaultValues={categoryForms["bridalmakeup"] || {}} onDataChange={handleCategoryDataChange} />}
//                       {selectedCategory === "decorators" && <Decorators prefilledValues={prefilled} defaultValues={categoryForms["bridalmakeup"] || {}} onDataChange={handleCategoryDataChange} />}
//                       {selectedCategory === "wedding-planners" && (
//                         <WeddingPlannerForm />
//                       )}
//                       {selectedCategory === "mehandi-artist" && (
//                         <MehendiArtist />
//                       )}
//                       {selectedCategory === "dj" && <DJForm />}
//                       {selectedCategory === "pre-wedding-photographers" && (
//                         <PreWeddingPhotographersForm />
//                       )}
//                       {selectedCategory === "wedding-pandit" && (
//                         <WeddingPandit />
//                       )}
//                       {selectedCategory === "cake" && <Cake />}
//                       {selectedCategory === "bartenders" && <Bartenders />}
//                     </div>
//                     <div className="pt-4">
//                      <button
//                         className="bg-[#EA0056] ml-auto cursor-pointer table text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]"
//                       >
//                         Save & Change
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 </form>
//               </div>
//             )}

//             {/* upload portfolio  */}
//             <button
//               onClick={() => handleAccordionToggle("upload-portfolio")} type="button"
//               className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md w-full`}
//             >
//               <h3 className="font-semibold text-[#303030] text-[20px] 3xl:text-[25px] 4xl:text-[28px]">
//                 Update Portfolio
//               </h3>
//               <Image
//                 className={`${openAccordion === "upload-portfolio" ? "rotate-180" : ""
//                   } transition-all ease invert-[1]`}
//                 width={18}
//                 height={18}
//                 src={"/images/downarrow.svg"}
//                 alt="downarrow"
//               />
//             </button>
//             {/* portfolio content  */}
//             {openAccordion === "upload-portfolio" && (
//               <form onSubmit={handleAddPortfolio}>
//               <div className="space-y-[25px] bg-[#F2F2F2] px-[30px] py-6 rounded-[10px] mb-[20px]">
//                 {/* file upload  */}
//                 <div>
//                   <div className="bg-white rounded-[8px] py-6 relative">
//                     <label className="absolute inset-0 cursor-pointer">
//                       <input
//                         className="hidden"
//                         type="file"
//                         name="file"
//                         id="file"
//                         multiple
//                         accept="image/*"
//                         onChange={handleFileChange}
//                       />
//                     </label>

//                     <Image
//                       className="mx-auto"
//                       width={20}
//                       height={20}
//                       src={"/images/services/servicesIcon.svg"}
//                       alt="servicesIcon"
//                     />

//                     <p className="text-[#505050] font-medium text-[14px] text-center my-1.5">
//                       Drag & drop files here, or click to select files
//                     </p>
//                     <p className="text-[#787878] font-normal text-[12px] text-center">
//                       Supported File Types: .jpg, .png
//                     </p>
//                   </div>
//                   {/* Preview Thumbnails */}
//                   <div className="flex flex-wrap gap-2 mt-3">
//                     {selectedFiles.map((img, index) => (
//                       <div key={index} className="w-[77px] h-[67px] relative">
//                         <Image
//                           className="size-full object-contain rounded-lg"
//                           width={100}
//                           height={100}
//                           src={img.url}
//                           alt={`upload-${index}`}
//                         />
//                         <span
//                           onClick={() => removeImage(index)}
//                           className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
//                         >
//                           x
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {/* tags  */}
//                 <div>
//                   <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//                     Tags
//                   </p>
//                   <div className="rounded-[18px] bg-white py-4 px-4">
//                     <ul className="flex items-center flex-wrap gap-3">
//                       {tags.map((tag, index) => (
//                         <li
//                           key={index}
//                           className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]"
//                         >
//                           <span>{tag}</span>
//                           <button
//                             className="cursor-pointer grid place-items-center size-[21px] bg-[#E5E5E5] rounded-full"
//                             onClick={() => removeTag(index)}
//                           >
//                             <Image
//                               width={7}
//                               height={7}
//                               src={"/images/services/crossIcon.svg"}
//                               alt="crossIcon"
//                             />
//                           </button>
//                         </li>
//                       ))}
//                       <li className="flex items-center">
//                         <input
//                           type="text"
//                           name="portfolioTags"
//                           className="outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4"
//                           placeholder="Type & press Enter"
//                           value={formik.values.portfolioTags}
//                           onChange={(e) => { setInputValue(e.target.value), formik.handleChange(e) }}
//                           onKeyDown={handleKeyDown}
//                         />
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* event type & location  */}
//                 <div className="flex items-center w-full">
//                   <div className="flex flex-col w-full mr-[25px]">
//                     <label
//                       htmlFor="portfolioEventType"
//                       className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                     >
//                       Event Type
//                     </label>
//                     <select
//                       name="portfolioEventType"
//                       id="portfolioEventType"
//                       value={formik.values.portfolioEventType}
//                       onChange={formik.handleChange}
//                       className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
//                     >
//                       <option value="engagement">Engagement</option>
//                       <option value="saab">Love</option>
//                       <option value="mercedes">Mercedes</option>
//                       <option value="audi">Audi</option>
//                     </select>
//                   </div>
//                   <div className="flex flex-col w-full">
//                     <label
//                       htmlFor="portfolioLocation"
//                       className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                     >
//                       Location
//                     </label>
//                     <div className="relative">
//                       <input
//                         className="w-full h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[25px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
//                         placeholder="Enter location"
//                         type="text"
//                         name="portfolioLocation"
//                         value={formik.values.portfolioLocation}
//                         onChange={formik.handleChange}
//                         id="portfolioLocation"
//                       />
//                       <Image
//                         className="absolute top-1/2 left-2 -translate-y-1/2"
//                         width={12}
//                         height={14}
//                         src={"/images/location.svg"}
//                         alt="location"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* description  */}
//                 <div className="flex flex-col w-full mr-[25px]">
//                   <label
//                     htmlFor="portfolioDescription"
//                     className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//                   >
//                     Description
//                   </label>
//                   <textarea
//                     name="portfolioDescription"
//                     value={formik.values.portfolioDescription}
//                     onChange={formik.handleChange}
//                     className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
//                     placeholder="Write your short description"
//                   ></textarea>
//                 </div>
//                  <div className="flex items-center mt-2 justify-end">
//                    <button type="submit" className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
//                      Save & Publish
//                   </button>
//             </div>
//               </div>
//               </form>
//             )}

//             {/* <div className="flex items-center mt-2 justify-end">
//               <button type="submit" className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
//                 Save & Publish
//               </button>
//             </div> */}
//           </div>

//         </div>
//         {/* </form> */}
//       </Layouts>
//     </div>
//   );
// };

// export default UpdateBusiness;







"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Venue from "@/components/business-categories/Venue";
import Catering from "@/components/business-categories/Catering";
import PhotographerForm from "@/components/business-categories/Photography";
import BridalMakeup from "@/components/business-categories/BridalMakeup";
import Decorators from "@/components/business-categories/Decorators";
import WeddingPlannerForm from "@/components/business-categories/WeddingPlannerForm";
import MehendiArtist from "@/components/business-categories/MehandiArtist";
import DJForm from "@/components/business-categories/Dj";
import PreWeddingPhotographersForm from "@/components/business-categories/PreWeddingPhotographersForm";
import WeddingPandit from "@/components/business-categories/WeddingPandit";
import Cake from "@/components/business-categories/Cake";
import Bartenders from "@/components/business-categories/Bartenders";
import { categoryFieldKeys } from "@/components/business-categories/CategoryFieldValues";
import { useFormik } from "formik";
import { values } from "lodash";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { State } from "country-state-city";
import ProcessBarMyBusiness from "@/components/widgets/ProcessBarMyBusinsess";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from 'yup'
import _ from "lodash";




const UpdateBusiness = () => {
  const searchParams = useSearchParams();
  const indianStates = State.getStatesOfCountry("IN"); // Returns array of state objects
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [categoryForms, setCategoryForms] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryData, setCategoryData] = useState({});
  const [isToggled, setIsToggled] = useState(false);
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("18:00");
  const [openAccordion, setopenAccordion] = useState("add-business");
  const [images, setImages] = useState([]);
  const [formValues, setFormValues] = useState({})
  const [uploadedImageUrls, setUploadedImageUrls] = useState([])
  const [allBusiness, setAllBusiness] = useState([])
  const id = searchParams.get('id');
  // const token = useSelector((state) => state.auth.accessToken);
  const [openingHoursButton, setOpeningHoursButton] = useState(false)
  const [serviceButton, setServiceButton] = useState(false)
  const [portfolioButton, setPortFolioButton] = useState(false)
  const addBusinessRef = useRef(null)
  const openingHoursRef = useRef(null)
  const serviceRef = useRef(null)
  const portFolioRef = useRef(null)
  const [totalInputs, setTotalInputs] = useState(6);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryUploadProgress, setGalleryUploadProgress] = useState([]);
  const [categoryFilledCounts, setCategoryFilledCounts] = useState({});
  const [categoryTotalCount, setCategoryTotalCount] = useState({})
  const [uploadingFiles, setUploadingFiles] = useState(false)
  const [portfolios, setPortfolios] = useState([]) // Store all portfolios
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0) // Track current portfolio
  const router = useRouter()

  const removeExtraSpace = (s) => {
    var rSpase = s.replace(/\s{2,}/g, " ");
    return _.trimStart(rSpase);
  };

  // Portfolio navigation functions
  const switchToPortfolio = (index) => {
    if (index >= 0 && index < portfolios.length) {
      // Save current portfolio changes first
      saveCurrentPortfolioChanges();

      const portfolio = portfolios[index];
      setCurrentPortfolioIndex(index);

      // Update form with selected portfolio data
      formik.setValues({
        ...formik.values,
        portfolioDescription: portfolio?.portfolioDescription || "",
        portfolioLocation: portfolio?.portfolioLocation || "",
        portfolioEventType: portfolio?.portfolioEventType || "",
        portfolioTags: portfolio?.portfolioTags || [],
        portfolioFiles: portfolio?.portfolioFiles || [],
      });

      // Update selected files for preview
      if (portfolio?.portfolioFiles?.length > 0) {
        const existingFiles = portfolio.portfolioFiles.map((fileObj, index) => ({
          id: `existing-${index}`,
          isExisting: true,
          url: fileObj.url,
          cloudinaryUrl: fileObj.url,
          name: fileObj.originalName || fileObj.url.split('/').pop() || `file-${index}`,
          type: fileObj.fileType === 'image' ? 'image' : 'document',
          file: null,
          size: fileObj.size || 0
        }));
        setSelectedFiles(existingFiles);
      } else {
        setSelectedFiles([]);
      }
    }
  };

  const saveCurrentPortfolioChanges = () => {
    if (portfolios.length > 0 && currentPortfolioIndex < portfolios.length) {
      const updatedPortfolios = [...portfolios];
      updatedPortfolios[currentPortfolioIndex] = {
        ...updatedPortfolios[currentPortfolioIndex],
        portfolioDescription: formik.values.portfolioDescription,
        portfolioLocation: formik.values.portfolioLocation,
        portfolioEventType: formik.values.portfolioEventType,
        portfolioTags: formik.values.portfolioTags,
        portfolioFiles: formik.values.portfolioFiles,
      };
      setPortfolios(updatedPortfolios);
    }
  };

  const goToPreviousPortfolio = () => {
    if (currentPortfolioIndex > 0) {
      switchToPortfolio(currentPortfolioIndex - 1);
    }
  };

  const goToNextPortfolio = () => {
    if (currentPortfolioIndex < portfolios.length - 1) {
      switchToPortfolio(currentPortfolioIndex + 1);
    }
  };

  const addNewPortfolio = () => {
    const newPortfolio = {
      portfolioDescription: "",
      portfolioLocation: "",
      portfolioEventType: "",
      portfolioTags: [],
      portfolioFiles: [],
    };

    const updatedPortfolios = [...portfolios, newPortfolio];
    setPortfolios(updatedPortfolios);

    // Switch to the new portfolio
    setCurrentPortfolioIndex(updatedPortfolios.length - 1);

    // Clear form for new portfolio
    formik.setValues({
      ...formik.values,
      portfolioDescription: "",
      portfolioLocation: "",
      portfolioEventType: "",
      portfolioTags: [],
      portfolioFiles: [],
    });

    // Clear selected files
    setSelectedFiles([]);
  };

  const removeCurrentPortfolio = async () => {
    if (portfolios.length <= 1) {
      alert("You must have at least one portfolio.");
      return;
    }

    const currentPortfolio = portfolios[currentPortfolioIndex];
    const portfolioId = currentPortfolio?._id || currentPortfolio?.id;

    // Only make API call if portfolio has an ID (exists in backend)
    if (portfolioId) {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/portfolios/${portfolioId}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          toast.success("Portfolio deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting portfolio:", error);
        toast.error("Failed to delete portfolio. Please try again.",{
          toastId: 'delete-portfolio-error'
        });
        return; // Stop execution if API call fails
      }
    }

    // Remove from local state
    const updatedPortfolios = portfolios.filter((_, index) => index !== currentPortfolioIndex);
    setPortfolios(updatedPortfolios);

    // Adjust current index
    const newIndex = currentPortfolioIndex > 0 ? currentPortfolioIndex - 1 : 0;
    setCurrentPortfolioIndex(newIndex);

    // Load the portfolio data
    if (updatedPortfolios.length > 0) {
      const portfolio = updatedPortfolios[newIndex];
      formik.setValues({
        ...formik.values,
        portfolioDescription: portfolio?.portfolioDescription || "",
        portfolioLocation: portfolio?.portfolioLocation || "",
        portfolioEventType: portfolio?.portfolioEventType || "",
        portfolioTags: portfolio?.portfolioTags || [],
        portfolioFiles: portfolio?.portfolioFiles || [],
      });

      // Update selected files for preview
      if (portfolio?.portfolioFiles?.length > 0) {
        const existingFiles = portfolio.portfolioFiles.map((fileObj, index) => ({
          id: `existing-${index}`,
          isExisting: true,
          url: fileObj.url || fileObj,
          cloudinaryUrl: fileObj.url || fileObj,
          name: fileObj.originalName || fileObj.url?.split('/').pop() || `file-${index}`,
          type: fileObj.fileType === 'image' ? 'image' : 'document',
          file: null,
          size: fileObj.size || 0
        }));
        setSelectedFiles(existingFiles);
      } else {
        setSelectedFiles([]);
      }
    }
  };

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"
    ];
    if (e.key === " ") {
      e.preventDefault();
    }
    if (!/^[0-9+]$/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
    if (e.key === "+") {
      if (e.target.value.includes("+") || e.target.selectionStart !== 0) {
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    const isAddBusinessSubmitted = localStorage.getItem('addBusinessSubmitted');
    const isOpeningHoursSubmitted = localStorage.getItem('isOpeningHoursSubmitted')
    const isServiceSubmitted = localStorage.getItem('isServiceSubmitted')
    if (isAddBusinessSubmitted) {
      setOpeningHoursButton(true)
    }
    if (isOpeningHoursSubmitted) {
      setServiceButton(true)
    }
    if (isServiceSubmitted) {
      setPortFolioButton(true)
    }
  }, [])

  const openingHourSchema = Yup.object().shape({
    day: Yup.string().required("Day is required"),
    isOpen: Yup.boolean(),
    from: Yup.string().when("isOpen", {
      is: true,
      then: (schema) =>
        schema.required("From time is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    to: Yup.string().when("isOpen", {
      is: true,
      then: (schema) =>
        schema
          .required("To time is required")
          .test("is-after", "To time must be after From time", function (value) {
            const { from } = this.parent;
            if (!from || !value) return true;
            return value > from;
          })
          .test("not-equal", "From and To times cannot be the same", function (value) {
            const { from } = this.parent;
            return from !== value;
          }),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const validationSchema = Yup.object({
    businessName: Yup.string()
      .min(3, "Business name must be at least 3 characters")
      .required("Business name is required"),
    category: Yup.string().required("Please select business category"),
    businessAddress: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("Please select State"),
    pin: Yup.string()
      .matches(/^\d{6}$/, "Pin must be exactly 6 digits")
      .required("Pin is required"),
    languages: Yup.string(),
    travelAvailability: Yup.string(),
    description: Yup.string(),
    availability: Yup.array(),
    images: Yup.array(),
    deliveryTimeline: Yup.string(),
    priceRange: Yup.string(),
    portfolioFiles: Yup.array()
      .min(1, "At least one file is required"),

    portfolioDescription: Yup.string().required('Portfolio description is required'),
    portfolioLocation: Yup.string().required("Location is required"),
    portfolioEventType: Yup.string().required("Please select event type"),
    portfolioTags: Yup.array()
      .of(
        Yup.string()
          .trim()
          .min(1, "Tags cannot be empty")
      )
      .min(1, "At least one tag is required"),
    openingHours: Yup.array().of(openingHourSchema),
    alallGalleryFiles: Yup.array()
      .min(1, "Please upload at least one gallery file")
      .max(10, "You can upload up to 10 files only")
  });

  console.log("selectedCategory", selectedCategory);

  const formik = useFormik({
    initialValues: {
      businessName: "",
      category: "",
      businessAddress: "",
      city: "",
      state: "",
      pin: "",
      languages: "",
      travelAvailability: "",
      description: "",
      availability: [],
      images: [],
      deliveryTimeline: "",
      priceRange: "",
      portfolioFiles: [],
      portfolioDescription: "",
      portfolioLocation: "",
      portfolioEventType: "",
      portfolioTags: "",
      openingHours: [
        { day: "Monday", isOpen: true, from: "", to: "" }
      ],
      allGalleryFiles: []
    },
    validationSchema,
    // onSubmit: async (values) => {
    //   const payload = {
    //     vendorDetails: {
    //       businessName: values.businessName,
    //       category: selectedCategory,
    //       address: values.businessAddress,
    //       city: values.city,
    //       state: values.state,
    //       pin: values.pin,
    //       languages: values.languages,
    //       travelAvailability: values.travelAvailability,
    //     },
    //     serviceInfo: {
    //       description: values.description,
    //       availability: values.availability,
    //       images: values.images,
    //       deliveryTimeline: values.deliveryTimeline,
    //       priceRange: values.priceRange,
    //     },
    //     categorySpecificData: categoryData,
    //     portfolioInfo: {
    //       portfolioTags: values.portfolioTags,
    //       portfolioDescription: values.portfolioDescription,
    //       portfolioLocation: values.portfolioLocation,
    //       portfolioEventType: values.portfolioEventType,

    //     },
    //     openingHours: values.openingHours
    //   };

    // console.log("Final Payload:", payload);
    // await axios.post('/api/vendors', payload);
    // },
  });

  // const fetchAllBusinessDetails = async()=>{
  //   try {
  //     const response = await axios.get(`${NEXT_PUBLIC_API_URL_SYSTEM}/vendors/my-businesses`,
  //     {
  //         withCredentials: true,
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       })
  //     console.log('all business',response);

  //     if(response.status === 200){
  //       setAllBusiness(response.data.data.business)
  //     }
  //   } catch (error) {
  //     console.error("business fetching failed:", error);
  //     toast.error("business fetching failed . Please try again.");
  //   }

  // }

  // useEffect(()=>{
  //   fetchAllBusinessDetails()
  // },[])
  console.log('categoryfilledcount', categoryFilledCounts);

  useEffect(() => {
    if (id && accessToken) {
      const fetchBusiness = async () => {
        try {
          console.log("single service details", accessToken)
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/single-service-show/${id}`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
          console.log('single business', response);

          if (response.status === 200) {
            setFormValues(response.data.data)
            const data = response.data.data;
            console.log('all business dataaaaaaa', data);
            // const galleryImageUrls = data?.business?.images || []
            setSelectedCategory(data?.business?.category)

            // Handle portfolios array
            const portfoliosData = data?.service?.portfolioData?.portfolios || [];
            let mappedPortfolios = [];

            if (portfoliosData.length > 0) {
              // Map backend field names to frontend structure
              mappedPortfolios = portfoliosData.map(portfolio => ({
                _id: portfolio._id,
                portfolioDescription: portfolio.description || portfolio.title || "",
                portfolioLocation: portfolio.location || "",
                portfolioEventType: portfolio.eventType || "",
                portfolioTags: portfolio.tags || [],
                portfolioFiles: portfolio.files || []
              }));

              setPortfolios(mappedPortfolios);
              setCurrentPortfolioIndex(0);

              // Set first portfolio data
              const firstPortfolio = mappedPortfolios[0];
              const portFolioUrls = firstPortfolio?.portfolioFiles || [];
              console.log('portfolio urls', portFolioUrls);

              if (Array.isArray(portFolioUrls) && portFolioUrls.length > 0) {
                const existingFiles = portFolioUrls.map((fileObj, index) => ({
                  id: `existing-${index}`,
                  isExisting: true,
                  url: fileObj.url,
                  cloudinaryUrl: fileObj.url,
                  name: fileObj.originalName || fileObj.url.split('/').pop() || `file-${index}`,
                  type: fileObj.fileType === 'image' ? 'image' :
                    fileObj.fileType === 'document' || fileObj.url.includes('.pdf') ? 'application/pdf' :
                      /\.(doc|docx)$/i.test(fileObj.url) ? 'application/msword' : 'file',
                  file: null,
                  size: fileObj.size || 0
                }))
                setSelectedFiles(existingFiles)
              }
            } else {
              // Fallback to old structure if no portfolios array
              const portFolioUrls = data?.service?.portfolioData?.portfolioFiles || [];
              console.log('portfolio urls', portFolioUrls);

              const singlePortfolio = {
                portfolioDescription: data?.service?.portfolioData?.portfolioDescription || "",
                portfolioLocation: data?.service?.portfolioData?.portfolioLocation || "",
                portfolioEventType: data?.service?.portfolioData?.portfolioEventType || "",
                portfolioTags: data?.service?.portfolioData?.portfolioTags || [],
                portfolioFiles: portFolioUrls
              };
              mappedPortfolios = [singlePortfolio];
              setPortfolios(mappedPortfolios);
              setCurrentPortfolioIndex(0);

              if (Array.isArray(portFolioUrls) && portFolioUrls.length > 0) {
                const existingFiles = portFolioUrls.map((fileObj, index) => ({
                  id: `existing-${index}`,
                  isExisting: true,
                  url: fileObj.url,
                  cloudinaryUrl: fileObj.url,
                  name: fileObj.originalName || fileObj.url.split('/').pop() || `file-${index}`,
                  type: fileObj.fileType === 'image' ? 'image' :
                    fileObj.fileType === 'document' || fileObj.url.includes('.pdf') ? 'application/pdf' :
                      /\.(doc|docx)$/i.test(fileObj.url) ? 'application/msword' : 'file',
                  file: null,
                  size: fileObj.size || 0
                }))
                setSelectedFiles(existingFiles)
              }
            }

            const galleryImageUrls = data?.business?.images || [];
            if (Array.isArray(galleryImageUrls) && galleryImageUrls.length > 0) {
              const existingGalleryFiles = galleryImageUrls.map((url, index) => ({
                url: url,
                file: {
                  id: `existing-gallery-${index}`,
                  isExisting: true,
                  file: null,
                  name: url.split('/').pop() || `gallery-${index}` // Add name property
                }

              }));

              setGalleryFiles(prev => prev.length === 0 ? existingGalleryFiles : prev);;
              setGalleryUploadProgress(galleryImageUrls.map(() => 100));
            }
            console.log('portfolios', portfolios);

            // Set formik values with current portfolio (first portfolio or single portfolio)
            const currentPortfolio = mappedPortfolios?.[0] || {};

            formik.setValues({
              businessName: data?.business?.name || "",
              //   category: capitalizeFirstLetter(data?.business?.category || ""),
              businessAddress: data?.business?.address || "",
              city: data?.business?.city || "",
              state: data?.business?.state || "",
              pin: data?.business?.pincode || "",
              languages: data?.business?.languagesSpoken || "",
              travelAvailability: data?.business?.travelAvailability || "",
              description: data?.service?.serviceInfo?.description || "",
              availability: data?.service?.serviceInfo?.availability || [],
              images: data?.serviceInfo?.images || [],
              deliveryTimeline: data?.service?.serviceInfo?.deliveryTimeline || "",
              priceRange: data?.service?.serviceInfo?.priceRange || "",
              portfolioDescription: currentPortfolio?.portfolioDescription || "",
              portfolioLocation: currentPortfolio?.portfolioLocation || "",
              portfolioEventType: currentPortfolio?.portfolioEventType || "",
              portfolioTags: currentPortfolio?.portfolioTags || [],
              portfolioFiles: currentPortfolio?.portfolioFiles || [],
              openingHours: Array.isArray(data?.business?.openingHours) && data.business.openingHours.length > 0
                ? data.business.openingHours
                : [{ day: "Monday", isOpen: true, from: "", to: "" }],
              allGalleryFiles: data?.business?.images || [],
            });

          }
        } catch (error) {
          console.error("business fetching failed:", error);
          toast.error("business fetching failed . Please try again.");
        }

      };

      fetchBusiness();
    }
  }, [id, accessToken]);



  const addBusinessFields = {
    businessName: formik.values.businessName,
    category: selectedCategory,
    businessAddress: formik.values.businessAddress,
    city: formik.values.city,
    state: formik.values.state,
    pin: formik.values.pin,
    languages: formik.values.languages,
  }

  const getUploadPortfolioFields = () => ({
    portfolioFiles: selectedFiles,
    portfolioDescription: formik.values.portfolioDescription,
    portfolioLocation: formik.values.portfolioLocation,
    portfolioEventType: formik.values.portfolioEventType,
    portfolioTags: formik.values.portfolioTags
  });

  const getAllGalleryFiles = () => ({
    galleryFiles: galleryFiles,
  });

  const getExtraServiceFieldsFilledCount = () => {
    const extraFields = {
      description: formik.values.description,
      availability: formik.values.availability,
      deliveryTimeline: formik.values.deliveryTimeline,
      priceRange: formik.values.priceRange,
    };


    let count = 0;
    Object.values(extraFields).forEach((value) => {
      if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (typeof value === "string") {
        if (value.trim() !== "") count++;
      } else if (value !== null && value !== undefined) {
        count++;
      }
    });

    return count;
  };


  // const handleInitialTotalCount = useCallback((totalCount) => {
  //   setCategoryTotalCount(prev => ({
  //     ...prev,
  //     [selectedCategory]: totalCount
  //   }));
  // }, [selectedCategory]);


  const [businessProcesses, setBusinessProcesses] = useState([
    {
      key: "add-business",
      title: "Add Business",
      icon: "/images/checklisticons/addbusiness.svg",
      count: 0,
      total: 7,
      completed: false,
    },
    {
      key: "opening-hours",
      title: "Opening Hours",
      icon: "/images/checklisticons/addbusiness.svg",
      count: 0,
      total: 2,
      completed: false,
    },
    {
      key: "services",
      title: "Services",
      icon: "/images/checklisticons/addbusiness.svg",
      count: 0,
      total: 0,
      completed: false,
    },
    {
      key: "upload-portfolio",
      title: "Upload Portfolio",
      icon: "/images/checklisticons/addbusiness.svg",
      count: 0,
      total: 5,
      completed: false,
    },
    {
      key: "upload-gallery",
      title: "Upload Gallery",
      icon: "/images/checklisticons/addbusiness.svg",
      count: 0,
      total: 1,
      completed: false,
    },
  ]);

  // 1. Define config for each section and its fields
  const businessSections = [
    {
      key: "add-business",
      title: "Add Business",
      icon: "/images/checklisticons/addbusiness.svg",
      fields: Object.keys(addBusinessFields),
    },
    {
      key: "opening-hours",
      title: "Opening Hours",
      icon: "/images/checklisticons/addbusiness.svg",
      fields: ["fromTime", "toTime"],
    },
    {
      key: "services",
      title: "Services",
      icon: "/images/checklisticons/addbusiness.svg",
      fields: [
        "service_category",
        "service_name",
        "service_whatsIncluded",
        "service_availability",
        "service_deliveryTimeline",
        "service_priceRange",
      ],
      total: totalInputs,
    },
    {
      key: "upload-portfolio",
      title: "Upload Portfolio",
      icon: "/images/checklisticons/addbusiness.svg",
      fields: [
        "portfolioImages",
        "tags",
        "eventType",
        "location",
        "description",
      ],
    },
    {
      key: "upload-gallery",
      title: "Upload Gallery",
      icon: "/images/checklisticons/addbusiness.svg",
      fields: ["galleryImages"],
    },
  ];

  // useEffect(() => {
  //   setBusinessProcesses(
  //     businessSections.map((section) => {
  //       let count, total;

  //       if (section.key === "services") {
  //         count = '';
  //         total = totalInputs;
  //       } else if (section.key === "opening-hours") {
  //         const openDays = formik.values.openingHours.filter((day) => day.isOpen);
  //         count = getFilledCount(section);
  //         total = openDays.length * 2; // each open day has `from` and `to`
  //       } else {
  //         count = getFilledCount(section);
  //         total = section.fields.length;
  //       }

  //       return {
  //         key: section.key,
  //         title: section.title,
  //         icon: section.icon,
  //         count,
  //         total,
  //         completed: count === total,
  //       };
  //     })
  //   );
  // }, [formik.values, selectedCategory, totalInputs, selectedFiles, galleryFiles]);

  const filled = categoryFilledCounts[selectedCategory] || 0;
  const total = categoryTotalCount[selectedCategory]
  console.log('categoryTotalCount', total);


  useEffect(() => {
    setBusinessProcesses(
      businessSections.map((section) => {
        let count, total;

        if (section.key === "services") {
          const filledCategoryCount = categoryFilledCounts[selectedCategory] || 0;
          const totalCategoryFields = categoryTotalCount[selectedCategory] || 0;

          const extraFieldsCount = 4; // fixed
          const extraFilled = getExtraServiceFieldsFilledCount();

          count = filledCategoryCount + extraFilled;
          console.log('services count', count);

          total = totalCategoryFields + extraFieldsCount;
          console.log('services total', total);

        }
        else if (section.key === "opening-hours") {
          const openDays = formik.values.openingHours.filter((day) => day.isOpen);
          count = getFilledCount(section);
          total = openDays.length * 2; // each open day has `from` and `to`
        } else {
          count = getFilledCount(section);
          total = section.fields.length;
        }

        return {
          key: section.key,
          title: section.title,
          icon: section.icon,
          count,
          total,
          completed: count === total,
        };
      })
    );
  }, [formik.values, selectedCategory, totalInputs, selectedFiles, galleryFiles, filled, categoryTotalCount]);

  // Calculate Add Business progress
  const getFilledCount = (section) => {
    if (section.key === "add-business") {
      const filled = Object.values(addBusinessFields).filter((value) => {
        if (Array.isArray(value)) return value.length > 0;
        return value !== undefined && value !== null && value !== "";
      }).length;
      return filled;
    }

    if (section.key === "upload-portfolio") {
      const fields = getUploadPortfolioFields();
      let filled = 0;

      Object.entries(fields).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          if (value.length > 0) filled += 1;
        } else {
          if (value !== undefined && value !== null && value !== "") filled += 1;
        }
      });

      return filled;
    }

    if (section.key === "upload-gallery") {
      const fields = getAllGalleryFiles();
      let filled = 0;

      Object.entries(fields).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          if (value.length > 0) filled += 1;
        } else {
          if (value !== undefined && value !== null && value !== "") filled += 1;
        }
      });

      return filled;
    }

    if (section.key === "opening-hours") {
      const openDays = formik.values.openingHours.filter((day) => day.isOpen);
      let filled = 0;
      openDays.forEach((day) => {
        if (day.from) filled += 1;
        if (day.to) filled += 1;
      });
      return filled;
    }

    if (section.key === "services") {
      const filledCategoryCount = categoryFilledCounts[selectedCategory] || 0;
      const extraFilled = getExtraServiceFieldsFilledCount();
      return filledCategoryCount + extraFilled;
    }


    const filled = section.fields.filter((field) => {
      const value = formik.values[field];
      if (Array.isArray(value)) return value.length > 0;
      return value !== undefined && value !== null && value !== "";
    }).length;

    return filled;
  };





  // useEffect(() => {
  //   const getUniqueNamesFromRef = (ref) => {
  //     const elements = ref?.current?.querySelectorAll('input[name], select[name], textarea[name]');
  //     const names = new Set();
  //     elements?.forEach((el) => {
  //       if (el.name) names.add(el.name);
  //     });
  //     return names;
  //   };

  //   const sections = [
  //     { name: 'Add Business', ref: addBusinessRef },
  //     { name: 'Opening Hours', ref: openingHoursRef },
  //     { name: 'Portfolio', ref: portFolioRef },
  //   ];

  //   let allNames = new Set();

  //   console.log('================== FIELD SUMMARY ==================');

  //   sections.forEach(({ name, ref }) => {
  //     const names = getUniqueNamesFromRef(ref);
  //     names.forEach(n => allNames.add(n));

  //     console.log(`\n📂 Section: ${name}`);
  //     console.log(`→ Unique Fields Count: ${names.size}`);
  //     if (names.size > 0) {
  //       console.log('→ Field Names:');
  //       Array.from(names).forEach((field, i) => {
  //         console.log(`   ${i + 1}. ${field}`);
  //       });
  //     } else {
  //       console.log('→ No fields found.');
  //     }
  //   });

  //   console.log('\n✅ Total Unique Field Names Across All Sections:', allNames.size);
  //   console.log('===================================================');
  // }, []);


  const handleCategoryDataChange = useCallback((data, filledCount, totalCount) => {
    setCategoryForms((prev) => ({
      ...prev,
      ...data,
    }));

    setCategoryFilledCounts(prev => ({
      ...prev,
      [selectedCategory]: filledCount,
    }));

    setCategoryTotalCount((prev) => ({
      ...prev,
      [selectedCategory]: totalCount,
    }));
  }, [selectedCategory]);


  const allWeekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const addNextDay = () => {
    const addedDays = formik.values.openingHours.map((d) => d.day);
    const nextDay = allWeekdays.find((d) => !addedDays.includes(d));
    if (nextDay) {
      formik.setFieldValue("openingHours", [
        ...formik.values.openingHours,
        { day: nextDay, isOpen: true, from: "", to: "" },
      ]);
    }
  };

  const toggleDay = (index) => {
    const updated = [...formik.values.openingHours];
    updated[index].isOpen = !updated[index].isOpen;
    formik.setFieldValue("openingHours", updated);
  };


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    for (const file of files) {
      try {
        const cloudinaryUrl = await uploadToCloudinary(file);

        newImages.push({
          file,                          // optional, for tracking
          preview: URL.createObjectURL(file), // used for UI display
          url: cloudinaryUrl             // uploaded Cloudinary URL
        });
      } catch (err) {
        toast.error("Image upload failed.");
      }
    }

    setImages((prev) => [...prev, ...newImages]); // For UI display
    setUploadedImageUrls((prev) => [...prev, ...newImages.map(img => img.url)]); // Only URLs for backend
  };


  const removeImageServices = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleAccordionToggle = (id) => {
    setopenAccordion(openAccordion === id ? null : id);
  };

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  const formatTime = (value) => {
    const [hours, minutes] = value.split(":");
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;
    return `${String(formattedHour).padStart(2, "0")}:${minutes} ${ampm}`;
  };

  // services
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [checkedItems, setCheckedItems] = useState([]);

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   const newFiles = files.map((file) => ({
  //     file,
  //     url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
  //     name: file.name,
  //     type: file.type,
  //   }));

  //   setSelectedFiles((prev) => [...prev, ...newFiles]);

  //   const existingFiles = Array.isArray(formik.values.portfolioFiles)
  //     ? formik.values.portfolioFiles
  //     : [];

  //   formik.setFieldValue("portfolioFiles", [...existingFiles, ...files]);
  // };


  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploadingFiles(true);

    try {
      // Prevent duplicate files by checking name+size
      // const existingKeys = selectedFiles.map(f => `${f.name}-${f.file.size}`);
      const existingKeys = selectedFiles.map(f =>
        f.file ? `${f.name}-${f.file.size}` : `${f.name}-${f.size || 0}`
      );
      const filteredFiles = files.filter(f => !existingKeys.includes(`${f.name}-${f.size}`));
      if (filteredFiles.length === 0) {
        setUploadingFiles(false);
        e.target.value = null; // reset input
        return;
      }

      // Create preview objects with unique tempId
      const newFiles = filteredFiles.map((file, index) => ({
        tempId: `${Date.now()}-${index}`,
        file,
        url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        name: file.name,
        type: file.type,
        uploading: true,
        cloudinaryUrl: null,
        uploadError: false
      }));

      // Add to state for preview
      setSelectedFiles((prev) => [...prev, ...newFiles]);

      // Upload files
      const uploadPromises = newFiles.map(async (fileObj) => {
        try {
          const cloudinaryUrl = await uploadToCloudinary(fileObj.file);

          setSelectedFiles((prev) =>
            prev.map((f) =>
              f.tempId === fileObj.tempId
                ? { ...f, cloudinaryUrl, uploading: false }
                : f
            )
          );

          return cloudinaryUrl;
        } catch (error) {
          console.error(`Failed to upload ${fileObj.name}:`, error);

          setSelectedFiles((prev) =>
            prev.map((f) =>
              f.tempId === fileObj.tempId
                ? { ...f, uploading: false, uploadError: true }
                : f
            )
          );

          throw error;
        }
      });

      // Wait for all uploads
      const cloudinaryUrls = await Promise.all(uploadPromises);

      // Update Formik
      const existingUrls = Array.isArray(formik.values.portfolioFiles)
        ? formik.values.portfolioFiles
        : [];

      formik.setFieldValue("portfolioFiles", [...existingUrls, ...cloudinaryUrls]);

      console.log("Files uploaded successfully:", cloudinaryUrls);
    } catch (error) {
      console.error("Error uploading files:", error);
      // Optional: toast.error('Some files failed to upload.');
    } finally {
      setUploadingFiles(false);
      e.target.value = null; // Allow selecting same file again
    }
  };

  //   const handleFileChange = async (e) => {
  //   const files = Array.from(e.target.files);
  //   if (files.length === 0) return;

  //   setUploadingFiles(true);

  //   try {
  //     // Get existing file identifiers (both from selectedFiles and formik.values.portfolioFiles)
  //     const existingKeys = new Set();

  //     // Add keys from selectedFiles (preview state)
  //     selectedFiles.forEach(f => {
  //       if (f.file) {
  //         existingKeys.add(`${f.name}-${f.file.size}`);
  //       } else {
  //         existingKeys.add(`${f.name}-${f.size || 0}`);
  //       }
  //     });

  //     // Add keys from formik.values.portfolioFiles (submitted state)
  //     const portfolioFiles = formik.values.portfolioFiles || [];
  //     portfolioFiles.forEach(fileObj => {
  //       if (typeof fileObj === 'object' && fileObj.originalName && fileObj.size) {
  //         existingKeys.add(`${fileObj.originalName}-${fileObj.size}`);
  //       }
  //     });

  //     // Filter out duplicate files
  //     const filteredFiles = files.filter(f => !existingKeys.has(`${f.name}-${f.size}`));

  //     if (filteredFiles.length === 0) {
  //       setUploadingFiles(false);
  //       e.target.value = null;
  //       // Optional: show message that files already exist
  //       console.log('All selected files already exist');
  //       return;
  //     }

  //     // Create preview objects with unique tempId
  //     const newFiles = filteredFiles.map((file, index) => ({
  //       tempId: `${Date.now()}-${index}`,
  //       file,
  //       url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
  //       name: file.name,
  //       type: file.type,
  //       uploading: true,
  //       cloudinaryUrl: null,
  //       uploadError: false
  //     }));

  //     // Add to state for preview
  //     setSelectedFiles((prev) => [...prev, ...newFiles]);

  //     // Upload files and create objects matching existing format
  //     const uploadPromises = newFiles.map(async (fileObj) => {
  //       try {
  //         const uploadedUrl = await uploadToCloudinary(fileObj.file);

  //         // Update the file object in selectedFiles
  //         setSelectedFiles(prev => prev.map(f => 
  //           f.tempId === fileObj.tempId 
  //             ? { ...f, uploading: false, cloudinaryUrl: uploadedUrl }
  //             : f
  //         ));

  //         // Return object matching existing format
  //         return {
  //           url: uploadedUrl,
  //           publicId: uploadedUrl.split('/').pop()?.split('.')[0] || '',
  //           fileType: fileObj.file.type.startsWith('image/') ? 'image' : 'document',
  //           originalName: fileObj.file.name,
  //           size: fileObj.file.size,
  //           mimeType: fileObj.file.type,
  //           uploadedAt: new Date().toISOString(),
  //           _id: `new_${Date.now()}_${Math.random()}`
  //         };
  //       } catch (error) {
  //         setSelectedFiles(prev => prev.map(f => 
  //           f.tempId === fileObj.tempId 
  //             ? { ...f, uploading: false, uploadError: true }
  //             : f
  //         ));
  //         throw error;
  //       }
  //     });

  //     // Wait for all uploads
  //     const newFileObjects = await Promise.all(uploadPromises);

  //     // Update Formik with complete objects
  //     const existingFiles = Array.isArray(formik.values.portfolioFiles)
  //       ? formik.values.portfolioFiles
  //       : [];

  //     formik.setFieldValue("portfolioFiles", [...existingFiles, ...newFileObjects]);

  //     console.log("Files uploaded successfully:", newFileObjects);
  //   } catch (error) {
  //     console.error("Error uploading files:", error);
  //   } finally {
  //     setUploadingFiles(false);
  //     e.target.value = null;
  //   }
  // };



  // const removeImage = (index) => {
  //   const updated = [...selectedFiles];
  //   updated.splice(index, 1);
  //   setSelectedFiles(updated);
  // };

  // const removeImage = (index) => {
  //   const fileToRemove = selectedFiles[index];
  //   // Remove from selectedFiles array
  //   const updatedFiles = [...selectedFiles];
  //   updatedFiles.splice(index, 1);
  //   setSelectedFiles(updatedFiles);

  //   // Remove corresponding Cloudinary URL from formik values if it exists
  //   if (fileToRemove?.cloudinaryUrl) {
  //     const existingUrls = Array.isArray(formik.values.portfolioFiles)
  //       ? formik.values.portfolioFiles
  //       : [];

  //     const updatedUrls = existingUrls.filter(url => url !== fileToRemove.cloudinaryUrl);
  //     formik.setFieldValue("portfolioFiles", updatedUrls);
  //   }

  //   // Clean up object URL to prevent memory leaks
  //   if (fileToRemove?.url && fileToRemove.url.startsWith('blob:')) {
  //     URL.revokeObjectURL(fileToRemove.url);
  //   }
  // };

  const removeImage = (index) => {
    const fileToRemove = selectedFiles[index];
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    const existingFiles = Array.isArray(formik.values.portfolioFiles)
      ? formik.values.portfolioFiles
      : [];

    let updatedUrls;

    if (fileToRemove?.isExisting) {
      // For existing files from API - remove by URL match
      updatedUrls = existingFiles.filter(fileObj => {
        if (typeof fileObj === 'string') {
          return fileObj !== fileToRemove.url;
        }
        return fileObj.url !== fileToRemove.url;
      });
    } else if (fileToRemove?.cloudinaryUrl) {
      // For newly uploaded files - remove by cloudinaryUrl
      updatedUrls = existingFiles.filter(url => url !== fileToRemove.cloudinaryUrl);
    } else {
      // Fallback
      updatedUrls = existingFiles;
    }

    formik.setFieldValue("portfolioFiles", updatedUrls);

    if (fileToRemove?.url && fileToRemove.url.startsWith('blob:')) {
      URL.revokeObjectURL(fileToRemove.url);
    }
  };


  const included = [
    {
      checkboxid: 1,
      checkboxName: "Within City",
    },
    {
      checkboxid: 2,
      checkboxName: "Outside City",
    },
    {
      checkboxid: 3,
      checkboxName: "All over india",
    },
  ];

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // const handleKeyDown = (e) => {
  //  if (e.key === "Enter" && inputValue.trim()) {
  //        e.preventDefault();

  //        let tagValue = inputValue.trim();
  //        if (!tagValue.startsWith('#')) {
  //          tagValue = '#' + tagValue;
  //        }

  //        if (!formik.values.portfolioTags.includes(tagValue)) {
  //          setTags((prev) => [...prev, tagValue]);
  //          formik.setFieldValue("portfolioTags", [...formik.values.portfolioTags, tagValue]);
  //        }
  //        setInputValue("");
  //      }
  // };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();

      let tagValue = e.target.value.trim();
      if (!tagValue.startsWith('#')) {
        tagValue = '#' + tagValue;
      }

      // Get current tags from formik (ensure it's an array)
      const currentTags = Array.isArray(formik.values.portfolioTags)
        ? formik.values.portfolioTags
        : [];

      if (!currentTags.includes(tagValue)) {
        const newTags = [...currentTags, tagValue];
        formik.setFieldValue("portfolioTags", newTags);
      }

      // Clear the input
      e.target.value = "";
    }
  };
  // const removeTag = (index) => {
  //    const newTags = tags.filter((_, i) => i !== index);
  //   setTags(newTags);
  //   // Update formik as well
  //   formik.setFieldValue("portfolioTags", newTags);;
  // };

  const removeTag = (index) => {
    const currentTags = Array.isArray(formik.values.portfolioTags)
      ? formik.values.portfolioTags
      : [];
    const newTags = currentTags.filter((_, i) => i !== index);
    formik.setFieldValue("portfolioTags", newTags);
  };

  const saveAndPublish = () => {
    console.log('categorySpecificData', categoryData);

  }

  const handleAddBusiness = async (e) => {
    e.preventDefault()

    const {
      businessName,
      businessAddress,
      city,
      state,
      pin,
      languages } = formik.values

    const businessData = {
      name: businessName,
      address: businessAddress,
      category: selectedCategory,
      city,
      state,
      pincode: pin,
      languagesSpoken: languages,
    };
    formik.setTouched({
      businessName: true,
      businessAddress: true,
      city: true,
      state: true,
      pin: true,
      languages: true,
    });
    const isAnyEmpty = Object.values(businessData).some(
      (value) => value === '' || value === null || value === undefined || (Array.isArray(value) && value.length === 0)
    );

    if (isAnyEmpty) {
      toast.error('Please fill out all required fields.',{
        toastId: 'add-business-empty-fields-error'
      });
      return;
    }
    if (businessData.name.length < 3) {
      toast.error('Business name must be at least 3 characters long.',{
        toastId: 'add-business-name-error'
      });
      return;
    }
    if (businessData.pincode.length !== 6) {
      toast.error('Pin code must be exactly 6 digits.',{
        toastId: 'add-business-pin-code-error'
      });
      return;
    }

    console.log('businessData', businessData)

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-business/${id}`,
        businessData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("businessAdded", response);

      if (response.status === 200) {
        toast.success("Business details updated successfully");
        localStorage.setItem('addBusinessSubmitted', 'true')
        setOpeningHoursButton(true)
      }
    } catch (error) {
      console.error("Error adding business:", error);
      const message =
        error.response.data?.message ||
        error.response.data?.error ||
        "The server rejected the data. Please review your inputs.";
      toast.error(message, {
        toastId: 'add-business-backend-error'
      });;
    }

  }
  const handleAddService = async (e) => {
    e.preventDefault()
    const { description, availability, deliveryTimeline, priceRange } = formik.values
    const serviceInfo = {
      description, availability, deliveryTimeline, priceRange,
      images: uploadedImageUrls,
      ...categoryForms
    }
    // const portfolioInfo = {
    //   portfolioTags, portfolioDescription, portfolioLocation, portfolioEventType
    // }
    console.log("service info", categoryForms)
    // const formData = new FormData();
    // formData.append("serviceInfo", JSON.stringify(serviceInfo));
    // formData.append("portfolioInfo", JSON.stringify(portfolioInfo));

    // images.forEach(({ file }) => {
    //   formData.append("images", file);
    // });
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-service`,
        { serviceInfo, category: selectedCategory },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Service info updated successfully!")
        localStorage.setItem('isServiceSubmitted', 'true')
        setPortFolioButton(true)
        // setopenAccordion('services')
      }
    } catch (error) {
      console.error("Error adding service info:", error);
      const message =
        error.response.data?.message ||
        error.response.data?.error ||
        "The server rejected the data. Please review your inputs.";
      toast.error(message, {
        toastId: 'add-service-backend-error'
      });
    }
  }

  // const handleAddPortfolio = async (e) => {
  //   e.preventDefault();
  //   const {
  //     portfolioTags,
  //     portfolioDescription,
  //     portfolioLocation,
  //     portfolioEventType,
  //     portfolioFiles,
  //   } = formik.values;

  //   const formData = new FormData();

  //   // Append text fields
  //   formData.append("portfolioTags", portfolioTags);
  //   formData.append("portfolioDescription", portfolioDescription);
  //   formData.append("portfolioLocation", portfolioLocation);
  //   formData.append("portfolioEventType", portfolioEventType);
  //   formData.append("category", selectedCategory);

  //   // Append each file
  //   portfolioFiles.forEach((file) => {
  //     formData.append("portfolioFiles", file); 
  //   });

  //   try {
  //     const response = await axios.put(
  //       `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-portfolio`,
  //       formData, // ✅ send formData directly
  //       {
  //         withCredentials: true,
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       toast.success("Portfolio info saved successfully!");
  //       setopenAccordion('upload-gallery')
  //     }
  //   } catch (error) {
  //     console.error("Error uploading portfolio:", error);
  //     toast.error("Failed to add service info. Please try again.");
  //   }
  // };

  const handleAddPortfolio = async (e) => {
    e.preventDefault()

    // Save current portfolio changes before submitting
    saveCurrentPortfolioChanges();

    const { portfolioTags, portfolioDescription, portfolioLocation, portfolioEventType, portfolioFiles } = formik.values

    const portfolioUrls = portfolioFiles.map(file => {
      if (typeof file === 'string') {
        return file; // Already a URL string
      }
      return file.url || file.cloudinaryUrl; // Extract URL from object
    });

    // Get current portfolio data
    const currentPortfolio = portfolios[currentPortfolioIndex];
    const portfolioId = currentPortfolio?._id || currentPortfolio?.id;

    // Prepare current portfolio data for update
    const portfolioData = {
      portfolioDescription,
      portfolioLocation,
      portfolioEventType,
      portfolioTags: Array.isArray(portfolioTags) ? portfolioTags : [portfolioTags].filter(Boolean),
      portfolioFiles: portfolioUrls
    };

    // Only include portfolioId if it exists (for existing portfolios)
    if (portfolioId) {
      portfolioData.portfolioId = portfolioId;
    }

    const filterInfo = { portfolioDescription, portfolioLocation, portfolioEventType }
    console.log('handleAddPortfolio - Current Portfolio Data:', portfolioData);

    formik.setTouched({
      portfolioTags: true,
      portfolioDescription: true,
      portfolioLocation: true,
      portfolioEventType: true,
      portfolioFiles: true
    });

    const isAnyEmpty = Object.values(portfolioData).some(
      (value) => value === '' || value === null || value === undefined || (Array.isArray(value) && value.length === 0)
    );

    if (isAnyEmpty) {
      toast.error('Please fill out all required fields.', {
        toastId: 'add-portfolio-form-error'
      });
      return;
    }

    try {
      let response;

      if (portfolioId) {
        // Update existing portfolio
        response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/portfolios/${portfolioId}`,
          { portfolioData, category: selectedCategory },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          toast.success("Portfolio updated successfully!");
        }
      } else {
        // Create new portfolio (for portfolios without ID)
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/portfolios/create`,
          { portfolioData, category: selectedCategory },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Update local state with new portfolio ID if returned
        if (response.data?.portfolioId) {
          const updatedPortfolios = [...portfolios];
          updatedPortfolios[currentPortfolioIndex] = {
            ...updatedPortfolios[currentPortfolioIndex],
            _id: response.data.portfolioId
          };
          setPortfolios(updatedPortfolios);
        }
      }

      if (response.status === 201) {
        toast.success("Portfolio addeded successfully!");
        // setopenAccordion('upload-gallery')
      }
    } catch (error) {
      console.error("Error updating portfolio:", error);
      const message =
        error.response.data?.message ||
        error.response.data?.error ||
        "The server rejected the data. Please review your inputs.";
      toast.error(message, {
        toastId: 'add-portfolio-backend-error'
      });
    }
  }

  const handleAddOpeningHours = async (e) => {
    e.preventDefault()
    const { openingHours } = formik.values
    console.log("opening hours", openingHours)
    formik.setTouched({
      openingHours: true
    })
    const hasInvalidEntry = openingHours.some(hour => {
      if (hour.isOpen) {
        return !hour.from?.trim() || !hour.to?.trim(); // if from or to is empty
      }
      return false; // skip validation if isOpen is false
    });

    if (hasInvalidEntry) {
      toast.error("Please fill all 'from' and 'to' times for the open days.", {
        toastId: 'add-opening-hours-form-error'
      });
      return;
    }
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-opening-hours`,
        { openingHours, category: selectedCategory },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Opening hours added successfully!")
        localStorage.setItem('isOpeningHoursSubmitted', 'true')
        setServiceButton(true)
        setopenAccordion('services')
      }
    } catch (error) {
      console.error("Error adding opening hours:", error);
      const message =
        error.response.data?.message ||
        error.response.data?.error ||
        "The server rejected the data. Please review your inputs.";
      toast.error(message, {
        toastId: 'add-opening-hours-backend-error'
      });
    }
  }

  const handleAddGalleryFile = async (e) => {
    e.preventDefault()
    formik.setTouched({
      allGalleryFiles: true,
    });
    if (formik.values.allGalleryFiles.length === 0) {
      toast.error("Please upload at least one gallery image.", {
        toastId: 'add-gallery-form-error'
      });
      return;
    }
    console.log('gallery images url', formik.values.allGalleryFiles)
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-business-image`, {
        imageUrls: formik.values.allGalleryFiles,
        category: selectedCategory
      }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (response.status == 200) {
        toast.success("Gallery images added successfully!")
        router.push('/my-business')
      }
    } catch (error) {
      console.error("Error adding gallery:", error);
      const message =
        error.response.data?.message ||
        error.response.data?.error ||
        "The server rejected the data. Please review your inputs.";
      toast.error(message, {
        toastId: 'add-gallery-backend-error'
      });;
    }
  }

  const handleGalleryFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => /\.(jpe?g|png)$/i.test(file.name));

    if (imageFiles.length === 0) return;

    const newImages = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    const newProgress = imageFiles.map(() => 0);

    // Store previews and placeholder progress first
    const currentGallery = [...galleryFiles, ...newImages];
    const currentProgress = [...galleryUploadProgress, ...newProgress];

    // setGalleryFiles(currentGallery);
    setGalleryFiles(prev => [...prev, ...newImages]);
    setGalleryUploadProgress(currentProgress);
    const uploadedUrls = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const currentIndex = galleryFiles.length + i;
      // const currentIndex = galleryUploadProgress.length - newProgress.length + i;

      try {
        const url = await uploadToCloudinary(file, (percent) => {
          setGalleryUploadProgress((prev = []) => {
            const updated = [...prev];
            if (updated[currentIndex] !== undefined) {
              updated[currentIndex] = percent;
            }
            return updated;
          });
        });
        uploadedUrls.push(url); // collect
        // formik.setFieldValue("allGalleryFiles", [
        //   ...formik.values.allGalleryFiles,
        //   url,
        // ]);
        formik.setFieldValue("allGalleryFiles", [
          ...(Array.isArray(formik.values.allGalleryFiles) ? formik.values.allGalleryFiles : []),
          ...uploadedUrls,
        ]);

        setGalleryUploadProgress((prev = []) => {
          const updated = [...prev];
          if (updated[currentIndex] !== undefined) {
            updated[currentIndex] = 100;
          }
          return updated;
        });
      } catch (err) {
        console.error("Upload failed:", file.name, err);
      }
    }
  };


  //   useEffect(() => {
  //   if (formik?.values?.portfolioFiles) {
  //     // Convert existing Cloudinary URLs to preview format
  //     const existingFiles = formik.values.portfolioFiles.map((url, index) => ({
  //       id: `existing-${index}`,
  //       isExisting: true,
  //       url: url,
  //       name: url.split('/').pop() || `file-${index}`,
  //       type: url.includes('/image/') || /\.(jpg|jpeg|png|gif|webp)$/i.test(url) ? 'image' : 
  //             url.includes('.pdf') ? 'application/pdf' : 
  //             /\.(doc|docx)$/i.test(url) ? 'application/msword' : 'file'
  //     }));

  //     setSelectedFiles(existingFiles);

  //     // Also update formik with existing URLs
  //     formik.setFieldValue("portfolioFiles", formik.portfolio.portfolioFiles);
  //   }
  // }, [formValues?.portfolio?.portfolioFiles]);


  const uploadGalleryImage = (file, index) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("image", file);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setGalleryUploadProgress(prev => ({ ...prev, [index]: percent }));
      }
    };

    xhr.onload = () => {
      setGalleryUploadProgress(prev => ({ ...prev, [index]: 100 }));
      // handle success, update galleryFiles with server url if needed
    };

    xhr.onerror = () => {
      setGalleryUploadProgress(prev => ({ ...prev, [index]: 0 }));
      // handle error
    };

    xhr.open("POST", "/api/upload"); // your upload endpoint
    xhr.send(formData);
  };

  const removeGalleryImage = (index) => {
    // Remove preview image
    setGalleryFiles((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    // Remove progress
    setGalleryUploadProgress((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    // Remove uploaded Cloudinary URL from Formik
    formik.setFieldValue("allGalleryFiles", [
      ...formik.values.allGalleryFiles.slice(0, index),
      ...formik.values.allGalleryFiles.slice(index + 1),
    ]);
  };

  const prefilled = useMemo(() => {
    const serviceInfo = formValues?.service?.serviceInfo || {};
    const { description, availability, deliveryTimeline, priceRange, images, ...filteredServiceInfo } = serviceInfo;
    return filteredServiceInfo;
  }, [formValues?.service]);

  // Portfolio Navigation Component
  const PortfolioNavigationHeader = () => (
    <div className="mb-6">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">Portfolio Section</h3>
          <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
            {currentPortfolioIndex + 1} of {portfolios.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={goToPreviousPortfolio}
            disabled={currentPortfolioIndex === 0}
            className={`p-2 rounded-full border transition-all ${currentPortfolioIndex === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            title="Previous Portfolio"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNextPortfolio}
            disabled={currentPortfolioIndex === portfolios.length - 1}
            className={`p-2 rounded-full border transition-all ${currentPortfolioIndex === portfolios.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            title="Next Portfolio"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={addNewPortfolio}
          className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ml-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          Add New Portfolio
        </button>

        {portfolios.length > 1 && (
          <button
            type="button"
            onClick={removeCurrentPortfolio}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mr-2 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Remove Current Portfolio
          </button>
        )}
      </div>
    </div>
  );


  return (
    <div>
      <Layouts>

        {/* {!isShowAddBusiness && (
          <div onClick={() => setisShowAddBusiness(true)} className="cursor-pointer px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-5 w-fit h-[50vh] flex items-center justify-center flex-col">
            <Image
              className="mx-auto mb-5"
              width={50}
              height={50}
              src={"/images/plus.svg"}
              alt="plus"
            />

            <button

              className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]"
            >
              Add Your Business
            </button>
          </div>
        )} */}

        <div className="flex">
          <div className="w-[70%] max-w-full px-5 4xl:px-[7rem] 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col">
            {/* add-business  */}
            <button
              onClick={() => handleAccordionToggle("add-business")} type="button"
              className={`cursor-pointer flex items-center justify-between  mb-3 bg-[#ededed] px-6 py-2 4xl:py-4 rounded-md`}
            >
              <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                Add Business
              </h3>
              <Image
                className={`${openAccordion === "add-business" ? "rotate-180" : ""
                  } transition-all ease invert-[1]`}
                width={18}
                height={18}
                src={"/images/downarrow.svg"}
                alt="downarrow"
              />
            </button>
            {/* content of add-business */}
            {openAccordion === "add-business" && (
              <div ref={addBusinessRef} className="px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
                <form onSubmit={handleAddBusiness}>
                  <div className="space-y-[25px]">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full mr-2.5">
                        <label
                          htmlFor="businessName"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Business name<span className="text-red-500 text-bold">*</span>
                        </label>
                        <input
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                          placeholder="Name"
                          type="text"
                          value={formik.values.businessName}
                          onChange={(e) => {
                            const cleaned = removeExtraSpace(e.target.value);
                            formik.setFieldValue(e.target.name, cleaned);
                          }}
                          onBlur={formik.handleBlur}
                          name="businessName"
                          id="businessName"
                        />
                        <div>
                          {(formik.touched.businessName && formik.errors.businessName) && (
                            <p className="text-red-500 absolute text-sm mt-1 ml-1">
                              {formik.errors.businessName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="businesscategory"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Business Category<span className="text-red-500 text-bold">*</span>
                        </label>
                        <select
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          disabled={formValues}
                          onBlur={formik.handleBlur}
                          name="businesscategory"
                          id="businesscategory"
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          <option value="catering">Catering Services</option>
                          <option value="venues">Venues</option>
                          <option value="photography">Photography</option>
                          <option value="bridalmakeup">Bridal Makeup</option>
                          <option value="decorators">Decorators</option>
                          <option value="wedding-planners">
                            Wedding Planners
                          </option>
                          <option value="mehandi-artist">Mehandi Artist</option>
                          <option value="dj">DJ&#39;s</option>
                          <option value="pre-wedding-photographers">
                            Pre Wedding Photographers
                          </option>
                          <option value="wedding-pandit">Wedding Pandit&#39;s</option>
                          <option value="cake">Cake</option>
                          <option value="bartenders">Bartenders</option>
                        </select>
                        <div>
                          {!selectedCategory && (
                            <p className="text-red-500 absolute text-sm  ml-1">
                              {formik.errors.category}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col relative">
                      <label
                        htmlFor="businessAddress"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Business Address<span className="text-red-500 text-bold">*</span>
                      </label>

                      <div className="relative">
                        <textarea
                          placeholder="Choose your location"
                          value={formik.values.businessAddress}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="businessAddress"
                          id="businessAddress"
                          className="h-[72px] w-full rounded-[8px] outline-none bg-white px-[40px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3 resize-none"
                        ></textarea>

                        <Image
                          className="absolute top-[14.5px] left-[18px] pointer-events-none"
                          width={14}
                          height={17}
                          src="/images/add-business/locationicon.svg"
                          alt="locationicon"
                        />
                        <div>
                          {(formik.touched.businessAddress && formik.errors.businessAddress) && (
                            <p className="text-red-500 absolute text-sm  ml-1">
                              {formik.errors.businessAddress}
                            </p>
                          )}
                        </div>

                      </div>

                    </div>

                    <div className="grid grid-cols-3 gap-[10px]">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="city"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          City<span className="text-red-500 text-bold">*</span>
                        </label>
                        <input
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                          placeholder="Enter city"
                          value={formik.values.city}
                          onBlur={formik.handleBlur}
                          onChange={(e) => {
                            const cleaned = removeExtraSpace(e.target.value);
                            formik.setFieldValue(e.target.name, cleaned);
                          }}
                          type="text"
                          name="city"
                          id="city"
                        />
                        <div>
                          {(formik.touched.city && formik.errors.city) && (
                            <p className="text-red-500 absolute text-sm mt-1 ml-1">
                              {formik.errors.city}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="state"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          State<span className="text-red-500 text-bold">*</span>
                        </label>
                        <select
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          id="state"
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                        > <option value="" disabled>
                            Select State
                          </option>
                          {indianStates.map(state => (
                            <option key={state.isoCode} value={state.name}>{state.name}</option>
                          ))}
                        </select>
                        <div>
                          {(formik.touched.state && formik.errors.state) && (
                            <p className="text-red-500 absolute text-sm ">
                              {formik.errors.state}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="pin"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Pin code<span className="text-red-500 text-bold">*</span>
                        </label>
                        <input
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                          placeholder="Enter Pincode"
                          value={formik.values.pin}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onKeyDown={handlePhoneKeyDown}
                          type="text"
                          name="pin"
                          id="pin"
                        />
                        <div>
                          {(formik.touched.pin && formik.errors.pin) && (
                            <p className="text-red-500 absolute text-sm mt-1 text-center">
                              {formik.errors.pin}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      {/* <div className="flex flex-col w-[40%]">
                      <label
                        htmlFor="languages"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Languages Spoken
                      </label>
                      <select
                        value={formik.values.languages}
                        onChange={formik.handleChange}
                        name="languages"
                        id="languages"
                        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                      >
                        <option value="english">English</option>
                        <option value="bengali">Bengali</option>
                        <option value="hindi">Hindi</option>
                        <option value="tamil">Tamil</option>
                        <option value="telegu">Telegu</option>
                      </select>
                    </div> */}
                      <div className="flex flex-col w-[40%]">
                        <label
                          htmlFor="languages"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Languages Spoken<span className="text-red-500 text-bold">*</span>
                        </label>

                        <div className="flex flex-row gap-2">
                          {["English", "Bengali", "Hindi", "Tamil", "Telugu"].map((lang) => (
                            <label key={lang} className="flex items-center gap-2 text-[#525252] text-[14px] 3xl:text-[16px] font-medium">
                              <input
                                type="checkbox"
                                name="languages"
                                value={lang.toLowerCase()}
                                checked={formik.values.languages.includes(lang.toLowerCase())}
                                onChange={(e) => {
                                  const { checked, value } = e.target;
                                  const prev = formik.values.languages || [];
                                  const updated = checked
                                    ? [...prev, value]
                                    : prev.filter((v) => v !== value);
                                  formik.setFieldValue("languages", updated);
                                }}
                              />
                              {lang}
                            </label>
                          ))}
                          {/* <div>
                          {(formik.touched.languages && formik.errors.languages) && (
                                <p className="text-red-500 absolute text-sm mt-1 text-center">
                                  {formik.errors.languages}
                                </p>
                              )}
                        </div> */}
                        </div>
                      </div>

                      {/* <div className="flex items-center w-[60%] pt-[40px] ml-14">
                      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-4">
                        Travel availability:
                      </p>

                      <div className="mr-4 flex items-center">
                        <input
                          className="accent-[#EA0056] size-5"
                          type="radio"
                          name="travelAvailability"
                          id="withincity"
                          value="withincity"
                          checked={formik.values.travelAvailability === "withincity"}
                          onChange={formik.handleChange}
                        />
                        <label
                          htmlFor="withincity"
                          className="text-black font-normal text-[14px] ml-2"
                        >
                          Within City
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="accent-[#EA0056] size-5"
                          type="radio"
                          name="travelAvailability"
                          id="outsidecity"
                          value="outsidecity"
                          checked={formik.values.travelAvailability === "outsidecity"}
                          onChange={formik.handleChange}
                        />
                        <label
                          htmlFor="outsidecity"
                          className="text-black font-normal text-[14px] ml-2"
                        >
                          Outside City
                        </label>
                      </div>
                    </div> */}
                    </div>
                    <div className="pt-4 flex  items-end">
                      <button type="submit" className={`bg-[#EA0056] ml-auto table text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px] cursor-pointer`}>
                        Save & Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* opening hours  */}
            <button
              onClick={() => handleAccordionToggle("opening-hours")}
              className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md`}
            >
              <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                Opening Hours
              </h3>
              <Image
                className={`${openAccordion === "opening-hours" ? "rotate-180" : ""
                  } transition-all ease invert-[1]`}
                width={18}
                height={18}
                src={"/images/downarrow.svg"}
                alt="downarrow"
              />
            </button>
            {/* opening hours content  */}
            {/* {openAccordion === "opening-hours" && (
              <div className="px-[28px] py-5 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 w-fit">
                    <div
                      onClick={() => setIsToggled(!isToggled)}
                      className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isToggled ? "bg-[#EA0056]" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? "translate-x-[20px]" : "translate-x-0"
                          } `}
                      ></div>
                    </div>
                    <p className="text-black font-medium text-[16px]">Monday</p>
                  </div>
                  <div className="flex w-[70%] mx-auto">
                    <div className="relative w-full mr-4">
                      <div className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full">
                        <span className="text-[#525252] text-[14px] font-medium">
                          From
                        </span>
                        <span
                          className="text-[#525252] text-[14px] font-medium cursor-pointer"
                          onClick={() => fromInputRef.current?.showPicker()}
                        >
                          {formatTime(fromTime)}
                        </span>
                      </div>
                      <input
                        ref={fromInputRef}
                        type="time"
                        value={fromTime}
                        onChange={(e) => setFromTime(e.target.value)}
                        className="absolute opacity-0 pointer-events-none"
                      />
                    </div>

                    <div className="relative w-full">
                      <div className="flex items-center justify-between w-full h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px]">
                        <span className="text-[#525252] text-[14px] font-medium">
                          To
                        </span>
                        <span
                          className="text-[#525252] text-[14px] font-medium cursor-pointer"
                          onClick={() => toInputRef.current?.showPicker()}
                        >
                          {formatTime(toTime)}
                        </span>
                      </div>
                      <input
                        ref={toInputRef}
                        type="time"
                        value={toTime}
                        onChange={(e) => setToTime(e.target.value)}
                        className="absolute opacity-0 pointer-events-none"
                      />
                    </div>
                  </div>
                  <button className="font-normal text-[14px] text-[#EA0056] flex items-center">
                    Add fields
                    <Image
                      className="ml-3"
                      width={12}
                      height={12}
                      src={"/images/add-business/plusicontheme.svg"}
                      alt="plusicontheme"
                    />
                  </button>
                </div>
              </div>
            )} */}

            {openAccordion === "opening-hours" && (
              <div ref={openingHoursRef} className="px-[28px] py-5 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
                <form onSubmit={handleAddOpeningHours}>
                  {formik.values.openingHours.map((entry, index) => (
                    <div key={entry.day}>
                      <div className="flex items-center justify-between  mb-[20px]">
                        {/* Toggle + Day Label */}
                        <div className="flex items-center gap-3 w-fit">
                          <div
                            onClick={() => toggleDay(index)}
                            className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${entry.isOpen ? "bg-[#EA0056]" : "bg-gray-300"
                              }`}
                          >
                            <div
                              className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${entry.isOpen ? "translate-x-[20px]" : "translate-x-0"
                                }`}
                            ></div>
                          </div>
                          <p className="text-black font-medium text-[16px]">{entry.day}</p>
                        </div>

                        {/* Time Inputs */}
                        <div className="flex  w-[70%]">
                          {/* From */}
                          <div className="relative w-full mr-4">
                            <div
                              className="flex items-center justify-between  h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full"
                              onClick={() =>
                                entry.isOpen && document.getElementById(`${entry.day}-from-${index}`)?.showPicker()
                              }
                            >
                              <span className="text-[#525252] text-[14px] font-medium">From</span>
                              <span className="text-[#525252] text-[14px] font-medium cursor-pointer">
                                {entry.from || "Select"}
                              </span>
                            </div>
                            <input
                              id={`${entry.day}-from-${index}`}
                              type="time"
                              name={`openingHours[${index}].from`}
                              value={entry.from}
                              onChange={(e) => {
                                formik.setFieldValue(`openingHours[${index}].from`, e.target.value);
                                formik.setFieldTouched(`openingHours[${index}].from`, true, false);
                              }} disabled={!entry.isOpen}
                              className="absolute opacity-0 pointer-events-none"
                            />

                            {formik.touched.openingHours?.[index]?.from &&
                              formik.errors.openingHours?.[index]?.from && (
                                <p className="text-red-500 text-sm mt-1 ml-1 text-center">
                                  {formik.errors.openingHours[index].from}
                                </p>
                              )}
                          </div>

                          {/* To */}
                          <div className="relative w-full">
                            <div
                              className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full"
                              onClick={() =>
                                entry.isOpen && document.getElementById(`${entry.day}-to-${index}`)?.showPicker()
                              }
                            >
                              <span className="text-[#525252] text-[14px] font-medium">To</span>
                              <span className="text-[#525252] text-[14px] font-medium cursor-pointer">
                                {entry.to || "Select"}
                              </span>
                            </div>
                            <input
                              id={`${entry.day}-to-${index}`}
                              type="time"
                              name={`openingHours[${index}].to`}
                              value={entry.to}
                              onChange={(e) => {
                                formik.setFieldValue(`openingHours[${index}].to`, e.target.value);
                                formik.setFieldTouched(`openingHours[${index}].to`, true, false);
                              }}
                              disabled={!entry.isOpen}
                              className="absolute opacity-0 pointer-events-none"
                            />

                            {formik.touched.openingHours?.[index]?.to &&
                              formik.errors.openingHours?.[index]?.to && (
                                <p className="text-red-500  text-sm mt-2 pb-1 text-center">
                                  {formik.errors.openingHours[index].to}
                                </p>
                              )}
                          </div>
                        </div>

                        {/* Add Fields Button (only on last item) */}
                        {/* {index === formik.values.openingHours.length - 1 &&
                      formik.values.openingHours.length < 7 && (
                        <button
                          type="button"
                          onClick={addNextDay}
                          className="font-normal text-[14px] text-[#EA0056] flex items-center ml-4"
                        >
                          Add fields
                          <Image
                            className="ml-3"
                            width={12}
                            height={12}
                            src="/images/add-business/plusicontheme.svg"
                            alt="plusicontheme"
                          />
                        </button>
                      )} */}
                      </div>
                      {index === formik.values.openingHours.length - 1 &&
                        formik.values.openingHours.length < 7 && (
                          <button
                            type="button"
                            onClick={addNextDay}
                            className="font-normal text-[14px] text-[#EA0056] flex items-center ml-auto mr-0 cursor-pointer"
                          >
                            Add fields
                            <Image
                              className="ml-3"
                              width={12}
                              height={12}
                              src="/images/add-business/plusicontheme.svg"
                              alt="plusicontheme"
                            />
                          </button>
                        )}
                    </div>
                  ))}
                  <div className="pt-4">

                    <button
                      className="bg-[#EA0056] ml-auto cursor-pointer table text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]"
                    >
                      Save & Next
                    </button>
                  </div>
                </form>
              </div>
            )}



            {/* services  */}
            <div>
              <button
                onClick={() => handleAccordionToggle("services")} type="button"
                className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md w-full`}
              >
                <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                  Services
                </h3>
                <Image
                  className={`${openAccordion === "services" ? "rotate-180" : ""
                    } transition-all ease invert-[1]`}
                  width={18}
                  height={18}
                  src={"/images/downarrow.svg"}
                  alt="downarrow"
                />
              </button>
              {/* services content  */}
              {openAccordion === "services" && (
                <div ref={serviceRef}>
                  <form onSubmit={handleAddService}>
                    <div className="space-y-[18px] bg-[#F2F2F2] px-[30px] 3xl:px-[60px] py-9 rounded-[10px] mb-[24px]">
                      {/* //business category  */}
                      <div className="flex items-center w-full">
                        {/* <div className="flex flex-col w-full mr-[25px]">
                        <label
                          htmlFor="businesscategory"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Business Category
                        </label>
                        <select
                          name="businesscategory"
                          id="businesscategory"
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="volvo">Business Category</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div> */}
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="businesscategory"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Business Category
                          </label>
                          {/* <select
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          name="businesscategory"
                          id="businesscategory"
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[20px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          <option value="catering">Catering Services</option>
                          <option value="venues">Venues</option>
                          <option value="photography">Photography</option>
                          <option value="bridalmakeup">Bridal Makeup</option>
                          <option value="decorators">Decorators</option>
                          <option value="wedding-planners">
                            Wedding Planners
                          </option>
                          <option value="mehandi-artist">Mehandi Artist</option>
                          <option value="dj">Dj&apos;s</option>
                          <option value="pre-wedding-photographers">
                            Pre Wedding Photographers
                          </option>
                          <option value="wedding-pandit">Wedding Pandit&apos;s</option>
                          <option value="cake">Cake</option>
                          <option value="bartenders">Bartenders</option>
                        </select> */}
                          <input
                            className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                            value={selectedCategory}
                            disabled
                            name="businessCategory"
                            id="businessCategory"
                          />
                        </div>
                        <div className="flex flex-col w-full ml-2.5">
                          <label
                            htmlFor="businessname"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Business Name
                          </label>
                          <input
                            className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                            type="text"
                            value={formik.values.businessName}
                            disabled
                            name="businessname"
                            id="businessname"
                          />
                        </div>
                      </div>
                      {/* whats included */}
                      <div className="flex flex-col w-full mr-2.5">
                        <label
                          htmlFor="description"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          What&apos;s Included
                        </label>
                        <textarea
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          name="description"
                          className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                          placeholder="Add your description"
                        ></textarea>
                      </div>
                      {/* availability */}
                      {/* <div className="flex items-center">
                    <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-3">
                      Availability:
                    </p>
                    <div className="flex items-center space-x-5">
                      {included.map((item) => (
                        <div
                          key={item.checkboxid}
                          className="flex items-center"
                        >
                          <input
                            className="accent-[#EA0056] size-3.5 4xl:size-5"
                            type="checkbox"
                            name="availability"
                            value={formik.values.availability}

                            id={`checkbox-${item.checkboxid}`}
                            checked={checkedItems.includes(item.checkboxid)}
                            onChange={() =>{
                              formik.handleChange;
                              handleCheckboxChange(item.checkboxid)}
                            }
                          />
                          <label
                            htmlFor={`checkbox-${item.checkboxid}`}
                            className="text-black font-normal text-[14px] ml-2"
                          >
                            {item.checkboxName}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div> */}
                      <div className="flex items-center">
                        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mr-3">
                          Availability:
                        </p>
                        <div className="flex items-center space-x-5">
                          {included.map((item) => (
                            <div key={item.checkboxid} className="flex items-center">
                              <input
                                className="accent-[#EA0056] size-3.5 4xl:size-5"
                                type="radio"
                                name="availability"  // all radios share the same name
                                id={`radio-${item.checkboxid}`}
                                value={item.checkboxName}
                                checked={formik.values.availability === item.checkboxName}
                                onChange={() => formik.setFieldValue("availability", item.checkboxName)}
                              />
                              <label
                                htmlFor={`radio-${item.checkboxid}`}
                                className="text-black font-normal text-[14px] ml-2"
                              >
                                {item.checkboxName}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Upload Box */}
                      {/* <div className="flex items-center">
                        <div className="relative w-[118px] h-[106px] mr-[25px]">
                          <label
                            htmlFor="file"
                            className="cursor-pointer w-full h-full rounded-[8px] bg-white flex flex-col items-center justify-center border border-[#ededed]"
                          >
                            <Image
                              className="mx-auto"
                              width={20}
                              height={17}
                              src="/images/services/uploadimage.svg"
                              alt="uploadimage"
                            />
                            <p className="text-[#505050] font-normal text-[14px] mt-2">
                              Upload Image
                            </p>
                          </label>
                          <input
                            type="file"
                            id="file"
                            name="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 size-full opacity-0 cursor-pointer"
                          />
                        </div>

                        <div className="flex gap-2 mt-4 flex-wrap">
                          {images.map((img, index) => (
                            <div key={index} className="w-[77px] h-[67px] relative">
                              <Image
                                className="size-full object-contain rounded-lg"
                                width={100}
                                height={100}
                                src={img.url}
                                alt={`upload-${index}`}
                              />
                              <span
                                onClick={() => removeImageServices(index)}
                                className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
                              >
                                x
                              </span>
                            </div>
                          ))}
                        </div>
                      </div> */}
                      <div className="flex items-center w-full">
                        <div className="flex flex-col w-full mr-2.5">
                          <label
                            htmlFor="deliveryTimeline"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Delivery timeline
                          </label>
                          <select
                            name="deliveryTimeline"
                            value={formik.values.deliveryTimeline}
                            onChange={formik.handleChange}
                            id="businesscategory"
                            className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                          >
                            <option value="" disabled>Select Delivery Timeline</option>
                            <option value="2 weeks">Within 2 weeks</option>
                            <option value="3 weeks">Within 3 weeks</option>
                            <option value="4 weeks">Within 4 weeks</option>
                            <option value="5 weeks">Within 5 weeks</option>
                          </select>
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="priceRange"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Price Range
                          </label>
                          <select
                            name="priceRange"
                            value={formik.values.priceRange}
                            onChange={formik.handleChange}
                            id="priceRange"
                            className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                          >
                            <option value="" disabled>Select Price Range</option>
                            <option value="full refund">Full Refund</option>
                            <option value="within 3 weeks">Within 3 weeks</option>
                            <option value="within 4 weeks">Within 4 weeks</option>
                            <option value="within 5 weeks">Within 5 weeks</option>
                          </select>
                        </div>
                      </div>

                      {/* show category based on selected category from add business  */}
                      {/* catering services  */}
                      <div>
                        {selectedCategory.length !== 0 && (
                          <h3 className="py-3 w-full text-black bg-[#ddddddee] px-4 mb-6 rounded-sm">
                            {selectedCategory}
                          </h3>
                        )}

                        {/* catering  */}
                        <div className="space-y-[25px]">
                          {selectedCategory === "catering" && <Catering prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                            onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "venues" && <Venue prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                            onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "photography" && (
                            <PhotographerForm prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                              onDataChange={handleCategoryDataChange}
                            />
                          )}
                          {selectedCategory === "bridalmakeup" && <BridalMakeup prefilledValues={prefilled} defaultValues={categoryForms["bridalmakeup"] || {}} onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "decorators" && <Decorators prefilledValues={prefilled} defaultValues={categoryForms["decorators"] || {}} onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "wedding-planners" && (
                            <WeddingPlannerForm prefilledValues={prefilled} defaultValues={categoryForms["bridalmakeup"] || {}}
                              onDataChange={handleCategoryDataChange} />
                          )}
                          {selectedCategory === "mehandi-artist" && (
                            <MehendiArtist prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                              onDataChange={handleCategoryDataChange} />
                          )}
                          {selectedCategory === "dj" && <DJForm prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                            onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "pre-wedding-photographers" && (
                            <PreWeddingPhotographersForm prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                              onDataChange={handleCategoryDataChange} />
                          )}
                          {selectedCategory === "wedding-pandit" && (
                            <WeddingPandit prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                              onDataChange={handleCategoryDataChange} />
                          )}
                          {selectedCategory === "cake" && <Cake prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                            onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "bartenders" && <Bartenders prefilledValues={prefilled} defaultValues={categoryForms["photography"] || {}}
                            onDataChange={handleCategoryDataChange} />}
                        </div>
                        <div className="pt-4">
                          <button
                            className="bg-[#EA0056] ml-auto cursor-pointer table text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* upload portfolio  */}
              <button
                onClick={() => handleAccordionToggle("upload-portfolio")} type="button"
                className={`cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-6 py-2 4xl:py-4  rounded-md w-full`}
              >
                <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                  Upload Portfolio
                </h3>
                <Image
                  className={`${openAccordion === "upload-portfolio" ? "rotate-180" : ""
                    } transition-all ease invert-[1]`}
                  width={18}
                  height={18}
                  src={"/images/downarrow.svg"}
                  alt="downarrow"
                />
              </button>
              {/* portfolio content  */}
              {openAccordion === "upload-portfolio" && (
                <div ref={portFolioRef}>
                  <PortfolioNavigationHeader />
                  <form onSubmit={handleAddPortfolio}>
                    <div className="space-y-[25px] bg-[#F2F2F2] px-[30px] py-6 rounded-[10px] mb-[20px]">
                      {/* file upload  */}
                      <div>
                        <div className="bg-white rounded-[8px] py-6 relative">
                          <label className="absolute inset-0 cursor-pointer">
                            <input
                              className="hidden"
                              type="file"
                              name="portfolioFiles"
                              id="portfolioFiles"
                              multiple
                              accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, application/msword, application/pdf"
                              onChange={handleFileChange}
                              onBlur={formik.handleBlur}
                            />
                          </label>

                          <Image
                            className="mx-auto"
                            width={20}
                            height={20}
                            src={"/images/services/servicesIcon.svg"}
                            alt="servicesIcon"
                          />

                          <p className="text-[#505050] font-medium text-[14px] text-center my-1.5">
                            Drag & drop files here, or click to select files<span className="text-red-500 text-bold">*</span>
                          </p>
                          <p className="text-[#787878] font-normal text-[12px] text-center">
                            Supported File Types: .jpg, .png
                          </p>
                          <div>
                            {/* {(!formik.values.portfolioFiles) && (
                              <p className="text-red-500 absolute text-sm mt-1 ml-1">
                                Portfolio files is required
                              </p>
                            )} */}
                          </div>
                        </div>
                        {/* Preview Thumbnails */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedFiles.map((file, index) => {
                            // lconst isImage = file.type?.startsWith("image/");
                            // const isPDF = file.type === "application/pdf";
                            // const isDoc = fie.type === "application/msword" || file.name?.endsWith(".doc") || file.name?.endsWith(".docx");
                            const isImage = file.type === 'image' ||
                              file.type?.startsWith("image/") ||
                              (typeof file.url === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.url)) ||
                              (typeof file.cloudinaryUrl === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.cloudinaryUrl));

                            const isPDF = file.type === 'application/pdf' ||
                              (typeof file.url === 'string' && file.url.includes('.pdf')) ||
                              (typeof file.cloudinaryUrl === 'string' && file.cloudinaryUrl.includes('.pdf'));

                            const isDoc = file.type === 'application/msword' ||
                              file.name?.endsWith(".doc") ||
                              file.name?.endsWith(".docx");

                            // Get the correct image source
                            const imageSrc = file.url || file.cloudinaryUrl;
                            console.log('cloudinary url', imageSrc);


                            return (
                              <div key={index} className="w-[77px] h-[67px] relative bg-[#f0f0f0] rounded-lg flex items-center justify-center">
                                {isImage ? (
                                  <Image
                                    className="size-full object-contain rounded-lg"
                                    width={100}
                                    height={100}
                                    src={imageSrc}
                                    alt={`upload-${index}`}
                                  />
                                ) : (
                                  <span className="text-[10px] text-center px-1 break-all">
                                    {isPDF ? "PDF" : isDoc ? "DOC" : "FILE"}
                                  </span>
                                )}
                                <span
                                  onClick={() => removeImage(index)}
                                  className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-red-500 text-[10px] text-white cursor-pointer"
                                >
                                  x
                                </span>
                              </div>
                            );
                          })}
                          {formik.errors.portfolioFiles && formik.touched.portfolioFiles && (
                            <p className="text-red-400 text-[14px] ml-1">{formik.errors.portfolioFiles}</p>
                          )}
                        </div>
                      </div>
                      {/* tags  */}
                      <div>
                        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
                          Tags<span className="text-red-500 text-bold">*</span>
                        </p>
                        <div className="rounded-[18px] bg-white py-4 px-4">
                          <div className="w-full mb-3">
                            <input
                              type="text"
                              name="portfolioTags"
                              onKeyDown={handleKeyDown}
                              placeholder="Type & press Enter to add tags"
                              className="w-full outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4 border-2 border-[#E5E5E5] rounded-[6px] focus:border-[#EA0056]"
                            />
                          </div>
                          <div className="flex items-center flex-wrap gap-3">
                            {Array.isArray(formik.values.portfolioTags) && formik.values.portfolioTags.map((tag, index) => (
                              <li
                                key={index}
                                className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]"
                              >
                                <span className="text-blue-500">
                                  {tag} </span>
                                <button
                                  className="cursor-pointer grid place-items-center size-[21px] bg-[#E5E5E5] rounded-full"
                                  onClick={() => removeTag(index)}
                                >
                                  <Image
                                    width={7}
                                    height={7}
                                    src={"/images/services/crossIcon.svg"}
                                    alt="crossIcon"
                                  />
                                </button>

                              </li>
                            ))}
                          </div>
                          {/* <ul className="flex items-center flex-wrap gap-3"> */}
                          {/* {tags.map((tag, index) => (
                              <li
                                key={index}
                                className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]"
                              >
                                <span className="text-blue-500">{tag}</span>
                                <button
                                  className="cursor-pointer grid place-items-center size-[21px] bg-[#E5E5E5] rounded-full"
                                  onClick={() => removeTag(index)}
                                >
                                  <Image
                                    width={7}
                                    height={7}
                                    src={"/images/services/crossIcon.svg"}
                                    alt="crossIcon"
                                  />
                                </button>
                              </li>
                            ))} */}

                          {/* <li className="flex items-center"> */}
                          {/* <input
                                type="text"
                                name="portfolioTags"
                                className="outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4"
                                placeholder="Type & press Enter"
                                value={formik.values.portfolioTags}
                                onChange={(e) => { setInputValue(e.target.value), formik.handleChange(e) }}
                                onKeyDown={handleKeyDown}
                              /> */}
                          {/* <input
                                type="text"
                                name="portfolioTags"
                                onKeyDown={handleKeyDown}
                                placeholder="Add tags..."
                                className="outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4"
                              />
                            </li> */}
                          {/* </ul> */}
                          {formik.errors.portfolioTags && formik.touched.portfolioTags && (
                            <p className="text-red-400 text-[14px]  ml-1">{formik.errors.portfolioTags}</p>
                          )}
                        </div>
                      </div>

                      {/* event type & location  */}
                      <div className="flex items-center w-full">
                        <div className="flex flex-col w-full mr-2.5">
                          <label
                            htmlFor="portfolioEventType"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Event Type<span className="text-red-500 text-bold">*</span>
                          </label>
                          <select
                            name="portfolioEventType"
                            id="portfolioEventType"
                            value={formik.values.portfolioEventType}
                            onChange={formik.handleChange}
                            className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                          >
                            <option value="" disabled>
                              Select Event Type
                            </option>
                            <option value="engagement">Engagement</option>
                            <option value="saab">Love</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                          <div>
                            {(formik.touched.portfolioEventType && formik.errors.portfolioEventType) && (
                              <p className="text-red-500 absolute text-sm mt-1 ml-1">
                                {formik.errors.portfolioEventType}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="portfolioLocation"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Location<span className="text-red-500 text-bold">*</span>
                          </label>
                          <div className="relative">
                            <input
                              className="w-full h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[25px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                              placeholder="Enter Location"
                              type="text"
                              name="portfolioLocation"
                              value={formik.values.portfolioLocation}
                              onChange={formik.handleChange}
                              id="portfolioLocation"
                            />
                            <Image
                              className="absolute top-1/2 left-2 -translate-y-1/2"
                              width={12}
                              height={14}
                              src={"/images/location.svg"}
                              alt="location"
                            />
                            <div>
                              {(formik.touched.portfolioLocation && formik.errors.portfolioLocation) && (
                                <p className="text-red-500 absolute text-sm mt-1 ml-1">
                                  {formik.errors.portfolioLocation}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* description  */}
                      <div className="flex flex-col w-full mr-[25px]">
                        <label
                          htmlFor="portfolioDescription"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Description<span className="text-red-500 text-bold">*</span>
                        </label>
                        <textarea
                          name="portfolioDescription"
                          value={formik.values.portfolioDescription}
                          onChange={formik.handleChange}
                          className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                          placeholder="Write your short description"
                        ></textarea>
                        <div>
                          {(formik.touched.portfolioDescription && formik.errors.portfolioDescription) && (
                            <p className="text-red-500 absolute text-sm mt-1 ml-1">
                              {formik.errors.portfolioDescription}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center mt-2 justify-end">
                        <button type="submit" className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
                          Save & Next
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* <div className="flex items-center mt-2 justify-end">
              <button type="submit" className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
                Save & Publish
              </button>
            </div> */}
              <button
                type="button"
                onClick={() => handleAccordionToggle("upload-gallery")}
                className={`w-full cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-5 py-2 4xl:py-4 rounded-md`}
              >
                <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                  Upload Gallery
                </h3>
                <Image
                  className={`${openAccordion === "upload-gallery" ? "rotate-180" : ""
                    } transition-all ease invert-[1]`}
                  width={18}
                  height={18}
                  src={"/images/downarrow.svg"}
                  alt="downarrow"
                />
              </button>
              {openAccordion === "upload-gallery" && (
                <form onSubmit={handleAddGalleryFile}>
                  <div className="bg-[#F2F2F2] px-5 py-6 rounded-[10px] mb-[20px]">
                    <div
                      className="bg-white rounded-[8px] py-8 px-5 w-full flex flex-col items-center justify-center border-2 border-dashed border-[#dadada] cursor-pointer transition hover:bg-[#f5f5f5]"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        handleGalleryFileChange({
                          target: { files: e.dataTransfer.files },
                        });
                      }}
                    >
                      <label
                        htmlFor="gallery-upload"
                        className="w-full flex flex-col items-center justify-center cursor-pointer"
                      >
                        <span className="text-[#EA0056] text-4xl mb-2 border border-[#dadada] rounded-full bg-white w-14 h-14 flex items-center justify-center">
                          +
                        </span>
                        <p className="text-[#505050] font-medium text-[15px] mb-1">
                          Drag & drop images here, or click to upload
                        </p>
                        <p className="text-[#787878] font-normal text-[12px]">
                          Supported File Types: .jpg, .png
                        </p>
                        <input
                          id="gallery-upload"
                          name="galleryImages"
                          type="file"
                          multiple
                          accept=".jpg, .jpeg, .png"
                          onChange={(e) => {
                            handleGalleryFileChange(e);
                            e.target.value = "";
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Preview Thumbnails */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {galleryFiles.map((img, index) => {
                        console.log('gallery imagessss', img);

                        const isImage = /\.(jpe?g|png)$/i.test(img?.file?.name);

                        return (
                          <div
                            key={index}
                            className="w-[77px] h-[67px] relative flex items-center justify-center bg-white border rounded-lg overflow-hidden"
                          >
                            {isImage && (
                              <Image
                                className="size-full object-contain"
                                width={100}
                                height={100}
                                src={img.url}
                                alt={`gallery-upload-${index}`}
                              />
                            )}

                            {/* Progress overlay */}
                            {galleryUploadProgress[index] !== undefined &&
                              galleryUploadProgress[index] < 100 && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                  <span className="text-white font-bold text-xs">
                                    {galleryUploadProgress[index]}%
                                  </span>
                                </div>
                              )}

                            {/* Remove cross */}
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="absolute top-1 right-1 size-4 flex items-center justify-center rounded-full bg-[#505050] text-[10px] text-white hover:bg-red-600 transition"
                            >
                              ×
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center mt-2 justify-end">
                      <button
                        type="submit"
                        className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]"
                      >
                        Save & Publish
                      </button>
                    </div>
                  </div>
                </form>
              )}


            </div>

          </div>
          <div className="ml-3 w-[30%]">
            <ProcessBarMyBusiness
              processes={businessProcesses}
              onProcessUpdate={setBusinessProcesses}
              editable={false}
            />
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default UpdateBusiness;
