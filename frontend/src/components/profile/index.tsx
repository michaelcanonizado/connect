import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TextBody, TextSub } from '../text'

type Props = {
  className?: string
  children?: React.ReactNode
}

export type ProfilePictureProps = {
  src: string
  name: string
}

function Profile({ className, children }: Props) {
  return (
    <div className={cn('flex flex-col justify-center', className)}>
      {children}
    </div>
  )
}

function ProfilePicture({
  className,
  children,
  src,
  name
}: Props & ProfilePictureProps) {
  return (
    <div className={cn('relative size-[52px]', className)}>
      <div className='relative mb-1 size-full overflow-hidden rounded-full'>
        <Image
          className='object-cover object-center'
          src={src}
          alt={`${name}'s profile`}
          fill
        />
      </div>
      {children}
    </div>
  )
}

function ProfileTitle({ className, children }: Props) {
  return (
    <TextBody className={cn('text-center', className)}>{children}</TextBody>
  )
}
function ProfileSub({ className, children }: Props) {
  return <TextSub className={cn('text-center', className)}>{children}</TextSub>
}

function ProfileBadgeActive({ className }: Props) {
  return (
    <div
      className={cn(
        'border-background box bg-active-200 absolute right-[-8%] bottom-[8%] box-border size-[12px] rounded-full border-2',
        className
      )}
    />
  )
}
function ProfileBadgeLastSeen({ className, children }: Props) {
  return (
    <div
      className={cn(
        'border-background box bg-active-100 absolute right-[-20%] bottom-[12%] rounded-full border-2 px-[3px] pb-[2px]',
        className
      )}
    >
      <TextSub className='text-foreground text-[9px] leading-[12px] font-semibold'>
        {children}
      </TextSub>
    </div>
  )
}

export {
  Profile,
  ProfilePicture,
  ProfileTitle,
  ProfileSub,
  ProfileBadgeActive,
  ProfileBadgeLastSeen
}
