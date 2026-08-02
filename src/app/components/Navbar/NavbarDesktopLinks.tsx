'use client'

import Link from 'next/link'

type NavbarDesktopLinksProps = {
  textColor: string
  hoverColor: string
}

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

export default function NavbarDesktopLinks({
  textColor,
  hoverColor,
}: NavbarDesktopLinksProps) {
  return (
    <ul className="hidden md:flex">
      {links.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className={`inline-block text-sm font-medium uppercase transition-all duration-300 hover:scale-125 ${
            index === 0 ? 'ml-0' : 'ml-10'
          } ${textColor} ${hoverColor}`}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  )
}
