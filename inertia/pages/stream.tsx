import { Transmit } from '@adonisjs/transmit-client'
import { useEffect, useState } from 'react'

interface StreamProps {
  props: {
    data: any
    meta: any
  }
  task: {
    label: string
    media: string
    answer: string
  }
}

export default function Stream() {
  const [task, setTask] = useState<StreamProps['task']>()
  const [metas, setMetas] = useState<StreamProps['props']>()

  console.log(metas)

  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
    })

    const subscription = transmit.subscription('currentTask')
    void subscription.create()

    subscription.onMessage(({ data, meta }: StreamProps['props']) => {
      setTask(data)
      setMetas(meta)
    })

    return () => {
      transmit.close()
    }
  }, [])

  return (
    <main className="flex items-start justify-start w-full h-screen">
      <h1>Stream</h1>
      <div>
        <h2>{task?.label}</h2>
        {task?.media && <img src={task.media} />}
        <p>{task?.answer}</p>
      </div>
    </main>
  )
}
