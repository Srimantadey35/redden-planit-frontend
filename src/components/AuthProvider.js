"use client";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAccessToken, clearAccessToken, setUser, clearUser } from "@/store/authSlice.js";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const storedRefreshToken =
      localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken");

    if (storedRefreshToken) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/refresh-token`,
          {},
          {
            headers: { Authorization: `Bearer ${storedRefreshToken}` },
            withCredentials: true,
          }
        )
        .then((res) => {
          const accessToken = res.headers.get("accesstoken") || res.headers.accesstoken || res.headers['accesstoken'];
          const newRefreshToken =  res.headers.get("refreshtoken") || res.headers.refreshtoken || res.headers['refreshtoken'];

          console.log("✅ accessToken:", accessToken);
          console.log("✅ refreshToken:", newRefreshToken);

          if (!accessToken) {
            throw new Error("No access token returned");
          }

          dispatch(setAccessToken(accessToken));

          const rememberMe = localStorage.getItem("rememberMe") === "true";
          if (rememberMe) {
            localStorage.setItem("refreshToken", newRefreshToken);
          } else {
            sessionStorage.setItem("refreshToken", newRefreshToken);
          }
          
        })
        .catch((err) => {
          console.error("❌ Token refresh failed", err);
          dispatch(clearAccessToken());
          // dispatch(clearUser());
          localStorage.removeItem("refreshToken");
          sessionStorage.removeItem("refreshToken");
          router.push("/");
        });
    }
  }, [dispatch,router]);

  // const fetchUserDetails = async (accessToken) => {
  //   console.log("📣 fetchUserDetails called with:", accessToken);

  //   try {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/current-user`,
  //       {
  //         withCredentials: true,
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );

  //     console.log("✅ user response:", response.data);

  //     // Check if user data is in response.data or response.data.data
  //     const userData = response.data?.data || response.data;
  //     dispatch(setUser(userData));
  //   } catch (error) {
  //     console.error("❌ fetchUserDetails error", error);
  //   }
  // };

  return <>{children}</>;
};

export default AuthProvider;





