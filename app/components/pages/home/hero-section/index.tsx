import Image from "next/image"
import { TechBadge } from "../../tech-badge"
import { Button } from "@/app/components/button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'http://github.com.br/brcneto',
    icon: <TbBrandGithub />
  },
  {
    url: 'https://linkedin.com/in/gilvan-neto-desenvolvedor/',
    icon: <TbBrandLinkedin />
  },
  {
    url: '/',
    icon: <TbBrandWhatsapp />
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] lg:h-[650px] 2xl:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 py-36 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[538px]">
          <p className="font-mono text-emerald-400">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gilvan Neto</h2>

          <p className=" text-gray-400 my-6 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci nesciunt dicta ratione voluptatem dolorem dignissimos sapiente voluptatum excepturi iusto!</p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>

          <div className=" mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
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
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>


        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.jpeg"
          alt="Foto de perfil"
          className="w-[300px] h-[300px] lg:w-[390px] 2xl:w-[420px] lg:h-[375px] 2xl:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}