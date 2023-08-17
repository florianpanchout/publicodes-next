'use client'

import React from 'react'

import { useRule } from '@/publicodes-next'
import MosaicQuestion from './mosaic/MosaicQuestion'

type Props = {
  question: any
  setValue: Function
}

export default function Mosaic({ question }: Props) {
  const { questionsOfMosaic } = useRule(question)

  return (
    <div className='flex gap-4 flex-wrap'>
      {questionsOfMosaic.map((questionOfMosaic) => (
        <MosaicQuestion key={questionOfMosaic} question={questionOfMosaic} />
      ))}
    </div>
  )
}
