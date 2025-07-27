'use client'

import { useAuthentication } from '@/store/authentication'
import React from 'react'

function Callback() {
  const provider = useAuthentication(state => state.provider)
  const token = provider?.token

  return (
    <div className='flex flex-col'>
      <div className=''>Callback</div>
      <div className='max-w-[500px]'>
        <textarea className='w-full' value={token}></textarea>
      </div>
    </div>
  )
}

export default Callback
