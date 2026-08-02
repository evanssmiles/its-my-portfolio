'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
} from 'react-icons/si'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutImg from '../../../public/assets/about-me-park-bench.png'
import aboutMe from '../data/aboutMe'

gsap.registerPlugin(ScrollTrigger)

const languages = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiDart, label: 'Dart' },
]

const frameworks = [
  { icon: SiReact, label: 'React Native' },
  { icon: SiReact, label: 'ReactJS' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiFlutter, label: 'Flutter' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const languagesRef = useRef<HTMLDivElement>(null)
  const frameworksRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const mobilePhotoRef = useRef<HTMLDivElement>(null)

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
        photoRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.9 },
        '-=0.8'
      )
      .fromTo(
        mobilePhotoRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.6'
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
      className="relative flex w-full scroll-mt-20 items-center overflow-hidden px-2 py-16 md:min-h-screen md:px-8 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 md:mx-0 md:grid-cols-3">
        {/* Mobile only photo */}
        <div ref={mobilePhotoRef} className="relative mx-auto mb-6 md:hidden">
          <Image
            src={AboutImg}
            alt="Naufal"
            priority
            className="mx-auto w-[220px] sm:w-[260px]"
            style={{
              maskImage:
                'radial-gradient(ellipse at center, black 60%, transparent 95%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, black 60%, transparent 95%)',
            }}
          />
        </div>

        <div className="col-span-2 md:max-w-[700px]">
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
            <p className="mt-6 max-w-[560px] text-gray-600">
              I`m a Mobile & Frontend Engineer with {aboutMe.yearsOfExperience}+
              years of experience specializing in React Native, ReactJS, and
              Flutter. Having built products across multiple startups, I`m no
              stranger to fast-paced environments wearing multiple hats,
              shipping quickly, and solving real user problems.
            </p>

            <p className="mt-3 max-w-[560px] text-gray-600">
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
              {languages.map(({ icon: Icon, label }) => (
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
              {frameworks.map(({ icon: Icon, label }, index) => (
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
              <p className="text-3xl font-bold text-[#1f2937]">20+</p>
              <p className="text-sm text-gray-500">Projects Shipped</p>
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
      </div>

      {/* Desktop only photo */}
      <div
        ref={photoRef}
        className="absolute right-[-20px] bottom-0 -z-10 hidden md:right-[20px] md:block"
      >
        <Image
          src={AboutImg}
          alt="Naufal"
          priority
          className="relative w-[520px] duration-300 ease-in hover:scale-105 lg:w-[720px]"
          style={{
            maskImage:
              'radial-gradient(ellipse at center, black 60%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 60%, transparent 95%)',
          }}
        />
      </div>
    </div>
  )
}
