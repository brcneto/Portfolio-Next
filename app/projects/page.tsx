import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/project-list";

export const metadata = {
  title: 'Projetos',
  description: 'Projetos, Gilvan Neto, Portfólios'
}

export default function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  )
}