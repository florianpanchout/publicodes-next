'use client'

import React from 'react'

import { useRule } from '@/publicodes-next'
type Props = {
  question: string
}

export default function NumberInput({ question }: Props) {
  const { value, setValue, isMissing } = useRule(question)

  return (
    <input
      className='mb-4 bg-black border border-white'
      type='number'
      value={isMissing ? '' : value}
      placeholder={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
