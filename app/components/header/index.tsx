'use client';

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projetos',
    href: '/projects'
  }
]

export const Header = () => {
  return (
    <header className=" absolute top-0 w-full z-10  h-24 flex items-center justify-center">
      <div className="container flex justify-between">
        <Link href='/'>
          <Image
            width={58}
            height={49}
            src='/images/logo.svg'
            alt="Logo GB Dev"
          />
        </Link>

        <nav className=" flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}