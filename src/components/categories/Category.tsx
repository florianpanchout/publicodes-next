import React, { useMemo } from 'react'

import { useRule } from '@/publicodes-next'
import { useForm } from '@/publicodes-next'

import CategoryQuestion from './category/CategoryQuestion'
type Props = {
  category: any
}

export default function Category({ category }: Props) {
  const { value, title, isMissing } = useRule(
    category === 'transport' ? 'transport . empreinte' : category // FFS
  )
  const { relevantQuestions, currentCategory } = useForm()

  const questionsOfCategory = useMemo(
    () =>
      relevantQuestions.filter((question: string) =>
        question.includes(category)
      ),
    [relevantQuestions, category]
  )

  return (
    <div
      className={`p-4 border border-white ${
        currentCategory === category ? '' : 'border-dotted'
      } rounded`}
    >
      <h3
        className={`${
          currentCategory === category ? 'underline font-bold' : ''
        } ${isMissing ? 'text-gray-400' : ''}`}
      >
        {title} : <strong>{value}</strong>
      </h3>
      <div className='text-xs'>
        {questionsOfCategory.map((question: string) => (
          <CategoryQuestion key={question} question={question} />
        ))}
      </div>
    </div>
  )
}
