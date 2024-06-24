import React from 'react'
import { PlugsConnected } from '@phosphor-icons/react/dist/ssr'

export default function Page ({ params }: { params: { id: string } }) {
  return (
    <div className='grid divide-y'>
      <section className='flex gap-4 p-4 py-3 items-center'>
        <PlugsConnected className='size-6 text-primary/70' />
        <h4>Connections</h4>
      </section>
      <section className="p-4">
        connection id: {params.id}
      </section>
    </div>
  )
}
