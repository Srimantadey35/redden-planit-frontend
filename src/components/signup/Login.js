"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = ({ planName }) => {
  const [isPassVisible, setisPassVisible] = useState(false);

  const joinPlanIt = [
    "Smart planning tool",
    "All in one place",
    "Trusted vendor network",
    "Beautiful invites & guest lists",
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

  const router = useRouter();
  const handlePushToRegisterPage = () => {
    router.push(`/sign-up/${planName}`);
  };

  return (
    <div className="size-full overflow-y-auto example modalAnim">
      <div className="my-10 flex flex-col lg:flex-row items-center min-h-full">
        <div className="flex flex-col lg:flex-row justify-center w-full px-[30px] max-w-[991px] xl:max-w-[1100px] 2xl:max-w-[1200px] 3xl:max-w-[1423px] mx-auto">
          
          {/* Left Panel */}
          <div
            className="bg-[#faf2f2] w-full lg:w-1/2 sm:px-[45px] px-[30px] 2xl:px-[55px] py-[60px] 3xl:py-[80px] 4xl:py-[120px] rounded-t-[15px] lg:rounded-tl-[15px] lg:rounded-bl-[15px] lg:rounded-tr-none"
            style={{ backgroundImage: `url(/images/sign-up/signupformbg.png)` }}
          >
            <Image
              className="w-[110px] 2xl:w-[130px] 3xl:w-[158px]"
              width={158}
              height={52}
              src={"/images/PlanItLogo.png"}
              alt="logo"
            />
            <h3 className="text-[30px] 2xl:text-[45px] 3xl:text-[64px] text-black 3xl:leading-[74px] font-semibold mt-5 leading-[1.2]">
              Plan your big <br /> moments with ease
            </h3>

            <div className="my-[25px] 3xl:my-[35px]">
              <p className="font-medium text-[18px] 3xl:text-[24px] text-black">
                Join PlanIt — your personal event planning assistant.
              </p>
              <p className="mt-3 text-[#505050] text-[16px] 3xl:text-[19px] ">
                From weddings and birthdays to corporate events, we help you{" "}
                <br /> manage every detail effortlessly.
              </p>
            </div>

            <ul className="space-y-2.5">
              {joinPlanIt.map((item, index) => (
                <li
                  key={index}
                  className="border border-[#FFD8E6] text-[#EA0056] text-[15px] 3xl:text-[20px] font-normal bg-[#FFE4EE] flex items-center py-2 3xl:py-2.5 px-3.5 rounded-lg sm:w-[300px] w-full"
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
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/2 sm:px-[60px] px-[30px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[130px] bg-white sm:py-[60px] py-[30px] 3xl:py-[80px] 4xl:py-[120px] rounded-b-[15px] lg:rounded-tr-[15px] lg:rounded-br-[15px] lg:rounded-bl-none flex flex-col justify-center">
            <div className="mb-5">
              <h3 className="font-medium text-[35px] 3xl:text-[40px] text-black text-center">
                Sign In
              </h3>
              <p className="font-normal text-[18px] 3xl:text-[21px] text-black text-center mt-2">
                Enter your details to sign in your account
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
              <form className="floating-form relative 3xl:mt-14">
                {/* Email */}
                <div className="input-wrap mb-5 3xl:mb-10">
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

                {/* Password */}
                <div className="input-wrap relative">
                  <input
                    type={`${isPassVisible ? "text" : "password"}`}
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
                    onClick={(e) => setisPassVisible(!isPassVisible)}
                    className="absolute top-1/2 -translate-y-1/2 cursor-pointer h-full right-0 w-[53px] flex items-center justify-center z-[2]"
                  >
                    <Image
                      width={18}
                      height={18}
                      src={`${isPassVisible ? '/images/eye-open.svg':'/images/sign-up/passvisible.svg'}`}
                      alt="passvisible"
                    />
                  </button>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center mt-2 3xl:mt-3 justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="!size-[20px] mr-2"
                    />
                    <p className="text-black font-normal text-[14px] 3xl:text-[16px]">
                      Remember me
                    </p>
                  </div>
                  <p className="text-[#EA0056] font-normal text-[14px] 3xl:text-[16px] ml-2">
                    Forgot Password?
                  </p>
                </div>

                <Link href={"/final-home"}>
                  <button className="font-semibold text-[16px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 mt-7 3xl:mt-10 cursor-pointer w-full mb-3 3xl:mb-4">
                    Sign in
                  </button>
                </Link>
                <p className="text-[#505050] font-normal text-[14px] text-center">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={handlePushToRegisterPage}
                    className="text-[#EA0056] font-semibold cursor-pointer"
                  >
                    Register
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

export default Login;
