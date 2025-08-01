import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const page = () => {
  const vendors = [
    { img: "/images/vendor-listing/card-1.png",serviceName:'Catering Services' },
    { img: "/images/vendor-listing/card-2.png",serviceName:'Venues' },
    { img: "/images/vendor-listing/card-3.png",serviceName:'Photography' },
    { img: "/images/vendor-listing/card-4.png" ,serviceName:'Bridal Makeup' },
    { img: "/images/vendor-listing/card-5.png", serviceName:'Decorators' },
    { img: "/images/vendor-listing/card-6.png", serviceName:'Wedding Planners' },
    { img: "/images/vendor-listing/card-7.png", serviceName:'Mehandi Artist' },
    { img: "/images/vendor-listing/card-8.png", serviceName:'Disk Jockey (DJs)' },
    { img: "/images/vendor-listing/card-9.png" , serviceName:'Pre-wedding Photographers' },
    { img: "/images/vendor-listing/card-10.png" , serviceName:'Wedding Pandits' },
    { img: "/images/vendor-listing/card-11.png", serviceName:'Cake' },
    { img: "/images/vendor-listing/card-12.png", serviceName:'Bartenders' },
  ];
  return (
    <div>
      <Header />
      <div className="w-full 2xl:px-0 px-[6rem] 2xl:max-w-[1200px] mx-auto">
        <div className="pt-10 pb-[122px]">
          <h4 className="font-normal text-[28px] 3xl:text-[35px] text-black pb-5 3xl:pb-10">Vendors</h4>
          <div className="grid grid-cols-4 gap-[25px] 3xl:gap-[30px]">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`${vendor.img}`}
                  alt={`Vendor ${index + 1}`}
                  width={276}
                  height={276}
                  className="size-full object-cover rounded-xl"
                />
                {/* Service Name - centered and animated */}
                <h5
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-[20px] uppercase z-[2] w-full text-center opacity-0 group-hover:opacity-100 group-hover:text-[24px] transition-all duration-300"
                >
                  {vendor.serviceName}
                </h5>
                {/* Service Name - original position, fades out on hover */}
                <h5
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold text-[20px] uppercase z-[1] w-full text-center group-hover:opacity-0 transition-all duration-300"
                >
                  {vendor.serviceName}
                </h5>
                {/* Black overlay animates up on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 top-[35%] homepagebanner_bg opacity-[0.9] z-[0] transition-all duration-300 group-hover:top-0"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
