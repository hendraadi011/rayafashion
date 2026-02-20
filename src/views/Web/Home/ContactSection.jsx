const ContactSection = () => {
  return (
    <section
      id='contact'
      className='bg-fc text-white py-16 relative overflow-hidden'
    >
      <div className='container mx-auto px-4'>
        {/* Title */}
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10'>
          Hubungi Kami & Pesan <br /> Kue Lebaran Terbaik
        </h2>

        <div className='relative grid gap-12 pb-8'>
          {/* Background Text */}
          {/* <h2 className='absolute text-6xl font-medium text-white/10 -top-20 left-0 leading-none'>
            日 <br /> 本
          </h2>
          <h2 className='absolute text-6xl font-medium text-white/10 bottom-10 right-0 leading-none'>
            接 <br /> 触
          </h2> */}

          {/* Contact Info */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10'>
            {/* Social */}
            <div>
              <h3 className='text-sm mb-2 font-semibold'>Pesan via:</h3>
              <div className='flex justify-center gap-4 text-2xl'>
                <a
                  href='#'
                  target='_blank'
                  className='hover:scale-110 transition'
                >
                  <i className='ri-messenger-line'></i>
                </a>

                <a
                  href='https://wa.me/628xxxxxxxxxx'
                  target='_blank'
                  className='hover:scale-110 transition'
                >
                  <i className='ri-whatsapp-line'></i>
                </a>

                <a
                  href='mailto:email@gmail.com'
                  target='_blank'
                  className='hover:scale-110 transition'
                >
                  <i className='ri-mail-line'></i>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className='text-sm mb-2 font-semibold'>Lokasi:</h3>
              <p className='text-sm text-white/90'>
                Surabaya <br />
                Jawa Timur
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className='text-sm mb-2 font-semibold'>Telepon:</h3>
              <p className='text-sm text-white/90'>
                0812-3456-7890 <br />
                0813-9876-5432
              </p>
            </div>

            {/* Schedule */}
            <div>
              <h3 className='text-sm mb-2 font-semibold'>Jam Operasional:</h3>
              <p className='text-sm text-white/90'>
                Senin - Sabtu <br />
                08.00 - 17.00
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className='max-w-md mx-auto text-center space-y-4 relative z-10'>
            <p className='text-sm'>Dapatkan info promo dan menu terbaru</p>

            <form className='flex items-center bg-white/20 border border-white rounded-full p-2'>
              <input
                type='email'
                placeholder='Masukkan email Anda'
                className='flex-1 bg-transparent text-white placeholder-white/80 text-sm px-2 outline-none'
              />
              <button
                type='submit'
                className='bg-white text-fc text-sm px-4 py-2 rounded-full font-semibold hover:scale-105 transition'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
