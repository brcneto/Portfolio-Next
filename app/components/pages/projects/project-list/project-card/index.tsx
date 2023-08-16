import Image from "next/image"

export const ProjectCard = () => {
  return (
    <div className=" rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src=""
          alt=""
          unoptimized
          className=" w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-6">
        <strong className=" font-medium text-gray-50/90 group-hover:text-emerald-500">Nome do Projeto</strong>
        <p className=" mt-2 text-gray-400 line-clamp-4">Breve descrição... Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni ipsa voluptatem debitis quam maxime?</p>
        <span className="text-gray-300 text-sm font-medium mt-auto truncate">tecnologias... NextJS, TailwindCSS, </span>
      </div>
    </div>
  )
}