'use client'

import Image from 'next/image'
import { Link } from '@/app/components/link'
import { TechBadge } from '../../../../tech-badge'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animation'
import { HorizontalDivider } from '@/app/components/divider/horizontal'

const todoTechs = ['ReactJS', 'CSS-Modules', 'LocalStorage']
const scheduleTechs = ['EJS', 'BootStrap', 'Express', 'MongoDB']

export const ProjectCard = () => {
  return (
    <>
      <motion.div
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full flex justify-center items-center"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <TbBrandGithub
            size={210}
            className=" rounded-full border border-gray-600 p-6"
          />
        </motion.div>

        <div className=" flex-1 lg:py-[18px]">
          <motion.h3
            className="flex items-center gap-3 font-medium text-lg text-gray-50"
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            <Image
              width={20}
              height={20}
              alt=""
              src="/images/icons/project-title-icon.svg"
            />
            ToDo List
          </motion.h3>

          <motion.p
            className=" text-gray-400 my-6"
            {...fadeUpAnimation}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            Lista de Tarefas com ReactJS, oferecendo uma experiência interativa
            e agradável aos usuários. A aplicação é estilizada com CSS-Modules
            para uma apresentação visual atrativa. Para garantir a preservação
            das tarefas, implementei o armazenamento dos dados no LocalStorage
            do navegador, assegurando que as informações não sejam perdidas.
          </motion.p>

          <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
            {todoTechs.map((name, index) => (
              <TechBadge
                key={index}
                name={name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
              />
            ))}
          </div>

          <Link href="https://github.com/brcneto/ToDo-List-ReactJS">
            Ver repositório
            <HiArrowNarrowRight />
          </Link>
        </div>
      </motion.div>
      <HorizontalDivider className="my-16" />

      <motion.div
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full flex justify-center items-center"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <TbBrandGithub
            size={210}
            className=" rounded-full border border-gray-600 p-6"
          />
        </motion.div>

        <div className=" flex-1 lg:py-[18px]">
          <motion.h3
            className="flex items-center gap-3 font-medium text-lg text-gray-50"
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            <Image
              width={20}
              height={20}
              alt=""
              src="/images/icons/project-title-icon.svg"
            />
            Schedule
          </motion.h3>

          <motion.p
            className=" text-gray-400 my-6"
            {...fadeUpAnimation}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            um aplicativo de agenda com login seguro, seguindo o padrão MVC para
            integração do frontend e backend. Implementei um banco de dados não
            relacional, garantindo flexibilidade na estrutura. Para segurança,
            adicionei um sistema de login com sessões e utilizei flash messages
            para notificações e integrei tokens CSRF para proteção adicional.. O
            uso da linguagem de modelagem EJS permitiu a criação de páginas
            dinâmicas.
          </motion.p>

          <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
            {scheduleTechs.map((name, index) => (
              <TechBadge
                key={index}
                name={name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
              />
            ))}
          </div>

          <Link href="https://github.com/brcneto/agenda">
            Ver repositório
            <HiArrowNarrowRight />
          </Link>
        </div>
      </motion.div>
      <HorizontalDivider className="my-16" />
    </>
  )
}
