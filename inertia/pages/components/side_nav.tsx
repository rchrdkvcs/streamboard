import type DashboardController from '#controllers/dashboard_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import type ShareDataMiddleware from '../../../app/core/middleware/share_data_middleware'
import StoreEventForm from './store_event_form'

interface SideNavProps {
  events: InferPageProps<ShareDataMiddleware, 'handle'>
  event: InferPageProps<DashboardController, 'game'>
  paramsId: string
}

export default function SideNav({ events, paramsId }: SideNavProps) {
  const [isEventFormVisible, setIsEventFormVisible] = useState(false)

  return (
    <aside className="flex flex-col items-start justify-between w-64 h-full p-3 border-r min-w-64 border-neutral-800">
      <nav className="flex flex-col items-start justify-center w-full gap-2">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/dashboard/${event.id}/question`}
            className={`w-full p-2 font-semibold transition-colors duration-200 ease-in-out rounded-xl hover:bg-white hover:text-black ${
              event.id === paramsId ? 'bg-white text-black bg-opacity-75' : 'text-white'
            }`}
          >
            {event.title}
          </Link>
        ))}
      </nav>
      <button
        className="w-full p-2 font-semibold text-black transition-all duration-150 ease-in-out bg-white bg-opacity-75 rounded-full hover:bg-opacity-100"
        onClick={() => {
          setIsEventFormVisible(true)
        }}
      >
        Ajouter
      </button>
      {isEventFormVisible && <StoreEventForm setIsEventFormVisible={setIsEventFormVisible} />}
    </aside>
  )
}
