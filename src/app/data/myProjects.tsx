import { StaticImageData } from 'next/image'

import StoremodeImg from '../../../public/assets/storemode-2.jpeg'
import RuparupaImg from '../../../public/assets/ruparupa.jpeg'
import InformaImg from '../../../public/assets/informa.jpeg'
import MaimaidImg from '../../../public/assets/maimaid.jpeg'
import VcgamersImg from '../../../public/assets/vcgamers.jpeg'
import PortfolioImg from '../../../public/assets/custom-portfolio.jpeg'

export type Project = {
  name: string
  description: string
  tech: string[]
  keyFeatures: string[]
  image: StaticImageData
  live?: {
    web?: string
    playStore?: string
    appStore?: string
  }
  code?: string
}

export const projects: Project[] = [
  {
    name: 'Storemode by Ruparupa',
    description:
      'An internal sales tool used by in-store staff to assist customers purchasing Informa or Ruparupa products.',
    tech: ['React Native', 'TypeScript'],
    keyFeatures: [
      'In-store product consultation flow',
      'Cross-brand catalog browsing (Informa & Ruparupa)',
      'Staff-assisted checkout',
    ],
    image: StoremodeImg,
    live: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.ruparupa.storemode.android&hl=id',
      appStore:
        'https://apps.apple.com/id/app/storemode-by-ruparupa/id1526000239',
    },
  },
  {
    name: 'Ruparupa',
    description: 'Multi-brand e-commerce marketplace for home essentials.',
    tech: [
      'React Native',
      'TypeScript',
      'Payment Gateway Integration',
      'Maps Integration',
      'Firebase',
    ],
    keyFeatures: [
      'Multi-brand product catalog',
      'Integrated payment gateway checkout',
      'Store locator with maps integration',
      'Push notifications via Firebase and MoEngage',
    ],
    image: RuparupaImg,
    live: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.mobileappruparupa&hl=id',
      appStore: 'https://apps.apple.com/id/app/ruparupa/id1324434624',
    },
  },
  {
    name: 'Informa',
    description:
      "Informa's own-brand app, exclusively selling Informa furniture products.",
    tech: [
      'React Native',
      'TypeScript',
      'Payment Gateway Integration',
      'Maps Integration',
      'Firebase',
    ],
    keyFeatures: [
      'Dedicated single-brand shopping experience',
      'Product configurator for furniture options',
      'Wishlist and order tracking',
    ],
    image: InformaImg,
    live: {
      playStore:
        'https://play.google.com/store/apps/details?id=mobi.mobileforce.informa&hl=id',
      appStore: 'http://apps.apple.com/id/app/informa/id1182293866',
    },
  },
  {
    name: 'MaiMaid',
    description:
      'A booking and ordering service for household assistance, built for Android and iOS.',
    tech: ['Flutter', 'Dart'],
    keyFeatures: [
      'Real-time booking and scheduling',
      'Service provider matching',
      'In-app order tracking and history',
    ],
    image: MaimaidImg,
    live: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.maimaid.customer_app&hl=id',
      appStore: 'https://apps.apple.com/id/app/maimaid/id1531870910',
    },
  },
  {
    name: 'VCGamers',
    description: 'A next-generation gaming-focused social commerce platform.',
    tech: ['React Native', 'TypeScript'],
    keyFeatures: [
      'In-game top-up and voucher marketplace',
      'Social feed for gamers',
      'Instant transaction processing',
    ],
    image: VcgamersImg,
    live: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.vcgamers.apps&hl=id',
    },
  },
  {
    name: 'Custom Portfolio Project',
    description:
      'This portfolio itself, a hand-built, editorial-style personal site with scroll-driven motion design. It is built with Next.js, TypeScript, Tailwind CSS, GSAP, and Lenis for smooth scrolling and animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis'],
    keyFeatures: [
      'Smooth-scroll experience powered by Lenis, synced with GSAP ScrollTrigger',
      'Scroll-triggered reveal animations across hero, about, and project sections',
      'Custom cursor ripple interaction and editorial dark theme with orange accents',
      'Fully responsive, App Router-based architecture with reusable animated components',
    ],
    image: PortfolioImg,
    code: 'https://github.com/evanssmiles/portfolio-template',
  },
]
