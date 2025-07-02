import { cn } from '@/lib/utils'
import React from 'react'

type props = {
  className?: string
}

export default function MessageView({ className }: props) {
  return <div className={cn('h-full p-4', className)}>MessageView</div>
}
