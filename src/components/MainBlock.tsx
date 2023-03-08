import { MultiSelect } from '@mantine/core'
import { useState } from 'preact/compat'

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
]

export default function () {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <MultiSelect
      data={data}
      value={selected}
      onChange={setSelected}
      searchable
      clearable
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
  )
}
