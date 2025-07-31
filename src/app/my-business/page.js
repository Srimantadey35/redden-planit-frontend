"use client";
import React, { useEffect, useRef, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Venue from "@/components/business-categories/Venue";
import Catering, { cateringFields } from "@/components/business-categories/Catering";
import PhotographerForm, { photographyFields } from "@/components/business-categories/Photography";
import BridalMakeup from "@/components/business-categories/BridalMakeup";
import Decorators from "@/components/business-categories/Decorators";
import WeddingPlannerForm from "@/components/business-categories/WeddingPlannerForm";
import MehendiArtist from "@/components/business-categories/MehandiArtist";
import DJForm from "@/components/business-categories/Dj";
import PreWeddingPhotographersForm from "@/components/business-categories/PreWeddingPhotographersForm";
import WeddingPandit from "@/components/business-categories/WeddingPandit";
import Cake from "@/components/business-categories/Cake";
import Bartenders from "@/components/business-categories/Bartenders";
import ProcessBarMyBusiness from "@/components/widgets/ProcessBarMyBusinsess";

const Page = () => {
  const [photographyForm, setPhotographyForm] = useState({});
  const [isToggled, setIsToggled] = useState(false);
  const [openAccordion, setopenAccordion] = useState("add-business");
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryUploadProgress, setGalleryUploadProgress] = useState({}); 
  const [totalInputs, setTotalInputs] = useState(6);
// {index: percent}

  console.log("selectedCategory", selectedCategory);
  const categoryRef = useRef(null);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleFieldCount = (countFromChild) => {
    setTotalInputs((prev) => prev + countFromChild);
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
  if (!value) return "--:--";
  const [hours, minutes] = value.split(":");
  if (!hours || !minutes) return "--:--";
  const h = parseInt(hours, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  const formattedHour = h % 12 || 12;
  return `${String(formattedHour).padStart(2, "0")}:${minutes} ${ampm}`;
};

  // services
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setSelectedFiles((prev) => [...prev, ...images]);
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

  const handleGalleryFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setGalleryFiles((prev) => [...prev, ...newImages]);
    newImages.forEach((img, i) => {
      uploadGalleryImage(img.file, galleryFiles.length + i);
    });
  };

  const removeGalleryImage = (index) => {
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
  };
  const [isShowAddBusiness, setisShowAddBusiness] = useState(false);

  // count the inputs as per the fillds

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
      fields: [
        "business_name",
        "business_category",
        "business_address",
        "business_city",
        "business_state",
        "business_pin",
        "business_languages",
      ],
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
      total:totalInputs,
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

  // 2. Track all field values in a single state object
  const [formValues, setFormValues] = useState({
    business_name: "",
    business_category: "",
    business_address: "",
    business_city: "",
    business_state: "",
    business_pin: "",
    business_languages: "",
    fromTime: "",
    toTime: "",
    service_category: "",
    service_name: "",
    service_whatsIncluded: "",
    service_availability: checkedItems,
    service_deliveryTimeline: "",
    service_priceRange: "",
    portfolioImages: selectedFiles,
    tags: tags,
    eventType: "",
    location: "",
    description: "",
    galleryImages: galleryFiles,
  });

  // 3. Sync array states to formValues
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      portfolioImages: selectedFiles,
      galleryImages: galleryFiles,
      tags,
      service_availability: checkedItems[0] || "", // store single value
    }));
  }, [selectedFiles, galleryFiles, tags, checkedItems]);

  // 4. Helper to count filled fields for each section
  const getFilledCount = (section) => {
    let count = 0;
    section.fields.forEach((field) => {
      const value = formValues[field];
      if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (typeof value === "string") {
        if (value.trim() !== "") count++;
      } else if (value) {
        count++;
      }
    });
    return count;
  };
  console.log('input valuessssssss',totalInputs)
  // 5. Update businessProcesses dynamically
  useEffect(() => {
  setBusinessProcesses(
    businessSections.map((section) => ({
      key: section.key,
      title: section.title,
      icon: section.icon,
      count: section.key === "services"
        ? getServicesFilledCount()
        : getFilledCount(section),
      total: section.key === "services"
        ? totalInputs
        : section.fields.length,
      completed: (section.key === "services"
        ? getServicesFilledCount() === totalInputs
        : getFilledCount(section) === section.fields.length),
    }))
  );
}, [formValues, photographyForm, selectedCategory, totalInputs]);
   

  useEffect(() => {
    setSelectedCategory(formValues.business_category);
    setTotalInputs(6);
  }, [formValues.business_category]);


  const handlePhotographyChange = (key, value) => {
    setPhotographyForm(prev => ({ ...prev, [key]: value }));
  };

  const filledFieldsCount = photographyFields.filter(
    (field) =>
      photographyForm[field] &&
      (Array.isArray(photographyForm[field])
        ? photographyForm[field].length > 0
        : photographyForm[field] !== "")
  ).length;
  const totalFieldsCount = photographyFields.length;

  const getCategoryFields = () => {
    switch (selectedCategory) {
      case "catering":
        return cateringFields;
      case "photography":
        return photographyFields;
      // Add other cases for each category component
      default:
        return [];
    }
  };

  const servicesBaseFields = [
    "service_category",
    "service_name",
    "service_whatsIncluded",
    "service_availability",
    "service_deliveryTimeline",
    "service_priceRange",
  ];

  const servicesFields = [...servicesBaseFields, ...getCategoryFields()];

  const getCategoryForm = () => {
    switch (selectedCategory) {
      case "photography":
        return photographyForm;
      // Add other cases for other categories
      default:
        return {};
    }
  };

  const getServicesFilledCount = () => {
    let count = 0;
    servicesBaseFields.forEach((field) => {
      const value = formValues[field];
      if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (typeof value === "string") {
        if (value.trim() !== "") count++;
      } else if (value) {
        count++;
      }
    });

    // Count category fields
    const categoryFields = getCategoryFields();
    const categoryForm = getCategoryForm();

    categoryFields.forEach((field) => {
      const value = categoryForm[field];
      if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (typeof value === "string") {
        if (value && value.trim() !== "") count++;
      } else if (value) {
        count++;
      }
    });

    return count;
  };

 

  return (
    <div>
      <Layouts>
        <div className="flex justify-between">
          <div className="w-full max-w-full px-5 4xl:px-[7rem] 4xl:max-w-[1440px] mx-auto min-h-screen flex flex-col py-8">
            {!isShowAddBusiness && (
              <div
                onClick={() => setisShowAddBusiness(true)}
                className="cursor-pointer px-[60px] py-6 bg-[#F2F2F2] rounded-[10px] mb-5 w-fit h-[50vh] flex items-center justify-center flex-col"
              >
                {/* Plus sign placeholder with border and grey background */}
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#dadada] bg-[#f5f5f5] rounded-[8px] py-6 mb-5 w-[120px] h-[120px]">
                  <span className="text-[#EA0056] text-6xl font-bold">+</span>
                </div>
                <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
                  Add Your Business
                </button>
              </div>
            )}

            {isShowAddBusiness && (
              <div className="w-full flex">
                <form className="w-[70%]">
                  {/* add-business  */}
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle("add-business")}
                    className={`w-full cursor-pointer flex items-center justify-between  mb-3 bg-[#ededed] px-5 py-2 4xl:py-4 rounded-md`}
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
                    <div className="px-5 py-6 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
                      <div>
                        <div className="space-y-[18px]">
                          <div className="flex items-center w-full">
                            <div className="flex flex-col w-full mr-[10px]">
                              <label
                                htmlFor="businessname"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Business name
                              </label>
                              <input
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                                placeholder="Enter your business name"
                                type="text"
                                name="business_name" // should match formValues key
                                id="business_name"
                                value={formValues.business_name}
                                onChange={e =>
                                  setFormValues(prev => ({
                                    ...prev,
                                    business_name: e.target.value
                                  }))
                                }
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
                                value={formValues.business_category}
                                onChange={(e) =>
                                  setFormValues((prev) => ({
                                    ...prev,
                                    business_category: e.target.value,
                                  }))
                                }
                                name="businesscategory"
                                id="businesscategory"
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                              >
                                <option value="" disabled>
                                  Select Category
                                </option>
                                <option value="catering">
                                  Catering Services
                                </option>
                                <option value="venues">Venues</option>
                                <option value="photography">Photography</option>
                                <option value="bridalmakeup">
                                  Bridal Makeup
                                </option>
                                <option value="decorators">Decorators</option>
                                <option value="wedding-planners">
                                  Wedding Planners
                                </option>
                                <option value="mehandi-artist">
                                  Mehandi Artist
                                </option>
                                <option value="dj">Dj&apos;s</option>
                                <option value="pre-wedding-photographers">
                                  Pre Wedding Photographers
                                </option>
                                <option value="wedding-pandit">
                                  Wedding Pandit&apos;s
                                </option>
                                <option value="cake">Cake</option>
                                <option value="bartenders">Bartenders</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex flex-col relative">
                            <label
                              htmlFor="businessaddress"
                              className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                            >
                              Business Address
                            </label>

                            <div className="relative">
                              <textarea
                                placeholder="Enter your business address"
                                name="businessaddress"
                                id="businessaddress"
                                value={formValues.business_address}
                                onChange={e =>
                                  setFormValues(prev => ({
                                    ...prev,
                                    business_address: e.target.value
                                  }))
                                }
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

                          <div className="grid grid-cols-3 gap-2.5">
                            <div className="flex flex-col">
                              <label
                                htmlFor="Phone"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                City
                              </label>
                              <input
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                                placeholder="Enter the city name"
                                type="text"
                                name="City"
                                id="City"
                                value={formValues.business_city}
                                onChange={(e) =>
                                  setFormValues((prev) => ({
                                    ...prev,
                                    business_city: e.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div className="flex flex-col">
                              <label
                                htmlFor="Phone"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                State
                              </label>
                              <select
                                name="cars"
                                id="cars"
                                value={formValues.business_state}
                                onChange={(e) =>
                                  setFormValues((prev) => ({
                                    ...prev,
                                    business_state: e.target.value,
                                  }))
                                }
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                              >
                                <option value="" disabled>
                                  Enter your state name
                                </option>
                                <option value="andhra-pradesh">
                                  Andhra Pradesh
                                </option>
                                <option value="arunachal-pradesh">
                                  Arunachal Pradesh
                                </option>
                                <option value="assam">Assam</option>
                                <option value="bihar">Bihar</option>
                                <option value="chhattisgarh">
                                  Chhattisgarh
                                </option>
                                <option value="goa">Goa</option>
                                <option value="gujarat">Gujarat</option>
                                <option value="haryana">Haryana</option>
                                <option value="himachal-pradesh">
                                  Himachal Pradesh
                                </option>
                                <option value="jharkhand">Jharkhand</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="kerala">Kerala</option>
                                <option value="madhya-pradesh">
                                  Madhya Pradesh
                                </option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="manipur">Manipur</option>
                                <option value="meghalaya">Meghalaya</option>
                                <option value="mizoram">Mizoram</option>
                                <option value="nagaland">Nagaland</option>
                                <option value="odisha">Odisha</option>
                                <option value="punjab">Punjab</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="sikkim">Sikkim</option>
                                <option value="tamil-nadu">Tamil Nadu</option>
                                <option value="telangana">Telangana</option>
                                <option value="tripura">Tripura</option>
                                <option value="uttar-pradesh">
                                  Uttar Pradesh
                                </option>
                                <option value="uttarakhand">Uttarakhand</option>
                                <option value="west-bengal">West Bengal</option>
                                <option value="andaman-nicobar">
                                  Andaman and Nicobar Islands
                                </option>
                                <option value="chandigarh">Chandigarh</option>
                                <option value="dadra-nagar-haveli">
                                  Dadra and Nagar Haveli and Daman and Diu
                                </option>
                                <option value="delhi">Delhi</option>
                                <option value="jammu-kashmir">
                                  Jammu and Kashmir
                                </option>
                                <option value="ladakh">Ladakh</option>
                                <option value="lakshadweep">Lakshadweep</option>
                                <option value="puducherry">Puducherry</option>
                              </select>
                            </div>
                            <div className="flex flex-col">
                              <label
                                htmlFor="Pin"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Pin code
                              </label>
                              <input
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                                placeholder="Enter your pin code"
                                type="text"
                                name="Pin"
                                id="Pin"
                                value={formValues.business_pin}
                                onChange={(e) =>
                                  setFormValues((prev) => ({
                                    ...prev,
                                    business_pin: e.target.value,
                                  }))
                                }
                              />
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex flex-col w-[40%]">
                              <label
                                htmlFor="Languages"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Languages Spoken
                              </label>
                              <select
                                name="Languages"
                                id="Languages"
                                value={formValues.business_languages}
                                onChange={(e) =>
                                  setFormValues((prev) => ({
                                    ...prev,
                                    business_languages: e.target.value,
                                  }))
                                }
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                              >
                                <option value="">Select Language</option>
                                <option value="english">English</option>
                                <option value="bengali">Bengali</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* opening hours  */}
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle("opening-hours")}
                    className={`w-full cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-5 py-2 4xl:py-4  rounded-md`}
                  >
                    <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                      Opening Hours
                    </h3>
                    <Image
                      className={`${
                        openAccordion === "opening-hours" ? "rotate-180" : ""
                      } transition-all ease invert-[1]`}
                      width={18}
                      height={18}
                      src={"/images/downarrow.svg"}
                      alt="downarrow"
                    />
                  </button>
                  {/* opening hours content  */}
                  {openAccordion === "opening-hours" && (
                    <div className="px-5 py-5 bg-[#F2F2F2] rounded-[10px] mb-[20px]">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 w-fit">
                            <div
                              onClick={() => setIsToggled(!isToggled)}
                              className={`w-[44px] h-[24px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                                isToggled ? "bg-[#EA0056]" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ${
                                  isToggled
                                    ? "translate-x-[20px]"
                                    : "translate-x-0"
                                } `}
                              ></div>
                            </div>
                            <p className="text-black font-medium text-[16px]">
                              Monday
                            </p>
                          </div>
                          <div className="flex w-[70%] mx-auto">
                            {/* From Time Picker */}
                            <div className="relative w-full mr-2.5">
                              <div className="flex items-center justify-between h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px] w-full">
                                <span className="text-[#525252] text-[14px] font-medium">
                                  From
                                </span>
                                <span
                                  className="text-[#525252] text-[14px] font-medium cursor-pointer"
                                  onClick={() => fromInputRef.current?.showPicker()}
                                >
                                  {formatTime(formValues.fromTime)}
                                </span>
                              </div>
                              <input
                                ref={fromInputRef}
                                type="time"
                                name="fromTime"
                                value={formValues.fromTime}
                                onChange={e => setFormValues(prev => ({
                                  ...prev,
                                  fromTime: e.target.value
                                }))}
                                className="absolute opacity-0 pointer-events-none"
                              />
                            </div>

                            {/* To Time Picker */}
                            <div className="relative w-full">
                              <div className="flex items-center justify-between w-full h-[42px] px-[16px] bg-white border border-[#E6E6E6] rounded-[8px]">
                                <span className="text-[#525252] text-[14px] font-medium">
                                  To
                                </span>
                                <span
                                  className="text-[#525252] text-[14px] font-medium cursor-pointer"
                                  onClick={() => toInputRef.current?.showPicker()}
                                >
                                  {formatTime(formValues.toTime)}
                                </span>
                              </div>
                              <input
                                ref={toInputRef}
                                type="time"
                                name="toTime"
                                value={formValues.toTime}
                                onChange={e => setFormValues(prev => ({
                                  ...prev,
                                  toTime: e.target.value
                                }))}
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
                    </div>
                  )}

                  {/* services  */}
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle("services")}
                    className={`w-full cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-5 py-2 4xl:py-4  rounded-md`}
                  >
                    <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                      Services
                    </h3>
                    <Image
                      className={`${
                        openAccordion === "services" ? "rotate-180" : ""
                      } transition-all ease invert-[1]`}
                      width={18}
                      height={18}
                      src={"/images/downarrow.svg"}
                      alt="downarrow"
                    />
                  </button>
                  {/* services content  */}
                  {openAccordion === "services" && (
                    <div>
                      <div>
                        <div className="space-y-[18px] bg-[#F2F2F2] px-5 py-9 rounded-[10px] mb-[24px]">
                          {/* Business Category */}
                          <div className="flex items-center w-full">
                            <div className="flex flex-col w-full mr-2.5">
                              <label
                                htmlFor="service_category"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Business Category
                              </label>
                              <select
                                name="service_category"
                                id="service_category"
                                value={formValues.service_category}
                                onChange={e =>
                                  setFormValues(prev => ({
                                    ...prev,
                                    service_category: e.target.value
                                  }))
                                }
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                              >
                                <option value="">Select Category</option>
                                <option value="catering">Catering Services</option>
                                <option value="venues">Venues</option>
                                <option value="photography">Photography</option>
                                <option value="bridalmakeup">Bridal Makeup</option>
                                <option value="decorators">Decorators</option>
                                <option value="wedding-planners">Wedding Planners</option>
                                <option value="mehandi-artist">Mehandi Artist</option>
                                <option value="dj">Dj&apos;s</option>
                                <option value="pre-wedding-photographers">Pre Wedding Photographers</option>
                                <option value="wedding-pandit">Wedding Pandit&apos;s</option>
                                <option value="cake">Cake</option>
                                <option value="bartenders">Bartenders</option>
                              </select>
                            </div>
                            <div className="flex flex-col w-full">
                              <label
                                htmlFor="service_name"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Business Name
                              </label>
                              <input
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                                placeholder="Photography"
                                type="text"
                                name="service_name"
                                id="service_name"
                                value={formValues.service_name}
                                onChange={e =>
                                  setFormValues(prev => ({
                                    ...prev,
                                    service_name: e.target.value
                                  }))
                                }
                              />
                            </div>
                          </div>
                          {/* What's Included */}
                          <div className="flex flex-col w-full">
                            <label
                              htmlFor="service_whatsIncluded"
                              className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                            >
                              What&apos;s Included
                            </label>
                            <textarea
                              className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                              placeholder="add your description"
                              name="service_whatsIncluded"
                              id="service_whatsIncluded"
                              value={formValues.service_whatsIncluded}
                              onChange={e =>
                                setFormValues(prev => ({
                                  ...prev,
                                  service_whatsIncluded: e.target.value
                                }))
                              }
                            ></textarea>
                          </div>
                          {/* Availability */}
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
                                    name="service_availability"
                                    id={`radio-${item.checkboxid}`}
                                    checked={formValues.service_availability === item.checkboxid}
                                    onChange={() =>
                                      setCheckedItems([item.checkboxid]) // update checkedItems to single value array
                                    }
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
                          {/* Delivery Timeline */}
                          <div className="flex items-center w-full">
                            <div className="flex flex-col w-full mr-2.5">
                              <label
                                htmlFor="service_deliveryTimeline"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Delivery timeline
                              </label>
                              <select
                                name="service_deliveryTimeline"
                                id="service_deliveryTimeline"
                                value={formValues.service_deliveryTimeline}
                                onChange={e =>
                                  setFormValues(prev => ({
                                    ...prev,
                                    service_deliveryTimeline: e.target.value
                                  }))
                                }
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                              >
                                <option value="">Select Timeline</option>
                                <option value="2-weeks">Within 2 weeks</option>
                                <option value="3-weeks">Within 3 weeks</option>
                                <option value="4-weeks">Within 4 weeks</option>
                                <option value="5-weeks">Within 5 weeks</option>
                              </select>
                            </div>
                            <div className="flex flex-col w-full">
                              <label
                                htmlFor="service_priceRange"
                                className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                              >
                                Price Range
                              </label>
                              <select
                                name="service_priceRange"
                                id="service_priceRange"
                                value={formValues.service_priceRange}
                                onChange={e =>
                                  setFormValues(prev => ({
                                    ...prev,
                                    service_priceRange: e.target.value
                                  }))
                                }
                                className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                              >
                                <option value="">Select Price Range</option>
                                <option value="full-refund">Full Refund</option>
                                <option value="3-weeks">Within 3 weeks</option>
                                <option value="4-weeks">Within 4 weeks</option>
                                <option value="5-weeks">Within 5 weeks</option>
                              </select>
                            </div>
                          </div>
                          {/* Show category based on selectedCategory */}
                          <div>
                            {selectedCategory.length !== 0 && (
                              <h3 className="py-3 w-full text-black bg-[#ddddddee] px-4 mb-6 rounded-sm">
                                {selectedCategory}
                              </h3>
                            )}
                            <div className="space-y-[25px]">
                              {selectedCategory === "catering" && <Catering />}
                              {selectedCategory === "venues" && <Venue />}
                              {selectedCategory === "photography" && (
                                <PhotographerForm onChange={handlePhotographyChange} form={photographyForm} onFieldCount={handleFieldCount} categoryRef={categoryRef}/>
                              )}
                              {selectedCategory === "bridalmakeup" && (
                                <BridalMakeup categoryRef={categoryRef} onFieldCount={handleFieldCount} />
                              )}
                              {selectedCategory === "decorators" && (
                                <Decorators />
                              )}
                              {selectedCategory === "wedding-planners" && (
                                <WeddingPlannerForm />
                              )}
                              {selectedCategory === "mehandi-artist" && (
                                <MehendiArtist />
                              )}
                              {selectedCategory === "dj" && <DJForm />}
                              {selectedCategory ===
                                "pre-wedding-photographers" && (
                                <PreWeddingPhotographersForm />
                              )}
                              {selectedCategory === "wedding-pandit" && (
                                <WeddingPandit />
                              )}
                              {selectedCategory === "cake" && <Cake />}
                              {selectedCategory === "bartenders" && (
                                <Bartenders />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* upload portfolio  */}
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle("upload-portfolio")}
                    className={`w-full cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-5 py-2 4xl:py-4 rounded-md`}
                  >
                    <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                      Upload Portfolio
                    </h3>
                    <Image
                      className={`${
                        openAccordion === "upload-portfolio" ? "rotate-180" : ""
                      } transition-all ease invert-[1]`}
                      width={18}
                      height={18}
                      src={"/images/downarrow.svg"}
                      alt="downarrow"
                    />
                  </button>
                  {/* portfolio content  */}
                  {openAccordion === "upload-portfolio" && (
                    <div className="space-y-[18px] bg-[#F2F2F2] px-5 py-6 rounded-[10px] mb-[20px]">
                      {/* file upload  */}
                      <div>
                        <div
                          className="bg-white rounded-[8px] py-8 px-4 w-full flex flex-col items-center justify-center border-2 border-dashed border-[#dadada] cursor-pointer transition hover:bg-[#f5f5f5]"
                          onClick={() =>
                            document.getElementById("portfolio-upload").click()
                          }
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault();
                            handleFileChange({
                              target: { files: e.dataTransfer.files },
                            });
                          }}
                        >
                          <label
                            htmlFor="portfolio-upload"
                            className="w-full flex flex-col items-center justify-center cursor-pointer"
                          >
                            <span className="text-[#EA0056] text-4xl mb-2 border border-[#dadada] rounded-full bg-white w-14 h-14 flex items-center justify-center pb-[6px]">
                              +
                            </span>
                            <p className="text-[#505050] font-medium text-[15px] mb-1">
                              Drag & drop images here, or click to upload
                            </p>
                            <p className="text-[#787878] font-normal text-[12px]">
                              Supported File Types: .jpg, .png
                            </p>
                            <input
                              id="portfolio-upload"
                              type="file"
                              name="portfolioImages"
                              multiple
                              accept="image/*"
                              onChange={e => {
                                handleFileChange(e);
                                e.target.value = ""; // <-- Reset input value
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>

                        {/* Preview Thumbnails */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedFiles.map((img, index) => (
                            <div
                              key={index}
                              className="w-[77px] h-[67px] relative"
                            >
                              <Image
                                className="size-full object-contain rounded-lg"
                                width={100}
                                height={100}
                                src={img.url}
                                alt={`upload-${index}`}
                              />
                              <span
                                onClick={() => removeImage(index)}
                                className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
                              >
                                x
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* tags */}
                      <div>
                        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
                          Tags
                        </p>
                        <div className="rounded-xl bg-white py-4 px-4">
                          <ul className="flex items-center flex-wrap gap-3">
                            {tags.map((tag, index) => (
                              <li
                                key={index}
                                className="font-normal text-[15px] 3xl:text-[16px] text-[#505050] bg-[#F6F6F6] rounded-[36px] py-2 px-4 w-fit flex items-center space-x-[17px]"
                              >
                                <span>{tag}</span>
                                <button
                                  type="button"
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
                                name="tagsInput"
                                className="outline-none bg-transparent text-[15px] 3xl:text-[16px] placeholder:text-[#b0b0b0] text-[#505050] py-2 px-4"
                                placeholder="Type & press Enter"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onBlur={() => {
                                  if (inputValue.trim()) {
                                    if (!tags.includes(inputValue.trim())) {
                                      setTags((prev) => [...prev, inputValue.trim()]);
                                    }
                                    setInputValue("");
                                  }
                                }}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* event type & location */}
                      <div className="flex items-center w-full">
                        <div className="flex flex-col w-full mr-2.5">
                          <label
                            htmlFor="eventType"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Event Type
                          </label>
                          <select
                            name="eventType"
                            id="eventType"
                            value={formValues.eventType}
                            onChange={e =>
                              setFormValues(prev => ({
                                ...prev,
                                eventType: e.target.value
                              }))
                            }
                            className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white text-[#525252] px-[22px] placeholder:text-[#525252] 3xl:text-[16px] text-[14px] font-medium cursor-pointer"
                          >
                            <option value="">Select Event Type</option>
                            <option value="engagement">Engagement</option>
                            <option value="love">Love</option>
                            <option value="mehendi">Mehendi</option>
                            <option value="haldi">Haldi</option>
                          </select>
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="location"
                            className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                          >
                            Location
                          </label>
                          <div className="relative">
                            <input
                              name="location"
                              id="location"
                              value={formValues.location}
                              onChange={e =>
                                setFormValues(prev => ({
                                  ...prev,
                                  location: e.target.value
                                }))
                              }
                              className="w-full h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[25px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black"
                              placeholder="Kolkata"
                              type="text"
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

                      {/* description */}
                      <div className="flex flex-col w-full mr-[25px]">
                        <label
                          htmlFor="description"
                          className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          value={formValues.description}
                          onChange={e =>
                            setFormValues(prev => ({
                              ...prev,
                              description: e.target.value
                            }))
                          }
                          className="h-[110px] 3xl:h-[125px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black py-3.5"
                          placeholder="Write your short description"
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {/* Upload Gallery Accordion */}
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle("upload-gallery")}
                    className={`w-full cursor-pointer flex items-center justify-between mb-3 bg-[#ededed] px-5 py-2 4xl:py-4 rounded-md`}
                  >
                    <h3 className="font-semibold text-[#303030] text-[18px] 4xl:text-[25px]">
                      Upload Gallery
                    </h3>
                    <Image
                      className={`${
                        openAccordion === "upload-gallery" ? "rotate-180" : ""
                      } transition-all ease invert-[1]`}
                      width={18}
                      height={18}
                      src={"/images/downarrow.svg"}
                      alt="downarrow"
                    />
                  </button>
                  {openAccordion === "upload-gallery" && (
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
                          <span className="text-[#EA0056] text-4xl mb-2 border border-[#dadada] rounded-full bg-white w-14 h-14 flex items-center justify-center pb-[6px]">
                            +
                          </span>
                          <p className="text-[#505050] font-medium text-[15px] mb-1">
                          </p>
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
                            accept="image/*"
                            onChange={e => {
                              handleGalleryFileChange(e);
                              e.target.value = ""; // <-- Reset input value
                            }}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Preview Thumbnails */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {galleryFiles.map((img, index) => (
                          <div
                            key={index}
                            className="w-[77px] h-[67px] relative"
                          >
                            <Image
                              className="size-full object-contain rounded-lg"
                              width={100}
                              height={100}
                              src={img.url}
                              alt={`gallery-upload-${index}`}
                            />
                            {galleryUploadProgress[index] !== undefined && galleryUploadProgress[index] < 100 && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                <span className="text-white font-bold text-xs">
                                  {galleryUploadProgress[index]}%
                                </span>
                              </div>
                            )}
                            <span
                              onClick={() => removeGalleryImage(index)}
                              className="grid place-items-center absolute right-[-5px] top-[-5px] size-[15px] rounded-full bg-[#505050] text-[10px] text-white cursor-pointer"
                            >
                              x
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center mt-2 justify-end">
                    <button className="cursor-pointer font-semibold text-[16px] 4xl:text-[20px] bg-[#EA0056] hover:bg-[#d6004f] rounded-[8px] py-2 4xl:py-3.5 px-[20px]">
                      Save & Publish
                    </button>
                  </div>
                </form>

                <div className="ml-3 w-[30%]">
                  <ProcessBarMyBusiness
                    processes={businessProcesses}
                    onProcessUpdate={setBusinessProcesses}
                    editable={false}
                  />
                </div>
              </div>
            )}
          </div> 
        </div> 
      </Layouts> 
    </div> 
  );
}

export default Page;