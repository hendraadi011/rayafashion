const Footer = () => {
  return (
    <footer className='py-8 font-a2'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
          {/* Logo */}
          <a href='/' className='text-2xl md:text-3xl font-semibold text-fc'>
            Raya Delight
          </a>

          {/* Social */}
          <div className='flex items-center gap-6 text-2xl'>
            <a
              href='#'
              target='_blank'
              className='text-gray-600 hover:text-fc transition'
            >
              <i className='ri-facebook-circle-line'></i>
            </a>

            <a
              href='#'
              target='_blank'
              className='text-gray-600 hover:text-fc transition'
            >
              <i className='ri-instagram-line'></i>
            </a>

            <a
              href='#'
              target='_blank'
              className='text-gray-600 hover:text-fc transition'
            >
              <i className='ri-twitter-line'></i>
            </a>
          </div>

          {/* Copy */}
          <span className='text-sm text-gray-500'>
            © {new Date().getFullYear()} Kue Lebaran. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
