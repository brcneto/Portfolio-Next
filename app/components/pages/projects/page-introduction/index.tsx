'use client'

import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { motion } from "framer-motion"

export const PageIntroduction = () => {
  return (
    <section className=" w-full h-[450px] lg:h-[600px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className=" text-center items-center [&>h3]:text-4xl"
      />

      <motion.div
        className=" flex flex-col items-center justify-between"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className=" text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui se encontra alguns dos meus Projetos! navegue pelos repositórios e explore os 
          projetos que desenvolvi ao longo da minha carreira.
        </p>
        <Link href='/'>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}