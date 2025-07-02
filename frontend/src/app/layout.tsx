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
        <div className='bg-muted flex h-screen'>
          <Sidebar />
          <div className='bg-muted flex grow gap-4 py-4 pr-4'>
            <div className='bg-background hidden max-w-[480px] min-w-[300px] flex-[1_1_480px] rounded-lg p-4 md:flex'>
              {children}
            </div>
            <MessageView className='bg-background flex-[1_1_960px] rounded-lg' />
          </div>
        </div>
      </body>
    </html>
  )
}
// minmax(300px,_480px)
