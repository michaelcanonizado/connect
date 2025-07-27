'use client'

import { useKeycloak } from '@/store/keycloak'
import React from 'react'

function Callback() {
  const keycloak = useKeycloak(state => state.keycloak)
  const token = keycloak?.token

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
