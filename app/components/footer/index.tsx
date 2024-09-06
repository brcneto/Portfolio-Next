import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1">
        Made with <IoMdHeart className=" text-emerald-500" /> by{' '}
        <strong>Gilvan Neto</strong>
      </span>
    </footer>
  )
}
