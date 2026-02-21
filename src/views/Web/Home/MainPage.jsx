import React from 'react'
import f1 from '../../../assets/fashion/2.jpg'

const MainPage = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center'
      style={{
        backgroundImage: `url(${f1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center', // gambar agak ke kanan
      }}
    >
      {/* Overlay agar teks lebih jelas */}
      <div className='absolute inset-0 bg-black/40'></div>

      <div className='relative container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 items-center'>
        {/* ================= TEXT ================= */}
        <div className='max-w-xl text-center lg:text-left lg:-ml-10'>
          {/* Title */}
          <h1 className='text-4xl lg:text-5xl  leading-tight text-white drop-shadow-lg'>
            {` Temukan Gaya `}
            <br />
            <span className=''>Hijab Elegan & Modis</span>
          </h1>

          {/* Description */}
          <p className='mt-5 mb-8 text-gray-300 text-lg leading-relaxed'>
            Koleksi hijab terbaru dengan bahan nyaman dan desain trendi. Cocok
            untuk berbagai acara, dari santai hingga formal. Tampil percaya diri
            setiap hari.
          </p>

          {/* Button */}
          <a
            href='https://wa.me/6285785242714?text=Halo%20saya%20ingin%20pesan%20Hijab%20Fashion'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300'
          >
            <i className='ri-whatsapp-line text-xl'></i>
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default MainPage
