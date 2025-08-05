"use client";
import FirstWebSite from "@/components/create-website/FirstWebSite";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useRef, useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

const Page = () => {
  const [isRounded, setIsRounded] = useState(false);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [view, setView] = useState("desktop");
  const [openItem, setOpenItem] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [storyDragActive, setStoryDragActive] = useState(false);
  const [galleryDragActive, setGalleryDragActive] = useState(false);
  const [loading, setLoading] = useState({
    home: false,
    story: false,
    gallery: false,
    publish: false
  });

  const inputRef = useRef(null);
  const storyInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  // Website data state
  const [websiteData, setWebsiteData] = useState({
    brideName: "Alex",
    groomName: "Jamie",
    eventDate: "October 15, 2025",
    eventLocation: "Tuscany, Italy",
    coverImage: "https://live.staticflickr.com/65535/50344935577_1aa9d7bb4c_o.jpg",
    story: "From that first coffee date to a decade of adventures and heartfelt memories, here's how we found our forever.",
    storyImage: null,
    galleryImages: [
      "/images/homepage-slider-images/event-now/card1.png",
      "/images/homepage-slider-images/event-now/card2.png",
      "/images/homepage-slider-images/event-now/card3.png",
      "/images/homepage-slider-images/event-now/card4.png"
    ]
  });

  // Form data states
  const [homeFormData, setHomeFormData] = useState({
    brideName: "",
    groomName: "",
    eventDate: null,
    eventLocation: "",
    coverImage: null
  });

  const [storyFormData, setStoryFormData] = useState({
    story: ""
  });

  const [galleryImages, setGalleryImages] = useState([]);

  // Upload function
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  // Handle form submissions
  const handleHomeSubmit = async () => {
    setLoading(prev => ({ ...prev, home: true }));

    try {
      let coverImageUrl = websiteData.coverImage;

      // Upload cover image if new one is selected
      if (homeFormData.coverImage) {
        coverImageUrl = await uploadToCloudinary(homeFormData.coverImage);
      }

      // Update website data
      setWebsiteData(prev => ({
        ...prev,
        brideName: homeFormData.brideName || prev.brideName,
        groomName: homeFormData.groomName || prev.groomName,
        eventDate: homeFormData.eventDate ? homeFormData.eventDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : prev.eventDate,
        eventLocation: homeFormData.eventLocation || prev.eventLocation,
        coverImage: coverImageUrl
      }));

      // Reset form
      setHomeFormData({
        brideName: "",
        groomName: "",
        eventDate: null,
        eventLocation: "",
        coverImage: null
      });

      toast.success('Home section updated successfully!');
    } catch (error) {
      console.error('Error updating home section:', error);
      toast.error('Failed to update home section. Please try again.');
    } finally {
      setLoading(prev => ({ ...prev, home: false }));
    }
  };

  const handleStorySubmit = async () => {
    setLoading(prev => ({ ...prev, story: true }));

    try {
      // Update website data
      setWebsiteData(prev => ({
        ...prev,
        story: storyFormData.story || prev.story
      }));

      // Reset form
      setStoryFormData({ story: "" });

      toast.success('Story section updated successfully!');
    } catch (error) {
      console.error('Error updating story section:', error);
      toast.error('Failed to update story section. Please try again.');
    } finally {
      setLoading(prev => ({ ...prev, story: false }));
    }
  };

  const handleGallerySubmit = async () => {
    setLoading(prev => ({ ...prev, gallery: true }));

    try {
      // Upload all gallery images
      const uploadPromises = galleryImages.map(file => uploadToCloudinary(file));
      const uploadedUrls = await Promise.all(uploadPromises);

      // Check if current gallery has default images (local paths starting with "/images/")
      const hasDefaultImages = websiteData.galleryImages.some(img =>
        img && (img.startsWith('/images/') || img.startsWith('/uploads/'))
      );

      // If this is the first upload (has default images), replace them completely
      // Otherwise, append to existing images
      const newGalleryImages = hasDefaultImages
        ? uploadedUrls  // Replace default images with new uploads
        : [...websiteData.galleryImages.filter(img => img), ...uploadedUrls]; // Append to existing

      // Update website data
      setWebsiteData(prev => ({
        ...prev,
        galleryImages: newGalleryImages
      }));

      // Reset form
      setGalleryImages([]);

      const successMessage = hasDefaultImages
        ? `Gallery updated successfully! Replaced default images with ${uploadedUrls.length} new images.`
        : `Gallery updated successfully! Added ${uploadedUrls.length} new images. Total: ${newGalleryImages.length} images.`;

      toast.success(successMessage);
    } catch (error) {
      console.error('Error updating gallery:', error);
      toast.error('Failed to update gallery. Please try again.');
    } finally {
      setLoading(prev => ({ ...prev, gallery: false }));
    }
  };

  // Handle removing image from gallery
  const handleRemoveImage = (indexToRemove) => {
    setWebsiteData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, index) => index !== indexToRemove)
    }));
    toast.success('Image removed from gallery successfully!');
  };

  // Handle website publishing
  const handlePublish = async () => {
    setLoading(prev => ({ ...prev, publish: true }));

    try {
      // Generate unique website slug/ID
      const websiteSlug = `wedding-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // Prepare website data for backend
      const publishData = {
        slug: websiteSlug,
        brideName: websiteData.brideName,
        groomName: websiteData.groomName,
        eventDate: websiteData.eventDate,
        eventLocation: websiteData.eventLocation,
        coverImage: websiteData.coverImage,
        story: websiteData.story,
        storyImage: websiteData.storyImage,
        galleryImages: websiteData.galleryImages,
        publishedAt: new Date().toISOString(),
        isPublished: true
      };

      // Send to local API first to save the JSON file
      const localResponse = await fetch(`/api/websites/${websiteSlug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(publishData),
      });

      if (!localResponse.ok) {
        const errorData = await localResponse.json();
        throw new Error(errorData.error || 'Failed to publish website locally');
      }

      // Optional: Send to external backend as well
      try {
        const backendResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/planners/websites/create`, 
          publishData,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}` 
            }
          }
        );
        console.log('Backend sync successful:', backendResponse.data);
      } catch (backendError) {
        console.log('External backend sync failed:', backendError);
        // Don't throw error as local publish succeeded
      }

      // Generate public website URL
      const websiteUrl = `${window.location.origin}/wedding/${websiteSlug}`;

      // Show success message with link
      toast.success(
        <div>
          <div>🎉 Website published successfully!</div>
          <div className="mt-1 text-sm">
            <strong>Your website:</strong>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              {websiteUrl}
            </a>
          </div>
        </div>,
        {
          autoClose: 10000, // Show for 10 seconds
          style: { maxWidth: '500px' }
        }
      );

      // Copy URL to clipboard
      try {
        await navigator.clipboard.writeText(websiteUrl);
        setTimeout(() => {
          toast.info('Website URL copied to clipboard! 📋');
        }, 1000);
      } catch (error) {
        console.log('Clipboard copy failed:', error);
      }

    } catch (error) {
      console.error('Error publishing website:', error);
      toast.error(`Failed to publish website: ${error.message}. Please try again.`);
    } finally {
      setLoading(prev => ({ ...prev, publish: false }));
    }
  };

  return (
    <div className="bg-[#eded]">
      <Header />
      <div className="px-4 lg:px-10 4xl:px-0 4xl:max-w-[1760px] mx-auto my-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[70%]">
            <FirstWebSite
              view={view}
              setView={setView}
              websiteData={websiteData}
              onRemoveImage={handleRemoveImage}
            />
          </div>
          <div className="w-full lg:w-[30%]">
            <div className="p-5 font-sans bg-white rounded-xl h-fit">
              {/* Top Section */}
              <button
                onClick={handlePublish}
                disabled={loading.publish}
                className="w-full lg:w-[170px] cursor-pointer font-semibold text-[15px] text-white hover:bg-[#EA0056] transition ease bg-[#EA0056] py-2 px-5 rounded-sm mb-8 ml-auto table disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading.publish ? 'Publishing...' : 'Publish'}
              </button>
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
                              className={`w-full h-40 bg-gray-100 rounded-lg border border-dashed border-pink-400 flex items-center justify-center flex-col transition-colors duration-200 ${dragActive ? "bg-pink-50 border-pink-600" : ""
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
                                  setHomeFormData(prev => ({
                                    ...prev,
                                    coverImage: e.dataTransfer.files[0]
                                  }));
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
                                    setHomeFormData(prev => ({
                                      ...prev,
                                      coverImage: e.target.files[0]
                                    }));
                                  }
                                }}
                              />
                              {homeFormData.coverImage ? (
                                <Image
                                  width={100}
                                  height={100}
                                  src={URL.createObjectURL(homeFormData.coverImage)}
                                  alt="Cover"
                                  className="h-full max-h-36 rounded size-full object-contain"
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
                                  value={homeFormData.brideName}
                                  onChange={(e) => setHomeFormData(prev => ({
                                    ...prev,
                                    brideName: e.target.value
                                  }))}
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
                                  value={homeFormData.groomName}
                                  onChange={(e) => setHomeFormData(prev => ({
                                    ...prev,
                                    groomName: e.target.value
                                  }))}
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
                                    selected={homeFormData.eventDate}
                                    onChange={(date) => setHomeFormData(prev => ({
                                      ...prev,
                                      eventDate: date
                                    }))}
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
                                  value={homeFormData.eventLocation}
                                  onChange={(e) => setHomeFormData(prev => ({
                                    ...prev,
                                    eventLocation: e.target.value
                                  }))}
                                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Save Button */}
                          <div className="text-center">
                            <button
                              onClick={handleHomeSubmit}
                              disabled={loading.home}
                              className="w-full bg-pink-600 text-white text-sm font-semibold py-3 rounded hover:bg-pink-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {loading.home ? 'Saving...' : 'Save'}
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
                              value={storyFormData.story}
                              onChange={(e) => setStoryFormData(prev => ({
                                ...prev,
                                story: e.target.value
                              }))}
                              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            ></textarea>
                          </div>

                          {/* Save Button */}
                          <div className="text-center">
                            <button
                              onClick={handleStorySubmit}
                              disabled={loading.story}
                              className="w-full bg-pink-600 text-white text-sm font-semibold py-3 rounded hover:bg-pink-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {loading.story ? 'Saving...' : 'Save'}
                            </button>
                          </div>
                        </div>
                      ) : item === "Gallery" ? (
                        <div className="max-w-xl mx-auto my-3 font-sans text-gray-800">
                          {/* Current Gallery Count */}
                          {websiteData.galleryImages.filter(img => img).length > 0 && (
                            <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-700">
                                📷 Current gallery: {websiteData.galleryImages.filter(img => img).length} images
                              </p>
                            </div>
                          )}

                          {/* Image Upload Label */}
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Add New Images: ({galleryImages.length}/10 per upload)
                            <span className="text-gray-500 text-xs ml-2">
                              (You can upload up to 10 images at a time, unlimited total)
                            </span>
                          </label>

                          {/* Upload Grid Box */}
                          <div className="bg-gray-100 p-4 rounded-lg">
                            {/* Add Photo Box - Always at top */}
                            <div
                              className={`w-full border-2 border-dashed border-pink-500 rounded-md flex items-center justify-center h-20 cursor-pointer hover:bg-pink-50 transition mb-4 ${galleryDragActive ? "bg-pink-50 border-pink-600" : ""
                                } ${galleryImages.length >= 10 ? "opacity-50 cursor-not-allowed" : ""}`}
                              onClick={() => {
                                if (galleryImages.length < 10) {
                                  galleryInputRef.current && galleryInputRef.current.click();
                                }
                              }}
                              onDragOver={(e) => {
                                e.preventDefault();
                                if (galleryImages.length < 10) {
                                  setGalleryDragActive(true);
                                }
                              }}
                              onDragLeave={(e) => {
                                e.preventDefault();
                                setGalleryDragActive(false);
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                setGalleryDragActive(false);
                                if (
                                  galleryImages.length < 10 &&
                                  e.dataTransfer.files &&
                                  e.dataTransfer.files.length > 0
                                ) {
                                  const files = Array.from(e.dataTransfer.files);
                                  const remainingSlots = 10 - galleryImages.length;
                                  const filesToAdd = files.slice(0, remainingSlots);
                                  setGalleryImages(prev => [...prev, ...filesToAdd]);
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
                                    galleryImages.length < 10 &&
                                    e.target.files &&
                                    e.target.files.length > 0
                                  ) {
                                    const files = Array.from(e.target.files);
                                    const remainingSlots = 10 - galleryImages.length;
                                    const filesToAdd = files.slice(0, remainingSlots);
                                    setGalleryImages(prev => [...prev, ...filesToAdd]);
                                  }
                                }}
                              />
                              <span className="text-pink-600 text-sm font-medium select-none text-center">
                                {galleryImages.length >= 10
                                  ? "Maximum 10 images per upload reached"
                                  : `+ Add photos (${10 - galleryImages.length} remaining this upload)`
                                }
                              </span>
                            </div>

                            {/* Image Previews Grid */}
                            {galleryImages.length > 0 && (
                              <div className="grid grid-cols-3 gap-2">
                                {galleryImages.map((file, i) => (
                                  <div
                                    key={i}
                                    className="bg-gray-300 rounded-md h-24 w-full flex items-center justify-center overflow-hidden relative group"
                                  >
                                    <Image
                                      width={100}
                                      height={100}
                                      src={URL.createObjectURL(file)}
                                      alt={`New Image ${i + 1}`}
                                      className="object-cover w-full h-full"
                                    />
                                    <button
                                      onClick={() => {
                                        setGalleryImages(prev => prev.filter((_, index) => index !== i));
                                      }}
                                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                      title="Remove image"
                                    >
                                      ×
                                    </button>
                                    <div className="absolute bottom-1 left-1 bg-green-500 bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                                      NEW
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Save Button */}
                          <div className="mt-6 text-center">
                            <button
                              onClick={handleGallerySubmit}
                              disabled={loading.gallery || galleryImages.length === 0}
                              className="w-full bg-pink-600 text-white text-sm font-semibold py-3 rounded hover:bg-pink-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {loading.gallery ? `Uploading ${galleryImages.length} images...` : `Upload ${galleryImages.length} images to gallery`}
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

      {/* Toast Container at the very end */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 99999 }}
        toastStyle={{
          backgroundColor: '#fff',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
      />
    </div>
  );
};

export default Page;
