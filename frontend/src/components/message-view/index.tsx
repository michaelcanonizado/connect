'use client'

import { cn } from '@/lib/utils'
// import { useMessageView } from '@/store/message-view'
import {
  MessageViewProfileActiveStatus,
  MessageViewHeader,
  MessageViewProfileTextContainer,
  MessageViewProfileTitle,
  MessageViewProfileContainer,
  MessageViewActionsContainer,
  MessageViewActionsConversationInformation,
  MessageViewActionsVoiceCall,
  MessageViewActionsVideoCall,
  MessageViewStartingBanner,
  MessageViewStartingBannerProfileContainer,
  MessageViewStartingBannerWarningContainer,
  MessageViewStartingBannerProfileTitle,
  MessageViewStartingBannerWarningTitle,
  MessageViewStartingBannerWarningSub,
  MessageViewChatContainer,
  MessageViewChatActionsContainer,
  MessageViewChatActionsMore,
  MessageViewChatActionsFile,
  MessageViewChatActionsInput,
  MessageViewChatActionsLike,
  MessageViewChatPill,
  MessageViewProfilePicture,
  MessageViewProfileBadgeActive,
  MessageViewStartingBannerProfilePicture,
  MessageViewStartingBannerProfileBadgeActive
} from './message-view'

type Props = {
  className?: string
}

function Header() {
  return (
    <MessageViewHeader>
      <MessageViewProfileContainer>
        <MessageViewProfilePicture
          src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
          name='Stego Mike'
        >
          <MessageViewProfileBadgeActive />
        </MessageViewProfilePicture>

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
  )
}

function StartingBanner() {
  return (
    <MessageViewStartingBanner>
      <MessageViewStartingBannerProfileContainer>
        <MessageViewStartingBannerProfilePicture
          className=''
          src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
          name='Stego Mike'
        >
          <MessageViewStartingBannerProfileBadgeActive />
        </MessageViewStartingBannerProfilePicture>

        <MessageViewStartingBannerProfileTitle>
          Mic Mic
        </MessageViewStartingBannerProfileTitle>
      </MessageViewStartingBannerProfileContainer>

      <MessageViewStartingBannerWarningContainer>
        <MessageViewStartingBannerWarningTitle>
          End-to-end encrypted
        </MessageViewStartingBannerWarningTitle>
        <MessageViewStartingBannerWarningSub>
          Messages and calls are SOON to be end-to-end encrypted. Only people in
          this chat can read, listen to, or share them.{' '}
          <span className='text-primary font-semibold hover:cursor-pointer hover:underline'>
            Learn More
          </span>
        </MessageViewStartingBannerWarningSub>
      </MessageViewStartingBannerWarningContainer>
    </MessageViewStartingBanner>
  )
}

function Chats() {
  return (
    <>
      <MessageViewChatPill variant='secondary'>
        Lorem ipsum dolor sit amet, consectetur
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        adipiscing elit, sed do eiusmod
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        tempor incididunt?
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </MessageViewChatPill>

      <MessageViewChatPill variant='primary'>
        eu fugiat nulla pariatur.
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        Excepteur sint occaecat cupidatat non proident
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>Ok?</MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        pellentesque sem placerat.
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </MessageViewChatPill>

      <MessageViewChatPill variant='primary'>
        Lorem ipsum dolor sit amet, consectetur
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        adipiscing elit, sed do eiusmod
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        tempor incididunt?
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </MessageViewChatPill>

      <MessageViewChatPill variant='secondary'>
        eu fugiat nulla pariatur.
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        Excepteur sint occaecat cupidatat non proident
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>Ok?</MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        pellentesque sem placerat.
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </MessageViewChatPill>

      <MessageViewChatPill variant='secondary'>
        Lorem ipsum dolor sit amet, consectetur
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        adipiscing elit, sed do eiusmod
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        tempor incididunt?
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </MessageViewChatPill>

      <MessageViewChatPill variant='primary'>
        eu fugiat nulla pariatur.
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        Excepteur sint occaecat cupidatat non proident
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>Ok?</MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        pellentesque sem placerat.
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </MessageViewChatPill>

      <MessageViewChatPill variant='primary'>
        Lorem ipsum dolor sit amet, consectetur
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        adipiscing elit, sed do eiusmod
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        tempor incididunt?
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        eu fugiat nulla pariatur.
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>
        Excepteur sint occaecat cupidatat non proident
      </MessageViewChatPill>
      <MessageViewChatPill variant='secondary'>Ok?</MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        pellentesque sem placerat.
      </MessageViewChatPill>
      <MessageViewChatPill variant='primary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </MessageViewChatPill>
    </>
  )
}

export default function MessageView({ className }: Props) {
  // const { isActive, setIsActive } = useMessageView(state => state)

  return (
    <div className={cn('flex grow flex-col', className)}>
      <Header />
      <MessageViewChatContainer>
        <StartingBanner />
        {/* Chats will be injected here */}
        <Chats />
      </MessageViewChatContainer>
      <MessageViewChatActionsContainer>
        <MessageViewChatActionsMore />
        <MessageViewChatActionsFile />
        <MessageViewChatActionsInput />
        <MessageViewChatActionsLike />
      </MessageViewChatActionsContainer>
    </div>
  )
}
