import type { Metadata } from 'next'

import { fontCustom } from '@/styles/font'

import '@/styles/globals.css'
import Sidebar from '@/components/sidebar'
import MessageView from '@/components/message-view'

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
        <Sidebar />
        {children}
        <MessageView />
      </body>
    </html>
  )
}
