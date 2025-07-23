// components/GoogleLoginButton.js
'use client';

import { setAccessToken } from '@/store/authSlice';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function GoogleLoginButton({ userTypes }) {
    const router = useRouter()
    const dispatch = useDispatch()
  const handleGoogleLogin = async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/auth/google`,
        {
          idToken: accessToken,
          userType:userTypes,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const  userDetails  = response.data.data;
      const userRole = userDetails?.userType?.toLowerCase()
      if(userDetails?.isNewUser){
        localStorage.setItem('signupPrefill', JSON.stringify(userDetails));
            setTimeout(() => {
               window.location.href = `/sign-up/${userRole}`;
             }, 2000)
      }
      else if (!(userDetails?.isNewUser)) {
        if(userDetails?.isVerified){
              toast.success("User LoggedIn successfully")
              const refreshToken = response.headers.get("refreshtoken") || response.headers.refreshtoken || response.headers['refreshtoken']
              const accessToken = response.headers.get("accesstoken") || response.headers.accesstoken || response.headers['accesstoken']
              dispatch(setAccessToken(accessToken))
              localStorage.setItem("refreshToken", refreshToken); 
              localStorage.setItem("rememberMe", "true");
              localStorage.removeItem('verification')
              if(userRole == 'planner'){      
               router.push('/home')
              }
              else if(userRole == 'vendor'){
                router.push('/dashboard')
              }
        }
        else{
          const verificationtoken = response.headers.get("verificationtoken") || response.headers.verificationtoken || response.headers['verificationtoken']
          localStorage.setItem('verification', verificationtoken);
          toast.error('Please Verify your account with OTP');
          router.push(`/otp?plan=${userRole}`);
        }
      } 
      //  if(!(response?.data?.data?.isNewUser)){
      //   toast.success("User LoggedIn successfully")
      //   const refreshToken = response.headers.refreshtoken
      //   const accessToken = response.headers.accesstoken
      //   dispatch(setAccessToken(accessToken))
      //   localStorage.setItem("refreshToken", refreshToken); 
      //   localStorage.setItem("rememberMe", "true");
      //   localStorage.removeItem('verification')      
      //   router.push('/home')
      //  }
      //  else{
      //  const  userDetails  = response.data.data;
      // localStorage.setItem('signupPrefill', JSON.stringify(userDetails));
      // router.push(`/sign-up/${userType}`)
      //  }
    } catch (err) {
      console.log('error',err.response);
      const message = err.response?.data?.message || err.message;
      const status = err.response?.status;
      if(status === 403){
        toast.error(message)
      }
      console.error('Google login failed:', err.response?.data || err.message);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: () => console.log('Google login failed'),
    flow: 'implicit', // or 'auth-code' if you use code flow
  });

  return (
    <button
      onClick={login}
      className="text-[#505050] w-full text-[16px] font-semibold flex items-center justify-center bg-[#f5f5f5] py-3 rounded-lg hover:bg-[#e6e6e6] transition"
    >
      <Image width={24} height={24} src="/images/sign-up/googleicon.svg" alt="google" />
      <span className="ml-3.5">Login with Google</span>
    </button>
  );
}
