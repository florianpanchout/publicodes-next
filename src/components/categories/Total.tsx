import React from 'react'

import { useRule } from '@/publicodes-next'

export default function Category() {
  const { value } = useRule('bilan')
  return <div className='text-lg font-bold'>Total : {value}</div>
}
