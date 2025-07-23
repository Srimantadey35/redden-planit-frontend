'use client'
import React, { Suspense } from 'react'
import Otp from '@/components/signup/Otp'

const Page = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-screen grid place-items-center"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >

    <Suspense fallback={<div>Loading...</div>}>
        <Otp />
      </Suspense>
    </div>
  )
}

export default Page