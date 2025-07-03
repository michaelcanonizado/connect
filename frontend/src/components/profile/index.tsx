import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TextSub } from '../text'

type Props = {
  className?: string
  children?: React.ReactNode
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
  src,
  name,
  isActive,
  lastSeenInMins
}: Props & {
  src: string
  name: string
  isActive: boolean
  lastSeenInMins: number
}) {
  const maxLastSeenTime = 30
  const showLastSeenBadge = !isActive && lastSeenInMins <= maxLastSeenTime

  return (
    <div className='relative'>
      <div
        className={cn(
          'relative mb-1 size-[60px] overflow-hidden rounded-full',
          className
        )}
      >
        <Image
          className='object-cover object-center'
          src={src}
          alt={`${name}'s profile`}
          fill
        />
      </div>

      {isActive && (
        <div className='border-background box bg-active-200 absolute right-[-3%] bottom-[12%] box-border size-[15px] rounded-full border-2' />
      )}
      {showLastSeenBadge && (
        <div className='border-background box bg-active-100 absolute right-[-10%] bottom-[12%] rounded-full border-2 px-[3px] pb-[2px]'>
          <TextSub className='text-[9px] leading-[12px] font-semibold'>
            {lastSeenInMins}m
          </TextSub>
        </div>
      )}
    </div>
  )
}

function ProfileTitle({ className, children }: Props) {
  return <TextSub className={cn('text-center', className)}>{children}</TextSub>
}

export { Profile, ProfilePicture, ProfileTitle }
