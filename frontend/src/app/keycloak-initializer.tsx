'use client'

import { useAuthentication } from '@/store/authentication'
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function KeycloakInitializer({ children }: Props) {
  const initializeProvider = useAuthentication(
    state => state.initializeProvider
  )

  useEffect(() => {
    console.log('Initializing provider on layout...')
    initializeProvider()
  }, [])

  return <div>{children}</div>
}
