import React from 'react'
import Image from 'next/image';
import Logo from "@/app/assets/images/planit-logo.svg"
import dashboardIcon from "@/app/assets/images/icons/dashboard.svg"
import invitationCard from "@/app/assets/images/icons/invitation-card.svg"
import managementIs from "@/app/assets/images/icons/management-ics.svg"
import redIcon from "@/app/assets/images/icons/red-icon.svg"
import creaTion from "@/app/assets/images/icons/crea-tion.svg"
// import bookVendors from "./assets/images/icons/book-vendors.svg"
import bookVendors from '@/app/assets/images/icons/book-vendors.svg'
import logOut from "@/app/assets/images/icons/log-out.svg"
import questionMark from "@/app/assets/images/icons/question-mark.svg"
import Link from 'next/link';
function Sidebar() {
  return (
    <aside className='bg-[linear-gradient(180deg,_#100509_0%,_#59172F_123.14%)] w-60 pt-8 px-3 flex flex-col pb-4'>
        <div className='size-28 shrink-0 bg-[#D9D9D9]/20 flex items-center justify-center mx-auto rounded-full p-4 mb-24'>
            <Image className="max-w-full" src={Logo} alt="user" priority width="auto" height="auto"/>
        </div>
        <nav className='flex flex-col grow overflow-y-auto'>
            <ul className='flex flex-col space-y-5'>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={dashboardIcon} alt="user" priority width="auto" height="auto"/>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={invitationCard} alt="user" priority width="auto" height="auto"/>
                        Generate invitation card
                    </Link>
                </li>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={managementIs} alt="user" priority width="auto" height="auto"/>
                        Guest management
                    </Link>
                </li>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={redIcon} alt="user" priority width="auto" height="auto"/>
                        PlanIt AI
                    </Link>
                </li>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={creaTion} alt="user" priority width="auto" height="auto"/>
                        Website creation
                    </Link>
                </li>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={bookVendors} alt="user" priority width="auto" height="auto"/>
                        Book vendors
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-col space-y-5 mt-auto'>
                <li>
                    <Link href="" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={questionMark} alt="user" priority width="auto" height="auto"/>
                        Help
                    </Link>
                </li>
                <li>
                    <Link href="/register-account" className='text-lg font-normal text-white no-underline flex items-center hover:opacity-70'>
                        <Image className="mr-3 w-5 shrink-0" src={logOut} alt="user" priority width="auto" height="auto"/>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar