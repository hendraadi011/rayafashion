import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300
      ${shadow ? 'bg-white shadow-lg' : 'bg-transparent'}
      `}
    >
      <nav className='px-6 container h-[3.5rem] lg:h-[5.5rem] flex items-center justify-between'>
        {/* Logo */}
        <a
          href='#'
          className={`flex items-center gap-2 font-semibold text-lg md:text-2xl transition-colors duration-300
          ${shadow ? 'text-black' : 'text-white'}
          `}
          style={{ fontFamily: 'var(--second-font)' }}
        >
          <i className='ri-flower-line text-4xl'></i>
          <span>RayaFashion</span>
        </a>

        {/* Menu */}
        <div
          className={`fixed lg:static left-0 w-full transition-all duration-300
          ${showMenu ? 'top-0' : '-top-[120%]'}
          ${
            shadow
              ? 'bg-white text-black'
              : 'bg-black lg:bg-transparent text-white'
          }
          shadow-lg lg:shadow-none rounded-b-xl lg:rounded-none
          lg:top-0 lg:flex lg:items-center lg:w-auto`}
        >
          {/* Close Button (Mobile) */}
          <div
            className='absolute top-4 right-6 text-2xl cursor-pointer lg:hidden'
            onClick={() => setShowMenu(false)}
          >
            <i className='ri-close-large-line'></i>
          </div>

          {/* Nav List */}
          <ul className='flex flex-col lg:flex-row items-center text-center gap-6 lg:gap-16 py-16 lg:py-0'>
            {['Home', 'About Us', 'produk', 'Special', 'Contact'].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className={`font-semibold transition-colors duration-300
                  ${
                    shadow
                      ? 'text-black hover:text-gray-600'
                      : 'text-white hover:text-neutral-200'
                  }
                  `}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Toggle Button (Mobile) */}
        <div
          className={`w-8 h-8 rounded-lg grid place-items-center text-2xl cursor-pointer lg:hidden transition-colors duration-300
          ${shadow ? 'bg-black text-white' : 'bg-black text-white'}
          `}
          onClick={() => setShowMenu(true)}
        >
          <i className='ri-apps-2-line'></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
