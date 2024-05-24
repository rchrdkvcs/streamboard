import Event from '#events/models/event'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { IonTrashBin } from './icones'

export default function EventList({
  event,
  submitDestroyEvent,
}: {
  event: Event
  submitDestroyEvent: (submitDestroyEvent: string) => void
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      key={event.id}
      className="relative w-full overflow-hidden rounded-xl"
    >
      <Link
        href={`/event/${event.id}`}
        className="flex items-center justify-start w-full gap-4 p-4 overflow-hidden transition-all duration-300 ease-in-outcursor-pointer bg-neutral-900 hover:bg-neutral-800 rounded-xl backdrop-blur-3xl hover:bg-opacity-100 text group"
      >
        <img
          src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
          alt="Logo kick JeanPormanove"
          className="object-cover transition-transform duration-500 ease-in-out border-2 rounded-full size-10 group-hover:translate-x-2 border-neutral-800"
        />
        <div className="flex flex-col items-start justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-2">
          <h2 className="text-base font-semibold lg:text-lg text-neutral-100">{event.title}</h2>
        </div>
      </Link>
      <button
        className="absolute top-0 right-0 h-full p-2 px-4 transition-all duration-300 bg-red-600 bg-opacity-50 hover:bg-opacity-100 text-neutral-100 group"
        onClick={() => {
          submitDestroyEvent(event.id)
        }}
      >
        <IonTrashBin className="text-opacity-50 transition-transform duration-300 size-6 group-hover:scale-105 group-hover:text-opacity-100 text-slate-200" />
      </button>
    </motion.li>
  )
}
