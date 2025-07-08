'use client'

import React from 'react'
import { useEffect } from 'react'
import { useConversationView } from '@/store/conversation-view'
import { cn } from '@/lib/utils'
import ConversationView from '@/components/conversation-view'
import Sidebar from '@/components/sidebar'
import { Card } from '@/components/ui/card'

type Props = {
  className?: string
  children: React.ReactNode
}

export default function LayoutManager({ className, children }: Props) {
  const { isActive: isConversationViewActive, setIsActive } =
    useConversationView(state => state)

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
  message-view, it sets isConversationViewActive to false hiding it and 
  and showing the inbox. But what if you increase the window size after?
  The message-view will be hidden. So you have to force-set 
  isConversationViewActive to true on larger screen sizes. This is done in 
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
    <div className={cn('flex h-screen', className)}>
      <Sidebar />
      <div className='bg-muted-100 flex grow gap-4 py-4 pr-4'>
        <Card
          className={cn(
            'bg-background min-w-[300px] flex-[1_1_480px] pb-0 md:flex md:max-w-[480px]',
            isConversationViewActive ? 'hidden' : ''
          )}
        >
          {children}
        </Card>
        <Card
          className={cn(
            'bg-background custom:bg-red-500 flex-[1_1_960px] p-0',
            isConversationViewActive ? '' : 'hidden'
          )}
        >
          <ConversationView />
        </Card>
      </div>
    </div>
  )
}
