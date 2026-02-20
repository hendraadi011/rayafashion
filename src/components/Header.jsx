import { MouseParallax } from 'react-just-parallax'

export const Rings = () => {
  return (
    <div className='h-screen bg-slate-50/90 backdrop-blur-sm '>
      {/* GRID (BACKGROUND) */}
      <div className='absolute inset-0 z-0 grid-bg-1 pointer-events-none  max-w-[30rem] md:max-w-5xl mx-auto' />

      <div
        className='absolute inset-0 rotate-180  pointer-events-none  max-w-[30rem] md:max-w-2xl mx-auto h-[40vh]'
        style={{
          background: 'linear-gradient(to top, #FFFFFF, rgba(14, 12, 21, 0))',
        }}
      ></div>

      <div
        className='absolute   left-1/2 w-[80.375rem] h-[100vh] -translate-x-1/2  pointer-events-none'
        style={{
          background: 'linear-gradient(to top, #FFFFFF, rgba(14, 12, 21, 0))',
        }}
      ></div>
    </div>
  )
}

export const HambugerMenu = () => {
  return (
    <div className='absolute inset-0 pointer-events-none lg:hidden'>
      <div className='absolute inset-0 opacity-[1.03]'>
        <img
          className='w-full h-full object-cover'
          width={688}
          height={953}
          alt='Background'
        />
      </div>

      <Rings />
    </div>
  )
}
