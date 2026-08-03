'use client'

import { useEffect, useRef } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutMe from '../data/aboutMe'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const emailRef = useRef<HTMLAnchorElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

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
        emailRef.current,
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

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      id="contact"
      data-navbar-theme="dark"
      className="relative flex w-full scroll-mt-20 items-center overflow-hidden bg-[#0a0a0a] px-[20px] py-24 md:min-h-screen md:px-8 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1240px] text-center xl:max-w-[1440px] 2xl:max-w-[1560px]">
        <p
          ref={eyebrowRef}
          className="text-sm font-semibold tracking-[0.2em] text-[#ff6b4a] uppercase"
        >
          Contact
        </p>

        <h2
          ref={headingRef}
          className="mx-auto mt-4 max-w-[800px] text-4xl leading-[1.1] font-bold text-white sm:text-5xl md:text-6xl"
        >
          Got a project in mind? Let`s talk.
        </h2>

        <a
          ref={emailRef}
          href={`mailto:${aboutMe.email}`}
          className="mt-10 inline-block text-2xl font-semibold text-gray-300 underline decoration-[#ff6b4a]/50 decoration-2 underline-offset-8 transition-colors duration-300 hover:text-[#ff6b4a] sm:text-3xl md:text-4xl"
        >
          {aboutMe.email}
        </a>

        <div ref={socialRef} className="mt-10 flex justify-center gap-3">
          <a
            href={aboutMe.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={aboutMe.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
