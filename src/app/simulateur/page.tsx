'use client'

import rules from '../co2-model.FR-lang.fr-opti.json'

import { useUser, SimulationProvider } from '@/publicodes-next'
import Categories from '@/components/Categories'
import Form from '@/components/Form'
import { useEffect } from 'react'

export default function Simulateur() {
  const {
    simulations,
    currentSimulation,
    initSimulation,
    updateSituationOfCurrentSimulation,
  } = useUser()

  useEffect(() => {
    if (!currentSimulation) {
      initSimulation()
    }
  }, [initSimulation, currentSimulation])

  return currentSimulation ? (
    <SimulationProvider
      key={currentSimulation}
      rules={rules}
      categoryOrder={[
        'transport',
        'alimentation',
        'logement',
        'divers',
        'services sociétaux',
      ]}
      loader={<div>Loading</div>}
      situation={
        simulations.find(
          (simulation: any) => simulation.id === currentSimulation
        )?.situation || {}
      }
      setSituation={updateSituationOfCurrentSimulation}
    >
      <Form />
      <Categories />
    </SimulationProvider>
  ) : (
    'Initialisation'
  )
}
