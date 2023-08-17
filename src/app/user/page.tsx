'use client'

import React from 'react'

import { useUser } from '@/publicodes-next'

export default function User() {
  const { user, updateName, updateEmail } = useUser()
  return (
    <div className='p-4 mb-4 border border-white rounded'>
      <label className='block mb-4'>
        Email ({user.email}
        )<br />
        <input
          className='mb-4 bg-black border border-white'
          type='email'
          value={user.email || ''}
          placeholder={'Email'}
          onChange={(event) => updateEmail(event.target.value)}
        />
      </label>
      <label>
        Nom ({user.name}
        )<br />
        <input
          className='mb-4 bg-black border border-white'
          type='text'
          value={user.name || ''}
          placeholder={'name'}
          onChange={(event) => updateName(event.target.value)}
        />
      </label>
    </div>
  )
}
