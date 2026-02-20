import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import RoutesIndex from './routes'

const getBrandName = () => {
  const host = window.location.hostname
  const parts = host.split('.')

  // localhost / IP
  if (host === 'localhost' || /^\d+.\d+.\d+.\d+$/.test(host)) {
    return 'Sweet Cake'
  }

  // domain utama
  if (host === 'sweetcake.com') {
    return 'Sweet Cake'
  }

  // subdomain (opsional)
  if (parts.length >= 3) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + ' Cake'
  }

  return 'Sweet Cake'
}

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setOGTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function App() {
  useEffect(() => {
    const brand = getBrandName()
    const url = window.location.origin
    const ogImage = `${url}/images/og-cake.jpg`

    // Title SEO (intent beli)
    document.title = `${brand} | Pesan Kue Ulang Tahun & Custom Cake`

    // Description
    setMetaTag(
      'description',
      `${brand} menyediakan kue ulang tahun, wedding cake, dan custom cake dengan desain cantik dan rasa premium. Pesan mudah via WhatsApp.`
    )

    // Keywords
    setMetaTag(
      'keywords',
      `kue ulang tahun, custom cake, wedding cake, bakery, pesan kue online, dessert box, kue homemade, ${brand}`
    )

    // Open Graph (WA / Facebook)
    setOGTag('og:title', `${brand} | Kue Cantik untuk Momen Spesial`)
    setOGTag(
      'og:description',
      `Homemade cake premium dengan desain custom. Cocok untuk ulang tahun, wedding, dan acara spesial.`
    )
    setOGTag('og:image', ogImage)
    setOGTag('og:url', url)
    setOGTag('og:type', 'website')

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [])

  return (
    <>
      {' '}
      <Toaster /> <RoutesIndex />
    </>
  )
}

export default App
