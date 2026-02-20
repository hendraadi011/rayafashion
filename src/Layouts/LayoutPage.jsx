import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../views/Web/Home/Footer'
import useScrollReveal from '../utils/useScrollReveal'

const WHATSAPP_NUMBER = '6285784242714'

const LayoutPage = () => {
  useScrollReveal()
  //   const message = `Halo, saya tertarik untuk pesan kue.

  // Mohon info terkait:

  // * Daftar menu / katalog
  // * Harga
  // * Varian rasa
  // * Estimasi pengerjaan

  // Terima kasih.`

  // const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutPage
