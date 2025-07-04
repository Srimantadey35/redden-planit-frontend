import Link from 'next/link';
import React from 'react';

function TopNavBar() {
  const navItems = [
    'Banquets',
    'Photographers',
    'Makeup Artists',
    'Florists',
    'Caterers',
    'Planners',
    'Videography',
    'Card Prints',
    'Boutique',
    'Transports',
    'Foods',
  ];

  return (
    <nav className='flex flex-wrap items-center justify-center p-1.5 mx-auto w-fit'>
      {/* {navItems.map((item, index) => (
        <Link key={index} href='' className='m-0.5 text-base text-color font-normal py-1 px-5 bg-white inline-block rounded-md text-black'>
          {item}
        </Link>
      ))} */}
    </nav>
  );
}

export default TopNavBar;
