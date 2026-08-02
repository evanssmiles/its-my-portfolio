'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Caveat } from 'next/font/google'
import NavbarDesktopLinks from './NavbarDesktopLinks'
import NavbarMobileMenu from './NavbarMobileMenu'

const caveat = Caveat({ subsets: ['latin'], weight: ['700'] })

const Navbar = () => {
  const [shadow, setShadow] = useState(false)
  useEffect(() => {
    const NAVBAR_HEIGHT = 80 // matches h-20
    const CHECK_POINT = NAVBAR_HEIGHT / 2 // roughly the navbar's vertical center

    const handleShadow = () => {
      const darkSections = document.querySelectorAll<HTMLElement>(
        '[data-navbar-theme="dark"]'
      )

      let isOverDark = false
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= CHECK_POINT && rect.bottom >= CHECK_POINT) {
          isOverDark = true
        }
      })

      setShadow(!isOverDark)
    }

    window.addEventListener('scroll', handleShadow)
    handleShadow()
    return () => window.removeEventListener('scroll', handleShadow)
  }, [])

  const textColor = shadow ? 'text-[#1f2937]' : 'text-white'
  const hoverColor = 'hover:text-[#ff6b4a]'

  return (
    <div
      className={
        shadow
          ? 'fixed z-[100] h-20 w-full bg-[#ecf0f3] shadow-xl transition-colors duration-300 ease-in-out'
          : 'fixed z-[100] h-20 w-full transition-colors duration-300 ease-in-out'
      }
    >
      <div className="relative flex h-full w-full items-center justify-between px-4 sm:px-6 md:w-[62%] md:px-10 lg:w-[64%] lg:px-16">
        <Link
          href="/#home"
          className={`${caveat.className} text-3xl font-bold transition-colors duration-300 ${textColor}`}
        >
          Naufal Hendrawan
        </Link>

        <NavbarDesktopLinks textColor={textColor} hoverColor={hoverColor} />

        <NavbarMobileMenu shadow={shadow} />
      </div>
    </div>
  )
}

export default Navbar
