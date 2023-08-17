'use client'

import React from 'react'

import { useRule } from '@/publicodes-next'
import MosaicChoicesInput from './mosaicQuestion/MosaicChoicesInput'
import MosaicNumberInput from './mosaicQuestion/MosaicNumberInput'

type Props = {
  question: string
}

export default function Question({ question }: Props) {
  const { type, label } = useRule(question)

  return (
    <div className='p-4 mb-4 border border-white rounded'>
      <div className='mb-4 text-sm'>{label}</div>
      {type === 'number' && <MosaicNumberInput question={question} />}
      {type === 'choices' && <MosaicChoicesInput question={question} />}
    </div>
  )
}
