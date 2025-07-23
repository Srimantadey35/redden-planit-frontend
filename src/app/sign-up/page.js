'use client';
import React from 'react';
import CreateAccPlans from '@/components/signup/CreateAccPlans';

const SignupPage = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-screen grid place-items-center relative z-[1]"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-45 z-[-1]"></div>
      <CreateAccPlans />
    </div>
  );
};

export default SignupPage;
