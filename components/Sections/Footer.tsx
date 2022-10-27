import React from 'react'

import Image from 'next/image'

function Footer() {
  return (
    <div className='block mx-auto px-20 gap-5  min-w-[1200px] max-w-7xl h-full pt-20'>
      <div className='grid grid-flow-col grid-cols-4'>
        <ul className='flex flex-col gap-3'>
          <li>About Us</li>
          <li>Online Store</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li>Login/Register</li>
          <li>Your Cart</li>
          <li>Wishlist Items</li>
          <li>Your checkout</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li>FAQs</li>
          <li>Term of service</li>
          <li>Privacy Policy</li>
          <li>Returns</li>
        </ul>
        <div className='w-full h-full '>
          <Image src={logo} alt='logo' />
          <p>112 Kingdom,NA 12, New York</p>
          <p>+12 345 678 910</p>
          <p>infor.deercreative@gmail.com</p>
        </div>
      </div>
      <div className='w-full h-0.5 bg-gray-200 mt-16 '></div>
      <span className='flex w-full h-full items-center justify-center py-5 gap-1'>
        <p className='text-gray-400'>Copyright @2018</p>
        <p>Modaz</p>
      </span>
    </div>
  )
}

export default Footer
