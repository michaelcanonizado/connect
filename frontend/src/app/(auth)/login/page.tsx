import { TextHeading } from '@/components/text'
import { Button } from '@/components/ui/button'
import React from 'react'

function SocialLogin({ children }: { children: React.ReactNode }) {
  return (
    <form className=''>
      <Button type='submit' className='w-full hover:cursor-pointer'>
        {children}
      </Button>
    </form>
  )
}

export default function Login() {
  return (
    <div className='flex flex-col'>
      <div className='text-primary mb-4'>
        <TextHeading>Login</TextHeading>
      </div>
      <div className='flex w-[200px] flex-col gap-2'>
        <SocialLogin>Sign in with Google</SocialLogin>
        <SocialLogin>Sign in with Github</SocialLogin>
        <SocialLogin>Sign in with Facebook</SocialLogin>
      </div>
    </div>
  )
}
