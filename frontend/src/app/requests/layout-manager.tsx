import React from 'react'
import MessageView from '@/components/message-view'
import Sidebar from '@/components/sidebar'
import { cn } from '@/lib/utils'

type props = {
  className?: string
  children: React.ReactNode
}

export default function LayoutManager({ className, children }: props) {
  return (
    <div className={cn('bg-muted flex h-screen', className)}>
      {' '}
      <Sidebar />
      <div className='bg-muted flex grow gap-4 py-4 pr-4'>
        <div className='bg-background hidden max-w-[480px] min-w-[300px] flex-[1_1_480px] rounded-lg p-4 md:flex'>
          {children}
        </div>
        <MessageView className='bg-background flex-[1_1_960px] rounded-lg' />
      </div>
    </div>
  )
}
