'use client'

import { cn } from '@/lib/utils'
import { useConversationView } from '@/store/conversation-view'
import {
  ConversationViewProfileActiveStatus,
  ConversationViewHeader,
  ConversationViewProfileTextContainer,
  ConversationViewProfileTitle,
  ConversationViewProfileContainer,
  ConversationViewActionsContainer,
  ConversationViewActionsInformation,
  ConversationViewActionsVoiceCall,
  ConversationViewActionsVideoCall,
  ConversationViewStartingBanner,
  ConversationViewStartingBannerProfileContainer,
  ConversationViewStartingBannerWarningContainer,
  ConversationViewStartingBannerProfileTitle,
  ConversationViewStartingBannerWarningTitle,
  ConversationViewStartingBannerWarningSub,
  ConversationViewChatContainer,
  ConversationViewChatActionsContainer,
  ConversationViewChatActionsMore,
  ConversationViewChatActionsFile,
  ConversationViewChatActionsInput,
  ConversationViewChatActionsLike,
  ConversationViewChatPill,
  ConversationViewProfilePicture,
  ConversationViewProfileBadgeActive,
  ConversationViewStartingBannerProfilePicture,
  ConversationViewStartingBannerProfileBadgeActive,
  ConversationViewProfileBack
} from './conversation-view'

type Props = {
  className?: string
}

function Header() {
  const { setIsActive } = useConversationView(state => state)

  return (
    <ConversationViewHeader>
      <ConversationViewProfileContainer>
        <ConversationViewProfileBack
          className='block md:hidden'
          onClick={() => {
            setIsActive(false)
          }}
        />
        <ConversationViewProfilePicture
          src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
          name='Stego Mike'
        >
          <ConversationViewProfileBadgeActive />
        </ConversationViewProfilePicture>

        <ConversationViewProfileTextContainer>
          <ConversationViewProfileTitle>Mic Mic</ConversationViewProfileTitle>
          <ConversationViewProfileActiveStatus>
            Active 30m ago
          </ConversationViewProfileActiveStatus>
        </ConversationViewProfileTextContainer>
      </ConversationViewProfileContainer>
      <ConversationViewActionsContainer>
        <ConversationViewActionsVoiceCall />
        <ConversationViewActionsVideoCall />
        <ConversationViewActionsInformation />
      </ConversationViewActionsContainer>
    </ConversationViewHeader>
  )
}

function StartingBanner() {
  return (
    <ConversationViewStartingBanner>
      <ConversationViewStartingBannerProfileContainer>
        <ConversationViewStartingBannerProfilePicture
          className=''
          src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
          name='Stego Mike'
        >
          <ConversationViewStartingBannerProfileBadgeActive />
        </ConversationViewStartingBannerProfilePicture>

        <ConversationViewStartingBannerProfileTitle>
          Mic Mic
        </ConversationViewStartingBannerProfileTitle>
      </ConversationViewStartingBannerProfileContainer>

      <ConversationViewStartingBannerWarningContainer>
        <ConversationViewStartingBannerWarningTitle>
          End-to-end encrypted
        </ConversationViewStartingBannerWarningTitle>
        <ConversationViewStartingBannerWarningSub>
          Messages and calls are SOON to be end-to-end encrypted. Only people in
          this chat can read, listen to, or share them.{' '}
          <span className='text-primary font-semibold hover:cursor-pointer hover:underline'>
            Learn More
          </span>
        </ConversationViewStartingBannerWarningSub>
      </ConversationViewStartingBannerWarningContainer>
    </ConversationViewStartingBanner>
  )
}

function Chats() {
  return (
    <>
      <ConversationViewChatPill variant='secondary'>
        Lorem ipsum dolor sit amet, consectetur
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        adipiscing elit, sed do eiusmod
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        tempor incididunt?
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </ConversationViewChatPill>

      <ConversationViewChatPill variant='primary'>
        eu fugiat nulla pariatur.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        Excepteur sint occaecat cupidatat non proident
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>Ok?</ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        pellentesque sem placerat.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </ConversationViewChatPill>

      <ConversationViewChatPill variant='primary'>
        Lorem ipsum dolor sit amet, consectetur
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        adipiscing elit, sed do eiusmod
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        tempor incididunt?
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </ConversationViewChatPill>

      <ConversationViewChatPill variant='secondary'>
        eu fugiat nulla pariatur.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        Excepteur sint occaecat cupidatat non proident
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        Ok?
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        pellentesque sem placerat.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </ConversationViewChatPill>

      <ConversationViewChatPill variant='secondary'>
        Lorem ipsum dolor sit amet, consectetur
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        adipiscing elit, sed do eiusmod
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        tempor incididunt?
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </ConversationViewChatPill>

      <ConversationViewChatPill variant='primary'>
        eu fugiat nulla pariatur.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        Excepteur sint occaecat cupidatat non proident
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>Ok?</ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        pellentesque sem placerat.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </ConversationViewChatPill>

      <ConversationViewChatPill variant='primary'>
        Lorem ipsum dolor sit amet, consectetur
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        adipiscing elit, sed do eiusmod
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        tempor incididunt?
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore!
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        eu fugiat nulla pariatur.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        Excepteur sint occaecat cupidatat non proident
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='secondary'>
        Ok?
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        pellentesque sem placerat.
      </ConversationViewChatPill>
      <ConversationViewChatPill variant='primary'>
        empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
        lacus nec metus bibendum{' '}
      </ConversationViewChatPill>
    </>
  )
}

export default function ConversationView({ className }: Props) {
  return (
    <div className={cn('flex grow flex-col', className)}>
      <Header />
      <ConversationViewChatContainer>
        <StartingBanner />
        {/* Chats will be injected here */}
        <Chats />
      </ConversationViewChatContainer>
      <ConversationViewChatActionsContainer>
        <ConversationViewChatActionsMore />
        <ConversationViewChatActionsFile />
        <ConversationViewChatActionsInput />
        <ConversationViewChatActionsLike />
      </ConversationViewChatActionsContainer>
    </div>
  )
}
