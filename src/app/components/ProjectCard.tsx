'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AiOutlineDown, AiOutlineExport } from 'react-icons/ai'
import { FaGithub, FaGooglePlay, FaApple } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../data/myProjects'

gsap.registerPlugin(ScrollTrigger)

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      tl.fromTo(
        cardRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      ).fromTo(
        innerRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
        },
        '<'
      )
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className="project-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10 transition-transform duration-500 ease-out hover:[transform:perspective(1000px)_rotateY(-10deg)]"
    >
      <div
        ref={innerRef}
        className="project-card-inner relative flex h-full w-full flex-col"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {(project.live?.web ||
            project.live?.playStore ||
            project.live?.appStore ||
            project.code) && (
            <div className="absolute top-4 right-4 z-10 flex items-center gap-3 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
              {project.live?.web && (
                <a
                  href={project.live.web}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View live site"
                  className="flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#ff6b4a]"
                >
                  <AiOutlineExport size={16} />
                  Live
                </a>
              )}
              {project.live?.playStore && (
                <a
                  href={project.live.playStore}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Get it on Google Play"
                  className="text-white transition-colors duration-300 hover:text-[#ff6b4a]"
                >
                  <FaGooglePlay size={15} />
                </a>
              )}
              {project.live?.appStore && (
                <a
                  href={project.live.appStore}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Download on the App Store"
                  className="text-white transition-colors duration-300 hover:text-[#ff6b4a]"
                >
                  <FaApple size={16} />
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View source code"
                  className="flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors duration-300 hover:text-[#ff6b4a]"
                >
                  <FaGithub size={15} />
                  Code
                </a>
              )}
            </div>
          )}

          <div className="absolute right-0 bottom-0 left-0 p-6">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-gray-300">{project.description}</p>
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

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              className="mt-4 flex items-center gap-2 bg-none text-sm font-semibold text-white/90 shadow-none transition-colors duration-300 hover:text-[#ff6b4a]"
            >
              {isOpen ? 'See Less' : 'See More'}
              <AiOutlineDown
                size={12}
                className={`transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Expandable key features — animates to auto-height via
            CSS grid's 0fr -> 1fr trick, no JS height measuring needed */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#ff6b4a] uppercase">
                Key Features
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#ff6b4a]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
