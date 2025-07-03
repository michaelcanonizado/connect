import type { Metadata } from 'next'

import { fontCustom } from '@/styles/font'

import '@/styles/globals.css'
import LayoutManager from './layout-manager'

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
      <body className={`${fontCustom.variable} antialiased`}>
        <LayoutManager>{children}</LayoutManager>
      </body>
    </html>
  )
}
