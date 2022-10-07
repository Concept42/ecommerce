import { useState, useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  images: StaticImageData[]
}
const delay = 10000
const slides = ['0', '1']

function Slider({ images }: Props) {
  const [index, setIndex] = useState<number>(0)
  const ref = useRef(null)

  function resetTimeout() {
    if (ref.current) {
      clearTimeout(ref.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    setTimeout(() => setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)), delay)

    return () => {
      resetTimeout()
    }
  }, [index])
  const handleClickFirst = () => {
    setIndex(0)
  }
  const handleClickSecond = () => {
    setIndex(1)
  }

  return (
    <div className='flex relative w-full h-[1000px]'>
      <Image src={images[index]} alt='Slider' objectFit='cover' width='5000' />
      <div className='flex absolute w-full h-full justify-center items-center '>
        {index === 0 ? (
          <>
            <div className='flex flex-1'></div>
            <div className='flex flex-1 justify-center   '>
              <div className='flex flex-col w-full items-center gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='w-20 border-solid border-b-2 border-gray-400 h-1 '></div>
                  <h3 className='text-gray-800'>Summer Fashion</h3>
                  <div className='w-20 border-solid border-b-2 border-gray-400 h-1 '></div>
                </div>
                <h1 className='text-8xl font-medium'>SALE</h1>
                <h2 className='text-4xl font-light'>UP TO 30% OFF</h2>
                <button className='flex px-9 py-3 bg-red-600 text-white hover:bg-gray-800 transition-all duration-300'>
                  BUY NOW
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-1 justify-center text-white  '>
              <div className='flex flex-col w-full  items-center gap-3'>
                <div className='flex flex-col justify-center items-start gap-4'>
                  <h3 className=' font-light text-2xl'>NEW TREND 2022</h3>
                  <h1 className='text-6xl font-normal'>New Collection</h1>
                  <h2 className='text-xl font-light'>BIG SALE OF THIS WEEK UP TO 30%</h2>
                  <button className='flex px-9 py-3 bg-red-600 text-white hover:bg-gray-800 transition-all duration-300'>
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-1'></div>
          </>
        )}
      </div>
      <div className='flex gap-2 absolute bottom-6 left-[50%]'>
        <div
          onClick={handleClickFirst}
          className={index === 0 ? 'w-4 h-4 rounded-full bg-red-600' : 'w-4 h-4 rounded-full bg-gray-300'}
        ></div>
        <div
          onClick={handleClickSecond}
          className={index === 1 ? 'w-4 h-4 rounded-full bg-red-600' : 'w-4 h-4 rounded-full bg-gray-300'}
        ></div>
      </div>
    </div>
  )
}

export default Slider
