import { InferPageProps } from '@adonisjs/inertia/types'
import { useForm } from '@inertiajs/react'
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

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/task/store', {
      onSuccess: () => {
        setData('label', '')
        setData('answer', '')
        setData('media', '')
      },
    })
  }

  return (
    <div>
      <h1>Event</h1>
      <p>{event.title}</p>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
      <form onSubmit={submit}>
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
    </div>
  )
}
