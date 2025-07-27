'use client'

import { useKeycloak } from '@/store/keycloak'
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function KeycloakInitializer({ children }: Props) {
  const initializeKeycloak = useKeycloak(state => state.initializeKeycloak)

  useEffect(() => {
    initializeKeycloak()
  }, [])

  return <div>{children}</div>
}
