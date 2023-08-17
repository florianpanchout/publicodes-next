'use client'

import React from 'react'

import { useRule } from '@/publicodes-next'
type Props = {
  question: string
  setValue: Function
}

export default function ChoicesInput({ question, setValue }: Props) {
  const { value, isMissing, choices } = useRule(question)

  return (
    <div className='flex gap-4'>
      {choices &&
        choices.map((choice: any) => (
          <label key={choice.value} className='p-4 border border-white rounded'>
            {choice.label}
            <input
              type='radio'
              name={question}
              value={choice.value}
              checked={
                isMissing
                  ? false
                  : value === choice.value.substr(1, choice.value.length - 2) ||
                    (!value && choice.value === 'non') ||
                    (value && choice.value === 'oui')
              }
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </label>
        ))}
    </div>
  )
}
