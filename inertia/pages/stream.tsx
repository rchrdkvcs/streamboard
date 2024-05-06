import { Transmit } from '@adonisjs/transmit-client'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
interface StreamProps {
  props: {
    qst: any
  }
  task: {
    label: string
    media: string
    answer: string
    answerVisibility: boolean
  }
}

export default function Stream() {
  const [task, setTask] = useState<StreamProps['task']>()

  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
    })

    const taskSubs = transmit.subscription('stream/task')
    void taskSubs.create()

    taskSubs.onMessage(({ qst }: StreamProps['props']) => {
      setTask(qst)
    })
  }, [])

  return (
    <>
      <Head title="Stream Assets" />

      <main className="bg-white size-full">
        {task?.label && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 100 }}
            layout
            className="absolute z-50 flex flex-col gap-2 p-4 overflow-hidden text-white border rounded-lg bg-neutral-950 bottom-4 right-4 w-80 border-neutral-800"
          >
            <h3 className="text-lg font-semibold text-neutral-100">{task?.label}</h3>
            {task?.media && (
              <>
                <motion.img
                  layout
                  src={task?.media}
                  className="object-cover w-full h-auto rounded-lg"
                />
                <img
                  src={task?.media}
                  className="absolute top-0 left-0 object-cover rounded-lg opacity-15 size-full -z-10 blur-xl"
                />
              </>
            )}
            {task.answerVisibility === true && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold text-neutral-200"
              >
                {task.answer}
              </motion.p>
            )}
          </motion.div>
        )}
      </main>
    </>
  )
}
