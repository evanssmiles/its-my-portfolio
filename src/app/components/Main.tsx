'use client'

import { useEffect, useRef } from 'react'
import { AiOutlineDownload, AiOutlineArrowRight } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import aboutMe from '@/app/data/aboutMe'
import HeroImg from '../../../public/assets/hero-photo-nobg.png'

export default function Main() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.35'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        socialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.25'
      )
      .fromTo(
        photoRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.9'
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      id="home"
      data-navbar-theme="dark"
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Right gradient panel — full height, full bleed, sits behind everything */}
      <div className="absolute inset-y-0 right-12 hidden w-full md:block md:w-[38%] lg:w-[32%]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b4a] via-[#e8497a] to-[#5651e5]" />

        {/* Black vignette fading in from the top-left corner */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.65),transparent_45%)]" />

        {/* Soft dark wave/blob shapes for depth, like a layered spiral */}
        <div className="absolute top-[15%] -right-16 h-80 w-80 rounded-full bg-black/25 blur-3xl" />
        <div className="absolute -right-24 bottom-[10%] h-96 w-96 rounded-full bg-[#3a0ca3]/45 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[10%] h-64 w-64 rounded-full bg-black/30 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_55%)]" />

        {/* Soft blend into the black section instead of a hard seam */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Photo — natural proportions, gap below nav, only slight bleed */}
        <div
          ref={photoRef}
          className="absolute top-28 bottom-0 left-[-32%] z-10 w-auto md:top-32 lg:top-36"
        >
          <Image
            src={HeroImg}
            alt={aboutMe.name}
            width={700}
            height={1000}
            priority
            className="h-full w-auto object-contain object-bottom brightness-75 contrast-90 drop-shadow-[0_0_60px_rgba(255,255,255,0.12)] grayscale"
          />
        </div>
      </div>

      {/* Left: text content */}
      <div className="relative mx-auto flex h-full w-full max-w-[1240px] items-center px-4 pt-20 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <p
            ref={eyebrowRef}
            className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase"
          >
            Let`s Turn Ideas Into Reality
          </p>

          <h1
            ref={headingRef}
            className="py-4 text-5xl font-bold text-gray-300 sm:text-6xl md:text-7xl"
          >
            <span className="font-normal">Meet</span>{' '}
            <span className="font-bold text-white">{aboutMe.name}</span>
          </h1>

          <p
            ref={paragraphRef}
            className="mx-auto max-w-[90%] text-gray-500 sm:max-w-[500px] md:mx-0"
          >
            A Mobile & Frontend Developer with {aboutMe.yearsOfExperience}+
            years of experience specializing in React Native, ReactJS, and
            Flutter.
          </p>

          <div
            ref={ctaRef}
            className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <a href="/resume.pdf" download>
              <button className="flex items-center gap-2 rounded-xl bg-[#ff6b4a] bg-none px-6 py-3 text-sm font-semibold text-white uppercase shadow-xl shadow-[#ff6b4a]/20 transition-transform duration-300 hover:scale-105">
                <AiOutlineDownload size={16} />
                Download Resume
              </button>
            </a>

            <Link href={'/#projects'} scroll={false}>
              <span className="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                View Projects
                <AiOutlineArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Social row, replacing "Expertise in" */}
          <div ref={socialRef} className="mt-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
              Connect With Me
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
              <a href={aboutMe.linkedin} target="_blank" rel="noreferrer">
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]">
                  <FaLinkedinIn />
                </div>
              </a>
              <a href={aboutMe.github} target="_blank" rel="noreferrer">
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]">
                  <FaGithub />
                </div>
              </a>
              <Link href={'/#contact'} scroll={false}>
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]">
                  <FaEnvelope />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-left scroll indicator */}
      <div className="absolute bottom-8 left-2 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 md:left-8 md:flex lg:left-16">
        Scroll down to know more
        <span className="animate-bounce">↓</span>
      </div>

      {/* Bottom-right rotating contact badge */}
      <Link
        href={'/#contact'}
        scroll={false}
        className="absolute right-6 bottom-8 hidden h-20 w-20 items-center justify-center md:right-10 md:flex lg:right-20"
      >
        <svg
          viewBox="0 0 100 100"
          className="animate-spin-slow absolute h-full w-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
          </defs>
          <text fontSize="8" letterSpacing="2" fill="white" opacity="0.8">
            <textPath href="#circlePath">CONTACT NOW • CONTACT NOW • </textPath>
          </text>
        </svg>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
          <AiOutlineArrowRight size={18} />
        </div>
      </Link>
    </div>
  )
}
