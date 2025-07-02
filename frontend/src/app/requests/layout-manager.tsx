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

  /*
  On small screens the inbox and message-view will toggle between
  one another. The user can click on a message on their inbox which
  switches to message-view. Message-view will then have a back button
  to go back to the inbox so they can view other messages. On larger
  screens the two will be shown together in separate columns.

  The initial changing of two columns to one column is obviously done
  using css breakpoints, and the switching on small screens will be 
  passed through context to dictate what to show on small screens: 
  is the message-view active or not?

  A bug arises from this where if you were to click the back button on
  message-view, it sets isMessageViewActive to false hiding it and 
  and showing the inbox. But what if you increase the window size after?
  The message-view will be hidden. So you have to force-set 
  isMessageViewActive to true on larger screen sizes. This is done in 
  the useEffect() below.
  */
  useEffect(() => {
    /*
    This project uses tailwindcss v4 which no longer uses tailwind.config.ts and removed the resolveCOnfig() function to turn the tailwind config to a
    flat object. So we need to get the computed styles in the browser.
    */
    const styles = getComputedStyle(document.documentElement)

    const fontSize = parseFloat(styles.fontSize)
    const breakpointInRem = styles.getPropertyValue('--breakpoint-md').trim()
    const breakpointInPx = parseFloat(breakpointInRem) * fontSize

    const checkIsMediumScreen = () => {
      const isMedium = window.innerWidth > breakpointInPx

      /* Force show the messages-view on large screens */
      if (isMedium) {
        setIsActive(true)
      }
    }

    /* Initial Check */
    checkIsMediumScreen()

    /* Check every resize */
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
