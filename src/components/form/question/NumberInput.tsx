'use client'

import React from 'react'

import { useRule } from '@/publicodes-next'
type Props = {
  question: string
  setValue: Function
}

export default function NumberInput({ question, setValue }: Props) {
  const { unit, value, isMissing } = useRule(question)

  return (
    <div>
      <input
        className='mb-4 bg-black border border-white'
        type='number'
        value={isMissing ? '' : value}
        placeholder={value}
        onChange={(event) => setValue(event.target.value)}
      />
      &nbsp;
      {unit}
    </div>
  )
}
