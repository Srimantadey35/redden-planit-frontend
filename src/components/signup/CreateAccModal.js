"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const CreateAccModal = ({ planName }) => {
  const [isPassVisible, setisPassVisible] = useState({
    pass: false,
    CPass: false,
  });
  const togglePasswordVisibility = (field) => {
    setisPassVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const router = useRouter();
  const handlePushToSignIn = () => {
    router.push(`/sign-in/${planName.toLowerCase()}`);
  };

  const joinPlanItPlanner = [
    "Smart planning tool",
    "All in one place",
    "Trusted vendor network",
    "Beautiful invites & guest lists",
  ];
  const joinPlanItVendor = [
    "Expand your reach",
    "Showcase your work",
    "Get real leads & bookings",
    "Easy profile management",
  ];
  const faces = [
    "/images/sign-up/face-1.jpg",
    "/images/sign-up/face-2.jpg",
    "/images/sign-up/face-3.jpg",
    "/images/sign-up/face-4.jpg",
    "/images/sign-up/face-5.jpg",
    "/images/sign-up/face-6.jpg",
    "/images/sign-up/face-7.jpg",
    "/images/sign-up/face-8.jpg",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    Phone: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const input = e.target;
    if (input.value) {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  };
  console.log(
    planName === "Vendor" ? "Register as a Vendor" : "Register as a Planner"
  );
  const planList = planName === "Vendor" ? joinPlanItVendor : joinPlanItPlanner;
  return (
    <div className="size-full overflow-y-auto example modalAnim">


<div className="my-10 flex flex-col lg:flex-row items-center min-h-full">
  <div className="flex justify-center px-4 sm:px-6 md:px-8 mx-auto w-full max-w-[991px] xl:max-w-[1100px] 2xl:max-w-[1250px] 3xl:max-w-[1460px] 4xl:max-w-[1680px] flex-col lg:flex-row">
    
    {/* Left Panel */}
    <div
      className="bg-[#faf2f2] w-full lg:w-1/2 4xl:w-[44%] rounded-t-[15px] lg:rounded-tr-none lg:rounded-bl-[15px] flex flex-col justify-center px-6 sm:px-8 md:px-10 2xl:px-[55px] py-10 sm:py-12 md:py-16 3xl:py-[80px] 4xl:py-[120px]"
      style={{ backgroundImage: `url(/images/sign-up/signupformbg.png)` }}
    >
      <Link href="/">
        <Image
          className="w-[90px] sm:w-[100px] md:w-[120px] 3xl:w-[158px]"
          width={158}
          height={52}
          src="/images/PlanItLogo.png"
          alt="logo"
        />
      </Link>

      <h3 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-[50px] 4xl:text-[64px] text-black font-semibold mt-5 leading-snug">
        {planName === "Vendor" ? (
          <>
            Grow your business <br /> with PlanIt
          </>
        ) : (
          <>
            Plan your big <br /> moments with ease
          </>
        )}
      </h3>

      <div className="my-6 sm:my-8 3xl:my-[35px]">
        <p className="font-medium text-base sm:text-lg 3xl:text-2xl text-black">
          {planName === "Vendor" ? (
            <>Join our trusted network of event professionals.</>
          ) : (
            <>Join PlanIt — your personal event planning assistant.</>
          )}
        </p>
        <p className="mt-3 text-[#505050] text-sm sm:text-base 3xl:text-lg">
          {planName === "Vendor" ? (
            <>
              Whether you&apos;re a photographer, florist, caterer, or
              <br className="hidden 3xl:block" /> entertainer — we connect you
              with clients planning
              <br className="hidden 3xl:block" /> unforgettable moments.
            </>
          ) : (
            <>
              From weddings and birthdays to corporate events, we help you
              <br className="hidden 3xl:block" /> manage every detail effortlessly.
            </>
          )}
        </p>
      </div>

      <ul className="space-y-2.5">
        {planList.map((item, index) => (
          <li
            key={index}
            className="border border-[#FFD8E6] text-[#EA0056] text-sm 3xl:text-lg font-normal bg-[#FFE4EE] flex items-center py-2 px-3.5 rounded-lg w-full sm:w-[300px]"
          >
            <Image
              width={15}
              height={15}
              src="/images/sign-up/tick.svg"
              alt=""
            />
            <span className="ml-2.5">{item}</span>
          </li>
        ))}
      </ul>

      {planName === "Planner" && (
        <div className="border border-[#FFD8E6] rounded-xl bg-white mt-6 3xl:mt-[35px] py-5 3xl:py-6 px-5 sm:px-8 2xl:px-12 3xl:px-20">
          <div className="flex items-center justify-center">
            {faces.map((item, index) => (
              <div
                key={index}
                className={`size-[30px] sm:size-[35px] md:size-[40px] 4xl:size-[50px] ml-[-10px] relative`}
                style={{ zIndex: `${faces.length - index}` }}
              >
                <Image
                  className="rounded-full object-cover size-full [box-shadow:0_0_0px_4px_#ffffff]"
                  width={50}
                  height={50}
                  src={item}
                  alt={`face-${index + 1}`}
                />
              </div>
            ))}
          </div>
          <p className="text-[#505050] font-normal text-sm sm:text-base 3xl:text-lg mt-4 text-center">
            Over 2.5 Million people trust our platform
          </p>
        </div>
      )}
    </div>

    {/* Right Panel */}
    <div className="w-full lg:w-1/2 4xl:w-[56%] bg-white px-6 sm:px-8 md:px-10 2xl:px-[55px] 3xl:px-[80px] 4xl:px-[140px] py-10 sm:py-12 md:py-16 3xl:py-[80px] 4xl:py-[120px] rounded-b-[15px] lg:rounded-bl-none lg:rounded-tr-[15px]">
      <div className="mb-5">
        <h3 className="font-medium text-2xl sm:text-3xl 3xl:text-[40px] text-black text-center">
          {planName === "Vendor" ? "Vendor registration" : "Welcome!"}
        </h3>
        <p className="font-normal text-base sm:text-lg 3xl:text-[21px] text-black text-center mt-2">
          Please fill the details to get started
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="text-[#505050] w-full text-sm font-semibold flex items-center justify-center bg-[#f5f5f5] py-3 mt-7 rounded-lg cursor-pointer hover:bg-[#e6e6e6] transition duration-200"
        >
          <Image
            width={24}
            height={24}
            src="/images/sign-up/googleicon.svg"
            alt="googleicon"
          />
          <span className="ml-3.5">Continue with Google</span>
        </button>
        <div className="flex items-center gradientline relative mt-4">
          <p className="text-black mx-auto bg-white px-3 font-normal text-[18px] z-[1]">
            or
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="floating-form relative mt-4">
        {/* Name */}
        <div className="input-wrap mb-5">
          <input
            type="text"
            name="fullName"
            id="fullName"
            autoComplete="name"
            placeholder=" "
            required
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="fullName">Name</label>
        </div>

        {/* Email & Phone Row */}
        <div className="flex flex-col md:flex-row mb-4 gap-4">
          <div className="input-wrap flex-1">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder=" "
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-wrap flex-1">
            <input
              type="text"
              name="Phone"
              id="Phone"
              autoComplete="tel"
              placeholder=" "
              required
              value={formData.Phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="Phone">Phone</label>
          </div>
        </div>

        <p className="text-[#505050] font-normal text-sm mb-4">
          An OTP will be sent to this email
        </p>

        {/* Password */}
        <div className="input-wrap mb-5 relative">
          <input
            type={isPassVisible.pass ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder=" "
            required
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="password">Password</label>
          <button
            onClick={() => togglePasswordVisibility("pass")}
            className="absolute top-1/2 -translate-y-1/2 right-0 w-[53px] flex items-center justify-center"
          >
            <Image
              width={18}
              height={18}
              src="/images/sign-up/passvisible.svg"
              alt="passvisible"
            />
          </button>
        </div>

        {/* Confirm Password */}
        <div className="input-wrap">
          <div className="relative">
            <input
              type={isPassVisible.CPass ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              autoComplete="confirmpassword"
              placeholder=" "
              required
              value={formData.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <button
              onClick={() => togglePasswordVisibility("CPass")}
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[53px] flex items-center justify-center"
            >
              <Image
                width={18}
                height={18}
                src="/images/sign-up/passvisible.svg"
                alt="passvisible"
              />
            </button>
          </div>

          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="!size-[20px] mr-2"
            />
            <p className="text-[#505050] font-normal text-sm">
              I agree to all the{" "}
              <Link href="#" className="text-[#EA0056] underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#EA0056] underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <button className="font-semibold text-sm text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 mt-7 w-full mb-4">
          Register
        </button>
        <p className="text-[#505050] font-normal text-sm text-center">
          Already have an account?{" "}
          <button
            onClick={handlePushToSignIn}
            className="text-[#EA0056] font-semibold underline"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  );
};

export default CreateAccModal;
