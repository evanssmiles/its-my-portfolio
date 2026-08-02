import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AboutImg from '../../../public/assets/about-me-park-bench.png'
import aboutMe from '../data/aboutMe'

export default function About() {
  return (
    <div
      id="about"
      className="relative flex w-full scroll-mt-20 items-center overflow-hidden px-2 py-6 md:min-h-screen md:px-8 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 md:mx-0 md:grid-cols-3">
        {/* Mobile Only */}
        {/* <div className="relative mx-auto mb-6 md:hidden">
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
        </div> */}

        <div className="col-span-2 md:max-w-[650px]">
          <p className="py-2 text-xl tracking-widest text-[#5651e5] uppercase">
            About
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-1 text-gray-600">
            I`m a Mobile & Frontend Engineer with {aboutMe.yearsOfExperience}+
            years of experience specializing in React Native, ReactJS, and
            Flutter. Having built products across multiple startups, I`m no
            stranger to fast-paced environments — wearing multiple hats,
            shipping quickly, and solving real user problems.
          </p>

          <p className="py-2 text-gray-600">
            I build high-performance, cross-platform applications with a strong
            focus on clean architecture, scalability, and user experience.
          </p>

          {/* Stat row */}
          <div className="mt-4 grid grid-cols-3 gap-4 border-y border-gray-300 py-4">
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
              <p className="text-3xl font-bold text-[#1f2937]">3</p>
              <p className="text-sm text-gray-500">Core Stacks</p>
            </div>
          </div>

          <Link href={'/#projects'}>
            <button className="mt-6 flex items-center gap-2 px-6 py-3 text-sm transition-transform duration-300 hover:scale-105">
              View My Projects
              <AiOutlineArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop View */}
      <div className="absolute right-[-20px] bottom-0 -z-10 hidden md:right-[20px] md:block">
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
