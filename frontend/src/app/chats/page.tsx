'use client'

import React from 'react'
// import { useMessageView } from '@/store/message-view'
import {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxCompose,
  InboxSearch,
  InboxChatHistoryWarning,
  InboxMessageContainer,
  InboxMessage,
  InboxMessageImage,
  InboxMessageTitle,
  InboxMessageSub,
  InboxMessageTextContainer
} from '@/components/inbox'
import { Profile, ProfilePicture, ProfileTitle } from '@/components/profile'

const profiles = [
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Mikey',
    isActive: true,
    lastSeenInMins: 0
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Bella',
    isActive: true,
    lastSeenInMins: 0
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Max',
    isActive: true,
    lastSeenInMins: 0
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Lucy',
    isActive: true,
    lastSeenInMins: 0
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Cooper',
    isActive: false,
    lastSeenInMins: 2
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Daisy',
    isActive: false,
    lastSeenInMins: 5
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Rocky',
    isActive: false,
    lastSeenInMins: 8
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Milo',
    isActive: false,
    lastSeenInMins: 13
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Luna',
    isActive: false,
    lastSeenInMins: 19
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Bailey',
    isActive: false,
    lastSeenInMins: 27
  },
  {
    src: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
    name: 'Charlie',
    isActive: false,
    lastSeenInMins: 30
  }
]

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
      </InboxMessageContainer>
    </Inbox>
  )
}
