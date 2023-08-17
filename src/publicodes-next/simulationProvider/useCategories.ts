import { useState, useEffect } from 'react'

type Props = {
  engine: any
  order: string[] | null
}

export default function useCategories({ engine, order }: Props) {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    if (!categories.length) {
      setCategories(
        Object.keys(engine.evaluate('bilan').missingVariables)
          .reduce(
            (accumulator: any, currentValue: string) =>
              accumulator.includes(currentValue.split(' . ')[0])
                ? accumulator
                : [...accumulator, currentValue.split(' . ')[0]],
            []
          )
          .sort((a: string, b: string) =>
            !order ? 0 : order.indexOf(a) > order.indexOf(b) ? 1 : -1
          )
      )
    }
  }, [engine, order, categories])

  return categories
}
