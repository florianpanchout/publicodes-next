'use client'

import React from 'react'

import { useRule } from '@/publicodes-next'
type Props = {
  question: string
}

export default function MosaicChoicesInput({ question }: Props) {
  const { value, setValue, isMissing, choices } = useRule(question)

  return (
    <div className='flex gap-4'>
      {choices.map((choice: any) => (
        <label key={choice.value} className='p-4 border border-white rounded'>
          <span className='text-sm'>{choice.label}</span>
          <input
            type='radio'
            name={question}
            value={choice.value}
            checked={
              isMissing
                ? false
                : value === choice.value.replaceAll(`'`, '') ||
                  (!value && choice.value === 'non') ||
                  (value && choice.value === 'oui')
            }
            onChange={(e) => {
              setValue(e.currentTarget.value)
            }}
          />
        </label>
      ))}
    </div>
  )
}
