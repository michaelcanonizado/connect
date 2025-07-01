import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const fontCustom = localFont({
  src: './fontCustom.ttf',
  variable: '--font-custom'
})
