'use client'

import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'], weight: ['700'] })

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }

  const [shadow, setShadow] = useState(false)
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
    return () => window.removeEventListener('scroll', handleShadow)
  }, [])

  const textColor = shadow ? 'text-[#1f2937]' : 'text-white'
  const hoverColor = 'hover:text-[#ff6b4a]'

  return (
    <div
      className={
        shadow
          ? 'fixed z-[100] h-20 w-full bg-[#ecf0f3] shadow-xl duration-300 ease-in-out'
          : 'fixed z-[100] h-20 w-full duration-300 ease-in-out'
      }
    >
      <div className="relative flex h-full w-full items-center justify-between px-4 sm:px-6 md:w-[62%] md:px-10 lg:w-[64%] lg:px-16">
        <Link
          href="/#home"
          className={`${caveat.className} text-3xl font-bold transition-colors duration-300 ${textColor}`}
        >
          Naufal Hendrawan
        </Link>

        <ul className="hidden md:flex">
          <Link
            href="/#home"
            className={`ml-10 inline-block text-sm font-medium uppercase transition-all duration-300 first:ml-0 hover:scale-125 ${textColor} ${hoverColor}`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className={`ml-10 inline-block text-sm font-medium uppercase transition-all duration-300 hover:scale-125 ${textColor} ${hoverColor}`}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className={`ml-10 inline-block text-sm font-medium uppercase transition-all duration-300 hover:scale-125 ${textColor} ${hoverColor}`}
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className={`ml-10 inline-block text-sm font-medium uppercase transition-all duration-300 hover:scale-125 ${textColor} ${hoverColor}`}
          >
            Contact
          </Link>
        </ul>

        <button
          type="button"
          aria-label="Open menu"
          onClick={handleNav}
          className="relative z-[110] cursor-pointer touch-manipulation md:hidden"
        >
          <AiOutlineMenu
            size={25}
            className={`transition-colors duration-300 ${textColor} ${hoverColor}`}
          />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={
          nav
            ? 'fixed inset-0 z-[90] bg-black/70 md:hidden'
            : 'pointer-events-none fixed inset-0 z-[90] opacity-0 md:hidden'
        }
        onClick={handleNav}
      />

      {/* Drawer */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 z-[95] h-screen w-[75%] translate-x-0 bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:hidden md:w-[45%]'
            : 'pointer-events-none fixed top-0 left-0 z-[95] h-screen w-[75%] -translate-x-full bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:hidden md:w-[45%]'
        }
      >
        <div>
          <div className="flex w-full items-center justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={handleNav}
              className="cursor-pointer touch-manipulation rounded-full p-3 shadow-lg shadow-gray-400 transition-colors duration-300 hover:text-[#ff6b4a]"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] py-4 text-[#1f2937] md:w-[85%]">
              Let`s Turn Ideas Into Reality
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <ul className="uppercase">
            <Link href={'/#home'}>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm font-medium text-[#1f2937] uppercase transition-colors duration-300 hover:text-[#ff6b4a]"
              >
                Home
              </li>
            </Link>
            <Link href={'/#about'}>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm font-medium text-[#1f2937] uppercase transition-colors duration-300 hover:text-[#ff6b4a]"
              >
                About
              </li>
            </Link>
            <Link href={'/#projects'}>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm font-medium text-[#1f2937] uppercase transition-colors duration-300 hover:text-[#ff6b4a]"
              >
                Projects
              </li>
            </Link>
            <Link href={'/#contact'}>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm font-medium text-[#1f2937] uppercase transition-colors duration-300 hover:text-[#ff6b4a]"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
