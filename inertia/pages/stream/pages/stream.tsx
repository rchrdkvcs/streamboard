import Task from '#tasks/models/task'
import { Transmit } from '@adonisjs/transmit-client'
import { Head } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import Card from '../components/card'

export default function Stream() {
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
    })

    const taskSubs = transmit.subscription('stream/task')
    void taskSubs.create()

    taskSubs.onMessage((data: object) => {
      setTask(data as Task)
    })
  }, [])

  return (
    <>
      <Head title="Stream Assets" />

      {task?.label && <Card task={task} />}
    </>
  )
}
