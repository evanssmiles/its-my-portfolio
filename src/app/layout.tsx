import type { Metadata } from 'next'
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import '@/app/styles/globals.css'
import CursorRipple from './components/CursorRipple'
import SmoothScroll from './components/SmoothScroll'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Naufal Hendrawan — Mobile & Frontend Developer',
  description:
    'Portfolio of Naufal Hendrawan, a Mobile & Frontend Engineer specializing in React Native, ReactJS, Next.js, and Flutter.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <CursorRipple />
        {children}
        <Footer />
      </body>
    </html>
  )
}
