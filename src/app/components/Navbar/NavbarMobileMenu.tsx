'use client'

import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

type NavbarMobileMenuProps = {
  shadow: boolean
}

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

export default function NavbarMobileMenu({ shadow }: NavbarMobileMenuProps) {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }

  // While the fullscreen menu is open, the toggle button always sits
  // on top of the white circular overlay, so force dark-on-light
  // regardless of scroll position.
  const circleBg = nav ? 'bg-black' : shadow ? 'bg-black' : 'bg-white'
  const iconColor = nav ? 'text-white' : shadow ? 'text-white' : 'text-black'

  const buttonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!overlayRef.current || !buttonRef.current) return

    const btn = buttonRef.current.getBoundingClientRect()
    const originX = ((btn.left + btn.width / 2) / window.innerWidth) * 100
    const originY = ((btn.top + btn.height / 2) / window.innerHeight) * 100

    const closedClip = `circle(0% at ${originX}% ${originY}%)`
    const openClip = `circle(150% at ${originX}% ${originY}%)`

    if (isFirstRender.current) {
      gsap.set(overlayRef.current, {
        clipPath: closedClip,
        pointerEvents: 'none',
      })
      isFirstRender.current = false
      return
    }

    if (nav) {
      gsap.set(overlayRef.current, { pointerEvents: 'auto' })
      gsap.fromTo(
        overlayRef.current,
        { clipPath: closedClip },
        { clipPath: openClip, duration: 0.9, ease: 'power3.out' }
      )
    } else {
      gsap.to(overlayRef.current, {
        clipPath: closedClip,
        duration: 0.6,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlayRef.current, { pointerEvents: 'none' })
        },
      })
    }
  }, [nav])

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={nav ? 'Close menu' : 'Open menu'}
        onClick={handleNav}
        className={`relative z-[110] flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-none ${circleBg} transition-colors duration-300 md:hidden`}
      >
        {nav ? (
          <AiOutlineClose
            size={18}
            className={`transition-colors duration-300 ${iconColor}`}
          />
        ) : (
          <AiOutlineMenu
            size={18}
            className={`transition-colors duration-300 ${iconColor}`}
          />
        )}
      </button>

      {/* Fullscreen circular-reveal menu overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[95] flex items-center bg-[#ecf0f3] md:hidden"
      >
        <div className="w-full px-8">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-5xl font-bold text-[#1f2937] uppercase transition-colors duration-300 hover:text-[#ff6b4a]"
                >
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>

          <p className="mt-10 text-sm text-gray-500">
            Let`s Turn Ideas Into Reality
          </p>
        </div>
      </div>
    </>
  )
}
