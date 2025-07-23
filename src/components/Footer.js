import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="banner_gradient sticky left-0 right-0 w-full top-0 z-[99]">
      <div className="container">
        <div className="py-[50px]">
          <div className="flex items-center sm:space-x-5 sm:flex-row flex-col">
            <Image
              className="w-[70px] sm:w-[90px] 3xl:w-[158px]"
              width={158}
              height={52}
              src={"/images/PlanItLogoWhite.svg"}
              alt="planItLogo"
            />
            <h3 className="font-semibold text-[18px] 3xl:text-[22px] 4xl:text-[28px] text-white sm:my-0 my-2">
              - Your Personal Wedding Planner -
            </h3>
            <h3 className="font-medium text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-white">
              Plan your wedding with Us
            </h3>
          </div>

          <div className="pt-[40px] grid grid-cols-1 sm:grid-cols-7 xl:grid-cols-11 gap-8 xl:gap-12">
            <ul className="space-y-[18px] 3xl:space-y-[24px] col-span-2">
              <li className="font-medium text-[16px] 3xl:text-[20px] text-white">
                Quick Links
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white">
                <Link href="#">E - Card</Link>
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white">
                <Link href="#">Manage guest</Link>
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white">
                <Link href="#">Create your website</Link>
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white">
                <Link href="#">Book vendors</Link>
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white">
                <Link href="#">PlanIt AI</Link>
              </li>
            </ul>
            <ul className="space-y-[18px] 3xl:space-y-[24px] col-span-2">
              <li className="font-medium text-[16px] 3xl:text-[20px] text-white">
                Contact Info
              </li>
              <li className="font-medium text-[15px] 3xl:text-[18px] text-white">
                For Vendors
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white flex items-center">
                <Image
                  className="mr-2"
                  width={14}
                  height={11}
                  src={"/images/mail.svg"}
                  alt="mail.svg"
                />
                vendors@planit.com
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white flex items-center">
                <Image
                  className="mr-2"
                  width={14}
                  height={11}
                  src={"/images/phone.svg"}
                  alt="mail.svg"
                />
                0124-6812346
              </li>
              <li className="font-medium text-[16px] 3xl:text-[20px] text-white  border-t border-t-[#5f5f5fdd] pt-5 w-[70%]">
                For Users
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white flex items-center">
                <Image
                  className="mr-2"
                  width={14}
                  height={11}
                  src={"/images/mail.svg"}
                  alt="mail.svg"
                />
                info@planit.com
              </li>
              <li className="font-normal text-[15px] 3xl:text-[18px] text-white flex items-center">
                <Image
                  className="mr-2"
                  width={14}
                  height={11}
                  src={"/images/phone.svg"}
                  alt="mail.svg"
                />
                0124-6812346
              </li>
            </ul>
            <div className="space-y-[18px] 3xl:space-y-[24px] col-span-3">
              <h5 className="font-medium text-[16px] 3xl:text-[20px] text-white">
                Latest from Blog
              </h5>
              <div className="flex items-center">
                <Image
                  className="rounded-sm w-[28px] 3xl:w-[30px]"
                  width={60}
                  height={60}
                  src={"/images/footerimg1.png"}
                  alt="footerimg1.png"
                />
                <div className="ml-3">
                  <p className="text-[13px] 3xl:text-[15px] text-white font-normal">
                    A Treadmill Baraat & Music At Its Core...
                  </p>
                  <p className="text-[13px] 3xl:text-[15px] text-[#EA0056] font-normal">
                    03 Jul 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  className="rounded-sm w-[28px] 3xl:w-[30px]"
                  width={60}
                  height={60}
                  src={"/images/footerimg2.png"}
                  alt="footerimg1.png"
                />
                <div className="ml-3">
                  <p className="text-[13px] 3xl:text-[15px] text-white font-normal">
                    Passport-Ready Paradise: E-Visa...
                  </p>
                  <p className="text-[13px] 3xl:text-[15px] text-[#EA0056] font-normal">
                    03 Jul 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between col-span-4">
              <div>
                <h5 className="font-medium text-[16px] 3xl:text-[20px] text-white mb-[24px]">
                  Get Latest Blog Alerts
                </h5>
                <label className="relative">
                  <input
                    className="placeholder:text-white placeholder:text-[15px] 3xl:placeholder:text-[17px] outline-none border-b w-full pl-10 pb-2"
                    type="text"
                    name="mail"
                    id="mail"
                    placeholder="Enter your email address"
                  />
                  <Image
                    className="absolute top-1/2 -translate-y-1/2 left-0"
                    width={23}
                    height={16}
                    src={"/images/mail2.svg"}
                    alt="mail2"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2  right-0">
                    &rarr;
                  </span>
                </label>
              </div>
              <button className="my-3.5 font-semibold text-white text-[15px] 3xl:text-[20px] bg-[#EA0056] rounded-[8px] py-2 px-12 table cursor-pointer w-fit">
                Register as a Vendor
              </button>
              <div>
                <h5 className="font-medium text-[16px] 3xl:text-[20px] text-white  mb-[24px]">
                  Follow Us on
                </h5>
                <div className="space-x-[10px] flex items-center">
                  <Link href={"#"}>
                    <Image
                      className="size-[30px] 3xl:size-[35px]"
                      width={35}
                      height={35}
                      src={"/images/facebook.svg"}
                      alt="facebook.svg"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      className="size-[30px] 3xl:size-[35px]"
                      width={35}
                      height={35}
                      src={"/images/Twitter.svg"}
                      alt="facebook.svg"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      className="size-[30px] 3xl:size-[35px]"
                      width={35}
                      height={35}
                      src={"/images/Lindin.svg"}
                      alt="facebook.svg"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      className="size-[30px] 3xl:size-[35px]"
                      width={35}
                      height={35}
                      src={"/images/pinterast.svg"}
                      alt="facebook.svg"
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      className="size-[30px] 3xl:size-[35px]"
                      width={35}
                      height={35}
                      src={"/images/yt.svg"}
                      alt="facebook.svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-[14px] 3xl:text-[14px] font-normal py-3 3xl:py-3 text-center border-t border-t-[#4a4a4add]">
        © {new Date().getUTCFullYear()} Plan<span className="text-[#EA0056]">It</span>. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
