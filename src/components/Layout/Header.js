import React from 'react'
import Image from "next/image";
import userOne from "@/app/assets/images/user-1.jpg"
function Header() {
  return (
    <header className='bg-white w-full px-3 py-2'>
        <div className='flex items-center ml-auto w-fit'>
            <p className='text-base text-black font-normal'>Rabina Paul</p>
            <div className='size-9 relative rounded-full overflow-hidden mx-2'>
                <Image className="size-full object-cover" src={userOne} alt="user" priority width="36" height="36"/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" strokeLinecap="square" d="m14 5l-6.5 7L1 5" strokeWidth="1"/></svg>
        </div>
    </header>
  )
}

export default Header