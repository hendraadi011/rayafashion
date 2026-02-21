import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import img1 from '../../../assets/fashion/3.jpeg'
import img2 from '../../../assets/fashion/4.jpeg'
import img3 from '../../../assets/fashion/9.jpg'
import img4 from '../../../assets/fashion/8.jpeg'

const images = [img1, img2, img3, img4]

const AboutRamadhan = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleThumbnailClick = (index) => {
    setActiveIndex(index)
    swiperRef.current?.slideTo(index)
  }

  return (
    <section className='bg-black text-white py-24'>
      <div className='container mx-auto px-6'>
        {/* ===== Title ===== */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl lg:text-5xl font-bold'>
            Hijab Black & White
          </h2>
          <p className='text-gray-400 mt-3'>
            Koleksi hijab elegan dengan tampilan minimal dan premium
          </p>
        </div>

        {/* ===== Swiper Main ===== */}
        <div className='max-w-xl mx-auto'>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className='rounded-2xl overflow-hidden shadow-2xl'
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className='bg-white/5 p-4'>
                  <img
                    src={img}
                    alt='Hijab'
                    className='w-full h-[420px] object-cover rounded-xl'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== Thumbnail Grid ===== */}
        <div className='grid grid-cols-4 gap-4 max-w-xl mx-auto mt-6'>
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`
                cursor-pointer rounded-lg overflow-hidden border-2 transition duration-300
                ${
                  activeIndex === index
                    ? 'border-white scale-105'
                    : 'border-white/10 hover:border-white/40'
                }
              `}
            >
              <img
                src={img}
                alt='thumb'
                className={`
                  w-full h-20 object-cover transition duration-300
                  ${
                    activeIndex === index
                      ? 'grayscale-0'
                      : 'grayscale hover:grayscale-0'
                  }
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutRamadhan
