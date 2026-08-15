import { StaticImageData } from 'next/image'

import StoremodeImg from '../../../public/assets/storemode-2.jpeg'
import RuparupaImg from '../../../public/assets/ruparupa.jpeg'
import InformaImg from '../../../public/assets/informa.jpeg'
import MaimaidImg from '../../../public/assets/maimaid.jpeg'
import VcgamersImg from '../../../public/assets/vcgamers.jpeg'

type Project = {
  name: string
  description: string
  tech: string[]
  image: StaticImageData
}

export const projects: Project[] = [
  {
    name: 'Storemode by Ruparupa',
    description:
      'An internal sales tool used by in-store staff to assist customers purchasing Informa or Ruparupa products.',
    tech: ['React Native', 'TypeScript'],
    image: StoremodeImg,
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
    image: RuparupaImg,
  },
  {
    name: 'Informa',
    description:
      "Informa's own-brand app, exclusively selling Informa furniture products.",
    tech: ['React Native', 'TypeScript'],
    image: InformaImg,
  },
  {
    name: 'MaiMaid',
    description:
      'A booking and ordering service for household assistance, built for Android and iOS.',
    tech: ['Flutter', 'Dart'],
    image: MaimaidImg,
  },
  {
    name: 'VCGamers',
    description: 'A next-generation gaming-focused social commerce platform.',
    tech: ['React Native', 'TypeScript'],
    image: VcgamersImg,
  },
]
