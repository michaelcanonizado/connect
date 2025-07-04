import React from 'react'
import { TextBody, TextHeading, TextSub } from '../text'
import { cn } from '@/lib/utils'
import { ProfilePicture, ProfilePictureProps } from '../profile'
import { Ellipsis, ImagePlus, Phone, Plus, ThumbsUp, Video } from 'lucide-react'
import { Input } from '../ui/input'

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

function MessageViewStartingBanner({ className, children }: Props) {
  return (
    <div
      className={cn('mt-10 mb-4 flex flex-col items-center gap-6', className)}
    >
      {children}
    </div>
  )
}
function MessageViewStartingBannerProfileContainer({
  className,
  children
}: Props) {
  return (
    <div className={cn('flex flex-col items-center gap-[-12px]', className)}>
      {children}
    </div>
  )
}
function MessageViewStartingBannerProfilePicture({
  className,
  src,
  name,
  isActive,
  lastSeenInMins
}: Props & ProfilePictureProps) {
  return (
    <div className={cn('w-min', className)}>
      <ProfilePicture
        className='size-[60px]'
        src={src}
        name={name}
        isActive={isActive}
        lastSeenInMins={lastSeenInMins}
      />
    </div>
  )
}
function MessageViewStartingBannerProfileTitle({ className, children }: Props) {
  return (
    <TextHeading className={cn('text-[17px] font-semibold', className)}>
      {children}
    </TextHeading>
  )
}
function MessageViewStartingBannerWarningContainer({
  className,
  children
}: Props) {
  return (
    <div
      className={cn(
        'bg-muted flex flex-col items-center gap-0 rounded-md px-4 pt-2 pb-3',
        className
      )}
    >
      {children}
    </div>
  )
}
function MessageViewStartingBannerWarningTitle({ className, children }: Props) {
  return (
    <TextSub className={cn('text-foreground font-bold', className)}>
      {children}
    </TextSub>
  )
}
function MessageViewStartingBannerWarningSub({ className, children }: Props) {
  return (
    <TextSub className={cn('text-muted-foreground', className)}>
      {children}
    </TextSub>
  )
}

function MessageViewChatContainer({ className, children }: Props) {
  return (
    <div className={cn('mb-2 grow overflow-y-auto px-4', className)}>
      <div className='flex h-0 flex-col gap-[2px]'>{children}</div>
    </div>
  )
}
function MessageViewChatPill({
  className,
  children,
  variant
}: Props & { variant: 'primary' | 'secondary' }) {
  return (
    <div
      className={cn(
        'w-fit rounded-full px-3 py-2',
        variant == 'primary' && 'bg-primary self-end',
        variant == 'secondary' && 'bg-muted self-start',
        className
      )}
    >
      <TextBody
        className={cn(
          variant == 'primary' && 'text-background',
          variant == 'secondary' && 'text-foreground'
        )}
      >
        {children}
      </TextBody>
    </div>
  )
}

function MessageViewChatActionsContainer({ className, children }: Props) {
  return (
    <div
      className={cn('flex flex-row items-center gap-1 px-4 py-3', className)}
    >
      {children}
    </div>
  )
}
function MessageViewChatActionsInput({ className }: Props) {
  return (
    <div
      className={cn('bg-muted grow overflow-hidden rounded-full', className)}
    >
      <Input placeholder='Aa' type='text' className='py-0' />
    </div>
  )
}
function MessageViewChatActionsMore({ className }: Props) {
  return (
    <div
      className={cn(
        'bg-primary h-min rounded-full px-[5px] hover:cursor-pointer',
        className
      )}
    >
      <Plus
        width={14}
        strokeWidth={3.5}
        fill='var(--background)'
        stroke='var(--background)'
      />
    </div>
  )
}
function MessageViewChatActionsFile({ className }: Props) {
  return (
    <div
      className={cn(
        'hover:bg-muted h-min rounded-full px-[8px] py-[5px] hover:cursor-pointer',
        className
      )}
    >
      <ImagePlus width={20} strokeWidth={2.2} stroke='var(--primary)' />
    </div>
  )
}
function MessageViewChatActionsLike({ className }: Props) {
  return (
    <div
      className={cn(
        'hover:bg-muted h-min rounded-full px-[8px] py-[5px] hover:cursor-pointer',
        className
      )}
    >
      <ThumbsUp
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
  MessageViewActionsVideoCall,
  MessageViewStartingBanner,
  MessageViewStartingBannerProfileContainer,
  MessageViewStartingBannerProfilePicture,
  MessageViewStartingBannerProfileTitle,
  MessageViewStartingBannerWarningContainer,
  MessageViewStartingBannerWarningTitle,
  MessageViewStartingBannerWarningSub,
  MessageViewChatContainer,
  MessageViewChatPill,
  MessageViewChatActionsContainer,
  MessageViewChatActionsInput,
  MessageViewChatActionsMore,
  MessageViewChatActionsFile,
  MessageViewChatActionsLike
}
