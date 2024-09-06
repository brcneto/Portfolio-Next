import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência profissional"
        />
        <p className=" text-gray-400 mt-6">
          Em busca de experiências profissionais, atualmente desenvolvendo
          projetos pessoais e expandindo a gama de conhecimento.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  )
}
