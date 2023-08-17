import React from 'react'

import { useRule } from '@/publicodes-next'

type Props = {
  question: string
  setValue: Function
}

export default function Suggestions({ question, setValue }: Props) {
  const { suggestions } = useRule(question)

  return suggestions?.length ? (
    <div className='flex gap-4 mb-4 text-sm'>
      {suggestions.map((suggestion: { [key: string]: string }) => (
        <button
          key={suggestion.label}
          className='bg-white text-black px-4 py-2 rounded'
          onClick={() => setValue(suggestion.value)}
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  ) : null
}
