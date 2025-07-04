'use client'

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
  MessageViewActionsVideoCall,
  MessageViewStartingBanner,
  MessageViewStartingBannerProfileContainer,
  MessageViewStartingBannerWarningContainer,
  MessageViewStartingBannerProfilePicture,
  MessageViewStartingBannerProfileTitle,
  MessageViewStartingBannerWarningTitle,
  MessageViewStartingBannerWarningSub,
  MessageViewChatContainer,
  MessageViewChatActionsContainer,
  MessageViewChatActionsMore,
  MessageViewChatActionsFile,
  MessageViewChatActionsInput,
  MessageViewChatActionsLike
} from './message-view'
import { TextBody } from '../text'

type Props = {
  className?: string
}

function Header() {
  return (
    <MessageViewHeader className='px-[12px] pt-[12px] pb-[8px]'>
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
  )
}

function StartingBanner() {
  return (
    <MessageViewStartingBanner>
      <MessageViewStartingBannerProfileContainer>
        <MessageViewStartingBannerProfilePicture
          src='https://www.wnct.com/wp-content/uploads/sites/99/2022/07/Cat.jpg?w=2560&h=1440&crop=1'
          name='Jake'
          isActive={true}
          lastSeenInMins={0}
        />
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

function TempChatSelf({ msg }: { msg: string }) {
  return (
    <div className='bg-primary w-fit self-end rounded-full px-3 py-2'>
      <TextBody className='text-background'>{msg}</TextBody>
    </div>
  )
}
function TempChatOther({ msg }: { msg: string }) {
  return (
    <div className='bg-muted w-fit self-start rounded-full px-3 py-2'>
      <TextBody className='text-foreground'>{msg}</TextBody>
    </div>
  )
}

function Chats() {
  return (
    <>
      <TempChatOther msg={'Lorem ipsum dolor sit amet, consectetur'} />
      <TempChatOther msg={'adipiscing elit, sed do eiusmod'} />
      <TempChatSelf msg={'tempor incididunt?'} />
      <TempChatOther
        msg={
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore!'
        }
      />
      <TempChatSelf msg={'eu fugiat nulla pariatur.'} />
      <TempChatSelf msg={'Excepteur sint occaecat cupidatat non proident'} />
      <TempChatSelf msg={'Ok?'} />
      <TempChatOther msg={'pellentesque sem placerat.'} />
      <TempChatOther
        msg={
          'empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum '
        }
      />

      <TempChatSelf msg={'Lorem ipsum dolor sit amet, consectetur'} />
      <TempChatSelf msg={'adipiscing elit, sed do eiusmod'} />
      <TempChatOther msg={'tempor incididunt?'} />
      <TempChatSelf
        msg={
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore!'
        }
      />
      <TempChatOther msg={'eu fugiat nulla pariatur.'} />
      <TempChatOther msg={'Excepteur sint occaecat cupidatat non proident'} />
      <TempChatOther msg={'Ok?'} />
      <TempChatSelf msg={'pellentesque sem placerat.'} />
      <TempChatSelf
        msg={
          'empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum '
        }
      />

      <TempChatOther msg={'Lorem ipsum dolor sit amet, consectetur'} />
      <TempChatOther msg={'adipiscing elit, sed do eiusmod'} />
      <TempChatSelf msg={'tempor incididunt?'} />
      <TempChatOther
        msg={
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore!'
        }
      />
      <TempChatSelf msg={'eu fugiat nulla pariatur.'} />
      <TempChatSelf msg={'Excepteur sint occaecat cupidatat non proident'} />
      <TempChatSelf msg={'Ok?'} />
      <TempChatOther msg={'pellentesque sem placerat.'} />
      <TempChatOther
        msg={
          'empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum '
        }
      />

      <TempChatSelf msg={'Lorem ipsum dolor sit amet, consectetur'} />
      <TempChatSelf msg={'adipiscing elit, sed do eiusmod'} />
      <TempChatOther msg={'tempor incididunt?'} />
      <TempChatSelf
        msg={
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore!'
        }
      />
      <TempChatOther msg={'eu fugiat nulla pariatur.'} />
      <TempChatOther msg={'Excepteur sint occaecat cupidatat non proident'} />
      <TempChatOther msg={'Ok?'} />
      <TempChatSelf msg={'pellentesque sem placerat.'} />
      <TempChatSelf
        msg={
          'empus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum '
        }
      />
    </>
  )
}

export default function MessageView({ className }: Props) {
  const { isActive, setIsActive } = useMessageView(state => state)

  return (
    <div className={cn('flex grow flex-col', className)}>
      <Header />
      <MessageViewChatContainer>
        <StartingBanner />
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
