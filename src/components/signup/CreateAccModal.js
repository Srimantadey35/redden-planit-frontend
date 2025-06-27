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
      <div className="my-10 flex items-center min-h-full">
        <div className="flex px-[30px] mx-auto w-full max-w-[1250px] 3xl:max-w-[1680px]">
          <div  className="bg-[#faf2f2] px-[45px] 2xl:px-[55px] py-[60px] 3xl:py-[120px] w-[44%] rounded-tl-[15px] rounded-bl-[15px] flex flex-col justify-center"
            style={{ backgroundImage: `url(/images/sign-up/signupformbg.png)` }}
          >
            <Image
              className="w-[110px] 2xl:w-[120px] 3xl:w-[158px]"
              width={158}
              height={52}
              src={"/images/PlanItLogo.png"}
              alt="logo"
            />
            <h3 className="text-[38px] 2xl:text-[42px] 3xl:text-[64px] text-black 3xl:leading-[74px] font-semibold mt-5 leading-[1.2]">
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

            <div className="my-[25px] 3xl:my-[35px]">
              <p className="font-medium text-[18px] 3xl:text-[24px] text-black">
                {planName === "Vendor" ? (
                  <>Join our trusted network of event professionals.</>
                ) : (
                  <>Join PlanIt — your personal event planning assistant.</>
                )}
              </p>
              <p className="mt-3 text-[#505050] text-[16px] 3xl:text-[19px] ">
                {planName === "Vendor" ? (
                  <>
                    Whether you&apos;re a photographer, florist, caterer, or{" "}
                    <br className="3xl:block hidden"/> entertainer — we connect you with clients planning{" "}
                    <br className="3xl:block hidden"/> unforgettable moments.
                  </>
                ) : (
                  <>
                    From weddings and birthdays to corporate events, we help you{" "}
                    <br className="3xl:block hidden" /> manage every detail effortlessly.
                  </>
                )}
              </p>
            </div>

            <ul className="space-y-2.5">
              {planList.map((item, index) => (
                <li
                  key={index}
                  className="border border-[#FFD8E6] text-[#EA0056] text-[15px] 3xl:text-[20px] font-normal bg-[#FFE4EE] flex items-center py-2 3xl:py-2.5 px-3.5 rounded-lg w-[300px]"
                >
                  <Image
                    width={15}
                    height={15}
                    src={"/images/sign-up/tick.svg"}
                    alt=""
                  />
                  <span className="ml-2.5">{item}</span>
                </li>
              ))}
            </ul>

            {planName === "Planner" && (
              <div className="border border-[#FFD8E6] rounded-xl bg-white mt-[30px] 3xl:mt-[35px] py-5 3xl:py-6 px-5 2xl:px-12 3xl:px-20">
                <div className="flex items-center justify-center  ">
                  {faces.map((item, index) => (
                    <div
                      key={index}
                      className={`size-[30px] 2xl:size-[40px] 3xl:size-[50px] ml-[-10px] relative`}
                      style={{ zIndex: `${faces.length - index}` }}
                    >
                      <Image
                        className={`rounded-full object-cover size-full [box-shadow:0_0_0px_4px_#ffffff]`}
                        width={50}
                        height={50}
                        src={item}
                        alt={`face-${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[#505050] font-normal text-[15px] 3xl:text-[20px] mt-[15px] text-center">
                  Over 2.5 Million people trust our platform
                </p>
              </div>
            )}
          </div>
          <div className="px-[60px] 2xl:px-[100px] 3xl:px-[140px] bg-white py-[60px] 2xl:py-[90px] 3xl:py-[120px] w-[56%] rounded-tr-[15px] rounded-br-[15px]">
            <div className="3xl:mb-5">
              <h3 className="font-medium text-[34px] 3xl:text-[40px] text-black text-center">
                {planName === "Vendor" ? "Vendor registration" : "Welcome!"}
              </h3>
              <p className="font-normal text-[18px] 3xl:text-[21px] text-black text-center mt-2">
                Please fill the details to get started
              </p>
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="text-[#505050] w-full text-[16px] font-semibold flex items-center justify-center bg-[#f5f5f5] py-3 3xl:py-5 mt-7 rounded-lg cursor-pointer hover:bg-[#e6e6e6] transition ease duration-200"
              >
                <Image
                  width={24}
                  height={24}
                  src={"/images/sign-up/googleicon.svg"}
                  alt="googleicon"
                />
                <span className="ml-3.5">Continue with google</span>
              </button>
              <div className="flex items-center gradientline relative mt-3 3xl:mt-4">
                <p className="text-black mx-auto bg-white p-3 font-normal text-[21px] z-[1]">
                  or
                </p>
              </div>
            </div>
            <div>
              <form className="floating-form relative mt-4">
                {/* Name */}
                <div className="input-wrap mb-5 3xl:mb-10">
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
                <div className="flex mb-1 3xl:mb-3 gap-5 2xl:gap-10">
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

                <p className="text-[#505050] font-normal text-[14px] mb-4 3xl:mb-8">
                  An OTP will be sent to this email
                </p>

                {/* Password */}
                <div className="input-wrap mb-5 3xl:mb-10 relative">
                  <input
                    type={`${isPassVisible.pass ? "text" : "password"}`}
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
                    className="absolute top-1/2 -translate-y-1/2 cursor-pointer h-full right-0 w-[53px] flex items-center justify-center z-[2]"
                  >
                    <Image
                      width={18}
                      height={18}
                      src={"/images/sign-up/passvisible.svg"}
                      alt="passvisible"
                    />
                  </button>
                </div>

                {/*confirm Password */}
                <div className="input-wrap">
                  <div className="relative">
                    <input
                      type={`${isPassVisible.CPass ? "text" : "password"}`}
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
                      className="absolute top-1/2 -translate-y-1/2 cursor-pointer h-full right-0 w-[53px] flex items-center justify-center z-[2]"
                    >
                      <Image
                        width={18}
                        height={18}
                        src={"/images/sign-up/passvisible.svg"}
                        alt="passvisible"
                      />
                    </button>
                  </div>
                  <div className="flex items-center mt-2 3xl:mt-3">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="!size-[20px] mr-2"
                    />
                    <p className="text-[#505050] font-normal text-[14px]">
                      I agreed all the{" "}
                      <Link href="#" className="text-[#EA0056]">
                        Terms & Condition
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-[#EA0056]">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>

                <button className="font-semibold text-[16px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 mt-7 3xl:mt-10 cursor-pointer w-full mb-3 3xl:mb-4">
                  Register
                </button>
                <p className="text-[#505050] font-normal text-[14px] text-center">
                  Already have an account?{" "}
                  <button
                    onClick={handlePushToSignIn}
                    className="text-[#EA0056] font-semibold cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccModal;
