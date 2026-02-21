import React from 'react'

import img1 from '../../../assets/hijab/1.jpeg'
import img2 from '../../../assets/hijab/2.jpeg'
import img3 from '../../../assets/hijab/3.jpeg'
import img4 from '../../../assets/hijab/4.jpeg'

const phoneNumber = '6285785242714'

const handleOrder = (product) => {
  const message = `Halo, saya ingin order promo Ramadhan untuk *${product}*`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const NewSection = () => {
  return (
    <section id='new' className='py-20 bg-black text-white'>
      <div className='container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center'>
        {/* ===== LEFT CONTENT ===== */}
        <div>
          <span className='uppercase tracking-widest text-gray-400 text-sm'>
            Promo Spesial Ramadhan
          </span>

          <h2 className='text-4xl lg:text-5xl font-bold mt-3 leading-tight'>
            Diskon Hijab <br />
            <span className='text-white'>Up To 30%</span>
          </h2>

          <p className='text-gray-400 mt-6 max-w-md leading-relaxed'>
            Sambut bulan suci Ramadhan dengan koleksi hijab premium warna hitam
            & putih yang elegan. Bahan nyaman, stylish, dan cocok untuk
            aktivitas sehari-hari maupun acara spesial.
          </p>

          <button
            onClick={() => handleOrder('Promo Ramadhan')}
            className='mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition'
          >
            Order Sekarang
          </button>

          {/* Promo Badge */}
          <div className='mt-6 ml-3 inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm'>
            ✨ Promo terbatas selama bulan Ramadhan
          </div>
        </div>

        {/* ===== RIGHT PRODUCTS ===== */}
        <div className='grid grid-cols-2 gap-6'>
          {[
            {
              name: 'Pashmina Premium',
              oldPrice: 'Rp 85.000',
              price: 'Rp 60.000',
              img: img1,
            },
            {
              name: 'Hijab Segi Empat',
              oldPrice: 'Rp 65.000',
              price: 'Rp 45.000',
              img: img2,
            },
            {
              name: 'Pashmina Ceruty',
              oldPrice: 'Rp 75.000',
              price: 'Rp 55.000',
              img: img3,
            },
            {
              name: 'Hijab Cotton Premium',
              oldPrice: 'Rp 90.000',
              price: 'Rp 65.000',
              img: img4,
            },
          ].map((item, index) => (
            <div
              key={index}
              className='bg-white text-black rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition'
            >
              {/* Image */}
              <div className='relative'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-44 object-cover group-hover:scale-105 transition duration-300'
                />

                {/* Discount Badge */}
                <div className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded'>
                  -30%
                </div>
              </div>

              {/* Content */}
              <div className='p-4'>
                <h3 className='font-semibold text-sm mb-1'>{item.name}</h3>

                <div className='text-sm mb-3'>
                  <span className='line-through text-gray-400 mr-2'>
                    {item.oldPrice}
                  </span>
                  <span className='font-bold text-black'>{item.price}</span>
                </div>

                <button
                  onClick={() => handleOrder(item.name)}
                  className='w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition'
                >
                  Order WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewSection
