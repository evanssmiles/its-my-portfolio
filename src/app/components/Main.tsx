import { AiOutlineDownload, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import aboutMe from '@/app/data/aboutMe'

export default function Main() {
  return (
    <div id="home" className="relative w-full overflow-hidden text-center">
      {/* Floating Image Section */}
      <div className="absolute top-1/2 right-[-100px] -z-10 hidden -translate-y-1/2 md:right-[-60px] md:block lg:right-[20px]">
        <div className="absolute inset-0 h-[400px] w-[400px] rounded-full bg-[#5651e5]/20 blur-3xl" />
        <Image
          src="/assets/isometric-nobg.png"
          alt=""
          width={500}
          height={500}
          priority
          className="animate-float relative w-[350px] opacity-80 md:w-[420px] lg:w-[480px]"
        />
      </div>

      {/* Main Section */}
      <div className="mx-auto flex h-screen w-full max-w-[1240px] flex-col items-center justify-center p-2 pt-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
            Let`s Turn Ideas Into Reality
          </p>
          <h1 className="py-4 text-5xl font-bold text-gray-700 sm:text-6xl md:text-7xl">
            Hi, I`m <span className="text-[#5651e5]">{aboutMe.name}</span>
          </h1>
          <h2 className="py-2 text-2xl font-semibold text-gray-600 sm:text-3xl md:text-4xl">
            A Mobile & Frontend Developer
          </h2>
          <p className="m-auto max-w-[90%] py-4 text-gray-600 sm:max-w-[500px]">
            Mobile & Frontend Engineer with {aboutMe.yearsOfExperience}+ years
            of experience specializing in React Native, ReactJS, and Flutter.
          </p>
          <div className="flex justify-center py-4">
            <a href="/resume.pdf" download>
              <button className="flex items-center gap-2 px-6 py-3 text-sm transition-transform duration-300 hover:scale-105">
                <AiOutlineDownload size={16} />
                Download Resume
              </button>
            </a>
          </div>

          {/* Social Media Sections */}
          <div className="item-center m-auto flex max-w-[250px] justify-between py-4">
            <a href={aboutMe.linkedin} target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full p-4 text-gray-700 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105 hover:text-[#5651e5] hover:shadow-[#5651e5]/30">
                <FaLinkedinIn />
              </div>
            </a>
            <a href={aboutMe.github} target="_blank" rel="noreferrer">
              <div className="cursor-pointer rounded-full p-4 text-gray-700 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105 hover:text-[#5651e5] hover:shadow-[#5651e5]/30">
                <FaGithub />
              </div>
            </a>
            <Link href={'/#contact'} scroll={false}>
              <div className="cursor-pointer rounded-full p-4 text-gray-700 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105 hover:text-[#5651e5] hover:shadow-[#5651e5]/30">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
