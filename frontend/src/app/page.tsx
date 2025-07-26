import React from 'react'
import { TextBody, TextDisplay } from '@/components/text'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function GraphicsCard({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'absolute h-[100%] w-[60%] rounded-xl shadow-2xl',
        className
      )}
    />
  )
}

function Graphics() {
  return (
    <div className='relative h-[500px] w-[450px]'>
      <GraphicsCard className='top-[-10%] right-0 bg-blue-300' />
      <GraphicsCard className='bottom-[-10%] left-0 bg-blue-200' />
    </div>
  )
}

export default function Home() {
  return (
    <div className='ppx-8 grid min-h-screen grid-cols-1 grid-rows-2 place-items-center gap-8 pt-8 pb-[100px] lg:grid-cols-2 lg:grid-rows-1'>
      <div className='flex h-full w-full items-center justify-center lg:justify-end'>
        <div className='flex flex-col items-center gap-8'>
          <div className='text-muted-400 flex max-w-[600px] flex-col gap-4'>
            <div className=''>
              <TextDisplay className=''>
                More than Chat - It&apos;s{' '}
                <span className='text-primary'>Connect</span>
                ion
              </TextDisplay>
            </div>
            <div className=''>
              <TextBody className='text-[18px] leading-[26px] font-[500] tracking-[-0.01em]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dignissim nulla eget tortor rhoncus porttitor.
              </TextBody>
            </div>
          </div>
          <div className=''>
            <Button
              variant='outline'
              className='border-primary h-min w-min px-[60px] py-[8px] hover:cursor-pointer'
            >
              <div className='relative size-[24px]'>
                <Image
                  className='object-contain object-center'
                  src='icons/google.svg'
                  alt='Sign in with Google'
                  fill
                />
              </div>
              <TextBody>Sign in with Google</TextBody>
            </Button>
          </div>
        </div>
      </div>
      <div className='flex h-full w-full items-center justify-center lg:justify-start'>
        <Graphics />
      </div>
    </div>
  )
}
