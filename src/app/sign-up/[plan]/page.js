"use client";

import React from "react"; // ✅ You need this for use()
import CreateAccModal from "@/components/signup/CreateAccModal";
import CreateAccPlans from "@/components/signup/CreateAccPlans";
import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    image: "/images/slider-1.jpg",
    caption:
      "Find & contact venues, photographers, makeup artists & other vendors in your budget",
  },
  {
    image: "/images/slider-2.jpg",
    caption: "Make digital wedding invites to share with your guests",
  },
  {
    image: "/images/slider-3.jpg",
    caption: "Find your birthday team with help from 200,000+ family reviews.",
  },
];

export default function SignupPlanPage({ params }) {
  const { plan } = React.use(params); // ✅ Correctly unwrapped for future-proofing

  const formattedPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
  const isModalPlan = plan === "vendor" || plan === "planner";

  const validPlans = ["vendor", "planner", "anotherValidPlan"];
  if (!validPlans.includes(plan.toLowerCase())) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Mobile Swiper */}
      <div className="block sm:hidden absolute inset-0 z-0 h-full min-h-screen">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          speed={1000}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-end z-20 px-4 text-center pb-16">
                  <h2 className="text-white text-base font-medium max-w-xs animate-fade-in mb-4 px-2">
                    {slide.caption}
                  </h2>
                  <div className="flex flex-row gap-3 animate-fade-in delay-200">
                    <Link
                      href={`/sign-in/${plan}`}
                      className="bg-[#f70399] text-white font-medium cursor-pointer px-4 py-1.5 rounded hover:bg-neutral-200 hover:text-black transition text-sm"
                    >
                      Sign In
                    </Link>
                    <Link
                      href={`/sign-up/${plan}`}
                      className="bg-white text-black font-medium cursor-pointer px-4 py-1.5 rounded hover:bg-neutral-200 transition text-sm"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Background & Modal Container */}
      <div
        style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
        className="hidden sm:grid relative z-30 place-items-center px-4 h-full min-h-screen bg-no-repeat bg-center bg-cover"
      >
        {/* Black overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 h-full min-h-screen z-[-1]" />
        {isModalPlan ? (
          <CreateAccModal isSignup={true} planName={formattedPlan} />
        ) : (
          <CreateAccPlans planName={formattedPlan} />
        )}
      </div>
    </div>
  );
}
