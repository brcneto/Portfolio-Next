'use client'

import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript
} from "react-icons/tb";

import { motion } from "framer-motion";

const knowsledges = [
  {
    icon: <TbBrandJavascript />,
    name: 'JavaScript',
    startDate: '2021-06-01'
  },
  {
    icon: <TbBrandHtml5 />,
    name: 'HTML',
    startDate: '2021-01-01'
  },
  {
    icon: <TbBrandCss3 />,
    name: 'CSS',
    startDate: '2021-01-01'
  },
  {
    icon: <TbBrandReact />,
    name: 'React',
    startDate: '2022-01-01'
  },
  {
    icon: <TbBrandBootstrap />,
    name: 'BootStrap',
    startDate: '2022-06-01'
  },
  {
    icon: <TbBrandTypescript />,
    name: 'TypeScript',
    startDate: '2023-01-01'
  },
  {
    icon: <TbBrandNextjs />,
    name: 'NextJS',
    startDate: '2023-01-01'
  },
  {
    icon: <TbBrandTailwind />,
    name: 'Tailwind',
    startDate: '2023-03-01'
  },
]

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="conhecimentos " />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {knowsledges.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >

            <KnownTech tech={{
              icon: tech.icon,
              name: tech.name,
              startDate: tech.startDate
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}