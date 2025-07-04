'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useMessageView } from '@/store/message-view'
import {
  MessageViewProfileActiveStatus,
  MessageViewHeader,
  MessageViewProfileTextContainer,
  MessageViewProfilePicture,
  MessageViewProfileTitle,
  MessageViewProfileContainer,
  MessageViewActionsContainer,
  MessageViewActionsConversationInformation,
  MessageViewActionsVoiceCall,
  MessageViewActionsVideoCall
} from './message-view'

type Props = {
  className?: string
}

export default function MessageView({ className }: Props) {
  const { isActive, setIsActive } = useMessageView(state => state)

  return (
    <div className={cn('flex grow flex-col', className)}>
      <MessageViewHeader className='p-[12px]'>
        <MessageViewProfileContainer>
          <MessageViewProfilePicture
            src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
            name='Jake'
            isActive={true}
            lastSeenInMins={0}
          />
          <MessageViewProfileTextContainer>
            <MessageViewProfileTitle>Mic Mic</MessageViewProfileTitle>
            <MessageViewProfileActiveStatus>
              Active 30m ago
            </MessageViewProfileActiveStatus>
          </MessageViewProfileTextContainer>
        </MessageViewProfileContainer>
        <MessageViewActionsContainer>
          <MessageViewActionsVoiceCall />
          <MessageViewActionsVideoCall />
          <MessageViewActionsConversationInformation />
        </MessageViewActionsContainer>
      </MessageViewHeader>
    </div>
  )
}
