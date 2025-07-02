'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useMessageView } from '@/store/message-view'

export default function Chats() {
  const { setIsActive } = useMessageView(state => state)

  return (
    <div>
      <Button
        className='hover:cursor-pointer'
        onClick={() => {
          setIsActive(true)
        }}
      >
        On
      </Button>
    </div>
  )
}
