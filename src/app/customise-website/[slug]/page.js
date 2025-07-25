"use client";
import FirstWebSite from "@/components/create-website/FirstWebSite";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useRef, useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Page = () => {
  const [view, setView] = useState("desktop");
  const [openItem, setOpenItem] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [eventDate, setEventDate] = useState(null);
  const [storyImage, setStoryImage] = useState(null);
  const [storyDragActive, setStoryDragActive] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryDragActive, setGalleryDragActive] = useState(false);
  const inputRef = useRef(null);
  const storyInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="bg-[#eded]">
      <Header />
      <div className="px-10 4xl:px-0 4xl:max-w-[1760px] mx-auto my-10">
        <div className="flex ">
          <div className="w-[70%]">
            <FirstWebSite view={view} setView={setView} />
          </div>
          <div className="w-[30%] ml-5">
            <div className="p-5 font-sans bg-white rounded-xl size-full">
              {/* Top Section */}
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-medium text-gray-500">Pages</h2>
                  <button className="text-xs text-pink-600 hover:underline cursor-pointer">
                    Reorder pages
                  </button>
                </div>

                {/* Nav Items */}
                {["Home", "Our Story", "Gallery"].map((item) => (
                  <div key={item}>
                    <button
                      onClick={() => toggleItem(item)}
                      className="w-full flex justify-between items-center py-3 text-left border-b cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-black">
                        {item}
                      </span>
                      <span className="text-lg text-black text-[12px]">
                        {openItem === item ? "\u25BC" : "\u25B6"}
                      </span>
                    </button>
                    {openItem === item &&
                      (item === "Home" ? (
                        <div className="max-w-xl mx-auto my-3 font-sans text-gray-800">
                          {/* Cover Photo Section */}
                          <div className="mb-8">
                            <h2 className="text-sm font-medium text-gray-700 mb-2">
                              Cover photo:
                            </h2>
                            <div
                              className={`w-full h-40 bg-gray-100 rounded-lg border border-dashed border-pink-400 flex items-center justify-center flex-col transition-colors duration-200 ${
                                dragActive ? "bg-pink-50 border-pink-600" : ""
                              }`}
                              onClick={() =>
                                inputRef.current && inputRef.current.click()
                              }
                              onDragOver={(e) => {
                                e.preventDefault();
                                setDragActive(true);
                              }}
                              onDragLeave={(e) => {
                                e.preventDefault();
                                setDragActive(false);
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                setDragActive(false);
                                if (
                                  e.dataTransfer.files &&
                                  e.dataTransfer.files[0]
                                ) {
                                  setCoverImage(e.dataTransfer.files[0]);
                                }
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <input
                                ref={inputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  if (e.target.files && e.target.files[0]) {
                                    setCoverImage(e.target.files[0]);
                                  }
                                }}
                              />
                              {coverImage ? (
                                <Image
                                width={100}
                                height={100}
                                  src={URL.createObjectURL(coverImage)}
                                  alt="Cover"
                                  className="h-full max-h-36 rounded object-cover size-full object-contain"
                                />
                              ) : (
                                <span className="text-pink-600 text-sm font-medium select-none">
                                  + Add a cover photo
                                  <br />
                                  <span className="text-gray-400 text-xs">
                                    (Click or drag & drop)
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                          {/* Basic Info */}
                          <div className="mb-6">
                            <h2 className="text-sm font-medium text-gray-700 mb-4">
                              Basic info:
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-sm mb-1 font-medium text-gray-700">
                                  Name of Bride{" "}
                                  <span className="text-pink-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter bride's name"
                                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                                />
                              </div>
                              <div>
                                <label className="block text-sm mb-1 font-medium text-gray-700">
                                  Name of Groom{" "}
                                  <span className="text-pink-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter groom's name"
                                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-sm mb-1 font-medium text-gray-700">
                                  Event date{" "}
                                  <span className="text-pink-600">*</span>
                                </label>
                                <div className="relative">
                                  <DatePicker
                                    selected={eventDate}
                                    onChange={(date) => setEventDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select event date"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                                    popperPlacement="bottom"
                                    required
                                  />
                                  <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">
                                    📅
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm mb-1 font-medium text-gray-700">
                                  Event Location
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter event location"
                                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                                />
                              </div>
                            </div>
                            {/* Announcement */}
                            <div className="mb-6">
                              <label className="block text-sm mb-1 font-medium text-gray-700">
                                Announcement
                              </label>
                              <textarea
                                rows="4"
                                placeholder="Enter your announcement"
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                              ></textarea>
                            </div>
                          </div>
                          {/* Save Button */}
                          <div className="text-center">
                            <button className="w-full bg-pink-600 text-white text-sm font-semibold py-3 rounded hover:bg-pink-700 transition cursor-pointer">
                              Save
                            </button>
                          </div>
                        </div>
                      ) : item === "Our Story" ? (
                        <div className="max-w-xl mx-auto my-3 font-sans text-gray-800">
                          {/* Story Input */}
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Story <span className="text-pink-600">*</span>
                            </label>
                            <textarea
                              rows="5"
                              placeholder="Enter your story here"
                              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            ></textarea>
                          </div>

                          {/* Image Upload Section */}
                          <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Image:
                            </label>
                            <div className="bg-gray-100 p-4 rounded-lg grid grid-cols-2 gap-4 items-center">
                              {/* Left: Preview or Placeholder */}
                              <div className="bg-white border border-gray-300 rounded-md h-32 flex items-center justify-center overflow-hidden">
                                {storyImage ? (
                                  <Image
                                    width={120}
                                    height={120}
                                    src={URL.createObjectURL(storyImage)}
                                    alt="Story"
                                    className="h-full max-h-28 rounded object-cover"
                                  />
                                ) : (
                                  <div className="text-center text-gray-400 text-sm">
                                    <div className="mb-1 w-12 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                                  </div>
                                )}
                              </div>

                              {/* Right: Add photo dashed box */}
                              <div
                                className={`border-2 border-dashed border-pink-500 h-32 rounded-md flex items-center justify-center cursor-pointer hover:bg-pink-50 transition flex-col ${
                                  storyDragActive ? "bg-pink-50 border-pink-600" : ""
                                }`}
                                onClick={() => storyInputRef.current && storyInputRef.current.click()}
                                onDragOver={e => {
                                  e.preventDefault();
                                  setStoryDragActive(true);
                                }}
                                onDragLeave={e => {
                                  e.preventDefault();
                                  setStoryDragActive(false);
                                }}
                                onDrop={e => {
                                  e.preventDefault();
                                  setStoryDragActive(false);
                                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                    setStoryImage(e.dataTransfer.files[0]);
                                  }
                                }}
                              >
                                <input
                                  ref={storyInputRef}
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={e => {
                                    if (e.target.files && e.target.files[0]) {
                                      setStoryImage(e.target.files[0]);
                                    }
                                  }}
                                />
                                <span className="text-pink-600 text-sm font-medium select-none cursor-pointer text-center">
                                  + Add a photo
                                  <br />
                                  <span className="text-gray-400 text-xs">(Click or drag & drop)</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Save Button */}
                          <div className="text-center">
                            <button className="w-full bg-pink-600 text-white text-sm font-semibold py-3 rounded hover:bg-pink-700 transition cursor-pointer">
                              Save
                            </button>
                          </div>
                        </div>
                      ) : item === "Gallery" ? (
                        <div className="max-w-xl mx-auto my-3 font-sans text-gray-800">
                          {/* Image Upload Label */}
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image:
                          </label>

                          {/* Upload Grid Box */}
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="grid grid-cols-3 gap-2">
                              {/* Add Photo Box */}
                              <div
                                className={`col-span-1 border-2 border-dashed border-pink-500 rounded-md flex items-center justify-center h-24 cursor-pointer hover:bg-pink-50 transition flex-col ${
                                  galleryDragActive
                                    ? "bg-pink-50 border-pink-600"
                                    : ""
                                }`}
                                onClick={() =>
                                  galleryInputRef.current &&
                                  galleryInputRef.current.click()
                                }
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  setGalleryDragActive(true);
                                }}
                                onDragLeave={(e) => {
                                  e.preventDefault();
                                  setGalleryDragActive(false);
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  setGalleryDragActive(false);
                                  if (
                                    e.dataTransfer.files &&
                                    e.dataTransfer.files.length > 0
                                  ) {
                                    const files = Array.from(
                                      e.dataTransfer.files
                                    ).slice(0, 4 - galleryImages.length);
                                    setGalleryImages((prev) =>
                                      [...prev, ...files].slice(0, 4)
                                    );
                                  }
                                }}
                              >
                                <input
                                  ref={galleryInputRef}
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="hidden"
                                  onChange={(e) => {
                                    if (
                                      e.target.files &&
                                      e.target.files.length > 0
                                    ) {
                                      const files = Array.from(
                                        e.target.files
                                      ).slice(0, 4 - galleryImages.length);
                                      setGalleryImages((prev) =>
                                        [...prev, ...files].slice(0, 4)
                                      );
                                    }
                                  }}
                                />
                                <span className="text-pink-600 text-[12px] font-medium select-none">
                                  + Add a photo
                                </span>
                              </div>

                              {/* 4 Image Previews or Placeholders */}
                              <div className="col-span-2 grid grid-cols-2 gap-2">
                                {[0, 1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className="bg-gray-300 rounded-md h-24 w-full flex items-center justify-center overflow-hidden"
                                  >
                                    {galleryImages[i] ? (
                                      <Image
                                      width={100}
                                height={100}
                                        src={URL.createObjectURL(
                                          galleryImages[i]
                                        )}
                                        alt={`Gallery ${i + 1}`}
                                        className="object-cover w-full h-full"
                                      />
                                    ) : (
                                      <div className="w-full h-full" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Save Button */}
                          <div className="mt-6 text-center">
                            <button className="w-full bg-pink-600 text-white text-sm font-semibold py-3 rounded hover:bg-pink-700 transition cursor-pointer">
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="pl-4 py-2 text-sm text-gray-600 border-gray-200">
                          Add content for <strong>{item}</strong>
                        </div>
                      ))}
                  </div>
                ))}

                {/* Add Custom Page */}
                <div className="mt-4 pt-4 text-center">
                  <button className="w-full text-sm text-pink-600 border-1 border-dashed border-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 transition cursor-pointer">
                    + Add a custom page
                  </button>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="space-y-4">
                <div className="flex items-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <Image
                    src="/images/final-home/bannerbg.png" // Replace with your own
                    alt="card"
                    className="w-16 h-20 object-cover rounded"
                    width={100}
                    height={100}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-800">
                      See invitation cards
                    </p>
                    <button className="mt-2 text-xs bg-pink-600 text-white px-3 py-1 rounded cursor-pointer">
                      See cards
                    </button>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <Image
                    src="/images/final-home/bannerbg.png" // Replace with your own
                    alt="venue"
                    className="w-16 h-20 object-cover rounded"
                    width={100}
                    height={100}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-800">
                      Looking for a venue?
                    </p>
                    <button className="mt-2 text-xs bg-pink-600 text-white px-3 py-1 rounded cursor-pointer">
                      See venues
                    </button>
                  </div>
                </div>
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
