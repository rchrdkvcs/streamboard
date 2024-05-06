import Event from '#events/models/event'
import { Link } from '@inertiajs/react'

export default function GmEventList({ event }: { event: Event }) {
  return (
    <li key={event.id} className="w-full">
      <div className="flex items-center justify-between w-full p-4 transition-all duration-150 ease-in-out bg-opacity-75 cursor-pointer -z-10 bg-neutral-900 rounded-xl backdrop-blur-md hover:bg-opacity-100">
        <Link
          className="flex items-center justify-start w-full h-full gap-4"
          href={`/gm/${event.id}?page=1`}
        >
          <img
            src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
            alt="Logo kick JeanPormanove"
            className="object-cover border-2 rounded-full size-10 border-neutral-800"
          />
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-lg font-semibold text-neutral-100">{event.title}</h2>
          </div>
        </Link>
      </div>
    </li>
  )
}
