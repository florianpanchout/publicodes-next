'use client'

import React from 'react'

import { useRule, useForm } from '@/publicodes-next'

type Props = {
  question: any
}

export default function Form({ question }: Props) {
  const {
    currentCategory,
    progression,
    progressionByCategory,
    gotoPrevQuestion,
    gotoNextQuestion,
    noPrevQuestion,
    noNextQuestion,
    noNextQuestionInCategory,
  } = useForm()
  const { isMissing } = useRule(question)
  return (
    <div className='p-4 mb-4 border border-white rounded'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <button
            className='bg-white disabled:bg-gray-500 text-black px-4 py-2 rounded'
            disabled={noPrevQuestion}
            onClick={gotoPrevQuestion}
          >
            Previous
          </button>
          <button
            className='bg-white disabled:bg-gray-500 text-black px-4 py-2 rounded'
            disabled={noNextQuestion}
            onClick={gotoNextQuestion}
          >
            {isMissing
              ? 'Pass'
              : noNextQuestionInCategory
              ? 'Next category'
              : 'Next question'}
          </button>
        </div>
        <div className='text-right'>
          Total&nbsp;: {Math.round(progression * 10000) / 100}&nbsp;%
          <br />
          Catégorie&nbsp;:{' '}
          {Math.round(progressionByCategory[currentCategory] * 10000) / 100}
          &nbsp;%
        </div>
      </div>
    </div>
  )
}
