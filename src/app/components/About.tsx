import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutImg from '../../../public/assets/about.jpg'
import aboutMe from '../data/aboutMe'

export default function About() {
  return (
    <div id="about" className="flex w-full items-center p-2 py-16 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="py-4 text-xl tracking-widest text-[#5651e5] uppercase">
            About
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-2 text-gray-600">
            I`m a Mobile & Frontend Engineer with {aboutMe.yearsOfExperience}+
            years of experience specializing in React Native, ReactJS, and
            Flutter. Having built products across multiple startups, I`m no
            stranger to fast-paced environments where wearing multiple hats,
            shipping quickly, and solving real user problems are part of the
            job. I build high-performance, cross-platform applications using
            TypeScript and JavaScript, with a strong focus on clean
            architecture, scalability, and user experience.
          </p>

          <Link href={'/#projects'}>
            <p className="cursor-pointer py-2 text-gray-600 underline">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        {/* <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={AboutImg} alt={''} className={'rounded-xl'} />
        </div> */}
      </div>
    </div>
  )
}
