'use client'

import React from 'react'
import { useEffect } from 'react'
import { useMessageView } from '@/store/message-view'
import { cn } from '@/lib/utils'
import MessageView from '@/components/message-view'
import Sidebar from '@/components/sidebar'

type props = {
  className?: string
  children: React.ReactNode
}

export default function LayoutManager({ className, children }: props) {
  const { isActive: isMessageViewActive, setIsActive } = useMessageView(
    state => state
  )

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement)

    const fontSize = parseFloat(styles.fontSize)
    const breakpointInRem = styles.getPropertyValue('--breakpoint-md').trim()
    const breakpointInPx = parseFloat(breakpointInRem) * fontSize

    const checkIsMediumScreen = () => {
      const isMedium = window.innerWidth > breakpointInPx

      if (isMedium) {
        setIsActive(true)
      }
    }

    checkIsMediumScreen()

    window.addEventListener('resize', checkIsMediumScreen)
    return () => window.removeEventListener('resize', checkIsMediumScreen)
  }, [])

  return (
    <div className={cn('bg-muted flex h-screen', className)}>
      <Sidebar />
      <div className='bg-muted flex grow gap-4 py-4 pr-4'>
        <div
          className={cn(
            'bg-background min-w-[300px] flex-[1_1_480px] rounded-lg p-4 md:flex md:max-w-[480px]',
            isMessageViewActive ? 'hidden' : ''
          )}
        >
          {children}
        </div>
        <MessageView
          className={cn(
            'bg-background custom:bg-red-500 flex-[1_1_960px] rounded-lg',
            isMessageViewActive ? '' : 'hidden'
          )}
        />
      </div>
    </div>
  )
}
