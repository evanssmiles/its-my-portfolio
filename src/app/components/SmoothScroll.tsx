'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

const SCROLL_KEY = 'scrollY'

export default function SmoothScroll() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // A leftover URL hash (e.g. "#projects" from a nav click) makes
    // the browser auto-jump to that section on every reload,
    // regardless of where you actually scrolled to. Strip it so
    // reload reflects your real last position instead.
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

    // Keep a running record of scroll position so the next reload
    // knows where to restore to
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      sessionStorage.setItem(SCROLL_KEY, String(scroll))
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
