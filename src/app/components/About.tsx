'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutMe from '../data/aboutMe'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const languagesRef = useRef<HTMLDivElement>(null)
  const frameworksRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

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
        paragraphsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.35'
      )
      .fromTo(
        languagesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        frameworksRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        statRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.25'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.25'
      )
      .fromTo(
        servicesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative flex w-full scroll-mt-20 items-center overflow-hidden px-[20px] py-20 md:min-h-screen md:px-8 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-14 lg:gap-20 xl:max-w-[1440px] 2xl:max-w-[1560px]">
        {/* Bio skills etc section */}
        <div className="max-w-[560px]">
          <p
            ref={eyebrowRef}
            className="py-2 text-sm font-semibold tracking-[0.2em] text-[#ff6b4a] uppercase"
          >
            About
          </p>

          <h2
            ref={headingRef}
            className="py-2 text-4xl leading-[1.1] font-bold text-[#1f2937] sm:text-5xl md:text-6xl"
          >
            A developer focused on mobile & web.
          </h2>

          <div ref={paragraphsRef}>
            <p className="mt-6 text-gray-600">
              I`m a Mobile & Frontend Engineer with {aboutMe.yearsOfExperience}+
              years of experience specializing in React Native, ReactJS, and
              Flutter. Having built products across multiple startups, I`m no
              stranger to fast-paced environments wearing multiple hats,
              shipping quickly, and solving real user problems.
            </p>

            <p className="mt-3 text-gray-600">
              I build high-performance, cross-platform applications with a
              strong focus on clean architecture, scalability, and user
              experience.
            </p>
          </div>

          {/* Skills Section */}
          <div ref={languagesRef} className="mt-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
              Languages
            </p>
            <div className="flex flex-wrap gap-3">
              {aboutMe.languages.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-[#1f2937] transition-all duration-300 hover:scale-105 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
                >
                  <Icon size={16} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div ref={frameworksRef} className="mt-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
              Frameworks
            </p>
            <div className="flex flex-wrap gap-3">
              {aboutMe.frameworks.map(({ icon: Icon, label }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-[#1f2937] transition-all duration-300 hover:scale-105 hover:border-[#ff6b4a]/50 hover:text-[#ff6b4a]"
                >
                  <Icon size={16} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Stat row */}
          <div
            ref={statRef}
            className="mt-10 grid grid-cols-3 gap-4 border-y border-gray-300 py-4"
          >
            <div>
              <p className="text-3xl font-bold text-[#1f2937]">
                {aboutMe.yearsOfExperience}+
              </p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1f2937]">5+</p>
              <p className="text-sm text-gray-500">Products Contributed To</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1f2937]">4</p>
              <p className="text-sm text-gray-500">Core Stacks</p>
            </div>
          </div>

          <div ref={ctaRef}>
            <Link href={'/#projects'}>
              <button className="mt-6 flex items-center gap-2 px-6 py-3 text-sm transition-transform duration-300 hover:scale-105">
                View My Projects
                <AiOutlineArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div
          ref={servicesRef}
          className="mt-8 rounded-[2.5rem] bg-[#ffff] px-6 pt-14 pb-14 shadow-xl shadow-black/5 sm:px-10 sm:pt-16 md:mt-0 md:pt-16"
        >
          <h3 className="text-3xl font-bold text-[#1f2937] sm:text-4xl">
            I can help you with ...
          </h3>

          <div className="mt-10 flex flex-col gap-10">
            {aboutMe.services.map((service) => (
              <div
                key={service.number}
                className="group border-t border-[#ff6b4a]/20 pt-4 transition-all duration-300"
              >
                <p className="text-xs font-semibold text-[#ff6b4a] transition-transform duration-300 group-hover:translate-x-1">
                  {service.number}
                </p>
                <h4 className="mt-2 text-xl font-bold text-[#1f2937]">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-[#ff6b4a]/20 pt-6 text-sm text-gray-600">
            Have a project in mind?{' '}
            <Link
              href={'/#contact'}
              className="font-semibold text-[#ff6b4a] underline underline-offset-2"
            >
              Let`s talk.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
