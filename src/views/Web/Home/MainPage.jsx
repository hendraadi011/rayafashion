import React from 'react'
import img1 from '../../../assets/img/img1.png'
import img2 from '../../../assets/img/img2.png'
import img3 from '../../../assets/img/img3.png'
import img4 from '../../../assets/img/img4.png'
import img5 from '../../../assets/img/img5.png'
import img6 from '../../../assets/img/img6.png'

import flower from '../../../assets/ornamen/1.png'
import leaf1 from '../../../assets/ornamen/f1.webp'
import leaf2 from '../../../assets/ornamen/leaf-2.svg'
import leaf3 from '../../../assets/ornamen/leaf-3.svg'
import bulan from '../../../assets/ornamen/bulan.png'

const MainPage = () => {
  return (
    <section id='home' className='section'>
      <div className='container grid lg:grid-cols-2 items-center gap-12 pt-6 lg:pt-16'>
        {/* ================= TEXT ================= */}
        <div className='relative text-center lg:text-left home__data'>
          {/* Title */}
          <h1 className='text-4xl lg:text-6xl font-bold leading-tight home__title'>
            Nikmati Manisnya <br />
            <span className='text-[var(--first-color)]'>
              Kue Lebaran Spesial
            </span>
          </h1>

          {/* Description */}
          <p className='mt-4 mb-8 lg:mb-10 lg:pr-14 text-gray-600 home__description'>
            Hadirkan kehangatan Hari Raya dengan berbagai pilihan kue lebaran
            premium yang lezat, fresh, dan dibuat dari bahan berkualitas. Cocok
            untuk keluarga, tamu, dan hampers spesial.
          </p>

          {/* Button */}
          <a
            href='https://wa.me/6285785242714?text=Halo%20saya%20ingin%20pesan%20Kue%20Lebaran'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-[var(--first-color)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition'
          >
            <i className='ri-whatsapp-line text-xl'></i>
            Pesan Sekarang
          </a>

          {/* Decorative Text Background */}
          {/* <h2 className='absolute text-bca -left-6 top-0 text-[6rem] lg:text-[10rem] font-medium t -z-10 leading-none'>
            Eid
            <br />
            Mubarak
          </h2> */}

          {/* Decorations */}
          <img
            src={flower}
            alt=''
            className='absolute w-5 lg:w-8 -top-6 left-16'
          />
          <img
            src={flower}
            alt=''
            className='absolute w-[30px] lg:w-10  left-[13rem]'
          />

          <img
            src={leaf1}
            alt=''
            className='absolute w-[40px] lg:w-10 top-[.50rem] lg:top-0 lg:right-0 right-[2rem]'
          />
        </div>

        {/* ================= IMAGES ================= */}
        <div className='relative flex justify-self-center home__images'>
          {/* Blob */}
          <div className='w-[300px] h-[300px] lg:w-[580px] lg:h-[580px] bg-[var(--first-color)] rounded-full justify-self-center home__blob'></div>

          {/* Main Images */}
          <img
            src={img1}
            alt=''
            className='absolute w-[230px] lg:w-[430px] -left-[4.5rem] bottom-[1rem] lg:bottom-[4rem]'
          />

          <img
            src={img5}
            alt=''
            className='absolute w-[150px] lg:w-[240px] -top-[0.4rem] left-[2rem'
          />

          <img
            src={img3}
            alt=''
            className='absolute w-[140px] lg:w-[200px] -top-[1rem] right-10 lg:right-44'
          />

          <img
            src={img4}
            alt=''
            className='absolute w-[140px] lg:w-[230px] -right-[2rem] top-[4rem] lg:top-[3rem]'
          />

          <img
            src={img2}
            alt=''
            className='absolute w-[130px] lg:w-[280px] right-[1rem] top-[9rem] lg:top-[12rem] lg:-right-[2rem]'
          />

          <img
            src={img5}
            alt=''
            className='absolute w-[180px] lg:w-[350px] right-[5rem] -bottom-[3rem] lg:-bottom-[4rem]'
          />

          {/* Decorations */}
          <img
            src={bulan}
            alt=''
            className='absolute w-[2rem] lg:w-8 top-0 right-6'
          />

          <img
            src={flower}
            alt=''
            className='absolute w-6 lg:w-9 bottom-6 right-6'
          />
        </div>
      </div>
    </section>
  )
}

export default MainPage
