import Event from '#events/models/event'
import Task from '#tasks/models/task'
import { Head, Link, router } from '@inertiajs/react'
import { Reorder } from 'framer-motion'
import { useState } from 'react'
import HeaderLayout from '~/components/header_layout'
import Section from '~/components/section'
import TaskCard from '~/components/task_card'
import TaskCreateForm from '~/components/task_create_form'
import TaskSaveBtn from '~/components/task_save_btn'

export default function Show({ event, tasks: initialTasks }: { event: Event; tasks: Task[] }) {
  const [formDisplay, setFormDisplay] = useState(false)
  const [tasks, setTasks] = useState(initialTasks)
  const [modified, setModified] = useState(false)

  function handleReorder(newOrder: Task[]) {
    if (newOrder.length !== tasks.length) {
      return
    }

    if (newOrder === tasks) {
      return
    }

    setTasks(newOrder)
    setModified(true)
  }

  function submitDestroyTask(taskId: string) {
    setTasks((ts) => ts.filter((task) => task.id !== taskId))
    router.delete('/task/destroy', {
      data: { id: taskId },
    })
  }

  return (
    <>
      <Head title={event.title} />

      {formDisplay && <TaskCreateForm setFormDisplay={setFormDisplay} eventId={event.id} />}

      {modified && <TaskSaveBtn tasks={tasks} setModified={setModified} />}

      <HeaderLayout>
        <div className="flex items-center justify-start h-full gap-2">
          <img
            src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
            alt="Logo kick JeanPormanove"
            className="object-cover border-2 rounded-full size-10 border-neutral-800"
          />
          <div className="flex items-center justify-center gap-1">
            <Link
              href="/events"
              className="text-base font-semibold text-neutral-100 hover:underline"
            >
              Événements
            </Link>
            <span className="text-neutral-100">/</span>
            <p className="text-base font-semibold text-neutral-100">{event.title}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="px-3 py-1 font-semibold transition-all duration-150 ease-in-out border rounded-full border-neutral-500 text-neutral-300 hover:bg-neutral-200 hover:text-black"
            onClick={() => setFormDisplay(true)}
          >
            Ajouter une question
          </button>
          <Link
            href={`/gm/${event.id}?page=1`}
            className="px-4 py-2 font-semibold text-black transition-all duration-150 ease-in-out rounded-full bg-[#53fc18] hover:scale-105"
          >
            Démarrer
          </Link>
        </div>
      </HeaderLayout>

      <Section>
        <Reorder.Group
          values={tasks}
          onReorder={handleReorder}
          className="grid items-start justify-start w-full grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit"
        >
          {tasks.map((task) => (
            <Reorder.Item
              key={task.id}
              value={task}
              drag
              className="flex flex-col items-start justify-start w-full h-full p-2"
            >
              <TaskCard task={task} submitDestroyTask={submitDestroyTask} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Section>
    </>
  )
}
