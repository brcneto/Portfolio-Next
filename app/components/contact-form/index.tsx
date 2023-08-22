'use client'

import { SectionTitle } from "../section-title"
import { Button } from "../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { useForm } from "react-hook-form"

import axios from "axios"
import { toast } from "react-hot-toast"
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animation"

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset();
    } catch {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section
      className=" py-16 px-6 2xl:py-32 flex items-center justify-center bg-gray-950"
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >

          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg px-4 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg px-4 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className=" resize-none w-full h-[138px] bg-gray-800 rounded-lg px-4 py-2 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
            {...register('message')}
          />

          <Button className=" w-max mx-auto mt-6 shadow-button" disabled={isSubmitting}>
            Enviar mensagem
            <HiArrowNarrowRight />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}