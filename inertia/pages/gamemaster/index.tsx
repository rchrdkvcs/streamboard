import IndexGamemasterController from '#gamemaster/controllers/index_gamemaster_controller'
import { InferPageProps } from '@adonisjs/inertia/types'

interface IndexGameMasterProps {
  events: InferPageProps<IndexGamemasterController, 'handle'>
}

export default function Index({ events }: IndexGameMasterProps['events']) {
  return (
    <div>
      <h1>Game Master</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <a href={`/gamemaster/${event.id}`}>{event.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
