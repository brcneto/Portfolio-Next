'use client'

import { SectionTitle } from "../section-title"
import { Button } from "../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { useForm } from "react-hook-form"

export const ContactForm = () => {
  const { } = useForm()

  return (
    <section className=" py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form className="mt-12 w-full flex flex-col gap-4">
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg px-4 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg px-4 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            placeholder="Mensagem"
            className=" resize-none w-full h-[138px] bg-gray-800 rounded-lg px-4 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
          />

          <Button className=" w-max mx-auto mt-6 shadow-button">
            Enviar mensagem
            <HiArrowNarrowRight />
          </Button>
        </form>
      </div>
    </section>
  )
}