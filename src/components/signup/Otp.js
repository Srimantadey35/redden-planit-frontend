"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/store/authSlice";

const Otp = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const maskContactInfo = (value) => {
    if (!value) return value;
    if (value.includes('@')) {
      const [local, domain] = value.split('@');
      const maskedLocal = local.slice(0, 2) + '*'.repeat(Math.max(1, local.length - 2));

      const domainParts = domain.split('.');
      const domainName = domainParts[0];
      const domainExt = domain.slice(domainName.length);
      const maskedDomain = '*'.repeat(Math.max(2, domainName.length - 2)) + domainExt;

      return `${maskedLocal}@${maskedDomain}`;
    }
    const digits = value.replace(/\D/g, '');
    if (digits.length >= 10) {
      const masked = digits.slice(0, 2) + '*'.repeat(digits.length - 4) + digits.slice(-2);
      return masked;
    }
    return value;
  };



  const [token, setToken] = useState("")
  const [email, setEmail] = useState("")
  const [fromGoogle, setFromGoogle] = useState(false)
  const [mobileNo, setMobileNo] = useState("")
  useEffect(() => {
    setToken(localStorage.getItem('verification'));
    setEmail(localStorage.getItem('registeredEmail'))
    setFromGoogle(JSON.parse(localStorage.getItem('fromGoogle')))
    setMobileNo(localStorage.getItem('registeredPhone'))
  }, [])
  const searchParams = useSearchParams()
  const [timerStarded, setTimerStarted] = useState(false)
  const [timer, setTimer] = useState(30);
  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
  const startTime = Date.now();
  localStorage.setItem('otpTimerStart', startTime.toString());
  updateTimerFromStorage();
}, [])

  const updateTimerFromStorage = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const startTime = parseInt(localStorage.getItem('otpTimerStart') || '0', 10);
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(30 - elapsed, 0);

      setTimer(remaining);

      if (remaining === 0) {
        clearInterval(intervalRef.current);
        localStorage.removeItem('otpTimerStart');
      }
    }, 1000);
  };

  useEffect(() => {
    const storedStart = localStorage.getItem('otpTimerStart');

    if (storedStart) {
      const startTime = parseInt(storedStart, 10);
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      if (elapsed < 30) {
        updateTimerFromStorage();
      } else {
        localStorage.removeItem('otpTimerStart');
        setTimer(0);
      }
    } else {
      startTimer();
      setTimerStarted(true)
    }
    return () => clearInterval(intervalRef.current);
  }, [startTimer]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    const plan = searchParams.get('plan');
    console.log('code', code);
    console.log('token', token);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/verify-otp`,
        { otp: code },
        {
          withCredentials: true,
          headers: {
            'verificationtoken': `${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 200) {
        const userType = response?.data?.data?.user?.userType
        toast.success("Otp verified successfully ✅")
        const refreshToken =  response.headers.get("refreshtoken") || response.headers.refreshtoken || response.headers['refreshtoken']
        const accessToken = response.headers.get("accesstoken") || response.headers.accesstoken || response.headers['accesstoken']
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem('refreshToken', refreshToken)
        dispatch(setAccessToken(accessToken))
        localStorage.removeItem('verification')

        if (userType == 'planner') {
          router.push('/home')
        }
        else if (userType == 'vendor') {
          router.push('/dashboard')
        }
      }
    } catch (error) {
      const status = error.response?.status;
      if (status === 400) {
        toast.error("Invalid Or Expired Otp!")
      }
      console.error("❌ OTP Verification Failed", error.response?.data || error.message);
    }
  };

  const resendOtp = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/resendOTP`, {
        headers: {
          'verificationtoken': `${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('resendotp', response);

      const newToken = response?.headers?.verificationtoken;
      if (response.status === 200 && newToken) {
        setToken(newToken);
        localStorage.setItem('verification', newToken);
        toast.success("Otp sent successfully...")
      }
    } catch (error) {
      console.error('resendOtp error', error);
    }

    const storedStart = localStorage.getItem('otpTimerStart');
    const now = Date.now();

    if (storedStart) {
      const elapsed = Math.floor((now - parseInt(storedStart, 10)) / 1000);

      if (elapsed < 30) {
        setTimer(30 - elapsed);
        setTimerStarted(true);
        return;
      }
    }

    localStorage.setItem('otpTimerStart', now.toString());
    setTimer(30);
    setTimerStarted(true);
    startTimer();
  };



  return (
    <div className="bg-[#ffffffe3] w-fit rounded-2xl py-6 3xl:py-[90px] px-[40px] md:px-[60px] 2xl:px-[108px] 3xl:px-24">
      <div className="mb-6">
        <Image
          className="mx-auto w-[100px] 2xl:w-[158px]"
          width={158}
          height={52}
          src={"/images/PlanItLogo.png"}
          alt="logo"
        />
      </div>

      <h2 className="font-medium text-[22px] sm:text-[24px] 2xl:text-[44px] text-black text-center">
        Enter verification code
      </h2>
      {fromGoogle ?
        <p className="font-normal text-[16px] 3xl:text-[18px] text-[#151515] mt-2 mb-8 flex flex-col 3xl:flex-row items-center justify-center">
          Enter the verification code that we&apos;ve send your phone{" "}
          <span className="font-semibold text-black ml-1.5">
            {" "}
            {maskContactInfo(mobileNo)}
          </span>
        </p> :
        <p className="font-normal text-[16px] 3xl:text-[18px] text-[#151515] mt-2 mb-8 flex flex-col 3xl:flex-row items-center justify-center">
          Enter the verification code that we&apos;ve send your email{" "}
          <span className="font-semibold text-black ml-1.5">
            {" "}
            {maskContactInfo(email)}
          </span>
        </p>
      }

      <form>
        <div className="w-fit mx-auto">
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center justify-center space-x-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-[45px] h-[38px] 3xl:w-[62px] 3xl:h-[54px] text-center text-[16px] 3xl:text-[25px] font-medium border border-[#B0B0B0] rounded-lg outline-none text-black"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>
          </div>

          <p className="text-[16px] 3xl:text-[20px] font-normal text-[#151515] mt-3 text-end">
            Resend code in <span className="font-semibold"> 00:{timer < 10 ? `0${timer}` : timer}</span>
          </p>
        </div>

        <button onClick={verifyOtp} className="font-semibold text-[15px] 2xl:text-[16px] text-white bg-[#EA0056] hover:bg-[#c9004a] transition rounded-lg py-3 3xl:py-4 mt-7 cursor-pointer w-full">
          Verify my account
        </button>
      </form>
      <p className="text-[#505050] font-normal text-[14px] text-center mt-8">
        Didn&apos;t get any code?
        <button onClick={resendOtp} disabled={timer>0} className="text-[#EA0056] font-semibold ml-1 cursor-pointer">
          Resend code
        </button>
      </p>
    </div>
  );
};

export default Otp;
