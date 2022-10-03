import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon: StaticImageData
  title: string
  subtitle: string
}

function IconBox({ icon, title, subtitle }) {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <FontAwesomeIcon icon={icon} size='lg' color='red' />
      <h2 className='text-black font-semibold text-lg hover:text-red-600 transition-all duration-500 cursor-pointer'>
        {title}
      </h2>
      <h4 className='text-gray-500 font-light'>{subtitle}</h4>
    </div>
  )
}

export default IconBox
