import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  const boxData = [
    { icon: "/images/vendor-images/Banquets.svg", name: "Banquets", link:"/listing-page", },
    { icon: "/images/vendor-images/photography.svg", name: "Photographers", link:"/listing-page", },
    { icon: "/images/vendor-images/makeup.svg", name: "Makeup Artists", link:"/listing-page", },
    { icon: "/images/vendor-images/Florists.svg", name: "Florists", link:"/listing-page", },
    { icon: "/images/vendor-images/Caterers.svg", name: "Caterers", link:"/listing-page", },
    { icon: "/images/vendor-images/Planners.svg", name: "Planners", link:"/listing-page", },
    { icon: "/images/vendor-images/Videography.svg", name: "Videography", link:"/listing-page", },
    { icon: "/images/vendor-images/CardPrints.svg", name: "Card Prints", link:"/listing-page", },
    { icon: "/images/vendor-images/Boutique.svg", name: "Boutique", link:"/listing-page", },
    { icon: "/images/vendor-images/Transports.svg", name: "Transports", link:"/listing-page", },
    { icon: "/images/vendor-images/Foods.svg", name: "Foods", link:"/listing-page", },
    { icon: "/images/vendor-images/BrandsandDJs.svg", name: "Brands and DJs", link:"/listing-page", },
    { icon: "/images/vendor-images/Cakesanddesserts.svg", name: "Cakes and desserts", link:"/listing-page", },
    { icon: "/images/vendor-images/Barandbeverage.svg", name: "Bar and beverage", link:"/listing-page", },
    { icon: "/images/vendor-images/Officiants.svg", name: "Officiants", link:"/listing-page", },
    { icon: "/images/vendor-images/Eventextras.svg", name: "Eventextras", link:"/listing-page", },
  ];
  return (
    <div className="bg-[#EBEDF0]">
      <Header />
      <div className="py-12">
        <div className="container">
          <div className="flex items-center pb-4">
            <h3 className="text-black font-normal text-[15px] leading-[1]">Vendors</h3>
            <p className="text-[16px] font-normal text-black mr-3.5 ml-8">
              Based on your location in{" "}
              <span className="font-bold">Kolkata, West Bengal</span>
            </p>
            <p className="text-pink-600 text-[14px] font-normal underline">
              Change location
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[30px]">
            {boxData.map((item,index)=>(
                <Link href={`${item.link}`} key={index} className="bg-white rounded-md hover:shadow-2xl px-1 py-10 flex flex-col items-center justify-center  ">
                <Image
                    className="mx-auto w-[80px] h-[120px] object-contain"
                    width={120}
                    height={140}
                    src={`${item.icon}`}
                    alt="Banquets"
                />
                <h4 className="font-semibold text-black text-[20px] uppercase text-center pt-2 mt-auto">
                    {item.name}
                </h4>
                </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
