'use client'

import { ProjectCard } from './project-card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUpAnimation } from '@/app/lib/animation'

const projects = [
  {
    name: 'ToDo List',
    description: `Lista de Tarefas com ReactJS, oferecendo uma experiência interativa e agradável aos
      usuários. A aplicação é estilizada com CSS-Modules para uma apresentação visual atrativa. 
      Para garantir apreservação das tarefas, implementei o armazenamento dos dados no LocalStorage 
      do navegador, assegurando que as informações não sejam perdidas.`,

    techs: 'ReactJS, CSS-Modules, LocalStorage',
    url: 'https://github.com/brcneto/ToDo-List-ReactJS',
  },
  {
    name: 'Schedule',
    description: `um aplicativo de agenda com login seguro, seguindo o padrão MVC para integração do 
    frontend e backend. Implementei um banco de dados não relacional, garantindo flexibilidade na estrutura.
    Para segurança, adicionei um sistema de login com sessões e utilizei flash messages para
    notificações e integrei tokens CSRF para proteção adicional.. O uso da linguagem de modelagem
    EJS permitiu a criação de páginas dinâmicas.`,

    techs: 'EJS, BootStrap, Express, MongoDB',
    url: 'https://github.com/brcneto/agenda',
  },
]

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={project.url} target="_blank">
            <ProjectCard
              name={project.name}
              description={project.description}
              techs={project.techs}
            />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
