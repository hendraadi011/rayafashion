import About from './About'
import ContactSection from './ContactSection'
import MainPage from './MainPage'
import MenuRamadhan from './MenuRamadhan'
import NewSecction from './NewSecction'

const Index = () => {
  return (
    <div className='overflow-hidden'>
      <MainPage />
      <About />
      <MenuRamadhan />
      <NewSecction />
      <ContactSection />
    </div>
  )
}

export default Index
