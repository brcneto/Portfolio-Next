'use client'

import Image from 'next/image'
import { TechBadge } from '../../../tech-badge'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/lib/animation'

const MOCK_CONTACTS = [
  {
    url: 'http://github.com.br/brcneto',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://linkedin.com/in/gilvan-neto-desenvolvedor/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://api.whatsapp.com/send?phone=+5481991881256&text=Ol%C3%A1%21+Gostaria+de+entrar+em+contato+para+falar+sobre+uma+proposta%21%21%21',
    icon: <TbBrandWhatsapp />,
  },
]

const techs = ['TypeScript', 'JavaScript', 'NextJS', 'ReactJS', 'TailwindCSS']

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full h-[650px] 2xl:h-[755px]  bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 py-36 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[538px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gilvan Neto</h2>

          <p className=" text-gray-400 my-6 text-sm sm:text-base">
            Sou desenvolvedor de software voltado para a web, desenvolvo
            Frontend de aplicações utilizando as principais tecnologias do
            mercado, ampliando meu conhecimento e buscando me manter sempre
            atualizado. Estou muito empolgado para trabalhar com você!
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {techs.map((tech, index) => (
              <TechBadge
                name={tech}
                key={index}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>

          <div className=" mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className=" text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={420}
            height={404}
            src="/images/profile-gilvas.jpg"
            alt="Foto de perfil"
            className="w-[300px] h-[300px] lg:w-[375px] 2xl:w-[404px] lg:h-[375px] 2xl:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
