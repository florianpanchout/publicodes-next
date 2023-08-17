'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useUser } from '@/publicodes-next'

export default function Home() {
  const router = useRouter()

  const {
    simulations,
    currentSimulation,
    setCurrentSimulation,
    initSimulation,
  } = useUser()
  return (
    <div className='m-4'>
      <h1 className='mb-4 text-2xl font-bold'>Publicodes : Next Edition</h1>
      <p className='mb-4'>Librairie React pour Publicodes.</p>

      <div className='flex gap-4 mb-8'>
        {simulations.length ? (
          <Link
            href='/simulateur'
            className='bg-white disabled:bg-gray-500 text-black px-4 py-2 rounded'
          >
            Continuer ma simulation
          </Link>
        ) : null}
        <button
          className='bg-white disabled:bg-gray-500 text-black px-4 py-2 rounded'
          onClick={() => {
            initSimulation()
            router.push('/simulateur')
          }}
        >
          Commencer une nouvelle simulation
        </button>
      </div>
      {simulations.length ? (
        <>
          <p className='mb-2'>
            Vous avez {simulations.length} simulation
            {simulations.length > 1 ? 's' : ''} enregistrées.
          </p>
          <ul className='list-disc mb-4 text-xs pl-4'>
            {simulations.map((simulation: any) => (
              <li
                key={simulation.id}
                className={`mb-2 hover:underline cursor-pointer ${
                  simulation.id === currentSimulation
                    ? 'font-bold'
                    : 'text-gray-500'
                }`}
                onClick={() => setCurrentSimulation(simulation.id)}
              >
                {simulation.persona || simulation.id} (
                {new Date(simulation.date).toLocaleTimeString()})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className='mb-4'>Vous n'avez pas de simulation enregistrée</p>
      )}
    </div>
  )
}
