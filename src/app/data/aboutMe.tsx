import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiHtml5,
  SiCss,
  SiTailwindcss,
} from 'react-icons/si'

const linkedin = 'https://www.linkedin.com/in/evanssmiles/'
const github = 'https://github.com/evanssmiles'
const email = 'nghifary96@gmail.com'
const name = 'Naufal'
const yearsOfExperience = new Date().getFullYear() - 2021

const languages = [
  { icon: SiJavascript, label: 'JavaScript ES6+' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiDart, label: 'Dart' },
  { icon: SiHtml5, label: 'HTML5' },
  { icon: SiCss, label: 'CSS' },
]

const frameworks = [
  { icon: SiReact, label: 'React Native' },
  { icon: SiReact, label: 'ReactJS' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiFlutter, label: 'Flutter' },
]

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'I craft clean, responsive, and pixel-perfect interfaces using ReactJS and Next.js focused on performance, accessibility, and a seamless user experience.',
  },
  {
    number: '02',
    title: 'Mobile Development',
    description:
      'I build cross-platform mobile apps with React Native and Flutter, delivering native-feeling experiences from a single codebase across iOS and Android.',
  },
  {
    number: '03',
    title: 'Performance & Scalability',
    description:
      'From clean architecture to efficient state management, I make sure every application stays fast, maintainable, and ready to grow with your product.',
  },
]

const aboutMe = {
  linkedin,
  github,
  email,
  name,
  yearsOfExperience,
  languages,
  frameworks,
  services,
}

export default aboutMe
