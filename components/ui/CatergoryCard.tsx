import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  image: StaticImageData
  button: string
}

function CatergoryCard({ image, button }: Props) {
  return (
    <div className='group flex relative w-full h-full  justify-center items-center '>
      <Image src={image} alt='image' objectFit='cover' className='group-hover:scale-110 transition-all duration-300' />
      <button className='absolute bg-white px-7 py-3 text-sm font-poppins hover:bg-red-600 hover:text-white z-[2]'>
        {button}
      </button>
      <div className='absolute w-full h-full group-hover:bg-white group-hover:opacity-20'></div>
    </div>
  )
}

export default CatergoryCard
