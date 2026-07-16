'use client'

import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'

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
  }, [])

  return (
    <div
      className={
        shadow
          ? 'fixed z-[100] h-20 w-full bg-[#ecf0f3] shadow-xl duration-300 ease-in-out'
          : 'fixed z-[100] h-20 w-full'
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <Link
              href="/#home"
              className="ml-10 inline-block text-sm uppercase transition-all duration-300 hover:scale-125 hover:text-[#5651e5]"
              scroll={false}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="ml-10 inline-block text-sm uppercase transition-all duration-300 hover:scale-125 hover:text-[#5651e5]"
              scroll={false}
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="ml-10 inline-block text-sm uppercase transition-all duration-300 hover:scale-125 hover:text-[#5651e5]"
              scroll={false}
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="ml-10 inline-block text-sm uppercase transition-all duration-300 hover:scale-125 hover:text-[#5651e5]"
              scroll={false}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="ml-10 inline-block text-sm uppercase transition-all duration-300 hover:scale-125 hover:text-[#5651e5]"
              scroll={false}
            >
              Contact
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'fixed top-0 left-0 h-screen w-full bg-black/70 md:hidden' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed top-0 left-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:hidden md:w-[45%]'
              : 'fixed top-0 left-[-100%] p-10 duration-500 ease-in'
          }
        >
          <div>
            <div className="flex w-full items-center justify-end">
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] py-4 md:w-[85%]">
                Let`s Build Something Amazing Together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href={'/#home'}>
                <li
                  onClick={() => {
                    setNav(false)
                  }}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href={'/#about'}>
                <li
                  onClick={() => {
                    setNav(false)
                  }}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href={'/#skills'}>
                <li
                  onClick={() => {
                    setNav(false)
                  }}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href={'/#projects'}>
                <li
                  onClick={() => {
                    setNav(false)
                  }}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link href={'/#contact'}>
                <li
                  onClick={() => {
                    setNav(false)
                  }}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
