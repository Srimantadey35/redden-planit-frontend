
"use client";
import React, { useEffect, useRef, useState } from "react";
import Layouts from "@/components/Layouts";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";

const Page = () => {
  const token = useSelector((state) => state.auth.accessToken);
  const fetchedUser = useSelector((state)=>state.auth.user)
  const [myLeads,setMyLeads] = useState([])
  const [myBookings,setMyBookings] = useState([])
  const [myReviews,setMyReviews] = useState([])
  
  
  useEffect(()=>{
    if(token){
      fetchMyLeads()
      fetchMyBookings()
      fetchMyReviews()
    }
  },[token])
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

     const fetchMyReviews=async()=>{
       try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/vendors/my-reviews`,
         {
         withCredentials: true,
         headers: {
           Authorization: `Bearer ${token}`
         }
       })
         console.log('my bookings',response)
         if(response.status === 200){
           setMyReviews(response.data.data)
         }
       } catch (error) {
         
       }
     }
    
  
  
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
  // const leadsFData = [
  //   {
  //     image: "/images/sign-up/face-1.jpg",
  //     name: "Drishti Ram",
  //     location: "Noida, India",
  //     detailsLink: "#",
  //   },
  //   {
  //     image: "/images/sign-up/face-2.jpg",
  //     name: "Zeenat Wason",
  //     location: "Pune, India",
  //     detailsLink: "#",
  //   },
  //   {
  //     image: "/images/sign-up/face-3.jpg",
  //     name: "Kajol Kabra",
  //     location: "Lucknow, India",
  //     detailsLink: "#",
  //   },
  //   {
  //     image: "/images/sign-up/face-4.jpg",
  //     name: "Sunita Mohan",
  //     location: "Kolkata, India",
  //     detailsLink: "#",
  //   },
  //   {
  //     image: "/images/sign-up/face-5.jpg",
  //     name: "Ankita Somani",
  //     location: "Mumbai, India",
  //     detailsLink: "#",
  //   },
  //   {
  //     image: "/images/sign-up/face-6.jpg",
  //     name: "Sid Mukherjee",
  //     location: "Mumbai, India",
  //     detailsLink: "#",
  //   },
  // ];
  const leadsFData = myLeads.map((lead, index) => ({
  image: `/images/sign-up/face-${(index % 6) + 1}.jpg`,
  name: lead.clientName,
  location: lead.location || 'India',
  detailsLink: `#`, // You can customize this based on lead._id if needed
}));
  
  // const reviewsData = [
  //   {
  //     image: "/images/sign-up/face-1.jpg",
  //     name: "Lalita Sandal",
  //     rating: 4.5,
  //     desc: "“Rabina have captured the most precious moments of my life”",
  //     date: "January 2, 2025",
  //   },
  //   {
  //     image: "/images/sign-up/face-2.jpg",
  //     name: "Sona Pingle",
  //     rating: 3.5,
  //     desc: "“Rabina have a great experience for phtography”",
  //     date: "January 3, 2025",
  //   },
  //   {
  //     image: "/images/sign-up/face-3.jpg",
  //     name: "Malik Kar",
  //     rating: 4.0,
  //     desc: "“Rabina&apos;s team is the most outstanding one.”",
  //     date: "January 4, 2025",
  //   },
  // ];
  const reviewsData = myReviews.map((review, index) => ({
  image: `/images/sign-up/face-${(index % 6) + 1}.jpg`, // fallback image if needed
  name: review.clientName,
  rating: review.rating,
  desc: `“${review.comment}”`,
  date: new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  }), // e.g., January 4, 2025
}));
  
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

  console.log('leads data',myBookings);
  
  // const tableData = {
  //   thead: {
  //     heads: [
  //       "Booking id",
  //       "Client Name",
  //       "Location",
  //       "Booking date",
  //       "Notes",
  //       "Actions",
  //     ],
  //     widths: ["15%", "20%", "20%", "20%", "25%", "5%"],
  //   },
  //   tbody: [
  //     {
  //       bookingId: "#000125",
  //       client: {
  //         name: "Drishti Ram",
  //         image: "/images/sign-up/face-1.jpg",
  //       },
  //       location: {
  //         icon: "/images/vendor/location.svg",
  //         name: "Kolkata, India",
  //       },
  //       bookingDate: {
  //         icon: "/images/vendor/calender.svg",
  //         value: "Feb 06, 2025",
  //       },
  //       notes: "Looking for a traditional wedding setup with floral décor.",
  //       actions: "...",
  //     },
  //     {
  //       bookingId: "#000126",
  //       client: {
  //         name: "Durjaya Ghosal",
  //         image: "/images/sign-up/face-1.jpg",
  //       },
  //       location: {
  //         name: "Kolkata, India",
  //       },
  //       bookingDate: {
  //         value: "Feb 08, 2025",
  //       },
  //       notes: "Need full-day photography coverage for Bengali wedding.",
  //       actions: "...",
  //     },
  //     {
  //       bookingId: "#000127",
  //       client: {
  //         name: "Mohul Nara",
  //         image: "/images/sign-up/face-1.jpg",
  //       },
  //       location: {
  //         name: "Kolkata, India",
  //       },
  //       bookingDate: {
  //         value: "Feb 11, 2025",
  //       },
  //       notes: "Can you share sample menus and pricing?",
  //       actions: "...",
  //     },
  //     {
  //       bookingId: "#000128",
  //       client: {
  //         name: "Piyush Kaushik",
  //         image: "/images/sign-up/face-1.jpg",
  //       },
  //       location: {
  //         name: "Kolkata, India",
  //       },
  //       bookingDate: {
  //         value: "Feb 12, 2025",
  //       },
  //       notes: "utdoor setup required, Haldi & Mehendi theme included.",
  //       actions: "...",
  //     },
  //   ],
  // };


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
  tbody: myBookings.map((booking, index) => ({
    bookingId: `#000${booking.bookingId.toString().padStart(3, '0')}`,
    client: {
      name: booking.clientName,
      image: `/images/sign-up/face-${(index % 6) + 1}.jpg`, // cycle through available face images
    },
    location: {
      icon: "/images/vendor/location.svg",
      name: booking.location,
    },
    bookingDate: {
      icon: "/images/vendor/calender.svg",
      value: new Date(booking.bookingDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }), // e.g., Feb 14, 2025
    },
    notes: booking.notes,
    actions: "...",
  }))}
  const profileComPercentage = 10;
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);

  // Trigger visibility when in viewport
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect(); // only animate once
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);
  useEffect(() => {
  const section = sectionRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // only animate once
      }
    },
    { threshold: 0.3 }
  );

  if (section) {
    observer.observe(section);
  }

  return () => {
    if (section) {
      observer.unobserve(section);
    }
  };
}, []);


  // Animate number count
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * profileComPercentage);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(profileComPercentage); // Ensure exact final value
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible]);

  return (
    <Layouts>
      <div className="w-full max-w-full px-[10px] md:px-5 4xl:px-0 4xl:max-w-[1440px] mx-auto">
        <div className="rounded-[10px] border-[5px] 3xl:border-[10px] border-[#FAFAFA] mt-3">
          <div
            className="bg-contain md:bg-cover rounded-[8px] py-[35px] md:py-[50px] 2xl:py-[75px] sm:px-0 px-2"
            style={{
              backgroundColor: "#FAF1F2",
              backgroundImage: "url('/images/vendorbannerbg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-black font-semibold leading-[1.2] text-[24px] xl:text-[27px] 2xl:text-[34px] 3xl:text-[40px] 4xl:text-[48px] text-center">
              Welcome to Your PlanIt Vendor Hub
            </h2>
            <p className="mt-2 font-normal text-[14px] sm:text-[15px] 2xl:text-[18px] 3xl:text-[20px] text-[#505050] text-center">
              Manage leads, update your profile, and grow your business with
              ease
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[10px] 2xl:gap-[12px] 4xl:gap-[16px] mt-4 2xl:mt-6 4xl:mt-8 mb-3 4xl:mb-5">
          {bookingChart.map((item, index) => (
            <div
              key={index}
              className={`${item.title == 'Bookings This Month' ? 'row-[1_/_3] col-[1_/_3] sm:row-auto sm:col-auto':''} p-[18px] 2xl:p-[27px] rounded-[10px] bg-[#F7F7F7] flex flex-col justify-center`}
            >
              <h3 className="font-semibold text-[13px] sm:text-[15px] md:text-[18px] 3xl:text-[20px] text-[#151515]">
                {item.title}
              </h3>
              <div className="flex items-center mt-2">
                <Image
                  className="w-[16px] md:w-[20px] 2xl:w-[23px] 3xl:w-[26px] 4xl:w-[30px]"
                  width={30}
                  height={30}
                  src={`${item.icon}`}
                  alt="leads"
                />
                <h4 className="ml-2 font-semibold text-[#EA0056] text-[16px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[34px] 4xl:text-[40px]">
                  {item.value}
                </h4>
              </div>
            </div>
          ))}

          <div className={`col-[1_/_3] sm:col-auto p-[18px] 2xl:p-[27px] rounded-[10px] bg-[#F7F7F7]`}>
            <h3 className="font-semibold text-[15px] md:text-[18px] 3xl:text-[20px] text-[#151515]">
              Profile completion
            </h3>
            <div className="mt-2" ref={sectionRef}>
              <h5 className="font-semibold text-[20px] xl:text-[23px] text-[#EA0056] mb-2">
                {count}%
              </h5>

              <div className="h-[7px] bg-[#E2E0E0] rounded-3xl w-full overflow-hidden">
                <div
                  className="h-full bg-[#363636] rounded-3xl transition-all duration-1000 ease-in-out"
                  style={{
                    width: isVisible ? `${profileComPercentage}%` : "0%",
                  }}
                ></div>
              </div>
              <p className="text-[14px] text-[#151515] font-normal mt-2">
                Complete your profile
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2.5 xl:gap-[15px] 4xl:gap-[20px] mb-3.5 xl:mb-5">
          <div className="bg-[#F7F7F7] rounded-[10px]">
            <div className=" px-[20px] py-[16px] flex items-center justify-between border-b border-b-[#ededed]">
              <h4 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
                Leads
              </h4>{" "}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button className="font-normal text-[14px] text-[#505050] rounded-[5px] bg-white border-[1px] border-[#F0EDED] py-[6px] px-[10px] sm:px-[13px] flex items-center">
                  <span className="mr-2">This week</span>
                  <Image
                    width={15}
                    height={12}
                    src={"/images/filter.svg"}
                    alt="filter icon"
                  />
                </button>
                <button className="font-normal text-[14px] text-[#151515] rounded-[5px] bg-[#D7D7D7] border-[1px] border-[#F0EDED] py-[6px] px-[10px] sm:px-[13px] flex items-center">
                  Explore more
                </button>
              </div>
            </div>

            <div className="px-[15px] py-2.5 overflow-x-auto scroll-visible">
              <ul className="space-y-[10px] min-w-[455px] sm:min-w-auto">
                {leadsFData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-2 rounded-[5px]"
                  >
                    <div className="w-full flex items-center">
                      <Image
                        className="rounded-full size-[25px] sm:size-[30px] object-cover"
                        width={30}
                        height={30}
                        src={`${item.image}`}
                        alt={`${item.image + 1}`}
                      />
                      <span className="font-normal text-black text-[14px] 2xl:text-[15px] 3xl:text-[18px] ml-3">
                        {item.name}
                      </span>
                    </div>

                    <div className="w-full flex items-center lg:justify-center">
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
                      <span className="font-normal text-black text-[14px] sm:text-[15px] 3xl:text-[18px]">
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

          <div className="bg-[#F7F7F7] rounded-[10px] xl:col-[1_/_3]">
            <div className="px-[20px] py-[16px] flex items-center justify-between border-b border-b-[#ededed]">
              <h4 className="font-semibold text-[18px] 3xl:text-[20px] text-[#151515]">
                Reviews
              </h4>{" "}
              <button className="font-normal text-[14px] text-[#151515] rounded-[5px] bg-[#D7D7D7] border-[1px] border-[#F0EDED] py-[6px] px-[13px] flex items-center">
                Explore more
              </button>
            </div>
            <div className="px-[14px] my-2.5 overflow-x-auto scroll-visible">
              <ul className="space-y-[14px] min-w-[555px]">
                {reviewsData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-2 rounded-[5px]"
                  >
                    <div className="flex items-center mr-8 w-[25%] md:w-[25%]">
                      <Image
                        className="size-[35px] 3xl:size-[50px] rounded-full object-cover"
                        width={36}
                        height={36}
                        src={`${item.image}`}
                        alt={`${item.name}`}
                      />
                      <span className="font-medium text-black text-[15px] 2xl:text-[16px] 3xl:text-[20px] ml-3 whitespace-nowrap inline-block">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex flex-col w-[50%] md:w-[65%] mr-3 md:pl-0 pl-8">
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
                      <p className="text-black text-[15px] 2xl:text-[16px] 3xl:text-[18px] font-normal my-1 2xl:my-1.5 md:w-full w-[80%]">
                        {item.desc}
                      </p>
                      <p className="text-[#505050] text-[14px] 3xl:text-[16px] font-normal">
                        {item.date}
                      </p>
                    </div>
                    <div className="w-[25%] md:w-[10%] md:pl-0 pl-8">
                      <Link
                        href={`${item.detailsLink}`}
                        className="w-full font-normal text-[14px] lg:text-[15px] 3xl:text-[18px] text-[#EA0056] flex items-center justify-end"
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
          <div className="px-[18px] lg:px-[12px] xl:px-[18px] 2xl:px-[24px] 3xl:px-[30px] 4xl:px-[55px] py-4 flex items-center justify-between sm:flex-row flex-col">
            <h4 className="font-semibold text-[20px] 2xl:text-[25px] text-[#303030]">
              Bookings
            </h4>

            <div className="flex items-center justify-between sm:flex-row flex-col w-full sm:w-fit sm:mt-0 mt-3">
              <form className="w-full">
                <label className="relative">
                  <input
                    className="rounded-[5px] bg-white border-[1px] border-[#F0EDED] h-[37px] w-full sm:w-[320px] placeholder:text-[#6B6B6B] placeholder:font-normal placeholder:text-[12px] text-black text-[12px] font-normal px-[13px] outline-none"
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
              <div className="flex items-center w-full sm:ml-[13px] sm:mt-0 mt-1.5">
                <button className="font-normal text-[14px] text-[#505050] rounded-[5px] bg-white border-[1px] border-[#F0EDED] py-[6px] px-[13px] flex items-center w-fit mx-auto">
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
                {tableData.tbody.map((row, index) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layouts>
  );

};

export default Page;
