import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero from '../../assets/Shop/bg-parallax1.jpg'
import DetailProduct0 from '../../assets/SingleProduct/detail-01.jpeg'
import DetailProduct1 from '../../assets/SingleProduct/thumb-detail-01.jpg'
import DetailProduct2 from '../../assets/SingleProduct/thumb-detail-02.jpg'
import DetailProduct3 from '../../assets/SingleProduct/thumb-detail-03.jpg'
import DetailProduct4 from '../../assets/SingleProduct/thumb-detail-04.jpg'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignUp from '../../components/Sections/SignUp'
import Footer from '../../components/Sections/Footer'

const productImage = [DetailProduct0, DetailProduct1, DetailProduct2, DetailProduct3, DetailProduct4]

function DetailProduct() {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [quantity, setQuantity] = useState(1)
  const min = 1
  const max = 100

  const handleChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)))
    setQuantity(value)
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <section className='flex w-full min-h-[250px] relative font-poppins '>
        <Image src={hero} layout='fill' objectFit='cover' />
        <div className='flex w-full h-full flex-col absolute justify-center items-center gap-5'>
          <h1 className='text-5xl'>Gray Sneakers</h1>
          <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
              <li className='inline-flex items-center'>
                <Link href='/'>
                  <a className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                    </svg>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <Link href='/shop'>
                    <a className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                      Shop
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <Link href='/shop/detailProduct'>
                    <a className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                      Products
                    </a>
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className='flex flex-col justify-between  mx-auto px-20  min-w-[1200px] max-w-7xl h-full pt-10 '>
        <div className='grid grid-cols-2'>
          <div className='flex w-full h-full flex-col justify-start items-center '>
            <div className='flex flex-col w-[80%] h-[1000px] mx-auto gap-5'>
              <Image src={productImage[selectedImage]} sizes='xl' objectFit='cover' alt='image' />
              <div className='grid grid-cols-4 gap-3'>
                <Image
                  onClick={() => setSelectedImage(0)}
                  src={productImage[1]}
                  objectFit='contain'
                  className='cursor-pointer'
                  alt='image'
                />
                <Image
                  onClick={() => setSelectedImage(1)}
                  src={productImage[2]}
                  objectFit='contain'
                  className='cursor-pointer'
                  alt='image'
                />
                <Image
                  onClick={() => setSelectedImage(2)}
                  src={productImage[3]}
                  objectFit='contain'
                  className='cursor-pointer'
                  alt='image'
                />
                <Image
                  onClick={() => setSelectedImage(3)}
                  src={productImage[4]}
                  objectFit='contain'
                  className='cursor-pointer'
                  alt='image'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full h-full items-start font-poppins gap-5'>
            <h1 className='text-2xl'>Gray Sneakers</h1>

            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>First star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Second star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                class='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Third star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fourth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-300 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fifth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>4.95 out of 5</p>
            </div>
            <p className='font-thin'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <span className='flex items-center gap-5'>
              <h3 className='text-gray-300 line-through'>$90.00</h3>
              <h3 className='text-xl'>$24.00</h3>
            </span>
            <span className='flex items-center gap-20'>
              <h3>Size:</h3>
              <h3 className='flex gap-5 text-gray-300 '>
                <button className='hover:text-black'>L</button>
                <button className='hover:text-black'>M</button>
                <button className='hover:text-black'>S</button>
                <button className='hover:text-black'>XL</button>
                <button className='hover:text-black'>XXL</button>
              </h3>
            </span>
            <ul className='list-disc list-inside'>
              <li>100% cotton</li>
              <li>6 months warranty</li>
              <li>High Quality</li>
            </ul>
            <div className='flex gap-5'>
              <div className='flex border-[1px]'>
                <input
                  type='number'
                  className='flex  justify-center items-center w-10 h-full appearance-none border-none'
                  value={quantity}
                />
                <div className='flex flex-col border-l-[1px]'>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className='flex justify-center items-center border-b-[1px]  p-0.5'
                  >
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                  <button
                    onClick={() => setQuantity((prev) => prev - 1)}
                    className='flex justify-center items-center p-0.5'
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                </div>
              </div>
              <button className='flex px-9 py-3 bg-red-600 text-white hover:bg-gray-800 transition-all duration-300'>
                ADD TO CART
              </button>
              <button className='border-[1px] px-4 hover:border-red-600 hover:text-red-600'>
                <FontAwesomeIcon icon={faHeart} className='flex justify-center items-center  ' />
              </button>
            </div>
            <span className='flex items-center gap-2'>
              <h3 className='text-gray-600'>Categories:</h3>
              <h3 className='flex gap-1  '>
                <button className='hover:text-black'>Men</button>
                <p>,</p>
                <button className='hover:text-black'>Shoes</button>
              </h3>
            </span>
            <span className='flex items-center gap-2'>
              <h3 className='text-gray-600'>Tags:</h3>
              <h3 className='flex gap-1  '>
                <button className='hover:text-black'>Dress</button>
                <p>,</p>
                <button className='hover:text-black'>Fashion</button>
              </h3>
            </span>
          </div>
        </div>
      </section>
      <section>
        <SignUp />
        <Footer />
      </section>
    </div>
  )
}

export default DetailProduct
