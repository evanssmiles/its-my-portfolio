'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutMe from '../data/aboutMe'

gsap.registerPlugin(ScrollTrigger)

const exploreLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

export default function Footer() {
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  const taglineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!isHomePage || !taglineRef.current) return
    if (window.innerWidth >= 768) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        taglineRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: taglineRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [isHomePage])

  return (
    <footer className="w-full bg-[#0a0a0a] px-[20px] py-20 md:px-8 lg:px-16 lg:py-28">
      <div
        data-navbar-theme="dark"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-16 md:grid-cols-2 xl:max-w-[1440px] 2xl:max-w-[1560px]"
      >
        <div className="flex min-h-[380px] flex-col justify-between">
          <div>
            {isHomePage ? (
              <>
                {/* Mobile */}
                <p
                  ref={taglineRef}
                  className="text-1xl mx-auto mt-8 max-w-[280px] text-center font-normal text-white md:hidden"
                >
                  Great products start as ideas. Let`s build the ones worth
                  remembering.
                </p>
                {/* Desktop  */}
                <p className="mt-8 hidden max-w-[280px] text-4xl font-bold text-white md:block">
                  Let`s turn ideas into reality.
                </p>
              </>
            ) : (
              <p className="mt-8 max-w-[280px] text-left text-3xl font-bold text-white md:text-4xl">
                Let`s turn ideas into reality.
              </p>
            )}
          </div>

          {!isHomePage && (
            <div className="flex gap-3">
              <a
                href={aboutMe.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={aboutMe.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
              >
                <FaGithub size={16} />
              </a>
              <Link
                href="/#contact"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
              >
                <FaEnvelope size={16} />
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-16">
          {!isHomePage && (
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                Get In Touch
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={`mailto:${aboutMe.email}`}
                  className="w-fit border-b border-[#ff6b4a]/50 text-[#ff6b4a] transition-colors duration-300 hover:text-white"
                >
                  {aboutMe.email}
                </a>
              </div>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
              Explore
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 transition-colors duration-300 hover:text-[#ff6b4a]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-14 text-sm text-gray-600">
              Based in Bandung, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
