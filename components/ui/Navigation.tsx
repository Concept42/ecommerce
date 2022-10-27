import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

function Navigation() {
  return (
    <>
      <div className='flex sticky top-0  w-full h-full items-center justify-around p-6 mx-auto shadow bg-white z-[999]'>
        <ul className='flex gap-10 font-poppins font-normal items-center  '>
          <Link href='/'>
            <li className='hover:text-red-600 cursor-pointer'>HOME</li>
          </Link>
          <Link href='/shop'>
            <li className='hover:text-red-600 cursor-pointer'>SHOP</li>
          </Link>
          <li className='hover:text-red-600 cursor-pointer'>BLOG</li>
          <li className='hover:text-red-600 cursor-pointer'>CONTACT</li>
          <div className='flex gap-5 ml-5 justify-center items-center'>
            <li className='hover:text-red-600 cursor-pointer '>
              <FaSearch />
            </li>
            <li className='hover:text-red-600 cursor-pointer bg-slate-200 p-3 rounded-full'>
              <FaShoppingCart />
            </li>
          </div>
        </ul>
      </div>
    </>
  )
}

export default Navigation
