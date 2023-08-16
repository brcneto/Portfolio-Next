import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
  return (
    <section className=" w-full h-[450px] lg:h-[600px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className=" text-center items-center [&>h3]:text-4xl"
      />

      <div className=" flex flex-col items-center justify-between">
        <p className=" text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab optio ducimus laborum aperiam voluptate iusto rerum ut quaerat placeat! Lorem ipsum dolor sit amet.
        </p>
        <Link href='/'>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}