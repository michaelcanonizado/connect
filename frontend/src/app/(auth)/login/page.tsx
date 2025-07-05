import { TextBody, TextDisplay } from '@/components/text'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Login() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-8'>
      <div className='text-muted-400 flex max-w-[600px] flex-col gap-4'>
        <div className=''>
          <TextDisplay className=''>
            More than Chat - It's <span className='text-primary'>Connect</span>
            ion
          </TextDisplay>
        </div>
        <div className=''>
          <TextBody className='text-[18px] leading-[26px] font-[500] tracking-[-0.01em]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dignissim nulla eget tortor rhoncus porttitor.
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
  )
}

export default Login
