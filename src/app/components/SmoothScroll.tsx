'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_KEY = 'scrollY'

export default function SmoothScroll() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      )
    }

    const savedY = sessionStorage.getItem(SCROLL_KEY)
    const restoreY = savedY ? parseInt(savedY, 10) : 0

    window.scrollTo(0, restoreY)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync Lenis's internal position to match the restored position
    lenis.scrollTo(restoreY, { immediate: true })

    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      sessionStorage.setItem(SCROLL_KEY, String(scroll))
      ScrollTrigger.update()
    })
    // Use GSAP own ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    window.addEventListener('load', () => ScrollTrigger.refresh())

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return

      const path = href.slice(0, hashIndex)
      if (path && path !== '/' && path !== window.location.pathname) return

      const hash = href.slice(hashIndex)
      const target = document.querySelector(hash) as HTMLElement | null
      if (!target) return

      e.preventDefault()

      const NAVBAR_HEIGHT = 0
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT

      lenis.scrollTo(targetPosition, { duration: 1.2 })
    }

    // Capture phase (the `true` argument) — ensures this handler runs
    // BEFORE Next.js's own <Link> click handling, so our preventDefault()
    // always wins the race instead of Next's default same-page hash
    // scroll potentially overriding our offset-aware scroll afterward.
    document.addEventListener('click', handleAnchorClick, true)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      document.removeEventListener('click', handleAnchorClick, true)
    }
  }, [])

  return null
}
