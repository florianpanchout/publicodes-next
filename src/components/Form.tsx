import React from 'react'

import { useForm } from '@/publicodes-next'
import Question from './form/Question'
import Navigation from './form/Navigation'

export default function Form() {
  const { currentQuestion } = useForm()

  return (
    <div className='p-4 mb-4 border border-white rounded'>
      <Question question={currentQuestion} />
      <Navigation question={currentQuestion} />
    </div>
  )
}
