'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CreateAccModal = ({ planName }) => {

  const router = useRouter();
  const handlePushToSignIn = ()=>{
    router.push(`/login/${planName.toLowerCase()}`)
  }

  const joinPlanIt = [
    "Smart planning tool",
    "All in one place",
    "Trusted vendor network",
    "Beautiful invites & guest lists",
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
  return (
    <div className="size-full overflow-y-auto example">
      <div className="px-[140px] py-10">
        <div className="flex justify-center">
          <div
            className="bg-[#faf2f2] px-[55px] py-[120px] w-[708px] rounded-tl-[15px] rounded-bl-[15px]"
            style={{ backgroundImage: `url(/images/sign-up/signupformbg.png)` }}
          >
            <Image
              width={158}
              height={52}
              src={"/images/PlanItLogo.png"}
              alt="logo"
            />
            <h3 className="text-[64px] text-black leading-[74px] font-medium mt-5">
              Plan your big <br /> moments with ease
            </h3>

            <div className="my-[35px]">
              <p className="font-medium text-[24px] text-black">
                Join PlanIt — your personal event planning assistant.
              </p>
              <p className="mt-3 text-[#505050] text-[19px] ">
                From weddings and birthdays to corporate events, we help you{" "}
                <br /> manage every detail effortlessly.
              </p>
            </div>

            <ul className="space-y-2.5">
              {joinPlanIt.map((item, index) => (
                <li
                  key={index}
                  className="border border-[#FFD8E6] text-[#EA0056] text-[20px] font-normal bg-[#FFE4EE] flex items-center py-2.5 px-3.5 rounded-lg w-[300px]"
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

            <div className="border border-[#FFD8E6] rounded-xl bg-white mt-[35px] py-6 px-20">
              <div className="flex items-center justify-center  ">
                {faces.map((item, index) => (
                  <div
                    key={index}
                    className={`size-[50px] ml-[-10px] relative`}
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
              <p className="text-[#505050] font-normal text-[20px] mt-[15px] text-center">
                Over 2.5 Million people trust our platform
              </p>
            </div>
          </div>
          <div className="px-[160px] bg-white py-[120px] rounded-tr-[15px] rounded-br-[15px]">
            <div className="mb-5">
              <h3 className="font-medium text-[40px] text-black text-center">
                Welcome!
              </h3>
              <p className="font-normal text-[21px] text-black text-center mt-2">
                Please fill the details to get started
              </p>
              <button className="text-[#505050] w-[631px] text-[16px] font-semibold flex items-center justify-center bg-[#f5f5f5] py-5 mt-7 rounded-lg cursor-pointer hover:bg-[#e6e6e6] transition ease duration-200">
                <Image
                  width={24}
                  height={24}
                  src={"/images/sign-up/googleicon.svg"}
                  alt="googleicon"
                />
                <span className="ml-3.5">Continue with google</span>
              </button>
              <div className="flex items-center gradientline relative mt-4">
                <p className="text-black mx-auto bg-white p-3 font-normal text-[21px] z-[1]">
                  or
                </p>
              </div>
            </div>
            <div>
              <form className="floating-form relative mt-4">
                {/* Name */}
                <div className="input-wrap mb-10">
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
                <div className="flex mb-3 gap-10">
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

                <p className="text-[#505050] font-normal text-[14px] mb-8">
                  An OTP will be sent to this email
                </p>

                {/* Password */}
                <div className="input-wrap mb-10">
                  <input
                    type="password"
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
                </div>

                {/*confirm Password */}
                <div className="input-wrap">
                  <input
                    type="password"
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

                  <div className="flex items-center mt-3">
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

                <button className="font-semibold text-[16px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 mt-10 cursor-pointer w-full mb-4">
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
