import type { Metadata } from 'next'

import { fontCustom } from '@/app/styles/font'

import '@/app/styles/globals.css'

export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: '@michaelcanonizado'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fontCustom.variable} antialiased`}>{children}</body>
    </html>
  )
}
