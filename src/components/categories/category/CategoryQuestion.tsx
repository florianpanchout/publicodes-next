import React from 'react'

import { useRule } from '@/publicodes-next'
import { useForm } from '@/publicodes-next'

type Props = {
  question: string
}

export default function CategoryQuestion({ question }: Props) {
  const { label, isMissing, displayValue } = useRule(question)

  const { currentQuestion } = useForm()

  const isCurrentQuestion = currentQuestion === question
  return (
    <div
      className={`mb-2 ${isCurrentQuestion ? 'underline' : ''} ${
        isMissing && !isCurrentQuestion ? 'text-gray-600' : ''
      }`}
    >
      <span className='font-bold'>{label}</span>
      <br />({question}) : <strong>{displayValue}</strong>
    </div>
  )
}
