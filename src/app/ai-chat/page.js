"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [images, setImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const maxImages = 2;

  const liElement = [
    "Design a invitation card",
    "Book a banquet",
    "Plan a Birthday event",
    "Plan a wedding event",
    "Looking for a catering services",
    "Accommodation & Travel Arrangements",
  ];
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter((file) => file.type.startsWith("image/"));

    const remainingSlots = maxImages - images.length;

    if (remainingSlots <= 0) {
      // No space left → reject all, show alert
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
      e.target.value = "";
      return;
    }

    const allowedFiles = validImages.slice(0, remainingSlots);
    const newImages = allowedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      id: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);

    //  If user tried to add more than allowed, show alert
    if (validImages.length > remainingSlots) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }

    e.target.value = "";
  };

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-[952px] mx-auto">
        <div className="py-[40px] 2xl:py-[60px] 3xl:py-[120px]">
          <h3 className="text-center font-medium text-[27px] 2xl:text-[30px] text-[#151515]">
            Welcome{" "}
            <span
              className="text-black text-[44px] 3xl:text-[50px]"
              style={{ fontFamily: "allura-font" }}
            >
              Rabina
            </span>
          </h3>
          <h2 className="text-[#151515] font-semibold text-[16px] sm:text-[24px] md:text-[28px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[45px] text-center">
            What is your plan today
          </h2>

          <ul className="flex justify-center mt-8 gap-x-1.5 gap-y-3 max-w-[1024px] mx-auto flex-wrap mb-[75px]">
            {liElement.map((item, index) => (
              <li
                key={index}
                className="font-normal text-[14px] 3xl:text-[18px] text-[#363636] rounded-lg bg-[#F6F6F6] py-2 px-4 w-fit"
              >
                {item}
              </li>
            ))}
          </ul>

          {images.length > 0 && (
            <div className="py-4 px-[75px] flex flex-wrap gap-4 bg-[#F2F2F2] rounded-t-[15px]">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="relative w-[60px] h-[60px] rounded-lg overflow-hidden border border-gray-300"
                >
                  <Image
                    src={img.url}
                    alt="Selected"
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(img.id)}
                    className="absolute top-0 right-0 bg-black bg-opacity-50 text-white text-xs px-1 rounded-bl cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <form
            className={`${
              images.length > 0
                ? "rounded-t-[0] rounded-b-[15px] pt-0"
                : "rounded-[15px] pt-6 3xl:pt-10"
            } bg-[#F2F2F2] pb-6 3xl:pb-10 px-[45px] 3xl:px-[75px] relative`}
          >
            <label className="relative">
              <input
                className="bg-white rounded-[10px] 3xl:rounded-[15px] w-full text-black h-[46px] 3xl:h-[82px] font-normal text-[15px] 3xl:text-[20px] placeholder:text-[#9E9E9E] placeholder:font-normal placeholder:text-[15px] 3xl:placeholder:text-[20px] pl-5 pr-20 outline-none"
                type="text"
                name="text"
                id="text"
                placeholder="Describe your plan and build the event with PlanIt Ai"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer">
                <Image
                  className="w-[28px] 3xl:w-[47px]"
                  width={47}
                  height={47}
                  src={"/images/sendbtn.svg"}
                  alt="sendbtn.svg"
                />
              </button>
              <label
                htmlFor="file"
                className="absolute top-1/2 -translate-y-1/2 left-[-34px] 3xl:left-[-50px] cursor-pointer"
              >
                <Image
                className="w-[22px] 3xl:w-[26px]"
                  width={26}
                  height={26}
                  src={"/images/fileselector.svg"}
                  alt="fileselector"
                />
              </label>
            </label>

            <input
              onChange={handleFileChange}
              className="hidden"
              type="file"
              name="file"
              id="file"
            />
          </form>

          <h3
            className="text-[50px] 2xl:text-[70px] 3xl:text-[105px] font-normal text-[#151515] text-center"
            style={{ fontFamily: "allura-font" }}
          >
            or
          </h3>
          <Link href={'/plan-your-event'} className="font-medium text-[18px] 3xl:text-[25px] text-white bg-[#EA0056] hover:bg-[#d2034f] transition cursor-pointer rounded-lg w-fit text-center 4xl:w-full  py-3 3xl:py-5 px-14 mx-auto table">
            Create event manually
          </Link>
        </div>
      </div>

      {showAlert && (
        <div className="fixed top-1/5 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999] w-[90%] max-w-md flex justify-between items-center">
          <span className="text-sm sm:text-[20px]">
            Maximum {maxImages} images selected!
          </span>
          <button
            onClick={() => setShowAlert(false)}
            className="text-lg font-bold ml-4"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
