import { cn } from '@/lib/utils'
import React from 'react'
import { TextBody, TextHeading, TextSub } from '@/components/text'
import { Search, SquarePen } from 'lucide-react'
import { Input } from '../ui/input'
import { ProfilePicture, ProfilePictureProps } from '../profile'
import { Card } from '../ui/card'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

type Props = {
  className?: string
  children?: React.ReactNode
}

function Inbox({ className, children }: Props) {
  return (
    <div className={cn('flex grow flex-col overflow-scroll', className)}>
      {children}
    </div>
  )
}

function InboxHeader({ className, children }: Props) {
  return (
    <div className={cn('flex w-full items-center justify-between', className)}>
      {children}
    </div>
  )
}

function InboxTitle({ className, children }: Props) {
  return <TextHeading className={cn('', className)}>{children}</TextHeading>
}

function InboxCompose({ className }: Props) {
  return (
    <div
      className={cn(
        'rounded-full bg-black/5 px-[8px] py-[6px] hover:cursor-pointer',
        className
      )}
    >
      <SquarePen width={20} strokeWidth={2.2} />
    </div>
  )
}

function InboxSearch({ className }: Props) {
  return (
    <div
      className={cn(
        'mt-[13px] flex w-full items-center rounded-full bg-black/5 px-4',
        className
      )}
    >
      <Search width={20} strokeWidth={2.2} className='text-black/60' />
      <Input
        type='text'
        placeholder='Search Connect'
        className='bg-transparent pl-2'
      />
    </div>
  )
}

function InboxChatHistoryWarning({ className }: Props) {
  return (
    <div
      className={cn(
        'bg-muted mt-4 flex gap-[2px] rounded-md p-[14px]',
        className
      )}
    >
      <TextSub>Missing chat history. </TextSub>
      <TextSub className='text-primary font-semibold'>Restore now</TextSub>
    </div>
  )
}

function InboxMessageContainer({ className, children }: Props) {
  return (
    <ScrollArea className='mt-4 grow overflow-hidden'>
      <div className={cn('flex flex-col gap-0', className)}>{children}</div>
      <ScrollBar orientation='vertical' />
    </ScrollArea>
  )
}

function InboxMessage({ className, children }: Props) {
  return (
    <Card
      className={cn(
        'hover:bg-muted flex w-full flex-row gap-2 p-[10px] pb-[8px] hover:cursor-pointer',
        className
      )}
    >
      {children}
    </Card>
  )
}
function InboxMessageImage({
  className,
  src,
  name,
  isActive,
  lastSeenInMins
}: Props & ProfilePictureProps) {
  return (
    <div className={cn('w-min', className)}>
      <ProfilePicture
        className=''
        src={src}
        name={name}
        isActive={isActive}
        lastSeenInMins={lastSeenInMins}
      />
    </div>
  )
}
function InboxMessageTextContainer({ className, children }: Props) {
  return (
    <div className={cn('flex grow flex-col justify-center', className)}>
      {children}
    </div>
  )
}
function InboxMessageTitle({ className, children }: Props) {
  return <TextBody className={cn('', className)}>{children}</TextBody>
}
function InboxMessageSub({ className, children }: Props) {
  return (
    <TextSub className={cn('text-muted-foreground', className)}>
      {children}
    </TextSub>
  )
}

export {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxCompose,
  InboxSearch,
  InboxChatHistoryWarning,
  InboxMessageContainer,
  InboxMessage,
  InboxMessageImage,
  InboxMessageTextContainer,
  InboxMessageTitle,
  InboxMessageSub
}