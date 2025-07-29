import type { Metadata } from 'next'
import { fontCustom } from '@/styles/font'

import '@/styles/globals.css'
// import KeycloakInitializer from './keycloak-initializer'

export const metadata: Metadata = {
  title: 'Connect',
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
