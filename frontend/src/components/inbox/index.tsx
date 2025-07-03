import { cn } from '@/lib/utils'
import React from 'react'
import { TextHeading, TextSub } from '@/components/text'
import { Search, SquarePen } from 'lucide-react'
import { Input } from '../ui/input'

type Props = {
  className?: string
  children?: React.ReactNode
}

function Inbox({ className, children }: Props) {
  return <div className={cn('', className)}>{children}</div>
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
        'mt-[13px] flex w-full items-center overflow-hidden rounded-full bg-black/5 px-4',
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

export {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxCompose,
  InboxSearch,
  InboxChatHistoryWarning,
}
