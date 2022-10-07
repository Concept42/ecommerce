import type { NextPage } from 'next'
import Navigation from '../components/ui/Navigation'
import Slider from '../components/ui/Slider'
import image1 from '../assets/slider-bg-1.jpg'
import image2 from '../assets/slider-bg-5.jpg'
import CatergoryCard from '../components/ui/CatergoryCard'
import CardImage1 from '../assets/imgbox-1-375x500.jpg'
import CardImage2 from '../assets/imgbox-1-375x240.jpg'
import CardImage3 from '../assets/imgbox-2-375x240.jpg'
import CardImage4 from '../assets/imgbox-2-375x500.jpg'
import ProductImage1 from '../assets/Products/13.jpg'
import ProductImage2 from '../assets/Products/14.jpg'
import ProductImage3 from '../assets/Products/15.jpg'
import ProductImage4 from '../assets/Products/16.jpg'
import IconBox from '../components/ui/IconBox'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ui/ProductCard'
import Collection from '../assets/bg-parallax3.jpg'
import Image from 'next/image'
import Footer from '../components/Sections/Footer'

const sliderImages = [image1, image2]

const Home: NextPage = () => {
  return (
    <>
      <section className=''>
        <Slider images={sliderImages} />
      </section>
      <section className='block mx-auto px-20 gap-5  min-w-[1200px] max-w-7xl h-full justify-center items-center py-20 '>
        <div></div>
        <div className='flex gap-5 w-full h-full'>
          <CatergoryCard image={CardImage1} button="FOR MEN'S" />
          <div
            className='flex flex-col gap-5
       w-full h-full'
          >
            <CatergoryCard image={CardImage2} button="FOR KID'S" />
            <CatergoryCard image={CardImage3} button='ACCESSORIES' />
          </div>
          <CatergoryCard image={CardImage4} button="FOR WOMEN'S" />
        </div>
        <div></div>
      </section>
      <section className='w-full h-full bg-gray-100 justify-center items-center'>
        <div className='block mx-auto px-20 gap-5  min-w-[1200px] max-w-7xl h-full py-5'>
          <div className='flex justify-around items-center '>
            <IconBox icon={faTruckMoving} title='Free Shipping' subtitle='Free Shipping on order over $99' />
            <IconBox icon={faMoneyBillAlt} title='Cash On Delivery' subtitle='The Internet Trend To Repeat' />
            <IconBox icon={faGift} title='Gift For All' subtitle='Receive Gift When Subscribe' />
            <IconBox icon={faClock} title='Opening All Week' subtitle='6.00 am - 17.00pm' />
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center py-20 gap-10 font-poppins'>
        <h1 className='text-4xl '>New Product</h1>
        <div className='flex w-16 h-0.5 bg-red-700 '></div>
        <div className='grid grid-flow-col grid-cols-4 gap-1'>
          <ProductCard
            image={ProductImage1}
            productName='Gray Sneakers'
            edition='Black Edition'
            price={100}
            newProduct
          />
          <ProductCard
            image={ProductImage2}
            productName='Stylish black bag'
            edition='Limited Edition'
            price={200}
            newProduct
          />
          <ProductCard
            image={ProductImage3}
            productName='Gray autmn soft jacket'
            edition='Autmn Collection'
            price={350}
            sale
          />
          <ProductCard image={ProductImage4} productName='Black Buissness jacket' edition='For men' price={600} />
        </div>
      </section>
      <section className='w-full h-[400px] bg-[#EFEFEF] relative'>
        <Image src={Collection} alt='collection' className='' layout='fill' objectFit='cover' />

        <div className='flex flex-col w-full h-full justify-center items-center absolute font-poppins gap-4'>
          <h2 className='text-2xl font-thin'>NEW TREND 2018</h2>
          <h1 className='font-medium text-5xl'>Women's Collection</h1>
          <div className='w-40 h-0.5 bg-gray-300'></div>
          <h2 className='text-lg font-thin'>Big Sale of this Week</h2>
          <button className='flex px-9 py-3 bg-red-600 text-white hover:bg-gray-800 transition-all duration-300'>
            SHOP NOW
          </button>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
