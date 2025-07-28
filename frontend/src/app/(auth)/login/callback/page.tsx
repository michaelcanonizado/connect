'use client'

import { TextHeading } from '@/components/text'
import { useAuthentication } from '@/store/authentication'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Callback() {
  const router = useRouter()
  const provider = useAuthentication(state => state.provider)

  useEffect(() => {
    if (provider?.authenticated) {
      router.push('/chats')
    } else {
      router.push('/')
    }
  })

  return (
    <div className='grid h-screen w-full place-items-center'>
      <div className=''>
        <TextHeading>Loading...</TextHeading>
      </div>
    </div>
  )
}

export default Callback
