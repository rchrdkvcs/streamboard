import Task from '#tasks/models/task'
import { Transmit } from '@adonisjs/transmit-client'
import { Head } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import StreamCard from '~/components/stream_card'

export default function Stream() {
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
    })

    const taskSubs = transmit.subscription('stream/task')
    void taskSubs.create()

    taskSubs.onMessage(({ task: initialTask }: { task: Task }) => {
      setTask(initialTask)
    })
  }, [])

  return (
    <>
      <Head title="Stream Assets" />

      <main className="w-full h-screen bg-white">{task?.label && <StreamCard task={task} />}</main>
    </>
  )
}
