import Event from '#events/models/event'
import Task from '#tasks/models/task'
import { Head, router } from '@inertiajs/react'
import { Reorder } from 'framer-motion'
import { useState } from 'react'
import HeaderLayout from '~/components/header_layout'
import {
  CheckIcone,
  MaterialSymbolsAddRounded,
  MaterialSymbolsArrowLeftAltRounded,
  MaterialSymbolsEditOutlineRounded,
  MaterialSymbolsFastForwardOutlineRounded,
  StreamlineLiveVideo,
} from '~/components/icones'
import NavBtn from '~/components/nav_btn'
import NavLink from '~/components/nav_link'
import Section from '~/components/section'
import TaskCard from '~/components/task_card'
import TaskCreateForm from '~/components/task_create_form'
import TaskSaveBtn from '~/components/task_save_btn'

export default function Show({ event, tasks: initialTasks }: { event: Event; tasks: Task[] }) {
  const [formDisplay, setFormDisplay] = useState(false)
  const [tasks, setTasks] = useState(initialTasks)
  const [modified, setModified] = useState(false)
  const [isModyfing, setIsModifying] = useState(false)

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
        <div className="flex items-center justify-start h-full gap-4">
          <NavLink label="Retour" href={`/events`} Icon={MaterialSymbolsArrowLeftAltRounded} />
          <NavLink label="Overlay" href={`/stream/overlay`} Icon={StreamlineLiveVideo} />
        </div>
        <div className="flex items-center justify-center gap-4">
          <NavBtn
            onClick={() => setFormDisplay(true)}
            Icon={MaterialSymbolsAddRounded}
            label="Ajouter"
          />
          <NavBtn
            onClick={() => setIsModifying(!isModyfing)}
            Icon={isModyfing ? CheckIcone : MaterialSymbolsEditOutlineRounded}
            label={isModyfing ? 'Terminer' : 'Modifier'}
          />
          <NavLink
            label="Démarrer"
            href={`/gm/${event.id}/?page=1`}
            Icon={MaterialSymbolsFastForwardOutlineRounded}
            className="flex items-center gap-1 px-2 py-1 font-medium text-black transition duration-300 rounded-full bg-neutral-300 hover:bg-white"
          />
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
              <TaskCard task={task} submitDestroyTask={submitDestroyTask} isModifyng={isModyfing} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Section>
    </>
  )
}
