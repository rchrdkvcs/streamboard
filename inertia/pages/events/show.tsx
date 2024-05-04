import { InferPageProps } from '@adonisjs/inertia/types'
import { Link, router, useForm } from '@inertiajs/react'
import type ShowEventController from '../../../app/events/controllers/show_event_controller'

interface ShowEventProps {
  props: InferPageProps<ShowEventController, 'handle'>
}

export default function Show({ event, tasks }: ShowEventProps['props']) {
  const { data, setData, post } = useForm({
    label: '',
    answer: '',
    media: '',
    eventId: event.id,
  })

  function submitCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/task/store')
  }

  function submitDestroyTask(taskId: string) {
    router.delete('/task/destroy', {
      data: { id: taskId },
    })
  }

  return (
    <div>
      <h1>Event</h1>
      <p>{event.title}</p>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-6">
            <p>{task.label}</p>
            <p>{task.answer}</p>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  submitDestroyTask(task.id)
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={submitCreateTask}>
        <input
          type="text"
          name="label"
          value={data.label}
          onChange={(e) => setData('label', e.target.value)}
        />
        <input
          type="text"
          name="answer"
          value={data.answer}
          onChange={(e) => setData('answer', e.target.value)}
        />
        <input
          type="text"
          name="media"
          value={data.media}
          onChange={(e) => setData('media', e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      <Link href={`/gamemaster/${event.id}`}>Lancer</Link>
    </div>
  )
}
