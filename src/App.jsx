import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import RoutesIndex from './routes'

// ===== Brand Dinamis =====
const getBrandName = () => {
  const host = window.location.hostname
  const parts = host.split('.')

  // localhost / IP
  if (host === 'localhost' || /^\d+.\d+.\d+.\d+$/.test(host)) {
    return 'Raya Hijab'
  }

  // domain utama
  if (host === 'rayahijab.com') {
    return 'Raya Hijab'
  }

  // subdomain
  if (parts.length >= 3) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + ' Hijab'
  }

  return 'Raya Hijab'
}

// ===== Helper Meta =====
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
    const ogImage = `${url}/images/og-hijab.jpg`

    // ===== Title (SEO Intent Beli) =====
    document.title = `${brand} | Toko Hijab & Fashion Muslimah Modern`

    // ===== Description =====
    setMetaTag(
      'description',
      `${brand} menyediakan hijab premium, dress muslimah, tunik, dan fashion wanita terbaru. Koleksi modern, nyaman, dan stylish. Promo spesial Ramadhan & Lebaran. Pesan sekarang!`
    )

    // ===== Keywords =====
    setMetaTag(
      'keywords',
      `
      hijab terbaru,
      hijab premium,
      fashion muslimah,
      baju muslim wanita,
      dress muslimah modern,
      tunik wanita,
      outfit lebaran,
      hijab ramadhan,
      toko hijab online,
      ${brand}
      `
    )

    // ===== Robots =====
    setMetaTag('robots', 'index, follow')

    // ===== Open Graph (WA / Facebook) =====
    setOGTag('og:title', `${brand} | Fashion Muslimah Modern & Elegan`)
    setOGTag(
      'og:description',
      `Koleksi hijab dan fashion muslimah terbaru untuk Ramadhan & Lebaran. Stylish, nyaman, dan berkualitas premium.`
    )
    setOGTag('og:image', ogImage)
    setOGTag('og:url', url)
    setOGTag('og:type', 'website')

    // ===== Twitter Card =====
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', `${brand} | Hijab & Fashion Muslimah`)
    setMetaTag(
      'twitter:description',
      `Temukan koleksi hijab dan outfit muslimah terbaru dengan kualitas terbaik.`
    )
    setMetaTag('twitter:image', ogImage)

    // ===== Canonical =====
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
      <Toaster />
      <RoutesIndex />
    </>
  )
}

export default App
