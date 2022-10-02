import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  image: StaticImageData
}

function CatergoryCard({ image }: Props) {
  return (
    <div className='flex w-full h-full  justify-center items-center'>
      <Image src={image} alt='image' objectFit='cover' />
    </div>
  )
}

export default CatergoryCard
