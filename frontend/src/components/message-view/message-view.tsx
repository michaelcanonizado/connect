import React from 'react'
import { TextBody, TextSub } from '../text'
import { cn } from '@/lib/utils'
import { ProfilePicture, ProfilePictureProps } from '../profile'
import { Ellipsis, Phone, Video } from 'lucide-react'

type Props = {
  className?: string
  children?: React.ReactNode
}

function MessageViewHeader({ className, children }: Props) {
  return (
    <div className={cn('flex flex-row justify-between border-b', className)}>
      {children}
    </div>
  )
}
function MessageViewProfileContainer({ className, children }: Props) {
  return (
    <div className={cn('flex flex-row justify-start gap-[12px]', className)}>
      {children}
    </div>
  )
}
function MessageViewProfilePicture({
  className,
  src,
  name,
  isActive,
  lastSeenInMins
}: Props & ProfilePictureProps) {
  return (
    <div className={cn('w-min', className)}>
      <ProfilePicture
        className='size-[36px]'
        src={src}
        name={name}
        isActive={isActive}
        lastSeenInMins={lastSeenInMins}
      />
    </div>
  )
}
function MessageViewProfileTextContainer({ className, children }: Props) {
  return (
    <div className={cn('flex flex-col items-start justify-center', className)}>
      {children}
    </div>
  )
}
function MessageViewProfileTitle({ className, children }: Props) {
  return <TextBody className={cn('', className)}>{children}</TextBody>
}
function MessageViewProfileActiveStatus({ className, children }: Props) {
  return <TextSub className={cn('', className)}>{children}</TextSub>
}

function MessageViewActionsContainer({ className, children }: Props) {
  return (
    <div className={cn('flex flex-row items-center gap-[10px]', className)}>
      {children}
    </div>
  )
}
function MessageViewActionsVoiceCall({ className }: Props) {
  return (
    <div
      className={cn(
        'h-min rounded-full px-[6px] py-[3px] hover:cursor-pointer',
        className
      )}
    >
      <Phone
        width={20}
        strokeWidth={2.2}
        fill='var(--muted-foreground)'
        stroke='var(--muted-foreground)'
      />
    </div>
  )
}
function MessageViewActionsVideoCall({ className }: Props) {
  return (
    <div
      className={cn(
        'h-min rounded-full px-[6px] py-[3px] hover:cursor-pointer',
        className
      )}
    >
      <Video
        width={20}
        strokeWidth={2.2}
        fill='var(--muted-foreground)'
        stroke='var(--muted-foreground)'
      />
    </div>
  )
}
function MessageViewActionsConversationInformation({ className }: Props) {
  return (
    <div
      className={cn(
        'h-min rounded-full px-[6px] py-[3px] hover:cursor-pointer',
        className
      )}
    >
      <Ellipsis
        width={20}
        strokeWidth={2.2}
        fill='var(--primary)'
        stroke='var(--primary)'
      />
    </div>
  )
}

export {
  MessageViewHeader,
  MessageViewProfileContainer,
  MessageViewProfilePicture,
  MessageViewProfileTextContainer,
  MessageViewProfileActiveStatus,
  MessageViewProfileTitle,
  MessageViewActionsContainer,
  MessageViewActionsConversationInformation,
  MessageViewActionsVoiceCall,
  MessageViewActionsVideoCall
}
