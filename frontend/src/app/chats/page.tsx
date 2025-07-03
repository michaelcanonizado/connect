'use client'

import React from 'react'
// import { useMessageView } from '@/store/message-view'
import {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxCompose,
  InboxSearch,
  InboxChatHistoryWarning
} from '@/components/inbox'

export default function Chats() {
  // const { setIsActive } = useMessageView(state => state)

  return (
    <Inbox>
      <InboxHeader>
        <InboxTitle>Chats</InboxTitle>
        <InboxCompose />
      </InboxHeader>
      <InboxSearch />
      <InboxChatHistoryWarning />
    </Inbox>
  )
}
