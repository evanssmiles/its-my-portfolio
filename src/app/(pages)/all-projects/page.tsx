import { projects } from '@/app/data/myProjects'
import ProjectCard from '@/app/components/ProjectCard'

export default function AllProjectsPage() {
  return (
    <div className="w-full px-[20px] pt-40 pb-24 md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1560px]">
        <p className="py-2 text-sm font-semibold tracking-[0.2em] text-[#ff6b4a] uppercase">
          Projects
        </p>

        <h1 className="max-w-[700px] py-2 text-4xl leading-[1.1] font-bold text-[#1f2937] sm:text-5xl md:text-6xl">
          Everything I`ve helped build.
        </h1>

        <div className="mt-14 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
