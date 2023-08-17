import personas from '../personas-fr.json'

import rules from '../co2-model.FR-lang.fr-opti.json'
import Persona from '@/components/Persona'

export default function Personas() {
  return (
    <div className='grid grid-cols-4 gap-4 p-4 flex-wrap'>
      {Object.keys(personas).map((key) => (
        <Persona
          key={key}
          dottedName={key}
          persona={personas[key as keyof typeof personas]}
          rules={rules}
        />
      ))}
    </div>
  )
}
