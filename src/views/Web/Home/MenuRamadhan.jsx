import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// gambar
import kue1 from '../../../assets/kue/1.jpeg'
import kue2 from '../../../assets/kue/2.jpeg'
import kue3 from '../../../assets/kue/3.jpeg'
import kue4 from '../../../assets/kue/4.jpeg'

const categories = [
  { id: 'kering', name: 'Kue Kering' },
  { id: 'basah', name: 'Kue Basah' },
  { id: 'hampers', name: 'Hampers' },
  { id: 'premium', name: 'Premium' },
]

const menuData = {
  kering: [
    { name: 'Nastar Premium', price: 'Rp 75.000', stock: 20, img: kue1 },
    { name: 'Kastengel Keju', price: 'Rp 80.000', stock: 15, img: kue2 },
    { name: 'Putri Salju', price: 'Rp 70.000', stock: 18, img: kue3 },
  ],
  basah: [
    { name: 'Lapis Legit', price: 'Rp 120.000', stock: 10, img: kue4 },
    { name: 'Kue Lumpur', price: 'Rp 35.000', stock: 25, img: kue1 },
  ],
  hampers: [
    { name: 'Hampers Mini', price: 'Rp 150.000', stock: 12, img: kue2 },
    { name: 'Hampers Family', price: 'Rp 300.000', stock: 8, img: kue3 },
  ],
  premium: [
    { name: 'Hampers Exclusive', price: 'Rp 500.000', stock: 5, img: kue4 },
  ],
}

const MenuRamadhan = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <section className='py-16 bg-fc text-white'>
      <div className='container mx-auto px-4' id='menu'>
        <h2 className='text-3xl font-bold text-center mb-10'>
          Menu Kue Spesial Ramadhan
        </h2>

        {/* ===== Category Tabs ===== */}
        <div className='mb-10 flex flex-wrap justify-center gap-2'>
          {categories.map((cat, index) => (
            // <SwiperSlide key={index} className='!w-auto'>
            <button
              onClick={() => {
                setActiveIndex(index)
                swiperRef?.slideTo(index)
              }}
              className={`px-5 py-2 rounded-full border  transition  justify-center overflow-auto menu__button
                ${
                  activeIndex === index
                    ? 'bg-white text-fc border-white'
                    : 'bg-white/20 border-white text-white hover:bg-white hover:text-fc'
                }`}
            >
              {cat.name}
            </button>
            // </SwiperSlide>
          ))}
        </div>

        {/* ===== Content Swiper (1 slide = 1 kategori) ===== */}
        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={20}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div
                className='grid gap-4
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 menu__content'
              >
                {menuData[cat.id].map((item, i) => (
                  <div
                    key={i}
                    className='bg-white/10 rounded-xl p-3 backdrop-blur-sm
          hover:bg-white transition group flex flex-col w-full'
                  >
                    {/* Image */}
                    <div className='w-full aspect-square rounded-lg overflow-hidden bg-white/20 mb-3'>
                      <img
                        src={item.img}
                        alt={item.name}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    {/* Content */}
                    <h3 className='text-[1rem] font-semibold text-center mb-1 group-hover:text-gray-800 line-clamp-2'>
                      {item.name}
                    </h3>

                    <div className='flex justify-between text-xs sm:text-sm mt-auto group-hover:text-gray-700'>
                      <span className='font-bold group-hover:text-fc'>
                        {item.price}
                      </span>
                      <span>Stok {item.stock}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MenuRamadhan
