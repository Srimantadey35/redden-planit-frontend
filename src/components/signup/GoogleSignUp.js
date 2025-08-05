// components/GoogleSignupButton.js
'use client';

// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import Image from 'next/image';

// export default function GoogleSignupButton({userType}) {
//     const handleGoogleSignup = async (tokenResponse) => {
//         const googleIdToken = tokenResponse.access_token;
//          console.log('googleIdToken',googleIdToken);
//          console.log('userType',userType);
         
         
//         try {
//             const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/auth/google`, {
//                 idToken: googleIdToken,
//                 userType:userType
//             }, {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             const { user } = res.data;
//             localStorage.setItem('signupPrefill', JSON.stringify(user));
//             window.location.href = '/register';
//         } catch (err) {
//             console.error('Google signup failed', err);
//         }
//     };

//     const signUp = useGoogleLogin({
//         onSuccess: handleGoogleSignup,
//         onError: () => console.log('Google signup failed'),
//     });

//     return (
//         <button
//             // onClick={() => signIn("google", { callbackUrl: "/" })}
//             onClick={() => signUp()}
//             className="text-[#505050] w-full text-[16px] font-semibold flex items-center justify-center bg-[#f5f5f5] py-3 3xl:py-5 mt-7 rounded-lg cursor-pointer hover:bg-[#e6e6e6] transition ease duration-200"
//         >
//             <Image
//                 width={24}
//                 height={24}
//                 src={"/images/sign-up/googleicon.svg"}
//                 alt="googleicon"
//             />
//             <span className="ml-3.5">Continue with google</span>
//         </button>
//     );
// }

// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// export default function GoogleSignupButton({ userType }) {
//   const handleGoogleSignup = async (credentialResponse) => {
//     const idToken = credentialResponse.credential;

//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/auth/google`,
//         {
//           idToken,
//           userType,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       console.log("google res",res);
      
//       const user  = res.data.data;
//       localStorage.setItem('signupPrefill', JSON.stringify(user));
//      setTimeout(() => {
//        window.location.href = `/sign-up/${userType}`;
//     }, 2000)
//     } catch (err) {
//       console.error('Google signup failed', err);
//     }
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleGoogleSignup}
//       onError={() => console.log('Google login failed')}
//     />
//   );
// }



'use client';

import { setAccessToken } from '@/store/authSlice';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {toast} from 'react-toastify';
import { useDispatch } from 'react-redux';

export default function GoogleSignupButton({ userTypes }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const handleGoogleSignup = async (tokenResponse) => {
    const googleIdToken = tokenResponse.access_token;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/auth/google`,
        {
          idToken: googleIdToken,
          userType:userTypes,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log(res.data);
      
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
      // if(!(userDetails?.isNewUser)){
      //         toast.success("User LoggedIn successfully")
      //         const refreshToken = response.headers.refreshtoken
      //         const accessToken = response.headers.accesstoken
      //         dispatch(setAccessToken(accessToken))
      //         localStorage.setItem("refreshToken", refreshToken); 
      //         localStorage.setItem("rememberMe", "true");
      //         localStorage.removeItem('verification')      
      //         router.push('/home')
      //        }
      //  else{
      //       localStorage.setItem('signupPrefill', JSON.stringify(userDetails));
      //       setTimeout(() => {
      //          window.location.href = `/sign-up/${userType}`;
      //        }, 2000)
      //     }
    //   localStorage.setItem('signupPrefill', JSON.stringify(userDetails));
    //   setTimeout(() => {
    //    window.location.href = `/sign-up/${userType}`;
    // }, 2000)
    } catch (err) {
      console.log('error',err.response);
      const message = err.response?.data?.message || err.message;
      const status = err.response?.status;
      if(status === 403){
        toast.error(message)
      }
      console.error('Google signup failed', err);
    }
  };

  const signUp = useGoogleLogin({
    onSuccess: handleGoogleSignup,
    onError: () => console.log('Google signup failed'),
  });

  return (
    <button
      onClick={signUp}
      className="text-[#505050] w-full text-[16px] font-semibold flex items-center justify-center bg-[#f5f5f5] py-3 3xl:py-5 mt-7 rounded-lg cursor-pointer hover:bg-[#e6e6e6] transition ease duration-200"
    >
      <Image
        width={24}
        height={24}
        src={"/images/sign-up/googleicon.svg"}
        alt="googleicon"
      />
      <span className="ml-3.5">Continue with Google</span>
    </button>
  );
}
