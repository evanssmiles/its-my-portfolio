"use client"

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
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#ecf0f3]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <Link
              href="/#home"
              className="ml-10 text-sm uppercase hover:border-b"
              scroll={false}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="ml-10 text-sm uppercase hover:border-b"
              scroll={false}
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="ml-10 text-sm uppercase hover:border-b"
              scroll={false}
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="ml-10 text-sm uppercase hover:border-b"
              scroll={false}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="ml-10 text-sm uppercase hover:border-b"
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
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className=" flex w-full items-center justify-end">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[85%] py-4">
                Let`s Build Something Amazing Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
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
