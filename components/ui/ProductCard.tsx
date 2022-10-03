import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  image: StaticImageData
  productName: string
  price: number
  edition: string
  newProduct?: boolean
  sale?: boolean
}

function ProductCard({ image, productName, price, edition, newProduct, sale }: Props) {
  return (
    <div className='group flex flex-col relative min-w-[300px] h-full justify-center items-center bg-white gap-2 font-poppins hover:shadow-2xl transition-all duration-500  border-solid border-r-[1px] border-gray-200 pt-16 '>
      <Image src={image} alt='product' />
      <h2>{productName}</h2>
      <h2>{edition}</h2>
      <h4 className='text-red-600 text-lg'>${price}</h4>
      <button className=' bg-red-500 w-full p-2 text-white mt-16 hover:bg-gray-800 transition-all duration-500'>
        ADD TO CART
      </button>
      {newProduct && <div className='absolute top-5 left-5 bg-green-300 px-3'>New</div>}
      {sale && <div className='absolute top-5 left-5 bg-red-400 px-3'>Sale</div>}
    </div>
  )
}

export default ProductCard
