import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`fixed top-0 left-0 z-[100] w-full bg-bc transition-shadow duration-300
  ${shadow ? 'shadow-lg' : ''}`}
    >
      <nav className=' px-6 container  h-[3.5rem] lg:h-[5.5rem] flex items-center justify-between'>
        {/* Logo */}
        <a
          href='#'
          className='flex items-center gap-2 text-fc font-semibold text-lg md:text-xl'
          style={{ fontFamily: 'var(--second-font)' }}
        >
          {/* Icon */}
          <i className='ri-cake-3-line text-2xl'></i>

          {/* Text */}
          <span>Raya Delight</span>
        </a>

        {/* Menu */}
        <div
          className={`fixed lg:static left-0 w-full bg-[var(--body-color)] lg:bg-transparent shadow-lg lg:shadow-none rounded-b-xl lg:rounded-none transition-all duration-300
          ${showMenu ? 'top-0' : '-top-[120%]'}
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
            <li>
              <a
                href='#home'
                className='font-semibold text-[var(--title-color)] hover:text-[var(--first-color)]'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='font-semibold text-[var(--title-color)] hover:text-[var(--first-color)]'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='#menu'
                className='font-semibold text-[var(--title-color)] hover:text-[var(--first-color)]'
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href='#new'
                className='font-semibold text-[var(--title-color)] hover:text-[var(--first-color)]'
              >
                Special
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='font-semibold text-[var(--title-color)] hover:text-[var(--first-color)]'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Toggle Button (Mobile) */}
        <div
          className='w-8 h-8 bg-[var(--first-color)] text-white rounded-lg grid place-items-center text-2xl cursor-pointer lg:hidden'
          onClick={() => setShowMenu(true)}
        >
          <i className='ri-apps-2-line'></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
