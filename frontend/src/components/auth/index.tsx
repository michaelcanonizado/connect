'use client'

import React from 'react'
import { TextBody } from '../text'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useKeycloak } from '@/store/keycloak'

type Props = {
  children: React.ReactNode
  className?: string
}

export function LoginButton({ className, children }: Props) {
  const { login } = useKeycloak(state => state)

  return (
    <Button
      className={cn(
        'border-primary h-min w-min px-[60px] py-[8px] hover:cursor-pointer',
        className
      )}
      onClick={login}
    >
      <TextBody>{children}</TextBody>
    </Button>
  )
}
