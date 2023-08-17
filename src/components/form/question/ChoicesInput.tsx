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
          <button
            key={choice.value}
            className={` px-4 py-2 rounded border border-white ${
              isMissing
                ? false
                : value === choice.value.substr(1, choice.value.length - 2) ||
                  (!value && choice.value === 'non') ||
                  (value && choice.value === 'oui')
                ? 'bg-white text-black'
                : 'bg-black text-white'
            }`}
            onClick={() => setValue(choice.value)}
          >
            {choice.label}
          </button>
        ))}
    </div>
  )
}
