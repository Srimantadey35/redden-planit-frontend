'use client';
import React from 'react';
import CreateAccPlans from '@/components/signup/CreateAccPlans';

const SignupPage = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-screen grid place-items-center"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      <CreateAccPlans />
    </div>
  );
};

export default SignupPage;
