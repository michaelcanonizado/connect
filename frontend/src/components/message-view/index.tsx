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

export default function MessageView({ className }: Props) {
  const { isActive, setIsActive } = useMessageView(state => state)

  return (
    <div className={cn('flex grow flex-col', className)}>
      <Header />
      <MessageViewChatContainer>
        <StartingBanner />
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
