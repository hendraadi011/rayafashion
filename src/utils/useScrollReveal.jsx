import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 300,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      reset: false, // ubah true kalau mau animasi ulang saat scroll
    })

    // ===== HOME =====
    sr.reveal('.home__title', { origin: 'top' })
    sr.reveal('.home__description', { delay: 600, origin: 'top' })
    sr.reveal('.button', {
      delay: 900,
      distance: 0,
      scale: 0,
      origin: 'top',
    })
    sr.reveal('.home__blob', { delay: 900, distance: '100px' })
    sr.reveal('.home__images img', {
      delay: 1200,
      distance: 0,
      interval: 200,
      scale: 0,
    })
    sr.reveal('.home__data img', {
      delay: 1500,
      distance: 0,
      interval: 200,
      scale: 0,
    })
    sr.reveal('.home__text', {
      delay: 2100,
      distance: '120px',
    })

    // ===== ABOUT =====
    sr.reveal('.about__data .section__title')
    sr.reveal('.about__data .section__subtitle', { delay: 600 })
    sr.reveal('.about__description', { delay: 900 })
    sr.reveal('.about__data .button', {
      delay: 1200,
      distance: 0,
      scale: 0,
    })
    sr.reveal('.about__blob', { delay: 1200, origin: 'left' })
    sr.reveal('.about__img', { delay: 1500, origin: 'right' })
    sr.reveal('.about__data img', {
      delay: 1800,
      distance: 0,
      interval: 200,
      scale: 0,
    })
    sr.reveal('.about__text', { delay: 2100 })

    // ===== MENU =====
    sr.reveal('.menu__button', { interval: 100 })
    sr.reveal('.menu__content', { delay: 600 })
    sr.reveal('.menu__text-1', { delay: 900, origin: 'top' })
    sr.reveal('.menu__text-2', { delay: 1200, origin: 'top' })

    // ===== NEW =====
    sr.reveal('.new__data .section__title')
    sr.reveal('.new__data .section__subtitle', { delay: 600 })
    sr.reveal('.new__description', { delay: 900 })
    sr.reveal('.new__blob', { delay: 900, origin: 'right' })
    sr.reveal('.new__images img', {
      delay: 1200,
      distance: 0,
      interval: 200,
      scale: 0,
    })
    sr.reveal('.new__data img', {
      delay: 1500,
      distance: 0,
      interval: 200,
      scale: 0,
    })
    sr.reveal('.new__text-1', { delay: 2100 })
    sr.reveal('.new__text-2', { delay: 2400 })
  }, [])
}

export default useScrollReveal
