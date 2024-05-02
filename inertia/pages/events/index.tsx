import { InferPageProps } from '@adonisjs/inertia/types'
import { Link, useForm } from '@inertiajs/react'
import type IndexEventsController from '../../../app/events/controllers/index_events_controller'

interface IndexEventsProps {
  event: InferPageProps<IndexEventsController, 'handle'>
}

export default function Index({ events }: IndexEventsProps['event']) {
  const { data, setData, post } = useForm({
    title: '',
  })

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/events/store', {
      onSuccess: () => {
        setData('title', '')
      },
    })
  }

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/event/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
