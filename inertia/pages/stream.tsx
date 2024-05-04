import { Transmit } from '@adonisjs/transmit-client'
import { useEffect, useState } from 'react'

interface StreamProps {
  props: {
    qst: any
    meta: any
    showAnswer: boolean
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
  const [showAnswer, setShowAnswer] = useState<StreamProps['props']['showAnswer']>()

  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
    })

    const taskSubs = transmit.subscription('stream/task')
    void taskSubs.create()

    taskSubs.onMessage(({ qst, meta }: StreamProps['props']) => {
      setTask(qst)
      setMetas(meta)
    })
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('answerIsVisible')
        setShowAnswer(stored ? JSON.parse(stored) : false)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <main>
      <div className="">
        <h1 className="text-4xl font-bold">{task?.label}</h1>
        <img src={task?.media} className="w-full h-auto mt-4" />
        <p
          className={` text-2xl font-bold text-center mt-4 ${showAnswer === true ? 'block' : 'hidden'}`}
        >
          {task?.answer}
        </p>
      </div>
    </main>
  )
}
