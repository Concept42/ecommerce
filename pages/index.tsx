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

const sliderImages = [image1, image2]

const Home: NextPage = () => {
  return (
    <>
      <div className='mb-20'>
        <Slider images={sliderImages} />
      </div>
      <div className='flex px-20 w-full h-full justify-center items-center '>
        <CatergoryCard image={CardImage1} />
        <div className='flex flex-col w-full h-full'>
          <CatergoryCard image={CardImage2} />
          <CatergoryCard image={CardImage3} />
        </div>
        <CatergoryCard image={CardImage4} />
      </div>
    </>
  )
}

export default Home
