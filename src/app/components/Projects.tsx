'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/myProjects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
    ).fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.3'
    )

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card')
      const inners = cardsRef.current.querySelectorAll('.project-card-inner')

      tl.fromTo(
        cards,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          clearProps: 'transform',
        },
        '-=0.3'
      ).fromTo(
        inners,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          clearProps: 'transform',
        },
        '<'
      )
    }

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="relative flex w-full scroll-mt-20 items-center overflow-hidden px-[20px] py-20 md:min-h-screen md:px-8 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1560px]">
        <p
          ref={eyebrowRef}
          className="py-2 text-sm font-semibold tracking-[0.2em] text-[#ff6b4a] uppercase"
        >
          Projects
        </p>

        <h2
          ref={headingRef}
          className="max-w-[700px] py-2 text-4xl leading-[1.1] font-bold text-[#1f2937] sm:text-5xl md:text-6xl"
        >
          A few projects I`ve helped build.
        </h2>

        <div
          ref={cardsRef}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card group relative overflow-hidden rounded-2xl shadow-xl shadow-black/10 transition-transform duration-500 ease-out hover:[transform:perspective(1000px)_rotateY(-10deg)]"
            >
              <div className="project-card-inner relative h-full w-full">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/projects"
            className="project-card group relative flex w-full items-center justify-center gap-4 py-10"
          >
            <div className="relative flex items-center">
              <span className="absolute left-0 h-16 w-16 rounded-full bg-gray-200 transition-colors duration-300" />
              <p className="relative z-10 pl-9 text-sm font-semibold tracking-[0.2em] text-[#1f2937] uppercase group-hover:text-[#ff6b4a]">
                View More Projects
              </p>
              <span className="relative z-10 ml-3 text-xl font-light text-[#1f2937]">
                +
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
