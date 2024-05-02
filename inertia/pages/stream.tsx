import { Transmit } from '@adonisjs/transmit-client'
import { useEffect } from 'react'

export default function Stream() {
  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
    })

    const subscription = transmit.subscription('tasks')
    void subscription.create()

    subscription.onMessage((task) => {
      console.log(task)
    })

    return () => {
      transmit.close()
    }
  }, [])

  return (
    <main className="flex items-start justify-start w-full h-screen">
      <h1>Stream</h1>
    </main>
  )
}
