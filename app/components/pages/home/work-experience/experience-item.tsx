'use client'

import Image from 'next/image'
import { TechBadge } from '../../../tech-badge'
import { motion } from 'framer-motion'
import { techBadgeAnimation, fadeUpAnimation } from '@/app/lib/animation'

const techs = ['Windows Server', 'Redes de computadores']

export const ExperienceItem = () => {
  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className=" rounded-full border border-gray-500 p-0.5">
          <h4 className=" text-emerald-500 my-2 mx-1">SEMAS</h4>
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            className=" text-gray-500 hover:text-emerald-500 transition-colors"
            href="https://semas.pe.gov.br/"
          >
            SEMAS-PE
          </a>

          <h4 className="text-gray-300">Estagiário</h4>

          <span className="text-gray-500">dez 2021 - abr 2022 - 4 meses</span>
          <p className="text-gray-400">
            Manter disponibilidade do servidor, gerenciamento de usuários na
            rede interna - Windows Server, manutenção de software/hardware e
            suporte aos colaboradores.
          </p>
        </div>

        <p className=" text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {techs.map((name, index) => (
            <TechBadge
              key={index}
              name={name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
