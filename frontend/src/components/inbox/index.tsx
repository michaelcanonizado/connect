'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { TextHeading, TextSub } from '@/components/text'
import { Search, SquarePen } from 'lucide-react'
import { Input } from '../ui/input'
import {
  ProfileBadgeActive,
  ProfileBadgeLastSeen,
  ProfilePicture,
  ProfilePictureProps,
  ProfileSub,
  ProfileTitle
} from '../profile'
import { Card } from '../ui/card'
import { Tabs } from '../ui/tabs'
import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useConversationView } from '@/store/conversation-view'

type Props = {
  className?: string
  children?: React.ReactNode
}

function Inbox({ className, children }: Props) {
  return <div className={cn('flex grow flex-col', className)}>{children}</div>
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
        'bg-muted-100 mt-4 flex gap-[2px] rounded-md p-[14px]',
        className
      )}
    >
      <TextSub>Missing chat history. </TextSub>
      <TextSub className='text-primary font-semibold'>Restore now</TextSub>
    </div>
  )
}

function InboxTabs({
  className,
  children,
  defaultValue
}: Props & { defaultValue: string }) {
  return (
    <div className={cn('flex flex-col', className)}>
      <Tabs defaultValue={defaultValue}>{children}</Tabs>
    </div>
  )
}

function InboxTabsList({ className, children }: Props) {
  return (
    <TabsList className={cn('flex rounded-full pt-[10px]', className)}>
      {children}
    </TabsList>
  )
}
function InboxTabsTrigger({
  className,
  children,
  value
}: Props & { value: string }) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        'data-[state=active]:bg-muted-200 mt-2 flex-1 rounded-full py-2 hover:cursor-pointer',
        className
      )}
    >
      {children}
    </TabsTrigger>
  )
}

function InboxTabsContent({
  className,
  children,
  value
}: Props & { value: string }) {
  return (
    <TabsContent value={value} className={cn('', className)}>
      {children}
    </TabsContent>
  )
}

function InboxMessageContainer({ className, children }: Props) {
  return (
    <div className={cn('mt-4 h-full gap-0 overflow-scroll', className)}>
      <div className='h-0'>{children}</div>
    </div>
  )
}

function InboxMessage({ className, children }: Props) {
  const { setIsActive } = useConversationView(state => state)

  return (
    <Card
      className={cn(
        'hover:bg-muted-100 flex w-full flex-row gap-2 p-[10px] pb-[8px] hover:cursor-pointer',
        className
      )}
      onClick={() => {
        setIsActive(true)
      }}
    >
      {children}
    </Card>
  )
}
function InboxMessageProfilePicture({
  className,
  children,
  src,
  name
}: Props & ProfilePictureProps) {
  return (
    <ProfilePicture className={cn('', className)} src={src} name={name}>
      {children}
    </ProfilePicture>
  )
}
function InboxMessageProfileBadgeActive({ className }: Props) {
  return <ProfileBadgeActive className={cn('', className)} />
}
function InboxMessageProfileBadgeLastSeen({ className, children }: Props) {
  return (
    <ProfileBadgeLastSeen className={cn('', className)}>
      {children}
    </ProfileBadgeLastSeen>
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
  return (
    <ProfileTitle className={cn('text-start', className)}>
      {children}
    </ProfileTitle>
  )
}
function InboxMessageSub({ className, children }: Props) {
  return (
    <ProfileSub className={cn('text-start', className)}>{children}</ProfileSub>
  )
}

export {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxCompose,
  InboxSearch,
  InboxChatHistoryWarning,
  InboxTabs,
  InboxTabsList,
  InboxTabsTrigger,
  InboxTabsContent,
  InboxMessageContainer,
  InboxMessage,
  InboxMessageProfilePicture,
  InboxMessageProfileBadgeActive,
  InboxMessageProfileBadgeLastSeen,
  InboxMessageTextContainer,
  InboxMessageTitle,
  InboxMessageSub
}
