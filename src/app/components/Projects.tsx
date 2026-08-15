'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/myProjects'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS_LIMIT = 5

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const visibleProjects = projects.slice(0, PROJECTS_LIMIT)

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
          className="mt-14 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}

          <Link
            href="/all-projects"
            className="project-card group relative flex w-full items-center justify-center gap-4 self-center py-10"
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
