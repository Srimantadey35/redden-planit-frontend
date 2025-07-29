import React from 'react'
import Otp from '@/components/signup/Otp'

const page = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover h-screen grid place-items-center"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 h-full w-full z-0" />
      <div className="relative z-10">
        <Otp />
      </div>
    </div>
  )
}

export default page