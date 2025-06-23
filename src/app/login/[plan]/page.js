import Login from "@/components/signup/Login";
import React from "react";

const page = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-screen grid place-items-center"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      <Login />
    </div>
  );
};

export default page;
