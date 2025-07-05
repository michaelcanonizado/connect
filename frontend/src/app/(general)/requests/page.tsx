import React from 'react'
import {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxMessageContainer,
  InboxMessage,
  InboxMessageImage,
  InboxMessageTitle,
  InboxMessageSub,
  InboxMessageTextContainer,
  InboxTabs,
  InboxTabsContent,
  InboxTabsList,
  InboxTabsTrigger
} from '@/components/inbox'

const Message1 = function () {
  return (
    <InboxMessage>
      <InboxMessageImage
        src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
        name='Jake'
        isActive={true}
        lastSeenInMins={0}
      />
      <InboxMessageTextContainer>
        <InboxMessageTitle>Stego Mike</InboxMessageTitle>
        <InboxMessageSub>Stego sent a photo.•1h</InboxMessageSub>
      </InboxMessageTextContainer>
    </InboxMessage>
  )
}
const Message2 = function () {
  return (
    <InboxMessage>
      <InboxMessageImage
        src='https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D'
        name='Stego Mike'
        isActive={true}
        lastSeenInMins={0}
      />
      <InboxMessageTextContainer>
        <InboxMessageTitle>Stego Mike</InboxMessageTitle>
        <InboxMessageSub>Stego sent a photo.•1h</InboxMessageSub>
      </InboxMessageTextContainer>
    </InboxMessage>
  )
}

export default function Requests() {
  return (
    <Inbox>
      <InboxHeader>
        <InboxTitle>Requests</InboxTitle>
      </InboxHeader>
      <InboxTabs defaultValue='youMayKnow' className='h-full'>
        <InboxTabsList>
          <InboxTabsTrigger value='youMayKnow'>You may know</InboxTabsTrigger>
          <InboxTabsTrigger value='spam'>Spam</InboxTabsTrigger>
        </InboxTabsList>
        <InboxTabsContent value='youMayKnow' className='grow'>
          <InboxMessageContainer>
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
            <Message1 />
          </InboxMessageContainer>
        </InboxTabsContent>
        <InboxTabsContent value='spam' className='grow'>
          <InboxMessageContainer>
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
            <Message2 />
          </InboxMessageContainer>
        </InboxTabsContent>
      </InboxTabs>
    </Inbox>
  )
}
