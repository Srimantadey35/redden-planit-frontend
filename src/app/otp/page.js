import React from 'react'
import Otp from '@/components/signup/Otp'

const page = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-screen grid place-items-center"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >

    <Otp/>
    </div>
  )
}

export default page