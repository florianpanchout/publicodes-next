'use client'

import { useContext } from 'react'

import simulationContext from '../simulationProvider/context'
import { useRule } from '..'
import useNavigation from './useNavigation'

export default function useForm() {
  const {
    categories,
    relevantQuestions,
    remainingQuestions,
    questionsByCategories,
    currentQuestion,
    currentCategory,
    setCurrentQuestion,
    progression,
    progressionByCategory,
  }: any = useContext(simulationContext)

  const { setDefaultAsValue } = useRule(currentQuestion)

  const {
    gotoNextQuestion,
    gotoPrevQuestion,
    noPrevQuestion,
    noNextQuestion,
    noNextQuestionInCategory,
  } = useNavigation({
    relevantQuestions,
    questionsByCategories,
    currentQuestion,
    currentCategory,
    setCurrentQuestion,
    setDefaultAsValue,
  })

  return {
    categories,
    relevantQuestions,
    remainingQuestions,
    currentQuestion,
    gotoNextQuestion,
    gotoPrevQuestion,
    noPrevQuestion,
    noNextQuestion,
    noNextQuestionInCategory,
    currentCategory,
    progression,
    progressionByCategory,
  }
}
