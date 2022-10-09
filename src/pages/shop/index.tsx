import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import hero from '../../assets/Shop/bg-parallax1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../../components/ui/ProductCard'
import ProductImage1 from '../../assets/Products/13.jpg'
import Footer from '../../components/Sections/Footer'
import SignUp from '../../components/Sections/SignUp'

function Shop() {
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  return (
    <div className='flex flex-col w-full h-full'>
      <section className='flex w-full min-h-[250px] relative font-poppins '>
        <Image src={hero} layout='fill' objectFit='cover' />
        <div className='flex w-full h-full flex-col absolute justify-center items-center gap-5'>
          <h1 className='text-5xl'>Shop</h1>
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
            </ol>
          </nav>
        </div>
      </section>
      <section className='flex justify-between  mx-auto px-20  min-w-[1200px] max-w-7xl h-full pt-20'>
        <h3>Showing 1–12 of 56 Products</h3>
        <div>
          <p className='flex justify-center items-center gap-2'>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className='hover:text-red-600 transition-all duration-500'
            >
              Filters
            </button>
            <button>/</button>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className='hover:text-red-600 transition-all duration-500'
            >
              Search
            </button>
            {showSearch ? (
              <button onClick={() => setShowSearch(false)} className='text-red-600 font-black'>
                X
              </button>
            ) : (
              <FontAwesomeIcon icon={faSearch} className='cursor-pointer' onClick={() => setShowSearch(!showSearch)} />
            )}
          </p>
        </div>
      </section>
      <section>
        {showFilter ? (
          <div className='flex flex-col justify-between  mx-auto px-20  min-w-[1200px] max-w-7xl h-full pt-10 '>
            <div className='flex flex-col w-full h-0.5 bg-gray-200'></div>
            <div className='flex w-full h-full justify-end'>
              <button
                onClick={() => setShowFilter(false)}
                className='flex bg-red-600 px-2 py-1 text-white font-bold text-sm mt-2'
              >
                X
              </button>
            </div>
            <div className='grid grid-flow-col grid-cols-4'>
              <div className='flex flex-col gap-10'>
                <h3>Sort By</h3>
                <ul className='flex flex-col gap-1 text-gray-400 font-thin'>
                  <li>Default</li>
                  <li>New</li>
                  <li>Sale</li>
                  <li>Price: low to high</li>
                  <li>Price: high to low</li>
                </ul>
              </div>
              <div className='flex flex-col gap-10'>
                <h3>Price</h3>
                <ul className='flex flex-col gap-1 text-gray-400 font-thin gap-'>
                  <li>$0.00 - $50.00</li>
                  <li>$50.00 - $100.00</li>
                  <li>$100.00 - $150.00</li>
                  <li>$150.00 - $200.00</li>
                  <li>$200.00 +</li>
                </ul>
              </div>
              <div className='flex flex-col gap-10'>
                <h3>Size</h3>
                <ul className='flex flex-col gap-1 text-gray-400 font-thin gap-'>
                  <li>L</li>
                  <li>M</li>
                  <li>S</li>
                  <li>XL</li>
                  <li>XXL</li>
                </ul>
              </div>
              <div className='flex flex-col gap-10'>
                <h3>Tags</h3>
                <ul className='flex w-full px-5  gap-1 text-white font-thin flex-wrap t '>
                  <button className='flex bg-gray-500 hover:bg-red-600 w-fit h-fit px-3 py-1'>All products</button>
                  <button className='flex bg-gray-500 hover:bg-red-600 w-fit h-fit px-3 py-1'>Bags</button>
                  <button className='flex bg-gray-500 hover:bg-red-600 w-fit h-fit px-3 py-1'>Fashion</button>
                  <button className='flex bg-gray-500 hover:bg-red-600 w-fit h-fit px-3 py-1'>Accessories</button>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        {showSearch ? (
          <div className='flex flex-col justify-between  mx-auto px-20  min-w-[1200px] max-w-7xl h-full pt-10 font-poppins '>
            <input
              className='flex border-solid border-b-2 focus:border-red-400 text-3xl text-gray-300 font-thin py-2 focus: outline-none  '
              placeholder='Searching . . .'
            />
          </div>
        ) : (
          ''
        )}
      </section>
      <section className='flex flex-col justify-between  mx-auto px-20  min-w-[1200px] max-w-7xl h-full py-10 font-poppins '>
        <div className='grid  grid-cols-3 gap-2  '>
          <ProductCard
            image={ProductImage1}
            productName='Black Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
        </div>
      </section>
      <SignUp />
      <Footer />
    </div>
  )
}

export default Shop
