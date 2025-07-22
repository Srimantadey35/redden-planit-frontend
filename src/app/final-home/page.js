"use client";
import Header from "@/components/Header";
import VenueSearches from "@/components/widgets/VenueSearches";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const Page = () => {
  const targetRef = useRef(null);
  const [isChatShow, setisChatShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const scrollTriggerTop = 0;

      if (rect.top <= scrollTriggerTop) {
        setisChatShow(true);
      } else {
        setisChatShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef, isChatShow]);

  const dataPopularSearches = [
    {
      image: "/images/homepage-slider-images/event-now/card1.png",
      title: "E - Card",
    },
    {
      image: "/images/homepage-slider-images/event-now/card2.png",
      title: "Manage guest",
    },
    {
      image: "/images/homepage-slider-images/event-now/card3.png",
      title: "Create your website",
    },
    {
      image: "/images/homepage-slider-images/event-now/card4.png",
      title: "Book vendors",
    },
    {
      image: "/images/homepage-slider-images/event-now/card5.png",
      title: "Venues",
    },
    {
      image: "/images/homepage-slider-images/event-now/card1.png",
      title: "E - Card",
    },
  ];
  const data = [
    {
      image: "/images/homepage-slider-images/vanue-searches/card1.png",
      viewers: "23k",
      title: "4 Star & Above Wedding Hotels",
      rating: "4.5",
      places: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      image: "/images/homepage-slider-images/vanue-searches/card2.png",
      viewers: "50k",
      title: "Banquet Halls",
      rating: "4.8",
      places: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      image: "/images/homepage-slider-images/vanue-searches/card3.png",
      viewers: "50k",
      title: "Marriage Garden / Lawns",
      rating: "5.0",
      places: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      image: "/images/homepage-slider-images/vanue-searches/card1.png",
      viewers: "23k",
      title: "4 Star & Above Wedding Hotels",
      rating: "4.5",
      places: ["Mumbai", "Bangalore", "Pune"],
    },
  ];
  const dataFreeCard = [
    {
      image: "/images/homepage-slider-images/free-card/card1.png",
      title: "Wedding Ceremony",
    },
    {
      image: "/images/homepage-slider-images/free-card/card2.png",
      title: "Annaprashan Ceremony",
    },
    {
      image: "/images/homepage-slider-images/free-card/card3.png",
      title: "Haldi Invitation",
    },
    {
      image: "/images/homepage-slider-images/free-card/card4.png",
      title: "Ganesh Chaturthi",
    },
    {
      image: "/images/homepage-slider-images/free-card/card1.png",
      title: "Wedding Ceremony",
    },
  ];
  const dataFreeWebsite = [
    {
      image: "/images/homepage-slider-images/free-website/card1.png",
      title: "Picture This - Green",
    },
    {
      image: "/images/homepage-slider-images/free-website/card2.png",
      title: "Aura Love - Purple",
    },
    {
      image: "/images/homepage-slider-images/free-website/card3.png",
      title: "Vintage Hollywood - Black",
    },
    {
      image: "/images/homepage-slider-images/free-website/card1.png",
      title: "Picture This - Green",
    },
  ];
  const weddingCategories = [
    {
      img: "/images/homepage-slider-images/categories/card1.png",
      bg: "#DBE8FF",
      title: "Venues",
      desc: "Banquet Halls, Marriage Garden  Lawns, Wedding Resorts",
    },
    {
      img: "/images/homepage-slider-images/categories/card2.png",
      bg: "#F0EFE4",
      title: "Photographers",
      desc: "Photographers",
    },
    {
      img: "/images/homepage-slider-images/categories/card3.png",
      bg: "#FFE4E7",
      title: "Makeup",
      desc: "Bridal Makeup, Family Makeup",
    },
    {
      img: "/images/homepage-slider-images/categories/card4.png",
      bg: "#FFE6F5",
      title: "Pre Wedding Shoot",
      desc: "Pre Wedding Shoot Locations, Pre Wedding Photographers",
    },
    {
      img: "/images/homepage-slider-images/categories/card5.png",
      bg: "#E7F5E1",
      title: "Planning & Decor",
      desc: "Wedding Planners, Decorators",
    },
    {
      img: "/images/homepage-slider-images/categories/card6.png",
      bg: "#FEEEE3",
      title: "Bridal Wear",
      desc: "Bridal Lehengas, Kanjeevaram...",
    },
  ];
  const makeupartist = [
    {
      image: "/images/homepage-slider-images/makeup/card1.png",
      title: "Makeupby Snehabhowmick",
      name: "Sneha Bhowmick",
      desc: "I am Sneha beauty, cosmetic & personal care certified professional makeup artist atlanta. For booking details, click website button",
    },
    {
      image: "/images/homepage-slider-images/makeup/card2.png",
      title: "Zaira Bridal Makeup",
      name: "Zaira Roy",
      desc: "I am Zaira beauty, cosmetic & personal care certified professional makeup artist atlanta. For booking details, click website button",
    },
    {
      image: "/images/homepage-slider-images/makeup/card3.png",
      title: "Aashi’s Makeover",
      name: "Aashi Malik",
      desc: "I am Aashi beauty, cosmetic & personal care certified professional makeup artist atlanta. For booking details, click website button",
    },
    {
      image: "/images/homepage-slider-images/makeup/card4.png",
      title: "Pankaj Hair & Makeup Team",
      name: "Pankaj Ghoshal",
      desc: "I am Pankaj beauty, cosmetic & personal care certified professional makeup artist atlanta. For booking details, click website button",
    },
    {
      image: "/images/homepage-slider-images/makeup/card1.png",
      title: "Makeupby Snehabhowmick",
      name: "Sneha Bhowmick",
      desc: "I am Sneha beauty, cosmetic & personal care certified professional makeup artist atlanta. For booking details, click website button",
    },
  ];
  const latestBlogs = [
    {
      image: "/images/homepage-slider-images/blogs/card1.png",
      date: "By Apoorva  |  03 Jul 2025  |  7 min read",
      title: "These 7 Lehenga Labels Are Our Best-Kept Secrets!",
      desc: "Lets be real, when it comes to bridal lehengas, everyone and their BFF knows the usual suspects. Sabyasachi, Manish, Anita Dongre. Sure, theyre stunning but theyre also everywhere. And if yo...",
      btnName: "more",
    },
    {
      image: "/images/homepage-slider-images/blogs/card2.png",
      date: "By Apoorva  |  02 Jul 2024  |  7 min read",
      title:
        "Seaside Terrace Wedding At Home With A Bride Who Rocked A Neon Lehenga!",
      desc: "From a casual post-gym catch-up to a wedding bursting with love, laughter, and seriously unforgettable vibes, Sanam and Mohits story is what full-circle dreams are made of. They said I do o...",
      btnName: "more",
    },
    {
      image: "/images/homepage-slider-images/blogs/card3.png",
      date: "By Apoorva  |  02 Jul 2024  |  7 min read",
      title:
        "Bridal Styling Hacks: How to Flatter Your Figure Without Revealing Your Belly!",
      desc: "Lets get one thing straight - every bride is beautiful exactly the way she is. But hey, if youre a bride-to-be whos feeling a little conscious about your belly in that gorgeous lehenga, we to...",
      btnName: "more",
    },
    {
      image: "/images/homepage-slider-images/blogs/card1.png",
      date: "By Apoorva  |  03 Jul 2025  |  7 min read",
      title: "These 7 Lehenga Labels Are Our Best-Kept Secrets!",
      desc: "Lets be real, when it comes to bridal lehengas, everyone and their BFF knows the usual suspects. Sabyasachi, Manish, Anita Dongre. Sure, theyre stunning but theyre also everywhere. And if yo...",
      btnName: "more",
    },
  ];
  const inhouseService = [
    {
      img: "/images/randomplace.jpg",
      title: "Wedsta",
      desc: "WMG At Home, Family Makeup Services",
    },
    {
      img: "/images/randomplace.jpg",
      title: "Genie Services",
      desc: "WMG At Home, Family Makeup Services",
    },
    {
      img: "/images/randomplace.jpg",
      title: "Genie Services",
      desc: "WMG At Home, Family Makeup Services",
    },
    {
      img: "/images/randomplace.jpg",
      title: "Genie Services",
      desc: "WMG At Home, Family Makeup Services",
    },
  ];

  return (
    <div>
      <Header />
      {/* banner  */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/images/final-home/bannerbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 top-[35%] z-[0] left-0 right-0 homepagebanner_bg"></div>
        <div className="w-full max-w-[1204px] mx-auto pt-[150px] sm:pt-[130px] lg:pt-[160px] xl:pt-[260px] 4xl:!pt-[375px] pb-[35px] lg:pb-[58px] relative z-[2]">
          <div>
            <p className="text-[15px] sm:text-[18px] lg:text-[21px] text-white font-[500] text-center">
              Let&apos;s make everlasting experiences with us.
            </p>
            <h3 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[40px] 3xl:text-[52px] text-white font-semibold text-center my-2">
              We Plan For Your Celebration.
            </h3>
            <div className="flex justify-center sm:flex-row flex-col sm:w-auto w-[80%] mx-auto">
              <input
                className="rounded-[6px] bg-white placeholder:text-[#7C7C7C] placeholder:text-[15px] placeholder:font-normal py-2 lg:py-3 px-4 lg:px-6 w-full sm:w-[50%] md:w-[400px] lg:w-[550px] xl:w-[617px]"
                placeholder="Chat with us for best wedding plan."
                type="text"
                name="search"
                id="search"
              />
              <button className="font-semibold sm:ml-2.5 text-[15px] lg:text-[16px] cursor-pointer 3xl:text-[18px] text-white bg-[#EA0056] rounded-[6px] py-2 sm:mt-0 mt-3 px-5">
                Chat with PlanIt AI
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={targetRef} className="h-[1px] w-full"></div>

      {/* popular vanue search  */}
      <div className="container" id="comesViweMode">
        <div className="space-y-4 sm:space-y-10 xl:space-y-20">
          {/* title  */}
          <div className="pt-10 xl:pt-[60px]">
            <div className="pb-[40px]">
              <h3 className="font-semibold text-black text-[20px] sm:text-[24px] 3xl:text-[28px] text-center pb-2">
                Everything You Need to Plan the Perfect Event
              </h3>
              <p className="text-[#333333] font-normal text-[15px] sm:text-[16px] 3xl:text-[18px] text-center">
                Discover tools that handle the details — guest lists,
                invitations, vendors, and more — so you can focus on what
                matters.
              </p>
            </div>
            <div>
              <VenueSearches
                venuesearchData={dataPopularSearches}
                imgSizeDesktop={[
                  "w-[216px] h-[150px] smd:h-[200px] lg:h-[250px] 3xl:w-[216px] 3xl:h-[291px]",
                ]}
                slidesPerView={5}
                slidesPerViewTab={3}
                slidesPerViewMobo={2}
                imgOriginalSize={[216, 291]}
                top={"40%"}
                slideKey={"event"}
              />
            </div>
            <button className="font-semibold text-white text-[15px] sm:text-[16px] 3xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 px-8 mx-auto table mt-5 sm:mt-11 cursor-pointer">
              Create you event now
            </button>
          </div>

          {/* popular vanue search */}
          <div>
            <h3 className="font-semibold sm:text-left text-center text-black text-[20px] sm:text-[24px] 3xl:text-[28px] pb-[25px]">
              Popular Venue Searches
            </h3>

            <div>
              <VenueSearches
                venuesearchData={data}
                imgSizeDesktop={[380, 224]}
                imgOriginalSize={[380, 224]}
                slidesPerView={3}
                slidesPerViewTab={2}
                slidesPerViewMobo={1}
                top={"30%"}
              />
            </div>
          </div>

          {/* Creating Your Free Card is Simple */}
          <div>
            <div className="pb-[40px]">
              <h3 className="font-semibold text-black text-[20px] sm:text-[24px] 3xl:text-[28px] text-center pb-2">
                Creating Your Free Card is Simple
              </h3>
              <p className="text-[#333333] font-normal text-[15px] sm:text-[16px] 3xl:text-[18px] text-center">
                Discover tools that handle the details — guest lists,
                invitations, vendors, and more — so you can focus on what
                matters.
              </p>
            </div>
            <div>
              <VenueSearches
                venuesearchData={dataFreeCard}
                imgSizeDesktop={[277, 400]}
                imgOriginalSize={[277, 400]}
                slidesPerView={4}
                slidesPerViewTab={3}
                slidesPerViewMobo={1}
                top={"40%"}
                seemoreBtn={true}
              />
            </div>
            <button className="font-semibold text-white text-[16px] 3xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 px-12 mx-auto table mt-11 cursor-pointer">
              See all designs
            </button>
          </div>

          {/* Wedding Categories  */}
          <div>
            <div className="pb-[25px] flex items-center justify-between">
              <h3 className="font-semibold text-black text-[24px] 3xl:text-[28px]">
                Categories
              </h3>
              <button className="text-[#EA0056] font-semibold text-[15px] 3xl:text-[18px] cursor-pointer">
                View all categories
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-8 4xl:gap-x-11 xl:gap-y-6">
              {weddingCategories.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded-lg w-full"
                  style={{ backgroundColor: `${item.bg}` }}
                >
                  <Image
                    className="rounded-l-lg w-[150px] lg:w-[200px] 3xl:w-[237px]"
                    width={237}
                    height={157}
                    src={`${item.img}`}
                    alt="places"
                  />
                  <div className="px-[20px] lg:px-[45px] rounded-r-lg flex flex-col justify-center">
                    <h4 className="text-[#333333] font-medium text-[15px] md:text-[17px] lg:text-[20px] 3xl:text-[24px] w-full">
                      {item.title}
                    </h4>
                    <p className="text-[13px] lg:text-[15px] font-normal text-[#454545]">
                      {item.desc
                        ? item.desc.slice(0, 31)
                        : "description is not available"}
                      ...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* think it done it  */}
      <div className="bg-[#D4004E] bg-[linear-gradient(95deg,_rgba(212,_0,_78,_1)_5%,_rgba(125,_0,_46,_1)_100%)] mt-[70px] xl:mt-[100px]">
        <div className="container">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="py-15 lg:py-20 md:text-start text-center">
              <h3 className="font-bold text-[30px] sm:text-[38px] lg:text-[45px] xl:text-[68px] text-white leading-[1.1]">
                Think It. <br className="md:block hidden" /> Plan It. Done.
              </h3>
              <p className="font-medium text-[18px] xl:text-[24px] 4xl:text-[27px] text-white leading-[1.2] my-4">
                Your all-in-one AI assistant for creating{" "}
                <br className="sm:block hidden" /> unforgettable events
                effortlessly.
              </p>
              <button className="font-semibold text-[16px] cursor-pointer 3xl:text-[20px] text-[#EA0056] rounded-[8px] bg-white py-2 px-8">
                Start Planning Now
              </button>
            </div>
            <div className="flex items-end md:w-fit w-[80%] mx-auto md:ml-auto md:mr-0">
              <Image
                className="rounded-t-lg w-full md:w-[430px] xl:w-[550px] 3xl:w-[634px]"
                width={634}
                height={468}
                src={"/images/rightsideimg.png"}
                alt="rightsideimg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-[120px]">
        <div className="space-y-10 xl:space-y-20">
          {/* popular vanue search */}
          <div className="pt-[70px]">
            <div className="pb-[40px]">
              <h3 className="font-semibold text-black text-[20px] sm:text-[24px] 3xl:text-[28px] text-center pb-2">
                Creating Your Free Website is Simple
              </h3>
              <p className="text-[#333333] font-normal text-[15px] sm:text-[16px] 3xl:text-[18px] text-center">
                Discover tools that handle the details — guest lists,
                invitations, vendors, and more — so you can focus on what
                matters.
              </p>
            </div>

            <div>
              <VenueSearches
                venuesearchData={dataFreeWebsite}
                imgSizeDesktop={[380, 270]}
                imgOriginalSize={[380, 270]}
                slidesPerView={3}
                slidesPerViewTab={2}
                slidesPerViewMobo={1}
                top={"35%"}
                seemoreBtn={true}
              />
            </div>
            <button className="font-semibold text-white text-[16px] 3xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 px-12 mx-auto table mt-11 cursor-pointer">
              See all designs
            </button>
          </div>

          {/* Featured Make Up Artist For june */}
          <div>
            <h3 className="font-semibold text-black text-[20px] sm:text-left text-center sm:text-[24px] 3xl:text-[28px] pb-[25px]">
              Featured Make Up Artist For june
            </h3>

            <div>
              <VenueSearches
                venuesearchData={makeupartist}
                imgSizeDesktop={[257, 240]}
                imgOriginalSize={[257, 240]}
                slidesPerView={4}
                slidesPerViewTab={3}
                slidesPerViewMobo={1}
                top={"30%"}
              />
            </div>
          </div>

          {/* Featured Make Up Artist For june */}
          <div className="mb-12 lg:mb-28">
            <h3 className="font-semibold text-black text-[20px] sm:text-left text-center sm:text-[24px] 3xl:text-[28px] pb-[25px]">
              Latest Blogs
            </h3>

            <div>
              <VenueSearches
                venuesearchData={latestBlogs}
                imgSizeDesktop={[380, 270]}
                imgOriginalSize={[380, 270]}
                slidesPerView={3}
                slidesPerViewTab={2}
                slidesPerViewMobo={1}
                top={"26%"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* chat  */}
      <div
        className={`${
          isChatShow
            ? "sticky bottom-16 xl:bottom-3 z-[9] chatpopsup"
            : "hidden"
        } w-[70%] mx-auto md:block hidden mb-10`}
      >
        <div className="relative group w-full mx-auto p-[2px]">
          {/* Main card content */}
          <div className="rounded-full bg-[#fbfbfb] overflow-hidden relative z-10 shadow-[0_0_30px_0px_#b5b5b5] card">
            <div>
              <div className="relative">
                <input
                  className="placeholder:text-[#454545] placeholder:text-[15px] 3xl:placeholder:text-[18px] placeholder:font-normal bg-white w-full h-[50px]  px-11 outline-none text-black border-b border-b-[#e9e9e9]"
                  type="text"
                  name="chat"
                  id="chat"
                  placeholder="Chat with planit AI..."
                />
                <button className="cursor-pointer">
                  <Image
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    width={32}
                    height={32}
                    src={"/images/sendbtn2.svg"}
                    alt="sendbtn2.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
