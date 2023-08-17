'use client'

import React, { useEffect, useState } from 'react'

import { useRule } from '@/publicodes-next'
import Suggestions from './question/Suggestions'
import ChoicesInput from './question/ChoicesInput'
import Mosaic from './question/Mosaic'
import NumberInput from './question/NumberInput'

type Props = {
  question: string
}

export default function Question({ question }: Props) {
  const { type, label, setValue } = useRule(question)

  const [difference, setDifference] = useState(0)

  const setValueAndDifference = async (value: any) => {
    const { oldTotal, newTotal } = await setValue(value)
    setDifference(newTotal - oldTotal)
  }
  useEffect(() => {
    setDifference(0)
  }, [question])

  return (
    <div className='h-[35rem] p-4 mb-4 border border-white rounded'>
      <div className='mb-4'>{label}</div>
      <Suggestions question={question} setValue={setValueAndDifference} />
      {type === 'number' && (
        <NumberInput question={question} setValue={setValueAndDifference} />
      )}
      {type === 'choices' && (
        <ChoicesInput question={question} setValue={setValueAndDifference} />
      )}
      {type === 'mosaic' && (
        <Mosaic question={question} setValue={setValueAndDifference} />
      )}
      <div className={'float-right'}>{difference}&nbsp;kgCO2e</div>
    </div>
  )
}
