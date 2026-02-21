const ContactSection = () => {
  const phoneNumber = '6285785242714'
  const waLink = `https://wa.me/${phoneNumber}?text=Halo, saya ingin bertanya tentang koleksi hijab`

  return (
    <section id='contact' className='bg-white py-20'>
      <div className='container mx-auto px-6'>
        {/* ===== Title ===== */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black'>
            Hubungi Kami & Order Hijab
          </h2>
          <p className='text-gray-600 mt-4 max-w-xl mx-auto'>
            Konsultasi warna, model, dan ketersediaan produk. Kami siap membantu
            Anda mendapatkan hijab terbaik.
          </p>
        </div>

        {/* ===== CTA WhatsApp ===== */}
        <div className='flex justify-center mb-14'>
          <a
            href={waLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition flex items-center gap-3 shadow-md'
          >
            <i className='ri-whatsapp-line text-2xl'></i>
            Chat WhatsApp Sekarang
          </a>
        </div>

        {/* ===== Contact Cards ===== */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {/* WhatsApp */}
          <div className='bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition'>
            <i className='ri-whatsapp-line text-3xl mb-3 text-black'></i>
            <h3 className='font-semibold mb-1 text-black'>WhatsApp</h3>
            <p className='text-gray-500 text-sm'>+62 857-8524-2714</p>
          </div>

          {/* Instagram */}
          <div className='bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition'>
            <i className='ri-instagram-line text-3xl mb-3 text-black'></i>
            <h3 className='font-semibold mb-1 text-black'>Instagram</h3>
            <p className='text-gray-500 text-sm'>@hijabstore</p>
          </div>

          {/* Location */}
          <div className='bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition'>
            <i className='ri-map-pin-line text-3xl mb-3 text-black'></i>
            <h3 className='font-semibold mb-1 text-black'>Lokasi</h3>
            <p className='text-gray-500 text-sm'>
              Surabaya <br />
              Jawa Timur
            </p>
          </div>

          {/* Schedule */}
          <div className='bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition'>
            <i className='ri-time-line text-3xl mb-3 text-black'></i>
            <h3 className='font-semibold mb-1 text-black'>Jam Operasional</h3>
            <p className='text-gray-500 text-sm'>
              Senin - Sabtu <br />
              08.00 - 21.00
            </p>
          </div>
        </div>

        {/* ===== Promo Ramadhan ===== */}
        <div className='mt-14 text-center bg-black text-white rounded-xl p-6 max-w-2xl mx-auto shadow-md'>
          <p className='text-lg font-semibold'>
            Promo Ramadhan Diskon Hingga 30%
          </p>
          <p className='text-white/80 text-sm mt-2'>
            Berlaku selama bulan Ramadhan • Stok terbatas
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
