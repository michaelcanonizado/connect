'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useMessageView } from '@/store/message-view'

type props = {
  className?: string
}

export default function MessageView({ className }: props) {
  const { isActive, setIsActive } = useMessageView(state => state)

  return (
    <div className={cn('flex h-full gap-4 p-4', className)}>
      <div className='block md:hidden'>
        <Button
          className='hover:cursor-pointer'
          onClick={() => {
            setIsActive(false)
          }}
        >
          Back
        </Button>
      </div>
      <h1 className='mb-4 text-lg'>Is Active: {String(isActive)}</h1>
    </div>
  )
}
