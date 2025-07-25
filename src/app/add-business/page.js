"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import toast from "react-hot-toast";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { State } from "country-state-city";
import ProcessBarMyBusiness from "@/components/widgets/ProcessBarMyBusinsess";



const Page = () => {
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
  const [uploadedImageUrls, setUploadedImageUrls] = useState([])
  const [allBusiness, setAllBusiness] = useState([])
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
      total: totalInputs,
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

  useEffect(() => {
    setBusinessProcesses(
      businessSections.map((section) => {
        let count, total;

        if (section.key === "services") {
          count = '';
          total = totalInputs;
        } else if (section.key === "opening-hours") {
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
  }, [formik.values, selectedCategory, totalInputs, selectedFiles, galleryFiles]);


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
      const fields = getAllGalleryFiles(); // ✅ use your function
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

    const filled = section.fields.filter((field) => {
      const value = formik.values[field];
      if (Array.isArray(value)) return value.length > 0;
      return value !== undefined && value !== null && value !== "";
    }).length;

    return filled;
  };





  useEffect(() => {
    const getUniqueNamesFromRef = (ref) => {
      const elements = ref?.current?.querySelectorAll('input[name], select[name], textarea[name]');
      const names = new Set();
      elements?.forEach((el) => {
        if (el.name) names.add(el.name);
      });
      return names;
    };

    const sections = [
      { name: 'Add Business', ref: addBusinessRef },
      { name: 'Opening Hours', ref: openingHoursRef },
      { name: 'Portfolio', ref: portFolioRef },
    ];

    let allNames = new Set();

    console.log('================== FIELD SUMMARY ==================');

    sections.forEach(({ name, ref }) => {
      const names = getUniqueNamesFromRef(ref);
      names.forEach(n => allNames.add(n));

      console.log(`\n📂 Section: ${name}`);
      console.log(`→ Unique Fields Count: ${names.size}`);
      if (names.size > 0) {
        console.log('→ Field Names:');
        Array.from(names).forEach((field, i) => {
          console.log(`   ${i + 1}. ${field}`);
        });
      } else {
        console.log('→ No fields found.');
      }
    });

    console.log('\n✅ Total Unique Field Names Across All Sections:', allNames.size);
    console.log('===================================================');
  }, []);


  const handleCategoryDataChange = useCallback((data) => {
    setCategoryForms((prev) => ({
      ...prev,
      ...data,
    }));
  }, []);


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

 const handleFileChange = (e) => {
  const files = Array.from(e.target.files);

  const newFiles = files.map((file) => ({
    file,
    url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
    name: file.name,
    type: file.type,
  }));

  setSelectedFiles((prev) => [...prev, ...newFiles]);

  const existingFiles = Array.isArray(formik.values.portfolioFiles)
    ? formik.values.portfolioFiles
    : [];

  formik.setFieldValue("portfolioFiles", [...existingFiles, ...files]);
};




  const removeImage = (index) => {
    const updated = [...selectedFiles];
    updated.splice(index, 1);
    setSelectedFiles(updated);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags((prev) => [...prev, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
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
      languages,
      travelAvailability } = formik.values

    const businessData = {
      name: businessName,
      address: businessAddress,
      category: selectedCategory,
      city,
      state,
      pincode: pin,
      languagesSpoken: languages,
    };

    console.log('businessData', businessData)

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/add-business`,
        businessData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("businessAdded", response);

      if (response.status === 201) {
        toast.success("Business details added successfully");
        localStorage.setItem('addBusinessSubmitted', 'true')
        setOpeningHoursButton(true)
      }
    } catch (error) {
      console.error("Error adding business:", error);
      toast.error("Failed to add business. Please try again.");
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
    console.log("opening hours", serviceInfo)
    // const formData = new FormData();
    // formData.append("serviceInfo", JSON.stringify(serviceInfo));
    // formData.append("portfolioInfo", JSON.stringify(portfolioInfo));

    // images.forEach(({ file }) => {
    //   formData.append("images", file);
    // });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/create-service`,
        { serviceInfo, category: selectedCategory },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success("Service info added successfully!")
        localStorage.setItem('isServiceSubmitted', 'true')
        setPortFolioButton(true)
        // setopenAccordion('services')
      }
    } catch (error) {
      console.error("Error adding service info:", error);
      toast.error("Failed to add service info. Please try again.");
    }
  }

  const handleAddPortfolio = async (e) => {
  e.preventDefault();
  const {
    portfolioTags,
    portfolioDescription,
    portfolioLocation,
    portfolioEventType,
    portfolioFiles,
  } = formik.values;

  const formData = new FormData();

  // Append text fields
  formData.append("portfolioTags", portfolioTags);
  formData.append("portfolioDescription", portfolioDescription);
  formData.append("portfolioLocation", portfolioLocation);
  formData.append("portfolioEventType", portfolioEventType);
  formData.append("category", selectedCategory); // ✅ category included here

  // Append each file
  portfolioFiles.forEach((file) => {
    formData.append("portfolioFiles", file); // ✅ use same field name as backend
  });

  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/update-portfolio`,
      formData, // ✅ send formData directly
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Portfolio info saved successfully!");
    }
  } catch (error) {
    console.error("Error uploading portfolio:", error);
    toast.error("Failed to add service info. Please try again.");
  }
};

  const handleAddOpeningHours = async (e) => {
    e.preventDefault()
    const { openingHours } = formik.values
    console.log("opening hours", openingHours)
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
      toast.error("Failed to add opening hours. Please try again.");
    }
  }

  const handleAddGalleryFile = async(e) => {
    e.preventDefault()
    console.log('gallery images url',formik.values.allGalleryFiles)
    //  try {
    //   const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/update-business-image`,{
    //     imageUrls:formik.values.allGalleryFiles,
    //     category:selectedCategory
    //   })
    //  } catch (error) {
      
    //  }
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

  setGalleryFiles(currentGallery);
  setGalleryUploadProgress(currentProgress);

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    const currentIndex = galleryFiles.length + i;

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

      formik.setFieldValue("allGalleryFiles", [
        ...formik.values.allGalleryFiles,
        url,
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
                          Business name
                        </label>
                        <input
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                          placeholder="Name"
                          type="text"
                          value={formik.values.businessName}
                          onChange={formik.handleChange}
                          name="businessName"
                          id="businessName"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="businesscategory"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Business Category
                        </label>
                        <select
                          value={selectedCategory}
                          onChange={handleCategoryChange}
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
                      </div>
                    </div>
                    <div className="flex flex-col relative">
                      <label
                        htmlFor="businessAddress"
                        className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                      >
                        Business Address
                      </label>

                      <div className="relative">
                        <textarea
                          placeholder="Choose your location"
                          value={formik.values.businessAddress}
                          onChange={formik.handleChange}
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
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-[10px]">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="city"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          City
                        </label>
                        <input
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                          placeholder="Enter city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          type="text"
                          name="city"
                          id="city"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="state"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          State
                        </label>
                        <select
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          id="state"
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                        > <option value="" disabled>
                            Select State
                          </option>
                          {indianStates.map(state => (
                            <option key={state.isoCode} value={state.name}>{state.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="pin"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Pin code
                        </label>
                        <input
                          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                          placeholder="Enter Pincode"
                          value={formik.values.pin}
                          onChange={formik.handleChange}
                          type="text"
                          name="pin"
                          id="pin"
                        />
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
                          Languages Spoken
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
                              onChange={formik.handleChange}
                              disabled={!entry.isOpen}
                              className="absolute opacity-0 pointer-events-none"
                            />
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
                              onChange={formik.handleChange}
                              disabled={!entry.isOpen}
                              className="absolute opacity-0 pointer-events-none"
                            />
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
                          placeholder="add your description"
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
                                checked={formik.values.availability === item.checkboxid}
                                onChange={() => formik.setFieldValue("availability", item.checkboxid)}
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
                          {selectedCategory === "catering" && <Catering />}
                          {selectedCategory === "venues" && <Venue />}
                          {selectedCategory === "photography" && (
                            <PhotographerForm defaultValues={categoryForms["photography"] || {}}
                              onDataChange={handleCategoryDataChange} />
                          )}
                          {selectedCategory === "bridalmakeup" && <BridalMakeup defaultValues={categoryForms["bridalmakeup"] || {}} onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "decorators" && <Decorators defaultValues={categoryForms["decorators"] || {}} onDataChange={handleCategoryDataChange} />}
                          {selectedCategory === "wedding-planners" && (
                            <WeddingPlannerForm />
                          )}
                          {selectedCategory === "mehandi-artist" && (
                            <MehendiArtist />
                          )}
                          {selectedCategory === "dj" && <DJForm />}
                          {selectedCategory === "pre-wedding-photographers" && (
                            <PreWeddingPhotographersForm />
                          )}
                          {selectedCategory === "wedding-pandit" && (
                            <WeddingPandit />
                          )}
                          {selectedCategory === "cake" && <Cake />}
                          {selectedCategory === "bartenders" && <Bartenders />}
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
                            Drag & drop files here, or click to select files
                          </p>
                          <p className="text-[#787878] font-normal text-[12px] text-center">
                            Supported File Types: .jpg, .png
                          </p>
                        </div>
                        {/* Preview Thumbnails */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedFiles.map((file, index) => {
                            const isImage = file.type?.startsWith("image/");
                            const isPDF = file.type === "application/pdf";
                            const isDoc = file.type === "application/msword" || file.name?.endsWith(".doc") || file.name?.endsWith(".docx");

                            return (
                              <div key={index} className="w-[77px] h-[67px] relative bg-[#f0f0f0] rounded-lg flex items-center justify-center">
                                {isImage ? (
                                  <Image
                                    className="size-full object-contain rounded-lg"
                                    width={100}
                                    height={100}
                                    src={file.url}
                                    alt={`upload-${index}`}
                                  />
                                ) : (
                                  <span className="text-[10px] text-center px-1 break-all">
                                    {isPDF ? "PDF" : isDoc ? "DOC" : "FILE"}
                                  </span>
                                )}
                                <span
                                  onClick={() => removeImage(index)}
                                  className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
                                >
                                  x
                                </span>
                              </div>
                            );
                          })}

                        </div>
                      </div>
                      {/* tags  */}
                      <div>
                        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
                          Tags
                        </p>
                        <div className="rounded-[18px] bg-white py-4 px-4">
                          <ul className="flex items-center flex-wrap gap-3">
                            {tags.map((tag, index) => (
                              <li
                                key={index}
                                className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]"
                              >
                                <span>{tag}</span>
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
                            <li className="flex items-center">
                              <input
                                type="text"
                                name="portfolioTags"
                                className="outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4"
                                placeholder="Type & press Enter"
                                value={formik.values.portfolioTags}
                                onChange={(e) => { setInputValue(e.target.value), formik.handleChange(e) }}
                                onKeyDown={handleKeyDown}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* event type & location  */}
                      <div className="flex items-center w-full">
                        <div className="flex flex-col w-full mr-2.5">
                          <label
                            htmlFor="portfolioEventType"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Event Type
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
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="portfolioLocation"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Location
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
                          </div>
                        </div>
                      </div>

                      {/* description  */}
                      <div className="flex flex-col w-full mr-[25px]">
                        <label
                          htmlFor="portfolioDescription"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Description
                        </label>
                        <textarea
                          name="portfolioDescription"
                          value={formik.values.portfolioDescription}
                          onChange={formik.handleChange}
                          className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                          placeholder="Write your short description"
                        ></textarea>
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
                      onClick={() =>
                        document.getElementById("gallery-upload").click()
                      }
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
                        const isImage = /\.(jpe?g|png)$/i.test(img.file.name);

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

export default Page;
