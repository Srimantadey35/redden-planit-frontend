"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import CitySelectModal from "@/components/widgets/ListingCountry";
import Link from "next/link";
import Footer from "@/components/Footer";

const Page = () => {
  const [options, setOptions] = useState("Grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const viewOptions = [
    {
      label: "List",
      icon: "/images/list.svg",
      hoverIcon: "/images/list-hover.svg",
      iconWidth: 22,
      iconHeight: 12,
    },
    {
      label: "Grid",
      icon: "/images/grid.svg",
      hoverIcon: "/images/grid-hover.svg",
      iconWidth: 12,
      iconHeight: 12,
    },
    {
      label: "Map",
      icon: "/images/location2.svg",
      hoverIcon: "/images/location-hover.svg",
      iconWidth: 12,
      iconHeight: 18,
    },
  ];

  const Places = [
    {
      image: "/images/randomplace.jpg",
      placeName: "Kolkata",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Mumbai",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Bangalore",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Hyedrabad",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Goa",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Jaipur",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Chennai",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Pune",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Delhi",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "Lucknow",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "anothe1r",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "another2",
    },
    {
      image: "/images/randomplace.jpg",
      placeName: "another3",
    },
  ];

  const hotels = [
    {
      img: "/images/randomplace.jpg",
      hotelName: " Park Boulevard Hotel",
      rating: "5.0",
      totalReviews: "55",
      location: "Chattarpur, Delhi Ncr",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "4,200",
      nonVegPricePerPlate: "4,200",
      options: {
        pax: "300 -1000",
        rooms: "45",
        rooms2: "45",
        rooms3: "45",
      },
    },
    {
      img: "/images/randomplace.jpg",
      hotelName: "Ramada By Wyndhamy",
      rating: "5.0",
      totalReviews: "31",
      location: "Mussoorie",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "2,000",
      nonVegPricePerPlate: "2,000",
      options: {
        pax: "100 -150",
        rooms: "74",
        rooms2: "45",
        rooms3: "45",
      },
    },
    {
      img: "/images/randomplace.jpg",
      hotelName: "Ramada By Wyndhamy",
      rating: "5.0",
      totalReviews: "31",
      location: "Mussoorie",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "2,000",
      nonVegPricePerPlate: "2,000",
      options: {
        pax: "100 -150",
        rooms: "74",
        rooms2: "45",
        rooms3: "45",
      },
    },
    {
      img: "/images/randomplace.jpg",
      hotelName: "Ramada By Wyndhamy",
      rating: "5.0",
      totalReviews: "31",
      location: "Mussoorie",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "2,000",
      nonVegPricePerPlate: "2,000",
      options: {
        pax: "100 -150",
        rooms: "74",
        rooms2: "45",
        rooms3: "45",
      },
    },
    {
      img: "/images/randomplace.jpg",
      hotelName: "Ramada By Wyndhamy",
      rating: "5.0",
      totalReviews: "31",
      location: "Mussoorie",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "2,000",
      nonVegPricePerPlate: "2,000",
      options: {
        pax: "100 -150",
        rooms: "74",
        rooms2: "45",
        rooms3: "45",
      },
    },
    {
      img: "/images/randomplace.jpg",
      hotelName: "Ramada By Wyndhamy",
      rating: "5.0",
      totalReviews: "31",
      location: "Mussoorie",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "2,000",
      nonVegPricePerPlate: "2,000",
      options: {
        pax: "100 -150",
        rooms: "74",
        rooms2: "45",
        rooms3: "45",
      },
    },
    {
      img: "/images/randomplace.jpg",
      hotelName: "Ramada By Wyndhamy",
      rating: "5.0",
      totalReviews: "31",
      location: "Mussoorie",
      desc: "4 Star & Above Wedding",
      vegPricePerPlate: "2,000",
      nonVegPricePerPlate: "2,000",
      options: {
        pax: "100 -150",
        rooms: "74",
        rooms2: "45",
        rooms3: "45",
      },
    },
  ];

  const weddinghotels = [
    {
      img: "/images/randomplace.jpg",
      title: "The Great Callina Banquet Hall",
      desc: "I have booked a banquet for my wedding.Their service is really awesome and I am impressed from the behaviour of their staff .The food is very delicious and than",
      reviewBy: "Renu rai",
      date: "6 Jul 2025",
    },
    {
      img: "/images/randomplace.jpg",
      title: "Ananda Farm",
      desc: "Everything just works here”** I hosted my startup’s offsite here with 12 team members. The property is luxurious without being over-the-top, and the layout is",
      reviewBy: "Jhansi",
      date: "6 Jul 2025",
    },
    {
      img: "/images/randomplace.jpg",
      title: "Trisara",
      desc: "Working with Mangalya was great, she really made my dream wedding come true!! The way everything was so perfect, the colors, the decor, the entry and the surpr",
      reviewBy: "Jhansi",
      date: "6 Jul 2025",
    },
    {
      img: "/images/randomplace.jpg",
      title: "SatyaSushila Hotel & Resort",
      desc: "Working with Mangalya was great, she really made my dream wedding come true!! The way everything was so perfect, the colors, the decor, the entry and the surpr",
      reviewBy: "Jhansi",
      date: "6 Jul 2025",
    },
  ];

  return (
    <div className="bg-[#F7F7F7]">
      <Header />
      <div className="w-full 2xl:px-0 px-[6rem] 2xl:max-w-[1200px] mx-auto">
        <div className="mt-2.5">
          <ul className="flex items-center space-x-1 text-[#7C7C7C] font-[400] text-[12px]">
            <li>Home &gt;</li>
            <li>Vendors &gt;</li>
            <li>Wedding Venues</li>
          </ul>

          <div className="flex items-start justify-between mt-5">
            <div className="w-[60%]">
              <h5 className="text-black font-normal text-[25px]">
                4 Star & Above Wedding Hotels
              </h5>
              <p className="font-normal text-[15px] text-[#595959]">
                Showing <span className="text-black">1893 results</span> as per
                your search criteria
              </p>
              <div className="mt-7">
                <div className="flex items-center">
                  <label className="relative block w-[258px]">
                    <input
                      className="border border-[#D9D9D9] outline-none rounded-full placeholder:text-[11px] placeholder:font-normal placeholder:text-[#888888] w-[258px] pl-4 text-black h-[35px] 3xl:h-[45px]"
                      type="text"
                      id="text"
                      placeholder="4 Star & Above Wedding Hotels"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-1.5 flex items-center justify-center pl-5 pr-2 cursor-pointer"
                    >
                      <Image
                        width={16}
                        height={16}
                        src="/images/cross-2.svg"
                        alt="search_grey"
                      />
                    </button>
                  </label>

                  <p className="text-black underline font-medium text-[14px] ml-4">
                    Clear all
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-[292px]">
                <label className="relative block w-full">
                  <input
                    className="border border-[#D9D9D9] outline-none rounded-[10px] placeholder:text-[15px] 3xl:placeholder:text-[18px] placeholder:font-normal placeholder:text-[#797979] w-full pl-[40px] text-black h-[38px] 3xl:h-[45px]"
                    type="text"
                    id="text"
                    placeholder="Search Wedding Venues......"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center justify-center pl-4 pr-2 cursor-pointer"
                  >
                    <Image
                      width={17}
                      height={17}
                      src="/images/search_grey.svg"
                      alt="search_grey"
                    />
                  </button>
                </label>
              </div>
              <div className="flex items-center space-x-[22px] ml-[22px]">
                {viewOptions.map((item, index) => (
                  <button
                    onClick={() => setOptions(item.label)}
                    key={index}
                    className="cursor-pointer flex items-center group"
                  >
                    <Image
                      className={`${
                        options === item.label ? "hidden" : "block"
                      }`}
                      width={item.iconWidth}
                      height={item.iconHeight}
                      src={item.icon}
                      alt={item.label}
                    />
                    <Image
                      className={`${
                        options === item.label ? "block" : "hidden"
                      }`}
                      width={item.iconWidth}
                      height={item.iconHeight}
                      src={item.hoverIcon}
                      alt={`${item.label}-hover`}
                    />

                    <h4
                      className={`${
                        options === item.label
                          ? "text-[#E72E77]"
                          : "text-[#8D8D8D]"
                      } text-[15px] 3xl:text-[18px] font-normal ml-1 group-hover:text-[#E72E77]`}
                    >
                      {item.label}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-10 flex-wrap gap-y-4">
          {Places.slice(0, 10).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                className="size-[60px] 3xl:size-[80px] rounded-full object-cover mx-auto"
                width={80}
                height={80}
                src={item.image}
                alt={item.placeName}
              />
              <p className="font-normal text-black text-[15px] 3xl:text-[16px] text-center h-[24px] mt-2">
                {item.placeName}
              </p>
            </div>
          ))}

          {Places.length > 10 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="size-[60px] 3xl:size-[80px] rounded-full mx-auto bg-[#4A4A4A] flex items-center justify-center text-white text-[18px] font-semibold">
                +{Places.length - 10}
              </div>
              <p className="font-normal text-black  text-[15px] 3xl:text-[16px] text-center h-[24px] mt-2 invisible">
                spacer
              </p>
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-[30px] 3xl:gap-[40px] mb-10">
          {hotels.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <Image
                  className="rounded-md w-full"
                  width={373}
                  height={225}
                  src={`${item.img}`}
                  alt={`{hotel-${index}}`}
                />

                <div className="group">
                  <Image
                    className="absolute bottom-3 right-3 cursor-pointer"
                    width={16}
                    height={16}
                    src={"/images/i.svg"}
                    alt="i"
                  />
                  <p className="bg-[#00000081] group-hover:block hidden absolute bottom-2 right-8 text-white text-[12px] w-fit py-0.5 px-3 rounded-md">
                    this is the i message
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="flex items-center justify-between mt-4">
                  <p className="text-black font-normal text-[18px] 3xl:text-[20px]">
                    {item.hotelName ? item.hotelName.slice(0, 20) : ""}...
                  </p>

                  <div className="flex items-center">
                    <div className="bg-[#EA0056] rounded-[3px] flex items-center w-fit py-0.5 px-2">
                      <Image
                        width={11}
                        height={10}
                        src={"/images/star.svg"}
                        alt="star"
                      />
                      <span className="text-[13px] font-medium text-white ml-2">
                        {item.rating}
                      </span>
                    </div>
                    <p className="font-normal text-[#777777] text-[12px] ml-2">
                      ({item.totalReviews} reviews)
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center justify-between">
                    <Image
                      width={15}
                      height={15}
                      src={"/images/location.svg"}
                      alt="location"
                    />
                    <p className="font-normal text-[15px] text-[#777777] ml-2">
                      {`${item.desc ? item.desc.slice(0, 20) : ""}`}...
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      width={15}
                      height={15}
                      src={"/images/thumb.svg"}
                      alt="location"
                    />
                    <p className="font-normal text-[15px] text-[#777777] ml-2">
                      {`${item.location ? item.location.slice(0, 20) : ""}`}...
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-normal text-[15px] text-[#777777]">
                      Veg:
                    </p>
                    <p className="text-black font-semibold text-[16px]">
                      {item.vegPricePerPlate}{" "}
                      <span className="font-normal text-[15px] text-[#777777]">
                        Per Plate
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-[15px] text-[#777777]">
                      Non veg:
                    </p>
                    <p className="text-black font-semibold text-[16px]">
                      {item.nonVegPricePerPlate}{" "}
                      <span className="font-normal text-[15px] text-[#777777]">
                        Per Plate
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="flex items-center space-x-1.5">
                    {Object.entries(item.options)
                      .slice(0, 2)
                      .map(([key, value], index) => (
                        <li
                          key={index}
                          className="font-normal text-[13px] text-[#777777] border border-[#e7e7e7dd] w-fit rounded-sm px-2 py-0.5"
                        >
                          {key} {value}
                        </li>
                      ))}
                    {Object.entries(item.options).length > 2 && (
                      <li className="font-normal text-[13px] text-[#777777]  w-fit">
                        +{Object.entries(item.options).length - 2} more
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-1 py-4 mb-10">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F9F9] text-gray-400 hover:text-black">
            <span className="text-lg">&lt;</span>
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#333] bg-white hover:bg-[#F1F1F1] text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#333] bg-white hover:bg-[#F1F1F1] text-sm font-medium">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EA0056] text-white text-sm font-semibold">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#333] bg-white hover:bg-[#F1F1F1] text-sm font-medium">
            4
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#333] bg-white hover:bg-[#F1F1F1] text-sm font-medium">
            5
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-[#999] text-sm font-medium">
            ...
          </span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#333] bg-white hover:bg-[#F1F1F1] text-sm font-medium">
            82
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EA0056] text-white hover:bg-[#c8004a]">
            <span className="text-lg">&gt;</span>
          </button>
        </div>

        <div className="mb-20">
          <h4 className="font-medium text-[24px] 3xl:text-[28px] text-black mb-3">
            Latest Reviews
          </h4>
          <div className="grid grid-cols-4 gap-[24px]">
            {weddinghotels.map((item, index) => (
              <div key={index}>
                <Image
                  className="rounded-t-lg"
                  width={282}
                  height={166}
                  src={`${item.img}`}
                  alt=""
                />

                <div className="mt-3.5">
                  <h4 className="font-semibold text-[18px] text-[#333333]">
                    {item.title}
                  </h4>
                  <p className="my-1 font-normal text-[15px] text-[#333333]">
                    {item.desc ? item.desc.slice(0, 90) : ""}...
                    <span className="font-semibold text-[#EA0056]">
                      Read More
                    </span>
                  </p>

                  <p className="font-normal text-[15px] text-[#333333]">
                    Reviewed By: {item.reviewBy} | {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="space-y-10">
          <div>
            <h4 className="font-medium text-[24px] 3xl:text-[28px] text-black">
              WedMeGood - Your Personal Wedding Planner
            </h4>
            <p className="font-normal text-[15px] text-[#333333] my-3">
              Plan your wedding with Us
            </p>
            <p className="font-normal text-[15px] text-[#333333]">
              WedMeGood is your personal wedding planning site. Browse through
              the site to find vendors for your wedding. Explore wedding
              inspiration & ideas and our very popular wedding blog to prepare
              for your wedding following latest trends. Contact us for more
              details.
            </p>
          </div>
          <div className="grid grid-cols-10 gap-x-[100px]">
            <div className="col-span-4">
              <h4 className="font-medium text-[24px] 3xl:text-[28px] text-black mb-3">
                Contact us to get best deals
              </h4>
              <div className="flex ">
                <div className="pr-10 border-r border-r-[#abababdd]">
                  <p className="font-semibold text-[18px] text-black">
                    For Vendors
                  </p>
                  <p className="font-normal text-[15px] text-[#333333] my-3">
                    vendors@wedmegood.com
                  </p>
                  <p className="font-normal text-[15px] text-[#333333] my-3">
                    0124-6812346
                  </p>
                </div>
                <div className="pl-10">
                  <p className="font-semibold text-[18px] text-black">
                    For Users
                  </p>
                  <p className="font-normal text-[15px] text-[#333333] my-3">
                    info@wedmegood.com
                  </p>
                  <p className="font-normal text-[15px] text-[#333333] my-3">
                    0124-6812345
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h4 className="font-medium text-[24px] 3xl:text-[28px] text-black mb-3">
                Follow us on:
              </h4>
              <ul className="flex space-y-3 flex-col">
                {SocialIcons.map((item, index) => (
                  <li key={index}>
                    <Link href={`${item.link}`} className="flex items-center">
                      <Image
                        width={20}
                        height={20}
                        src={`${item.icon}`}
                        alt="facebook icon"
                      />
                      <span className="font-normal text-[15px] text-[#333333] ml-2">
                        {item.mediaName}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-4">
              <div className="w-fit ml-auto">
                <h4 className="font-medium text-[24px] 3xl:text-[28px] text-black mb-3">
                  Get The WedMeGood App
                </h4>
                <div className="flex flex-col space-y-2">
                  <Link href={"#"}>
                    <Image
                      width={170}
                      height={70}
                      src={"/images/listing-page/googleplay.png"}
                      alt="googleplay"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      width={170}
                      height={70}
                      src={"/images/listing-page/appstore.png"}
                      alt="appstore"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-10 border-b border-b-[#abababdd]">
            <h4 className="font-medium text-[24px] 3xl:text-[28px] text-black mb-3">
              Get Latest Blog Alerts
            </h4>

            <div className="flex flex-col w-fit">
              <label className="relative h-[42px] inline-block">
                <input
                  className="text-[#333333] w-[380px] text-[13px]  font-normal px-3.5 h-full border border-[#abababdd]"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
                <button className="text-white cursor-pointer font-normal text-[15px] bg-[#EA0056] px-6 absolute top-0 bottom-0 right-0 h-full">
                  Submit
                </button>
              </label>

              <button className="text-[#333333] text-[13px] font-normal p-3.5 border border-[#abababdd] mt-2 w-fit relative before:absolute before:bottom-0 before:right-0 before:w-[50px] before:h-full before:bg-[#EA0056] z-[1] before:z-[-1] before:rotate-45 before:translate-x-[30px] before:translate-y-[25px] overflow-hidden cursor-pointer">
                Register as a Vendor
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 py-10">
          {foterLinks.map((section, i) => (
            <div key={i}>
              <h4 className="text-black font-normal text-[25px] mb-3">
                {section.type}
              </h4>
              <ul className="space-y-2">
                {section.links?.map((link, j) => (
                  <li
                    key={j}
                    className="text-[#333333] text-[15px] font-normal hover:text-[#EA0056] cursor-pointer"
                  >
                    <Link href={"#"}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="bg-white">
        <div className="w-full 2xl:px-0 px-[6rem] 2xl:max-w-[1200px] mx-auto py-5 flex items-center justify-between">
          <p className="font-normal text-[15px] text-[#333333]">
            © {new Date().getFullYear()}
          </p>
          <p className="font-normal text-[15px] text-[#333333]">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div> */}
      <CitySelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
};

export default Page;
