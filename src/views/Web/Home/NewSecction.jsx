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
// import bulan from '../../../assets/ornamen/bulan.png'

const NewSection = () => {
  return (
    <section id='new' className='pt-20 pb-16'>
      <div className='container mx-auto px-4 grid gap-16 md:grid-cols-2 items-center new__data'>
        {/* ===== LEFT CONTENT ===== */}
        <div className='relative text-center md:text-left'>
          {/* Subtitle */}
          <span className='block font-semibold text-sm md:text-base text-fc mb-2 tracking-wide font-a2 section__title'>
            Menu Spesial Lebaran
          </span>

          {/* Title */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight section__subtitle'>
            Aneka Kue Lebaran <br />
            <span className='text-fc'>Fresh & Premium</span>
          </h2>

          {/* Description */}
          <p className='text-gray-500 text-sm md:text-base lg:text-lg max-w-md mx-auto md:mx-0 new__description'>
            Nikmati berbagai pilihan kue lebaran terbaik seperti nastar,
            kastengel, putri salju, dan hampers eksklusif. Dibuat dari bahan
            berkualitas untuk melengkapi momen spesial Hari Raya bersama
            keluarga tercinta.
          </p>

          {/* Ornaments */}
          <img src={flower} alt='' className='absolute w-5 top-5 left-0' />
          <img
            src={flower}
            alt=''
            className='absolute w-5 left-1/2 -translate-x-1/2 -bottom-8'
          />
          <img src={leaf1} alt='' className='absolute w-7 top-2 right-0' />
          <img src={leaf2} alt='' className='absolute w-6 -bottom-16 left-2' />
        </div>

        {/* ===== RIGHT IMAGES ===== */}
        <div className='relative flex justify-center new__images'>
          {/* Blob */}
          <div className='w-[200px] h-[320px] lg:w-[350px] lg:h-[560px] bg-fc rounded-xl ml-16 new__blob'></div>

          {/* Images */}
          <img
            src={img1}
            alt=''
            className='absolute w-[270px] lg:w-[400px] right-0 -bottom-9'
          />
          <img
            src={img4}
            alt=''
            className='absolute w-[200px] -top-3 lg:top-12 lg:-right-10 right-10 lg:w-[300px]'
          />

          <img
            src={img5}
            alt=''
            className='absolute w-[150px] lg:w-[300px] -bottom-5 left-25'
          />

          <img
            src={img3}
            alt=''
            className='absolute w-[200px] lg:w-[350px] -top-8 lg:bottom-20 right-[10rem]'
          />

          {/* Small ornaments */}
          <img src={flower} alt='' className='absolute w-15 top-12 -right-8' />
          <img src={flower} alt='' className='absolute w-5 -bottom-8 left-24' />
          <img src={leaf3} alt='' className='absolute w-5 top-40 left-3' />

          {/* Background Text */}
          {/* <h2 className='absolute -bottom-10 left-0 text-6xl font-medium text-gray-100 -z-10'>
            刺身料理
          </h2> */}
        </div>
      </div>
    </section>
  )
}

export default NewSection
