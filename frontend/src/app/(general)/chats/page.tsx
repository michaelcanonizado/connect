import React from 'react'
import {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxCompose,
  InboxSearch,
  InboxChatHistoryWarning,
  InboxMessageContainer,
  InboxMessage,
  InboxMessageTitle,
  InboxMessageSub,
  InboxMessageTextContainer,
  InboxMessageProfilePicture,
  InboxMessageProfileBadgeActive
} from '@/components/inbox'

const Message = function () {
  return (
    <InboxMessage>
      <InboxMessageProfilePicture
        src='https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D'
        name='Stego Mike'
      >
        <InboxMessageProfileBadgeActive />
      </InboxMessageProfilePicture>
      <InboxMessageTextContainer>
        <InboxMessageTitle>Stego Mike</InboxMessageTitle>
        <InboxMessageSub>Stego sent a photo.•1h</InboxMessageSub>
      </InboxMessageTextContainer>
    </InboxMessage>
  )
}

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
      <InboxMessageContainer>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </InboxMessageContainer>
    </Inbox>
  )
}
