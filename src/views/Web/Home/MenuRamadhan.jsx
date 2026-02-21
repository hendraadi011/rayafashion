import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// gambar hijab
import img1 from '../../../assets/hijab/1.jpeg'
import img2 from '../../../assets/hijab/2.jpeg'
import img3 from '../../../assets/hijab/3.jpeg'
import img4 from '../../../assets/hijab/4.jpeg'
import img5 from '../../../assets/hijab/5.jpeg'
import img6 from '../../../assets/hijab/6.jpeg'

// nomor WhatsApp
const phoneNumber = '6285785242714'

// kategori hijab
const categories = [
  { id: 'pashmina', name: 'Pashmina' },
  { id: 'segiempat', name: 'Segi Empat' },
]

// data produk
const productData = {
  pashmina: [
    { name: 'Pashmina Silk Black', price: 'Rp 75.000', stock: 12, img: img1 },
    {
      name: 'Pashmina Premium White',
      price: 'Rp 80.000',
      stock: 10,
      img: img2,
    },
    { name: 'Pashmina Ceruty Soft', price: 'Rp 70.000', stock: 15, img: img3 },
  ],
  segiempat: [
    {
      name: 'Hijab Segi Empat Polos',
      price: 'Rp 45.000',
      stock: 20,
      img: img4,
    },
    { name: 'Hijab Motif Elegan', price: 'Rp 55.000', stock: 18, img: img5 },
    { name: 'Hijab Premium Cotton', price: 'Rp 65.000', stock: 14, img: img6 },
  ],
}

const MenuRamadhan = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState(null)

  // fungsi order WhatsApp
  const handleOrder = (productName) => {
    const message = `Halo, saya ingin order *${productName}*`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className='py-20 bg-white' id='produk'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mb-10'>
          Koleksi Hijab Terbaru
        </h2>

        {/* ===== Category Tabs ===== */}
        <div className='flex justify-center gap-3 mb-10 flex-wrap'>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                swiperRef?.slideTo(index)
              }}
              className={`px-6 py-2 rounded-full border transition font-medium
              ${
                activeIndex === index
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:bg-black hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ===== Swiper Produk ===== */}
        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={20}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {productData[cat.id].map((item, i) => (
                  <div
                    key={i}
                    className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col group'
                  >
                    {/* Image */}
                    <div className='aspect-square overflow-hidden'>
                      <img
                        src={item.img}
                        alt={item.name}
                        className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
                      />
                    </div>

                    {/* Content */}
                    <div className='p-4 flex flex-col flex-grow'>
                      <h3 className='font-semibold text-sm mb-1 line-clamp-2'>
                        {item.name}
                      </h3>

                      <div className='flex justify-between text-sm text-gray-600 mb-3'>
                        <span className='font-bold text-black'>
                          {item.price}
                        </span>
                        <span>Stok {item.stock}</span>
                      </div>

                      {/* Button Order */}
                      <button
                        onClick={() => handleOrder(item.name)}
                        className='mt-auto bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition'
                      >
                        Order via WhatsApp
                      </button>
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
