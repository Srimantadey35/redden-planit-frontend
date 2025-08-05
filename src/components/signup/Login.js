"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
import axios from "axios";
import { useFormik } from "formik";
import * as YUP from 'yup'
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/store/authSlice";
import GoogleLoginButton from "./GoogleLogin";


const Login = ({ planName }) => {
  const [LoggedIn,setLoggedIn] = useState(false)
  const dispatch = useDispatch()
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter();
  const [isPassVisible, setisPassVisible] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    userType: planName ? planName.toLowerCase() : "default"
  };
  const [prefilledValues, setPrefilledValues] = useState({
    email: "",
    password: "",
    userType: planName ? planName.toLowerCase() : "default"
  })
  useEffect(() => {
    try {
      const stored = localStorage.getItem('rememberMeValues');
      if (!stored) return; // nothing to do

      const prefill = JSON.parse(stored);

      if (prefill) {
        setPrefilledValues((prev) => ({
          ...prev,
          email: prefill.email || '',
          password: prefill.password || '',
        }));
        setRememberMe(true)
      }
    } catch (err) {
      // console.error("Invalid signupPrefill JSON:", err);
      // Optionally clear the corrupted value
      // localStorage.removeItem('signupPrefill');
    }
  }, []);
  const signInSchema = YUP.object({
  email: YUP.string()
  .required('Email is required')
  .email('Must be a valid email'),
    password: YUP.string() .min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const { errors, values, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: prefilledValues,
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      setLoggedIn(true)
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/login`, values, { withCredentials: true })
        .then((response) => {
          console.log('response login', response);
          const userType = response?.data?.data?.user?.userType
          const isVerified = response?.data?.data?.user.isVerified
          if (isVerified) {
            const refreshToken = response.headers.get("refreshtoken") || response.headers.refreshtoken || response.headers['refreshtoken']
            const accessToken = response.headers.get("accesstoken") || response.headers.accesstoken || response.headers['accesstoken']
            dispatch(setAccessToken(accessToken))
            if (rememberMe) {
              localStorage.setItem('rememberMeValues', JSON.stringify(values));
              localStorage.setItem("refreshToken", refreshToken);
              localStorage.setItem("rememberMe", "true");
            } else {
              sessionStorage.setItem("refreshToken", refreshToken);
              localStorage.setItem("rememberMe", "false");

            }
            localStorage.removeItem('verification')
            toast.success("User Logged In successfully")
            if(userType.toLowerCase()=="planner"){
             router.push('/home')
            }
            else if(userType.toLowerCase()== "vendor"){
              router.push('/dashboard')
            }
          }
          else {
            const token =  response.headers.get("verificationtoken") || response.headers.verificationtoken || response.headers['verificationtoken'];
            localStorage.setItem('verification', token);
            toast.error('Please Verify your account with OTP');
            const planQuery = userType ? userType.toLowerCase() : 'default';
            router.push(`/otp?plan=${planQuery}`);
          }
        }).
        catch((error) => {
          setLoggedIn(false)
          const status = error.response?.status;
          const message = error.response?.data?.message || error.message;
          console.log('error', error.response);
          if (status === 401) {
            toast.error(message);
          }
          else if (status === 403) {
            toast.error("Local login is not availaible for this user ,Please Login with Google")
          }
          else if (status === 422) {
            toast.error(message)
          }
          else {
            toast.error(message || "Login failed. Please try again.");
          }

          console.error("❌ LOGIN Failed", error.response?.data || error.message);
        });

    }
  })
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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const Blur = (e) => {
    const input = e.target;
    if (input.value) {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  };

  const handlePushToRegisterPage = () => {
    router.push(`/sign-up/${planName}`);
  };
  // const logInuser = async()=>{
  //   await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/login`,values,{withCredentials:true})
  //   .then((response)=>{
  //   console.log('response login',response);
  //   const userType = response?.data?.data?.user?.userType
  //   const isVerified = response?.data?.data?.user.isVerified
  //   if(isVerified){
  //   const refreshToken = response.headers.refreshtoken
  //   const accessToken = response.headers.accesstoken
  //   dispatch(setAccessToken(accessToken))
  //   if (rememberMe) {
  //     localStorage.setItem('rememberMeValues',values)
  //     localStorage.setItem("refreshToken", refreshToken); 
  //     localStorage.setItem("rememberMe", "true");
  //   } else {
  //     sessionStorage.setItem("refreshToken", refreshToken);
  //       localStorage.setItem("rememberMe", "false");

  //   }
  //   localStorage.removeItem('verification')
  //   toast.success("User LoggedIn successfully")      
  //   router.push('/home')
  //  }
  //  else{
  //     const token = response.headers.verificationtoken;
  //     localStorage.setItem('verification', token);
  //     toast.error('Please Verify your account with OTP');
  //     const planQuery = userType ? userType.toLowerCase() : 'default';
  //     router.push(`/otp?plan=${planQuery}`);
  //  }
  //   }).
  //   catch((error) => {
  //     const status = error.response?.status;
  //     const message = error.response?.data?.message || error.message;
  //      console.log('error',error.response);
  //     if (status === 401) {
  //       toast.error("Invalid credentials. Please check your email/phone and password.");
  //     }
  //     else if(status === 403){
  //       toast.error("Local login is not availaible for this user ,Please Login with Google")
  //     }
  //     else if(status === 422){
  //       toast.error(message)
  //     }
  //      else {
  //       toast.error(message || "Login failed. Please try again.");
  //     }

  //     console.error("❌ LOGIN Failed", error.response?.data || error.message);
  //   });
  // }

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="size-full overflow-y-auto example modalAnim">
      <div className="my-10 flex items-center min-h-full">
        <div className="flex justify-center w-full px-[30px] max-w-[991px] xl:max-w-[1100px] 2xl:max-w-[1200px] 3xl:max-w-[1423px] mx-auto">
          <div className="bg-[#faf2f2] px-[45px] 2xl:px-[55px] py-[60px] 2xl:py-[90px] 3xl:py-[120px] w-1/2 rounded-tl-[15px] rounded-bl-[15px]"
            style={{ backgroundImage: `url(/images/sign-up/signupformbg.png)` }}
          >
            <Image
              className="w-[110px] 2xl:w-[130px] 3xl:w-[158px]"
              width={158}
              height={52}
              src={"/images/PlanItLogo.png"}
              alt="logo"
            />
            <h3 className="text-[38px] 2xl:text-[45px] 3xl:text-[64px] text-black 3xl:leading-[74px] font-semibold mt-5 leading-[1.2]">
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
          </div>
          <div className="w-1/2 px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[130px] bg-white py-[60px] 2xl:py-[90px] 3xl:py-[120px] rounded-tr-[15px] rounded-br-[15px] flex flex-col justify-center">
            <div className="mb-5">
              <h3 className="font-medium text-[35px] 3xl:text-[40px] text-black text-center">
                Sign In
              </h3>
              <p className="font-normal text-[18px] 3xl:text-[21px] text-black text-center mt-2 mb-4">
                Enter your details to sign in your account
              </p>
              {/* <button
                // onClick={() => signIn("google", { callbackUrl: "/" })}
                className="text-[#505050] w-full text-[16px] font-semibold flex items-center justify-center bg-[#f5f5f5] py-3 3xl:py-5 mt-7 rounded-lg cursor-pointer hover:bg-[#e6e6e6] transition ease duration-200"
              >
                <Image
                  width={24}
                  height={24}
                  src={"/images/sign-up/googleicon.svg"}
                  alt="googleicon"
                />
                <span className="ml-3.5">Continue with google</span>
              </button> */}
              <GoogleLoginButton userTypes={planName.toLowerCase()} />
              <div className="flex items-center gradientline relative mt-3 3xl:mt-4">
                <p className="text-black mx-auto bg-white p-3 font-normal text-[21px] z-[1]">
                  or
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="floating-form relative 3xl:mt-14">
                {/* Email & Phone Row */}
                <div className="input-wrap mb-5 3xl:mb-10">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder=" "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={(e) => { handleBlur(e); Blur(e) }}
                     onKeyDown={(e) => {
                        if (e.key === " ") {
                          e.preventDefault();
                        }
                      }}
                  />
                  <label htmlFor="email">Email*</label>
                  {touched.email && errors.email && <p className="text-red-600 mt-1 text-sm absolute w-sm">{errors.email}</p>}

                </div>

                {/* Password */}
                <div className="input-wrap relative">
                  <input
                    type={isPassVisible && values.password ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder=" "
                    value={values.password}
                    onChange={handleChange}
                    onBlur={(e) => { handleBlur(e); Blur(e) }}
                  />
                  <label htmlFor="password">Password*</label>
                  <button type="button"
                    disabled={!values.password}
                    onClick={(e) => setisPassVisible(!isPassVisible)}
                    className="absolute top-1/2 -translate-y-1/2 cursor-pointer h-full right-0 w-[53px] flex items-center justify-center z-[2]"
                  >
                    <Image
                      width={18}
                      height={18}
                      src={`${isPassVisible ? '/images/eye-open.svg':'/images/eye-close.svg'}`}
                      alt="passvisible"
                    />
                  </button>
                  {touched.password && errors.password && <p className="text-red-600 mt-1 text-sm absolute w-sm">{errors.password}</p>}

                </div>

                <div className="flex items-center mt-3 3xl:mt-8 justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      checked={rememberMe}
                      onChange={handleCheckboxChange}
                      className="!size-[20px] mr-2"
                    />
                    <p className="text-black font-normal text-[14px] 3xl:text-[16px]">
                      Remember me
                    </p>
                  </div>

                  <p className="text-[#EA0056] font-normal text-[14px] 3xl:text-[16px] ml-2 cursor-pointer underline">
                    Forgot Password?
                  </p>
                </div>

                <button disabled={LoggedIn} type="submit" className="font-semibold text-[16px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 mt-7 3xl:mt-10 cursor-pointer w-full mb-3 3xl:mb-4">
                  {LoggedIn? "Signing in...":"Sign in"}
                </button>
                <p className="text-[#505050] font-normal text-[14px] text-center">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={handlePushToRegisterPage}
                    className="text-[#EA0056] font-semibold cursor-pointer underline"
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
