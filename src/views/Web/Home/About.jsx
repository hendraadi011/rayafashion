import React from 'react'
import img1 from '../../../assets/img/img6.png'

import flower from '../../../assets/ornamen/1.png'
import leaf1 from '../../../assets/ornamen/f1.webp'
import leaf2 from '../../../assets/ornamen/leaf-2.svg'
import leaf3 from '../../../assets/ornamen/leaf-3.svg'
import bulan from '../../../assets/ornamen/bulan.png'

const AboutRamadhan = () => {
  return (
    <section id='about' className='py-16'>
      <div className='container px-4 grid gap-12 lg:grid-cols-2 items-center about__data'>
        {/* ===== Text Content ===== */}
        {/* Mobile: atas | Desktop: kanan */}
        <div className='relative text-center lg:text-left order-1 lg:order-2'>
          <span className='text-sm text-fc font-medium section__title'>
            Tentang Kami
          </span>

          <h2 className='text-3xl md:text-4xl font-bold mt-2 leading-snug text-gray-800 section__subtitle'>
            Sajikan Momen Ramadhan <br />
            dengan <span className='text-fc'>Kue Lebaran Istimewa</span>
          </h2>

          <p className='text-gray-600 mt-4 mb-8 max-w-md mx-auto lg:mx-0 about__description'>
            Kami menyediakan aneka kue kering dan hampers Lebaran dengan rasa
            premium dan kualitas terbaik. Cocok untuk keluarga, sahabat, dan
            rekan bisnis di momen penuh berkah.
          </p>

          <a
            href='#produk'
            className='inline-block bg-fc text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition button'
          >
            Lihat Menu Lebaran
          </a>

          {/* Ornamen */}
          <img
            src={flower}
            alt=''
            className='absolute w-5 lg:w-8 -top-6 left-16'
          />
          <img
            src={flower}
            alt=''
            className='absolute w-[30px] lg:w-10 left-[13rem]'
          />
          <img
            src={leaf1}
            alt=''
            className='absolute w-[40px] lg:w-15 top-[5rem] lg:top-0 lg:right-2 right-[1rem]'
          />
        </div>

        {/* ===== Image ===== */}
        {/* Mobile: bawah | Desktop: kiri */}
        <div className='relative justify-self-center lg:justify-start w-full order-2 lg:order-1'>
          {/* Background shape */}
          <div className='about__blob w-[220px] h-[340px] lg:w-[350px] lg:h-[560px] bg-fc rounded-[1rem] lg:ml-0 ml-16'></div>

          {/* Product Image */}
          <img
            src={img1}
            alt='Kue Lebaran'
            className='absolute w-[260px] lg:w-[420px] right-6 top-1/2 -translate-y-1/2 rounded-full lg:right-20 about__img'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutRamadhan
